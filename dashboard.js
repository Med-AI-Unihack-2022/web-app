function log_in() {
    var email = document.getElementById("log_in_email").value;
    var password = document.getElementById("log_in_password").value;

    if (email == "sample@gmail.com") {
        if (password == "sample") {
            window.location.href = "dashboard_unscanned.html";
            return;
        } else {
            window.location.href = "login.html";
            return;
        }
    } else {
        window.location.href = "login.html";
        return;
    }

}