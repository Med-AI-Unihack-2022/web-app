function log_in() {
    var email = document.getElementById("log_in_email").value;
    var password = document.getElementById("log_in_password").value;

    const submit = document.getElementById("submit");

    submit.addEventListener("click", validate);

    const email = document.getElementById("mail");

    email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter your email address here");
    email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
    });
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

function signup() {
    var email = document.getElementById("signup_email").value;
    var password = document.getElementById("signup_password").value;

    const submit = document.getElementById("submit");

    submit.addEventListener("click", validate);

    const email = document.getElementById("mail");

    email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter your email address here");
    email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
    });

    if (email == "sample@gmail.com") {
        if (password == "sample") {
            window.location.href = "dashboard_unscanned.html";
            return;
        } else {
            window.location.href = "signup.html";
            return;
        }
    } else {
        window.location.href = "signup.html";
        return;
    }
    

}
