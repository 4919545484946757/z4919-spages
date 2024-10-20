    var ltid = document.querySelectorAll('.lt');
    var imgbox1 = document.getElementById('i1');
    var imgbox2 = document.getElementById('i2');

    ltid.forEach(function(bigger) {
        bigger.addEventListener('click', function() {
            if (imgbox1.classList.contains('show')) {
            //获取背景样式
            var boxstyle = getComputedStyle(this).backgroundImage;
                imgbox2.style.backgroundImage = boxstyle;
                imgbox2.classList.add('show');
                imgbox1.classList.remove('show');
        } else {
            //获取背景样式
            var boxstyle = getComputedStyle(this).backgroundImage;
                imgbox1.style.backgroundImage = boxstyle;
                imgbox1.classList.add('show');
                imgbox2.classList.remove('show');
        }
        });
    });
