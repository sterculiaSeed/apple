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

// 登录 退出的按钮
let zhanghu = document.querySelector('.gow-bottom u');
window.onload = function () {
    let username = getCookie('yonghuming');
    // 获取要显示的账户
    // 根据cookie的用户名是否存在，如果存在则已经登录
    if (username) {
        zhanghu.innerHTML = `注销 ${username}`;
        // 如果用户名存在 就获取本地数据绚烂购物车数量
        let localData = localStorage.getItem('data');
        // 获取本地数据中属于该用户名的商品
        // 取出数据 转为数组
        let data = JSON.parse(localData);
        // 如果data数据为空
        // console.log(data)
        if (data == null) {
            $('.gow-top').html('<p style="margin:15px 0px">你的购物袋是空的</p>');
            $('.gow-center button').css('display', 'none');
        } else {
            // 取出该账号在本地存储中的商品信息
            let shops = data.map(v => {
                if (v.username === username) {
                    return v.shop;
                }
            })
            // shops会取出所有所有商品名称 用filter过滤undefind
            let shop = shops.filter(v => v !== undefined);
            // 加判断 判断shop是否为空 因为可能没添加过购物车
            if (!shop.length == 0) {
                // 不等于0说明有数据 数据长度绚烂在购物车盒子中
                $('.gouwudai div span').text(`${shop.length}`).parent().css('display', 'block');
                // 开始绚烂得到的数据
                let str = '';
                shop.forEach(elem => {
                    $.ajax({
                        url: './php/details.php',
                        data: {
                            name: elem,
                            iss: 13
                        },
                        type: 'get',
                        dataType: 'json',
                        success(res) {
                            res.data.forEach(item => {
                                str += `
                            <div class="gow-t-top">
                            <div class="gow-top-left">
                                <img src="${item.imgpath.split('+++')[1]}" alt="">
                            </div>
                            <div class="gow-top-right">
                                <span>${item.name}</span>
                            </div>
                        </div>
                          `
                            })
                            $('.gow-top').html(str);
                        }
                    })
                })
                // 显示结账按钮
                $('.gow-center button').css('display', 'block');
            } else {
                // 本地存储中没有数据
                $('.gow-top').html('<p style="margin:15px 0px">你的购物袋是空的</p>');
                $('.gow-center button').css('display', 'none');
                $('.gouwudai div span').text(`${shop.length}`).parent().css('display', 'none');
            }
        }
    } else {
        zhanghu.innerHTML = '登录';
    }
}


zhanghu.onclick = function (e) {
    // 清除默认事件
    e.preventDefault();
    if (zhanghu.innerHTML.charAt(0) == '注') {
        delCookie('yonghuming');
        zhanghu.innerHTML = '登录';
        // 用户没登录
        $('.gow-top').html('<p style="margin:15px 0px">你的购物袋是空的</p>');
        $('.gow-center button').css('display', 'none');
    } else {
        location.href = './login.html'
    }
}

$('.gow-center button').click(function () {
    location.href = './shopbag.html';
})