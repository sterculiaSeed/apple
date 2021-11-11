// 在页面数据还没渲染完成之前，页面加载状态，添加一个加载层
let index = layer.load(1, { shade: 0.3 })

//页面加载进来 通过cookie获取用户名
$(function () {
    let username = getCookie('yonghuming');
    if (!username) { // 未登录
        $('.shopbag-con').html(`
            <div class="shop-top" style="text-align: left; margin-bottom:30px;">
            <h1 style="font-weight:500">你的购物袋中没有商品</h1>
            <li>登录查看你是否已保存任何商品。或者继续购物</li>
            <div class="jiezhang">
                <a href='./login.html'><button style="height:50px; margin-right:20px">登录</button></a>
                <a href='./shop.html'><button style="height:50px;background-color: #ebebeb;color:#1d1d1f;">继续购物</button></a>
            </div>
            </div>`);
    }

    // 获取本地存储数据 
    let localData = localStorage.getItem('data');
    let i = 0;
    // console.log(localData);
    if (!localData) {
        // 本地存储中没有购物车没数据  绚烂页面购物车空的页面
        console.log(1234);
        $('.shopbag-con').html(`
        <div class="shop-top" style="text-align: left; margin-bottom:30px;">
        <h1 style="font-weight:500">你的购物袋中没有商品</h1>
        <li>登录查看你是否已保存任何商品。或者继续购物</li>
        <div class="jiezhang">
            <a href='./login.html'><button style="height:50px; margin-right:20px">登录</button></a>
            <a href='./shop.html'><button style="height:50px;background-color: #ebebeb;color:#1d1d1f;">继续购物</button></a>
        </div>
        </div>`);
        // 绚烂结束关闭弹出层
        layer.close(index);
        return;
    } else {
        // 判断本地存储中是否有该账号的数据 
        let localArr = JSON.parse(localData);//json转成数组
        //取出该账号在本地存储中购物车的商品名
        let shops = localArr.map(v => {
            // 遍历本地存储 如果里面有该账号信息
            if (v.username === username) {
                // 就返回所有商品名称
                return v.shop;
            }
        })
        // 因为usernamees里面获取到的是所有商品名称 不是这个账号的商品信息会显示undefind 要去除  filter 过滤数组
        let shop = shops.filter(v => v !== undefined);
        //判断shop是否为空数组 就是账号信息里没有添加商品
        if (shop.length == 0) {
            //没有数据就绚烂购物车空页面
            $('.shopbag-con').html(`
            <div class="shop-top" style="text-align: left; margin-bottom:30px;">
            <h1 style="font-weight:500">你的购物袋中没有商品</h1>
            <li>登录查看你是否已保存任何商品。或者继续购物</li>
            <div class="jiezhang">
                <a href='./login.html'><button style="height:50px; margin-right:20px">登录</button></a>
                <a href='./shop.html'><button style="height:50px;background-color: #ebebeb;color:#1d1d1f;">继续购物</button></a>
            </div>
            </div>`);
            // 绚烂结束关闭弹出层
            layer.close(index);
            return;
        } else {
            //如果账号里有商品数据 就将该数组循环请求数据 然后获取后台数据绚烂
            // let shos = shop.join(','); //拼接字符串
            // let arr = [];
            let str = '';
            // 循环shop里获得的数据 
            shop.forEach(elem => {
                getShopbag();
                async function getShopbag() {
                    let res = await pAjax({
                        url: './php/details.php',
                        data: {
                            name: elem,
                            iss: 13
                        },
                        dataType: 'json',
                    });
                    // console.log(res.data)
                    res.data.forEach(item => {
                        str += `
            <div class="shop-cent">
            <div class="shop-c-left">
                    <img src="${item.imgpath.split('+++')[1]}"
                        alt="">
                </div>
                <div class="shop-c-right">
                    <div class="shop-c-r-box1">
                        <div class="shop-c-r-box1-top">
                            <span>${item.name}</span>
                            <select name="" id="selectID">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <span>RMB <u price='${item.price}' id='uu'>${item.price}</u></span>
                        </div>
                        <button id='del'>移除</button>
                    </div>
                    <div class="shop-c-r-box2">
                        <li>
                            <i class="iconfont icon-pingguo"></i>
                            <span>添加 AppleCare+ 服务计划 (适用于耳机) - AirPods - RMB 248</span>
                            <a href="">添加</a>
                        </li>
                        <li>获得长达 2 年的技术支持和意外损坏保修服务。</li>
                        <li>
                            进一步了解
                        </li>
                    </div>
                    <div class="shop-c-r-box3">
                        <li>
                            <i class="iconfont icon-xiangqing"></i>
                            <span>添加免费镌刻</span>
                            <a href="">添加</a>
                        </li>
                    </div>
                    <div class="shop-c-r-box4">
                        <div class="shop-r-r-box4-left">
                            <li>
                                <i class="iconfont icon-hezi301"></i>
                                <span>今天订购,送货至<a>广东 深圳 宝安区 西部硅谷</a></span>
                            </li>
                            <li>星期一2021/11/15--免费</li>
                        </div>
                        <div class="shop-r-r-box4-right">
                            <li>
                                <i class="iconfont icon-gouwudai"></i>
                                <span>取货[店内]：</span>
                            </li>
                            <li>明天：<a href="" style="font-weight: 400;">Apple 深圳益田假日广场</a></li>
                        </div>
                    </div>
                </div>
                </div>
            `;
                    });
                    // 将得到的数据渲染进页面中
                    $('.shop-cent-cent').html(str);
                }

            });

        }
    }

    // 延时器 页面渲染结束关闭弹出层
    setTimeout(function () {
        sele();

        // 绚烂完修改价格
        let str2 = 0;
        $('.shop-cent-cent #uu').each((i, v) => {
            // 修改每个商品总价
            $(v).text($(v).parent().prev().val() * $(v).text())
            // 加上每个商品总价 给总的价格
            str2 += ($(v).text() - 0);
        });
        // 修改总价
        zongjia(str2);

        // 商品数量改变触发价格变化
        $('select').change(function () {
            let jiage = $(this).next().find('u').attr('price');
            // console.log(jiage);
            // 修改这个商品的总价
            $(this).next().find('u').text($(this).val() * jiage);

            // 修改上面总价
            let str2 = 0;
            // 循环每个商品总价 然后赋值给总的价格
            $('.shop-cent-cent #uu').each((i, v) => {
                str2 += $(v).text() - 0;
            })
            zongjia(str2)

            // 并且修改本地存储的值
            // 获取修改的select的值
            let num = $(this).val();
            // 获取本地存储的数据data
            let data = JSON.parse(localStorage.getItem('data'));
            // 判断 当前点击的商品名和用户名有没有本地存储的数据
            let cartGoods = data.find(v => v.username === username && v.shop === $(this).prev().text());
            // 然后修改当前数据的值 
            cartGoods.num = num;
            // 并重新添加进本地存储中
            localStorage.setItem('data', JSON.stringify(data));
        })

        // 删除商品
        $('.shop-c-r-box1 #del').click(function () {
            // 移除当前点击的这个父级大盒子
            $(this).parent().parent().parent().remove();
            // 并修改本地数据
            // 获取当前移除的是哪个商品
            let shop = $(this).prev().find('span:eq(0)').text();
            // 获取本地存储数据
            let data = JSON.parse(localStorage.getItem('data'));
            let dataArr = data.filter(v => {
                // 取反 返回剩余的数据
                return !(v.username === username && v.shop === shop)
            })
            // 重新写入购物车进本地数据
            localStorage.setItem('data', JSON.stringify(dataArr));
            // 修改上面总价
            let str2 = 0;
            // 循环每个商品总价 然后赋值给总的价格
            $('.shop-cent-cent #uu').each((i, v) => {
                str2 += $(v).text() - 0;
            })
            zongjia(str2)
            //判断购物车中数据是否为空
            let index = dataArr.findIndex(v => v.username === username);
            if (index == -1) {
                // location.reload(); // 重新加载页面
                $('.shopbag-con').html(`
                <div class="shop-top" style="text-align: left; margin-bottom:30px;">
                <h1 style="font-weight:500">你的购物袋中没有商品</h1>
                <li>登录查看你是否已保存任何商品。或者继续购物</li>
                <div class="jiezhang">
                    <a href='./login.html'><button style="height:50px; margin-right:20px">登录</button></a>
                    <a href='./shop.html'><button style="height:50px;background-color: #ebebeb;color:#1d1d1f;">继续购物</button></a>
                </div>
                </div>`);
                let can = $(this).prev().find('span:eq(0)').text();
                // 动画效果
                $('.tianjia-con').html(`<p><span>${can}</span>已从购物袋中移除</p>`).parent().fadeIn(2000, 'linear', function () { })
                setTimeout(() => {
                    $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
                }, 10000);
            }
            // 移除成功的提示信息
            let can = $(this).prev().find('span:eq(0)').text();
            // 动画
            $('.tianjia-con').html(`<p><span>${can}</span>已从购物袋中移除</p>`).parent().fadeIn(2000, 'linear', function () { })
            setTimeout(() => {
                $('.tianjia-con').parent().fadeOut(2000, 'linear', function () { });
            }, 10000);
            console.log(dataArr);
            // 绚烂购物车小窗口
            let shops = dataArr.map(v => {
                if (v.username === username) {
                    return v.shop;
                }
            })
            // shops会取出所有所有商品名称 用filter过滤undefind
            let sho = shops.filter(v => v !== undefined);
            // 加判断 判断shop是否为空 因为可能没添加过购物车
            if (!sho.length == 0) {
                // 不等于0说明有数据 数据长度绚烂在购物车盒子数字中
                $('.gouwudai div span').text(`${sho.length}`).parent().css('display', 'block');
                // 开始绚烂得到的数据
                let st = '';
                sho.forEach(elem => {
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
                                st += `
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
                            $('.gow-top').html(st);
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
        })
        // 绚烂结束关闭弹出层
        layer.close(index);
        // 商品总价
        function zongjia(str2) {
            // let res = '';
            let res = `<h1>你的购物袋总计RMB <u>${str2}</u>，分期付款 <u>${Math.floor(str2 / 24)}</u>/月。</h1>
            <li>所有订单均可享受免费送货和退货服务</li>
            <div class="jiezhang">
                    <button id="pay">结账</button>
                </div>`
            $('.shop-top').html(res);

            // 修改下面总价
            $('.shop-bootm').html(`<div class="shop-bootm-box1">
            <li>
                <span>小计</span>
                <u>RMB ${str2}</u>
            </li>
            <li>
                <span>运费</span>
                <u>免费</u>
            </li>
        </div>
        <div class="shop-bootm-box2">
            <li style="font-size: 24px;font-weight: 600;">
                <span>总计</span>
                <u>RMB ${str2}</u>
            </li>
            <li>
                <span>每月分期付款</span>
                <u>每月RMB ${Math.floor(str2 / 24)}/月(0% 费率 24 个月)</u>
            </li>
            <li style="float: right;"><a href="" style="color: #0066cc; font-size: 14px;">可享受分期付款</a></li>
            
        </div>

            `)
        }
        // 修改页面一进来购物车中的数量
        function sele() {
            let loacnum = localStorage.getItem('data');
            let num = JSON.parse(loacnum).map(v => {
                return v.num;
                // }
            })
            // console.log(num)
            for (let i = 0; i < $('.shop-cent select').length; i++) {
                for (let j = 0; j < $('.shop-cent select')[i].length; j++) {
                    if ($($('.shop-cent select')[i][j]).text() == num[i]) {
                        $($('.shop-cent select')[i][j]).prop('selected', true);
                    }
                }
            }
        }
        // 结账按钮
        $('.shopbag #pay').click(function () {
            // console.log($(this))
            layer.open({
                type: 1,
                area: ['150px', '150px'], //宽高
                content: '<img src="./images/商店人头.png" style="text-align:center;">'
            });
        })

    }, 1000)

})