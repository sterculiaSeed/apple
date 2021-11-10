// 在页面数据还没渲染完成之前，页面加载状态，添加一个加载层
let index = layer.load(1, { shade: 0.3 })

// 请求商定详情数据
getList()
async function getList() {
    let res = await pAjax({
        url: './php/scenics.php',
        data: {
            pid: 12
        },
        dataType: 'json'
    })
    let data1 = res.data;
    // 遍历data
    // console.log(data1)
    let str = '';
    data1.forEach(item => {
        str += `<div class="box1">
        <div class="Mac-img"><img
                src="${item.imgpath}"
                alt=""></div>
        <div class="Mac-a"><a>${item.name}</a></div>
    </div>`
    })
    document.querySelector('.Mac-con').innerHTML = str;
}

// 请求商定上新数据
getonNew()
async function getonNew() {
    let res1 = await pAjax({
        url: './php/scenics.php',
        data: {
            pid: 13
        },
        dataType: 'json'
    })
    let data2 = res1.data;
    // 遍历data
    // console.log(data1)
    let str1 = '';
    data2.forEach(item => {
        str1 += `<div class="onNew-b-box">
        <div class="onNew-box">
            <li>${item.name}</li>
            <li>${item.introduce.split('+++')[0]}</li>
            <li>${item.introduce.split('+++')[1]}</li>
        </div>
        <div class="onNew-img">
            <img src="${item.imgpath.split('+++')[0]}"
                alt="">
        </div>
    </div>`
    })
    document.querySelector('.onNew-b-con').innerHTML = str1;

    // 绚烂结束关闭弹出层
    setTimeout(() => {
        layer.close(index);
    }, 400)



    // 获取点击的数据 
    let str = {};
    // 获取点击事件 当前点击事件的text文本 存进cookie 然后跳转
    $('.onNew-b-box').click(function () {
        // str += $(this).find('li:first').text() + '--';
        str = $(this).find('li:first').text();
        // sessionStorage.setItem('goodid', str);
        setCookie('shop', str);
        console.log(str);
        location.href = './details.html';
    })
}
