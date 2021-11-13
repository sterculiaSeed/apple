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

//获取所有的表单添加获得焦点事件
$('input').focus(function () {
    //如果当前是点击提交按钮之后表单获得焦点
    if ($(this).next().next().css('display') === 'block') {
        // 表单发生改变事件时 转换成dom对象
        ($(this)[0]).oninput = function () {
            // 修改labay和span的值
            $(this).next().css('color', '#888')
                .next().css('display', 'none');
        }
    }
    $(this).css('background', '#fff')
    //修改当前表单的下一个元素label的位置
    $(this).next().css('top', '10px').css('fontSize', '12px')
        //修改当前自身样式
        .end().css('border', '1px solid #0070c9').css('outline', '3px solid #c1dffe')
});
// 失去焦点
$('input').blur(function () {
    //如果当前是点击提交按钮之后表单失去焦点
    if ($(this).next().next().css('display') === 'block') {
        if ($(this).val() == '') {
            $(this).css({
                //修改表单样式
                border: '1px solid #e30000',
                background: '#fff2f4'
            })
        }
    }
    //修改当前表单的样式回原样
    $(this).css('border', '1px solid #d6d6d6').css('outline', 'none');
    //判断当前表单的值是否为空
    if ($(this).val() == '') {
        //修改当前表单的元素label的位置修改回原来的位置
        $(this).next().css('top', '17px').css('fontSize', '16px');
    }
});
//当点击选择注册日期 添加属性
let data = new Date().toLocaleDateString();
console.log(data)
$('input[name=age]').focus(function () {
    $(this).attr('placeholder', 'yyyy年mm月dd日')
    $(this).val(data);
    // $(this).attr('disabled', 'disabled')
})
$('input[name=age]').blur(function () {
    $(this).removeAttr('placeholder');
})
//点击国家表单的时候  增加样式
$('#country').focus(function () {
    $(this).css('border', '1px solid #0070c9').css('outline', '3px solid #c1dffe')
})
$('#country').blur(function () {
    $(this).css('border', '1px solid #d6d6d6').css('outline', 'none');
})

//当邮箱表单失去焦点之后
$('input[name=email]').blur(function () {
    // 定义正则判断
    let reg = /^\w{5,15}@(qq|163|126)\.(com|cn)$/;
    if (!($(this).val() == '')) {
        if (!reg.test($(this).val())) {
            Lfocus(this);
        }
    }
})
// 当密码失去焦点后
$('input[name=pas]').blur(function () {
    // console.log(1111);
    // 不能为存数字 纯字母 
    let reg3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,11}$/;
    if (!($(this).val() == '')) {
        if (!reg3.test($(this).val())) {
            Lfocus(this);
        }
    }
})
// 当确认密码失去焦点后
$('input[name=pass]').blur(function () {
    // 如果密码和确认密码不是为空才进行判断
    if (!($(this).val() == '') && !($('input[name=pas]').val() == '')) {
        if (!($(this).val() === $('input[name=pas]').val())) {
            $(this).css({
                //修改表单样式
                border: '1px solid #e30000',
                background: '#fff2f4'
            })
                // 修改下一个元素label的值
                .next().css('color', '#e30000')
                //修改span的值并变成两次密码不一致
                .next().css('display', 'block').find('u').html('两次密码不一致');
        }
    }
})
// 当电话号码失去焦点后
$('input[name=phnum]').blur(function () {
    // 表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
    let reg = /^1(3|4|5|7|8)\d{9}$/;
    if (!($(this).val() == '')) {
        if (!reg.test($(this).val())) {
            Lfocus(this);
        }
    }
})

//页面加载让验证码中增加数字
$(function () {
    // 清除默认事件
    // e.preventDefault();
    var res = getCode();
    //定义一个随机验证码的方法
    function getCode() {
        var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        var str = '';
        for (var i = 0; i < 5; i++) {
            var num = Math.round(Math.random() * (15 - 0) + 0);
            str += arr[num];
        }
        return str;
    }
    // 给生成的验证码添加到盒子中
    $('.yanzm').html(res);
    // 给新代码添加点击事件
    $('.A').on('click', function () {
        $('.yanzm').html(getCode())
        // 清除默认事件
        return false;
    })
})
// 当验证码表单失去焦点
$('input[name=yanzm]').blur(function () {
    if (!$(this).val() == '') {
        if ($(this).val() != $('.yanzm').text()) {
            Lfocus(this);
        }
    }
})

//定义改变表单失去焦点的方法  Losefocus.
function Lfocus(a) {
    $(a).css({
        //修改表单样式
        border: '1px solid #e30000',
        background: '#fff2f4'
    })
        // 修改下一个元素label的值
        .next().css('color', '#e30000')
        //修改span的值
        .next().css('display', 'block')
}

//点击提交继续按钮的时候
$('button').click(function (e) {
    // 清除默认事件
    e.preventDefault();
    // 遍历表单
    // 判断表单中的值是否为空  
    let arr = [];
    $('input').each((index, item) => {
        if ($(item).val() == '') {
            //判读出所有为空的表单 增加进数组中
            arr.push($(item));
            // 表单自动获得焦点事件
            arr[0].focus();
            Lfocus(item);
        }
        return;
    })
    // console.log('遍历表单')
    // console.log($('input').val())
    // console.log($('.span').css('display'))
    //  && !($('input').val() === "")
    if ($('.span').css('display') === 'none') {
        // 判断单选框 
        if (!($('input[name=radio]:first').prop('checked') ||
            $('input[name=radio]:last').prop('checked'))) {
            // 如果没选择单选框 默认勾选第一个
            $('input[name=radio]:first').prop('checked', 'checked');
        }
        //获取表单中的value值 放在一个对象中
        data = {
            surname: $('input[name=surname]').val(),
            username: $('input[name=username]').val(),
            data: $('input[name=age]').val(),
            email: $('input[name=email]').val(),
            pas: $('input[name=pas]').val(),
            phnum: $('input[name=phnum]').val(),
        }
        // console.log(data);
        // ajax请求 
        pAjax({
            url: './php/petname.php',
            data: { email: data.email },
            dataType: 'json'
        }).then(res => {
            // 根据返回的结果判断是否进行注册请求
            if (res.code == 0) {
                //如果用户名已经存在 就给邮箱聚焦 并显示错误
                console.log(123454324)
                $('input[name=email]')[0].focus();
                Lfocus($('input[name=email]'));
                $('input[name=email]').next().next().find('u').html('无法使用此电子邮件地址。请选择其他电子邮件地址。');
                console.log();
                return;
            }
            //只有用户名可用才执行操作  这里请求到的数据要return返回出去
            return pAjax({
                url: './php/register.php',
                data: {
                    surname: data.surname,
                    username: data.username,
                    data: data.data,
                    email: data.email,
                    pas: data.pas,
                    phnum: data.phnum
                },
                dataType: 'json',
            })
        }).then(res => {
            alert(res.msg);
            location.href = 'login.html';
        })
    }
})
