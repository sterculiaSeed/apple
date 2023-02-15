//封装一个ajax请求函数
/*
   封装一个ajax函数
   参数：
       URL  请求地址
       type 请求方式  post或get
       data 请求携带参数 携带的参数只接受对象形式
       fn   请求成功后执行的函数
       dataType    期望返回响应的数据类型 json/string
       async 请求同步还是异步
   */

function ajax(obj) {
    // 判断URL地址是否传递
    if (!obj.url) {
        //throw Error表示手动的抛出错误
        throw Error('url值必须传递');
    }

    // 准备一个默认参数的对象
    let Info = {
        type: 'get',
        data: {},
        dataType: 'string',
        async: true,
        fn: function (res) { }
    }

    //遍历obj 将传递的参数覆盖默认值 
    for (const i in obj) {
        Info[i] = obj[i];
        // console.log(i)
        // console.log(Info[i]);
    }

    // 遍历data对象 拼接请求携带的参数字符串
    let str = '';
    for (const i in Info.data) {
        //拼接成键=键值对加上&
        str += `${i}=${Info.data[i]}&`;
    }
    if (str) {//如果有参数 最后会多一个&,通过截取的方式去取&
        str = str.slice(0, -1);
    }
    // console.log(str);

    //1.创建ajax对象
    let xhr = new XMLHttpRequest();
    //2.配置请求信息
    //首先要判断当前请求方式
    if (Info.type === 'get') {
        //三个参数
        //当前请求方式 （url地址 地址后面加上参数） 是否同步异步
        xhr.open('get', `${Info.url}?${str}`, Info.async);
        //3.发送请求
        xhr.send();
    } else {//如果是post请求方式 则需要设置请求头
        xhr.open('post', Info.url, Info.async);
        //请求头
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        //post请求在send方法里加参数
        xhr.send(str);
    }

    // 4.接受响应
    xhr.onreadystatechange = function () {
        //判断状态码
        if (xhr.status == 200 && xhr.readyState == 4) {
            let res;
            // 判断期望返回响应的数据格式
            if (Info.dataType == 'json') {  // json表示希望返回对象或数组
                // console.log(xhr.responseText);
                //将json格式转换为js数据
                res = JSON.parse(xhr.responseText);
            } else {
                res = xhr.responseText;
            }
            // 接收到响应后要执行的函数
            Info.fn(res);
        }
    }
}


// 封装一个promise发起的ajax请求
function pAjax(obj) {
    return new Promise((resolve, reject) => {
        window.resolve = resolve;
        window.reject = reject;
        // ajax请求
        ajax({
            url: obj.url || '',
            type: obj.type || 'get',
            data: obj.data || {},
            dataType: obj.dataType || 'string',
            async: obj.async || true,
            fn: obj.fn || function (res) {
                // console.log(123456)
                resolve(res);
            }
        })
    })
}