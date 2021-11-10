// 点击购物袋出现
let divgouw = document.querySelector('.gow');
document.querySelector('.gouwudai').onclick = function (e) {
    // 清除默认事件
    e.preventDefault();
    if (divgouw.style.display === 'block') {
        divgouw.style.display = 'none';
    } else {
        divgouw.style.display = 'block';
    }
}

let zhanghu = document.querySelector('.gow-bottom u');
window.onload = function () {
    let username = getCookie('yonghuming');
    // 获取要显示的账户
    // 根据cookie的用户名是否存在，如果存在则已经登录
    if (username) {
        zhanghu.innerHTML = `注销 ${username}`;
    } else {
        zhanghu.innerHTML = '登录';
    }
    // 当点击登录或注销
    // console.log(zhanghu.innerHTML)
}
zhanghu.onclick = function (e) {
    // 清除默认事件
    e.preventDefault();
    if (zhanghu.innerHTML.charAt(0) == '注') {
        // delCookie('username');
        // location.reload();
        delCookie('yonghuming');
        zhanghu.innerHTML = '登录';
    } else {
        // console.log(1121)
        location.href = './login.html'
    }
}