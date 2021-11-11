let shop = getCookie('shop');
// 判断cookie中值是否存在，否则跳转回列表页
if (!shop) {
    // 弹窗
    layer.msg('非法请求', { time: 2000 });
    setTimeout(() => {
        location.href = './shop.html';
    }, 2000);
} else {
    $('title').text(`购买-${shop}-Apple(中国大陆)`);
}

// 在页面数据还没渲染完成之前，页面加载状态，添加一个加载层
let index = layer.load(1, { shade: [1, '#fff'] })

// 请求商品详情数据
getList()
async function getList() {
    let res = await pAjax({
        url: './php/details.php',
        data: {
            name: getCookie('shop'),
            iss: 13
        },
        dataType: 'json'
    })
    let data1 = res.data;
    // 遍历dat
    let str = '';
    data1.forEach(item => {
        // console.log(item);
        // 顶部内容
        $('.inf-con').html(`
        <span id='shangp'></span>
        <span>RMB ${Math.floor(item.price / 24)}/月（24期）或RMB${item.price}</span>`);
        // 添加购物车成功盒子
        $('.tianjia-con').html(`<p><span>${item.name} </span> 添加购物袋成功 <a href="./shopbag.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击去购物袋</a></p>`);

        $('.detmap-l-top').css('background-image', `url(${item.imgpath.split('+++')[0]})`);

        $('.detmap-fang img').prop('src', `${item.imgpath.split('+++')[0]}`)

        $('.detmap-r-box1').html(`
        <p>新款</p>
        <h1>购买<span> ${item.name}</span></h1>
        <p style="color: #1d1d1f; font-weight: 600;">RMB${item.price}</p>
        <li><a>了解 Apple Trade In 换购计划的流程</a></li>
        `);

        $('.detmap-r-box2').html(`
        <h1 style="font-size: 17px;margin-top: 10px;">选择外观</h1>
            <div class="active1">
                <img src="${item.imgpath.split('+++')[0]}"
                    alt="">
            </div>
            <div>
            <img src="${item.imgpath.split('+++')[1]}"alt="">
            </div>
            <div>
            <img src="${item.imgpath.split('+++')[2]}"alt="">
            </div>
            <div>
            <img src="${item.imgpath.split('+++')[3]}"alt="">
            </div>
        `)
        // 绚烂结束关闭弹出层
        setTimeout(() => {
            layer.close(index);
        }, 1000)
        // 点击切换图片
        // 获取盒子添加点击事件
        $('.detmap-r-box2>div').click(function () {
            // console.log($(this));
            $(this)
                .addClass('active1')
                .siblings()  //找到当前点击的其他兄弟元素
                .removeClass('active1')   //移除兄弟元素中的active类

            $('.detmap-l-top').css('background-image', `url(${item.imgpath.split('+++')[$(this).index() - 1]})`);

            ($('.detmap-fang img').prop('src', `${item.imgpath.split('+++')[$(this).index() - 1]}`));
        })
        // 放大镜
        fangdajin();
    })
}

// 分页内容
layui.use(['laypage', 'layer'], function () {
    // e.preventDefault();
    var laypage = layui.laypage,
        layer = layui.layer;

    getrecom()
    async function getrecom() {
        let res1 = await pAjax({
            url: './php/details-recom.php',
            data: {
                iss: 14
            },
            dataType: 'json'
        })
        let data2 = res1.data;
        // 遍历dat
        let str2 = '';

        laypage.render({
            // 存放分页的容器
            elem: 'fenye',
            // 数据的长度
            count: data2.length,
            // 一次显示几条
            limit: 3,
            // 每页条数的选择
            limits: [3, 6, 9],
            // 自定义排版
            layout: ['prev', 'page', 'next', 'limit'],
            // 分页的回调函数  obj里面存了分页的所有数据
            jump: function (obj) {
                // 模拟绚烂
                document.querySelector('.recom-bottom').innerHTML = function () {
                    var arr = [],
                        thisData = data2.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                    layui.each(thisData, function (index, item) {
                        arr.push(`
                        <div>
                    <div class="recom-b-img">
                        <img src="${item.imgpath}"
                            alt="">
                    </div>
                    <li>免费镌刻服务</li>
                    <li>${item.name}</li>
                    <li>${item.introduce}</li>
                </div>
                            `)
                    });
                    return arr.join('');
                }();
            }
        })
    }
})


// 添加进购物车功能
// 把数据添加进本地存储中 然后获取绚烂

// setTimeout(() => {
// 商品的数量
let num = 1;
let username = getCookie('yonghuming');
//1、先判断用户有没有登录
$('.anniu>button').click(function () {
    if (!username) {
        // layer.msg('你未登录,登录后才可添加到购物袋', {
        //     time: 3000
        // })
        $('.tianjia-con').html(`<p><span>你未登录，登录成功后才可添加到购物袋</span> <a href="./login.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击去登录</a></p>`).parent().fadeIn(2000, 'linear', function () { })
        setTimeout(() => {
            $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
        }, 10000);
    } else {

        //如果用户登录 就获取本地存储购物车的数据
        let localData = localStorage.getItem('data');
        // 如果本地存储购物车中为空 就将此次信息写入购物车
        if (!localData) {
            //定义一个对象 接受商品信息和账户信息
            let obj = {
                username: username,  //账户名
                shop: getCookie('shop'),
                num: num,
            }
            // 写入本次购买的商品信息进本地存储 存储对象或数组格式需要转换为json格式
            localStorage.setItem('data', JSON.stringify([obj]));

            //并提示
            $('.tianjia-con').parent().fadeIn(2000, 'linear', function () { });
            setTimeout(() => {
                $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
            }, 10000);
            // location.href = './shopbag.html';

        } else {
            // 如果之前添加过该商品在购物袋中 本地存储有该商品的数据
            let data = JSON.parse(localData);
            // 使用findIndex判断当前数组对象 是否有这个账户名和账户名里的商品数据 如果有 会返回1  没有就返回-1
            let res = data.findIndex(v => v.username == username && v.shop == getCookie('shop'))
            if (res != -1) {
                // 如果有数据 就把这个数据拿出来 修改num值 并重新加入购物车中
                let cart = data.find(v => v.username == username && v.shop == getCookie('shop'));
                // console.log(cart);
                cart.num++;
                // 重新将这个数据加入data本地存储中 并跳转页面
                localStorage.setItem('data', JSON.stringify(data));
                // console.log(cart);
                //并提示
                $('.tianjia-con').parent().fadeIn(2000, 'linear', function () { });
                setTimeout(() => {
                    $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
                }, 10000);
            } else {
                // 如果这个用户之前没有将这个商品数据添加进购物车
                // 直接将数据添加data数组中 重新加入本地存储
                data.push({
                    username: username,  //账户名
                    shop: getCookie('shop'),
                    num: num,
                });
                localStorage.setItem('data', JSON.stringify(data));
                // 跳转
                // location.href = './shopbag.html'
                //并提示
                $('.tianjia-con').parent().fadeIn(2000, 'linear', function () { });
                setTimeout(() => {
                    $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
                }, 10000);


                // 绚烂购物车小窗口
                let shops = data.map(v => {
                    if (v.username === username) {
                        return v.shop;
                    }
                })
                // shops会取出所有所有商品名称 用filter过滤undefind
                let shop = shops.filter(v => v !== undefined);
                // 加判断 判断shop是否为空 因为可能没添加过购物车
                if (!shop.length == 0) {
                    // 不等于0说明有数据 数据长度绚烂在购物车盒子数字中
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
        }
    }

})



// }, 3000)