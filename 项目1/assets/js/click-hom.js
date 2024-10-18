// 点击版本号显示隐藏功能
var vers = document.querySelectorAll('.ver');
vers.forEach(function(ver) {
  ver.addEventListener('click', function() {
    var vernum = this.id; // 获取当前元素的 id
    if (this.classList.contains('veractive')) {
      this.classList.remove('veractive'); // 已有active类时移除该类
      this.innerHTML = '作业编号：' + vernum + ' +'; // 显示版本号
      console.log(vernum + 'class:' + this.className);
      var vercontentpro = vernum + "\\"
      var vercontent = document.getElementById(vercontentpro); // 获取当前版本号对应的内容
      vercontent.style.display = 'none'; // 隐藏对应内容
    } else {
      this.classList.add('veractive'); // 点击时添加类
      this.innerHTML = '作业编号：' + vernum + ' -'; // 显示版本号
      console.log(vernum + 'class:' + this.className);
      var vercontentpro = vernum + "\\"
      var vercontent = document.getElementById(vercontentpro);
      vercontent.style.display = 'block'; // 显示对应内容
    }
  });
});