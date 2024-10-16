var Showcode = document.getElementById("view-code");
Showcode.addEventListener("click", function() {
    var sourcecode = encodeURIComponent(document.documentElement.outerHTML);
    var newWebUrl = 'view-source.html?source=' + sourcecode;
    window.open(newWebUrl, '_blank');
});