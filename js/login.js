/*
*                        _oo0oo_
*                       o8888888o
*                       88" . "88
*                       (| -_- |)
*                       0\  =  /0
*                     ___/`---'\___
*                   .' \\|     |// '.
*                  / \\|||  :  |||// \
*                 / _||||| -:- |||||- \
*                |   | \\\  - /// |   |
*                | \_|  ''\---/''  |_/ |
*                \  .-\__  '-'  ___/-. /
*              ___'. .'  /--.--\  `. .'___
*           ."" '<  `.___\_<|>_/___.' >' "".
*          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
*          \  \ `_.   \_ __\ /__ _/   .-` /  /
*      =====`-.____`.___ \_____/___.-`___.-'=====
*                        `=---='
* 
* 
*      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* 
*            佛祖保佑       永不宕机     永无BUG
*/
// 获取表单
let email = document.querySelector('#username');
let pas = document.querySelector('#password');
let inps = document.querySelectorAll('input');
let tishi = document.querySelector('.tishi');
let tishi1 = document.querySelector('.tishi1');
//当username获取到焦点 失去焦点后
for (var i = 0; i < inps.length; i++) {
    inps[i].onfocus = function () {
        //进来就把背景颜色改变 和tishi的值
        this.style.background = '#fff'
        //当表单发生改变事件时  就触发
        this.oninput = function () {
            tishi.innerText = '';
            tishi1.innerText = '';
            //layble的颜色也要变回来
            this.nextElementSibling.style.color = '#86868d'
        }
        //获取到下一个元素节点 修改样式和位置
        this.nextElementSibling.style.top = '-66px';
        this.nextElementSibling.style.left = '25px';
        this.nextElementSibling.style['font-size'] = '12px';
        // 修改自身元素的样式
        this.style.border = '5px solid #66b1fc';
    }
    inps[i].onblur = function () {
        //判断当前表单的值是否为空
        this.style.border = '1px solid #ccc'
        if (this.value == '') {
            //lable中的样式变回来
            this.nextElementSibling.style.top = '-54px';
            this.nextElementSibling.style.left = '20px';
            this.nextElementSibling.style['font-size'] = '18px';
            this.nextElementSibling.style.color = '#e30000'
            //表单边框 背景变色
            this.style.border = '1px solid #e30000'
            this.style.background = '#fff2f4'
            if (this.getAttribute('type') == 'text') {
                tishi.innerText = 'Apple ID 未填写。'
            } else {
                tishi1.innerText = '密码未填写。'
            }
        }
    }
}
// 2665328537@qq.com
// 点击登录按钮
let cuowu = document.querySelector('.cuowu');
document.querySelector('button').onclick = function (e) {
    // 阻止默认事件
    e.preventDefault();
    //获取表单中的value值 放在一个对象中
    data = {
        email: username.value,
        pas: pas.value
    }
    //如果表单中的值为空
    if ((data.email === '') && (data.pas === '')) {
        //focus  表单自动获得焦点事件
        email.focus();
        email.nextElementSibling.style.color = '#e30000';
        tishi.innerText = 'Apple ID 未填写。';
        pas.style.border = '1px solid #e30000';
        pas.style.background = '#fff2f4';
        tishi1.innerText = '密码未填写。';
    } else if (data.pas === '') {
        pas.focus();
        pas.nextElementSibling.style.color = '#e30000';
        tishi1.innerText = '密码未填写。';
    } else {
        //使用正则判断用户名
        let reg1 = /^\w{5,15}@(qq|163|126)\.(com|cn)$/;
        //正则判断密码
        let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,11}$/;
        //使用正则判断表单用户名
        console.log(data.email);
        if (!reg1.test(data.email)) {
            cuowu.style['display'] = 'block';
            // 获取焦点
            email.focus();
            console.log(1234);
            return;
        }
        if (!reg2.test(data.pas)) {
            cuowu.innerText = '你输入的密码格式有误';
            cuowu.style['display'] = 'block';
            pas.focus();
            return;
        }
        ajax({
            url: './php/login.php',
            //参数
            data: {
                email: data.email,
                pas: data.pas
            },
            //请求类型
            type: 'post',
            //返回数据类型
            dataType: 'json',
            fn: function (res) {
                //输出请求的结果
                if (res.code == 2) {
                    cuowu.innerText = res.msg;
                    cuowu.style['display'] = 'block';
                    pas.focus();
                } else if (res.code == 0) {
                    cuowu.innerText = res.msg;
                    cuowu.style['display'] = 'block';
                    username.focus();
                } else {
                    // 登录成功 添加cookie值 
                    setCookie('yonghuming', data.email, 7 * 24 * 60 * 60);
                    alert(res.msg);
                    location.href = './index.html'
                }
            }
        })
    }
}


