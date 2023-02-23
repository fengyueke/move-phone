window.addEventListener('load', function() {
    // 获取元素
    var ul = document.querySelector('ul');
    console.log(ul);
    var lis = ul.children;
    var img = ul.querySelectorAll('img');
    var img_Width = img[0].offsetWidth;
    console.log(img_Width);
    var focus = document.querySelector('.focus');
    console.log(focus);
    var top = focus.querySelector('.top');
    console.log(top);
    console.log(lis);
    var ol = this.document.querySelector('ol');
    // 创建小圆点
    for (var i = 0; i < lis.length; i++) {
        // 创建li
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    // 设置小圆点
    var ol_lis = ol.children;
    ol_lis[0].setAttribute('class', 'cures');
    console.log(ol_lis);
    for (var i = 0; i < ol_lis.length; i++) {
        ol_lis[i].setAttribute('data-index', i);
        ol_lis[i].addEventListener('click', function() {
            for (var i = 0; i < ol_lis.length; i++) {
                ol_lis[i].removeAttribute('class');
            }
            this.setAttribute('class', 'cures');
            var flag = this.getAttribute('data-index');
            num = temp = flag;
            animate(ul, -flag * img_Width);
            // ul.style.left = -(i * img_Width) + 'px';
        })
    }
    // 显示于隐藏箭头
    focus.addEventListener('mousemove', function() {
        top.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            top.style.display = 'none';
            timer = setInterval(function() {
                top.children[1].click();
            }, 1000)
        })
        // 给箭头添加移动事件
        // 克隆第一个小li
    var li_1 = lis[0].cloneNode(1);
    ul.appendChild(li_1);
    var temp = 0;
    var num = 0;
    top.children[0].addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * img_Width + 'px';
        }
        num--;
        animate(ul, -num * img_Width);
        if (temp == 0) {
            temp = ul.children.length - 1;
        }
        temp--;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].removeAttribute('class');
        }
        ol.children[temp].setAttribute('class', 'cures');
    })
    top.children[1].addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0 + 'px';
            num = 0;
        }
        num++;
        animate(ul, -num * img_Width);
        if (temp == ul.children.length - 1 - 1) {
            temp = -1;
        }
        temp++;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].removeAttribute('class');
        }
        ol.children[temp].setAttribute('class', 'cures');
    })

    var timer = setInterval(function() {
        top.children[1].click();
    }, 1000);
})