var isclicked = document.getElementById('pagepost')
var ishide = document.getElementsByClassName('pagebox')
var texinterest = document.getElementById('interesting')
isclicked.addEventListener('click', function() {
    if (ishide[0].classList.contains('hide')){
        for (var i = 0; i < ishide.length; i++) {
            ishide[i].classList.remove('hide')
            ishide[i].classList.add('nothide')
            texinterest.innerHTML = '有点意思:&nbsp;&nbsp;-'
            console.log(ishide[0].className)
        }
    }else{
        for (var i = 0; i < ishide.length; i++) {
            ishide[i].classList.add('hide')
            ishide[i].classList.remove('nothide')
            texinterest.innerHTML = '有点意思:&nbsp;&nbsp;+'
            console.log(ishide[0].className)
        }
    }
})