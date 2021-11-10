
// ajax请求数据
getList()
async function getList() {
    // 请求数据
    let res = await pAjax({
        url: './php/scenics.php',
        data: {
            pid: 11
        },
        dataType: 'json'
    })
    let data1 = res.data;
    // 遍历data
    // console.log(data1)
    let str = '';
    data1.forEach(item => {
        str += `<div style="background: url(${item.imgpath});">
        <h4>${item.name}</h4>
        <h5>${item.introduce}</h5>
        <li><a href="">进一步了解 &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">购买 &gt;</a></li>
    </div>`
    })
    document.querySelector('#detalis').innerHTML = str;
}