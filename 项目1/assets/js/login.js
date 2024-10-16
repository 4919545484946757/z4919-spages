function check() {
    var username = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;
    var account = document.forms["loginform"]["account"].value;
    if (username == "" || password == "" || account == "") {
        alert("请填写完整信息");
        var logined = false;
        return false;
    }
    else {
        localStorage.setItem("accountdata", account);
        localStorage.setItem("usernamedata", username);
        localStorage.setItem("logined", "true");
        window.location.href = "sons-1/transfer.html";
        return false;
    }
}