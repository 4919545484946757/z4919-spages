document.addEventListener('DOMContentLoaded', function() {
    var boxid = document.querySelectorAll('.boxbox');
    var winimg = document.querySelectorAll('.winimg');
    var imgbox = document.querySelectorAll('.imgbox');

    boxid.forEach(function(bigger) {
        bigger.addEventListener('click', function() {
            //获取背景样式
            var boxstyle = getComputedStyle(this).backgroundImage;

            //设置背景样式
            imgbox.forEach(function(img) {
                img.style.backgroundImage = boxstyle;
            });
            //显示
            winimg.forEach(function(win) {
                win.style.display = 'block';
            });
        });
    });
    winimg.forEach(function(win) {
        win.addEventListener('click', function() {
            //隐藏
            win.style.display = 'none';
        });
    });
});
