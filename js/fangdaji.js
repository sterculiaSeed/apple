let fangdajin = function () {
    // 放大镜
    var leftbox = document.querySelector('.detmap-l-top');
    var box = document.querySelector('.detmap-l-fang');
    var rightbox = document.querySelector('.detmap-fang');
    var bigImg = document.querySelector('.detmap-fang img');

    var detmapcon = document.querySelector('.detmap-con');
    // console.log(leftbox, box, rightbox, $('.active'))


    leftbox.onmouseenter = function () {
        box.style.display = 'block';
        rightbox.style.display = 'block';
    }
    leftbox.onmouseleave = function () {
        box.style.display = 'none';
        rightbox.style.display = 'none';
    }

    // console.log(detmapcon.offsetLeft)
    leftbox.onmousemove = function (e) {
        var e = e || window.event;
        // console.log(e.clientX, e.clientY);
        var x = e.pageX - detmapcon.offsetLeft - 112;
        var y = e.pageY - detmapcon.offsetTop - 133;
        // console.log(x, y)
        // 对移动范围进行判断  left差值 要大于 大盒子宽度-小盒子宽度
        if (x >= 225) {
            x = 225;
        }
        if (x <= 0) {
            x = 0;
        }
        if (y >= 316) {
            y = 316;
        }
        if (y <= 0) {
            y = 0;
        }

        //     // 小div移动距离
        box.style.left = x + 'px';
        box.style.top = y + 'px';

        // 大图移动距离
        bigImg.style.left = - x * 3 + 'px';
        bigImg.style.top = - y * 3 + 100 + 'px';
    }
}