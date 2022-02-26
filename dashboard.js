var emails = ["sample@gmail.com"]
var passwords = ["sample"]

function log_in() {
    var email = document.getElementById("log_in_email").value;
    var password = document.getElementById("log_in_password").value;
    for (let i=0; i<emails.length; i++) {
        if (email == emails[i]) {
            if (password == passwords[i]) {
                window.location.href = "dashboard_unscanned.html";
                return;
            } else {
                window.location.href = "login.html";
                return;
            }
        }
    }
    window.location.href = "login.html";
    return;
}

// function validateEmail() {
//     const submit = document.getElementById("submit");

//     submit.addEventListener("click", validate);

//     const email = document.getElementById("mail");

//     email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//     email.setCustomValidity("Please enter your email address here");
//     email.reportValidity();
//     } else {
//         email.setCustomValidity("");
//     }
//     });
// }
    
function sign_up() {
    var email = document.getElementById("sign_in_email").value;
    var password = document.getElementById("sign_in_password").value;
    var password_confirm = document.getElementById("sign_in_password_confirm").value;
    var name = document.getElementById("sign_in_name").value;
    if (password != password_confirm) {
        window.location.href = "signup.html";
        return;
    }
    if (name.length <= 0) {
        window.location.href = "signup.html";
        return;
    }
    for (let i = 0; i<emails.length; i++) {
        if (email == emails[i]) {
            window.location.href = "signup.html";
            return;
        }
    }
    emails.push(email)
    passwords.push(password)
    window.location.href = "dashboard_unscanned.html";
    return;
}
