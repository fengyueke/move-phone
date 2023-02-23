window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    console.log(focus);
    console.log(ul);
    console.log(w);
    // 自动播放
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    ul.addEventListener('transitionend', function() {
            if (index >= 3) {
                index = 0;
                var translatex = -index * w;
                ul.style.transition = 'none';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else if (index < 0) {
                index = 2;
                var translatex = -index * w;
                ul.style.transition = 'none';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            ol.querySelector('.current').classList.remove('current');
            ol.children[index].classList.add('current');
        })
        // 触摸事件
    var startx = 0;
    var movex = 0;
    var flag = false;
    focus.addEventListener('touchstart', function(e) {
        startx = e.touches[0].pageX;
        clearInterval(timer);
    })
    focus.addEventListener('touchmove', function(e) {
        movex = e.touches[0].pageX - startx;
        var translatex = -index * w + movex;
        ul.style.transition = 'none';
        ul.style.transform = 'translate(' + translatex + 'px)';
        flag = true;
        e.preventDefault();
    })
    focus.addEventListener('touchend', function(e) {
        if (flag == true) {
            if (Math.abs(movex) > 50) {
                if (movex > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translate(' + translatex + 'px)';
            } else {
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translate(' + translatex + 'px)';
            }
        }
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000)
    })

    // 返回顶部模块
    var goBack = document.querySelector('.goBack');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})