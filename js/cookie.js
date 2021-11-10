/*
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



//封装设置 删除 获取cookie的方法


/**
 * @description: 封装的设置cookie的方法
 * @param {string} key    设置的cookie的键名
 * @param {string} value  设置的cookie的键值
 * @param {string} expires   设置的cookie的有效时间
 */

function setCookie(key, value, expires) {
    // 获取事件戳  因为服务器的时间比本地事件少八个小时
    let time = new Date(new Date().getTime() - 8 * 60 * 60 * 1000 + expires * 1000)
    document.cookie = `${key}=${value};expires=${time}`;
}


/**
 * @description: 删除cookie
 * @param {string} key 要删除的cookie的键名
 */
function delCookie(key) {
    setCookie(key, '', -1);
}

/**
 * @description: 根据键名获取cookie的值
 * @param {string} key 要获取cookie的键名
 * @return {string} 获取到的cookie的值
 */

function getCookie(key) {
    //因为获取的cookie是一个字符串 包含了所有的cookie 
    //用spilt切割方法 把字符串切割给arr数组
    let arr = document.cookie.split(';');

    //z定义变量接收arr数组中对应键名的字符串
    let str;
    //遍历数组 与indexof方法判断是否包含键名 不包含会返回-1 
    arr.forEach(item => {
        if (item.indexOf(key) != -1) {
            str = item;
        }
    })

    //判断str中是否有值
    if (!str) return;
    //如果有值 再次分割成一个数组 数组里面只有两个数 一个键 一个键值
    return str.split('=')[1];
}

