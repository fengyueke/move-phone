// obj 对象   target 要移动的距离 callback 回调函数
function animate(obj, target, callback) {
    // 防止开启多个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 5;
        if (step > 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
    }, 30);
}