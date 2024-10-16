/*var x1 = document.getElementById('postsign');


var y = document.getElementById('postsign');

function handleClickOutside(event) {
  if (myElement.contains(event.target)) {
    // 如果点击在元素内，添加类
    x1.classList.add('cssactive');
  } else {
    // 如果点击在元素外，移除类
    x1.classList.remove('cssactive');
  }
}
y.addEventListener('click', function() {
  myElement.addEventListener('click', toggleElementClass);
  document.addEventListener('click', handleClickOutside);});
*/

var x101 = document.getElementById('postsign'); // 获取主要元素
var y101 = document.getElementById('postsign'); // y 变量指向同一元素

function handleClickOutside(event) {
  if (!x101.contains(event.target)) {
    x101.classList.remove('cssactive');
  }
}

y101.addEventListener('click', function() {
  x101.classList.add('cssactive'); // 点击时添加类

  // 添加点击外部时移除类的处理
  document.addEventListener('click', handleClickOutside);
});

