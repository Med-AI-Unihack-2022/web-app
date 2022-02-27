var emails = ["sample@gmail.com"];
var passwords = ["sample"];

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
    emails.push(email);
    passwords.push(password);
    window.location.href = "dashboard_unscanned.html";
    return;
}

function add_general_record() {
    var date = document.getElementById("gr_form_1b").value;
    var doctor = document.getElementById("gr_form_2b").value;
    var name = document.getElementById("gr_form_3b").value;
    var age = document.getElementById("gr_form_4b").value;
    var sex = document.getElementById("gr_form_5b").value;
    var heart_rate = document.getElementById("gr_form_6b").value;
    var sys_bp = document.getElementById("gr_form_7b").value;
    var dia_bp = document.getElementById("gr_form_8b").value;
    var glucose = "Low"
    if(document.getElementById('G_high').checked) {
      glucose = document.getElementById('G_high').value;
    }else if(document.getElementById('G_mid').checked) {
      glucose = document.getElementById('G_mid').value;
    }
    var cholesterol = "Low"
    if(document.getElementById('C_high').checked) {
      glucose = document.getElementById('C_high').value;
    }else if(document.getElementById('C_mid').checked) {
      glucose = document.getElementById('C_mid').value;
    }
    var notes = document.getElementById("gr_form_10d").value;

    document.getElementById("general_record_form").style.display = "none";
    document.getElementById("add_general_record_form").style.display = "block";
}

function add_general_record_again() {
    document.getElementById("general_record_form").style.display = "block";
    document.getElementById("add_general_record_form").style.display = "none";
}

function add_specialist_record() {

    var diagnosis = [];

    var date = document.getElementById("sr_form_db").value;
    var doctor = document.getElementById("sr_form_rb").value;
    var name = document.getElementById("sr_form_nb").value;
    var age = document.getElementById("sr_form_ab").value;
    var sex = document.getElementById("sr_form_sb").value;

    if(document.getElementById('sr_form_1a').checked) {
      diagnosis.push(document.getElementById('sr_form_1a').value);
    } else if (document.getElementById('sr_form_2a').checked) {
      diagnosis.push(document.getElementById('sr_form_2a').value);
    } else if (document.getElementById('sr_form_3a').checked) {
      diagnosis.push(document.getElementById('sr_form_3a').value);
    } else if (document.getElementById('sr_form_4a').checked) {
      diagnosis.push(document.getElementById('sr_form_4a').value);
    } else if (document.getElementById('sr_form_5a').checked) {
      diagnosis.push(document.getElementById('sr_form_5a').value);
    } else if (document.getElementById('sr_form_6a').checked) {
      diagnosis.push(document.getElementById('sr_form_6a').value);
    } else if (document.getElementById('sr_form_7a').checked) {
      diagnosis.push(document.getElementById('sr_form_7a').value);
    } else if (document.getElementById('sr_form_8a').checked) {
      diagnosis.push(document.getElementById('sr_form_8a').value);
    } else if (document.getElementById('sr_form_9a').checked) {
      diagnosis.push(document.getElementById('sr_form_9a').value);
    } else if (document.getElementById('sr_form_10a').checked) {
      diagnosis.push(document.getElementById('sr_form_10a').value);
    } else if (document.getElementById('sr_form_11a').checked) {
      diagnosis.push(document.getElementById('sr_form_11a').value);
    } else if (document.getElementById('sr_form_12a').checked) {
      diagnosis.push(document.getElementById('sr_form_12a').value);
    } else if (document.getElementById('sr_form_13a').checked) {
      diagnosis.push(document.getElementById('sr_form_13a').value);
    } else if (document.getElementById('sr_form_14a').checked) {
      diagnosis.push(document.getElementById('sr_form_14a').value);
    } else if (document.getElementById('sr_form_15a').checked) {
      diagnosis.push(document.getElementById('sr_form_15a').value);
    }

    document.getElementById("specialist_record_form").style.display = "none";
    document.getElementById("add_specialist_record_form").style.display = "block";
}

function add_specialist_record_again() {
    document.getElementById("specialist_record_form").style.display = "block";
    document.getElementById("add_specialist_record_form").style.display = "none";
}


function add_medication() {

    var date = document.getElementById("pm_form_1b").value;
    var doctor = document.getElementById("pm_form_2b").value;
    var name = document.getElementById("pm_form_3b").value;
    var age = document.getElementById("pm_form_4b").value;
    var sex = document.getElementById("pm_form_5b").value;
    var medicine = document.getElementById("pm_form_6b").value;
    var rotation = document.getElementById("pm_form_7b").value;

    var frequency = "Daily"
    if(document.getElementById('dual').checked) {
      frequency = document.getElementById('dual').value;
    }else if(document.getElementById('weekly').checked) {
      frequency = document.getElementById('weekly').value;
    }
    var timing = "Morning"
    if(document.getElementById('noon').checked) {
      timing = document.getElementById('noon').value;
    }else if(document.getElementById('evening').checked) {
      timing = document.getElementById('evening').value;
    }

    var notes = document.getElementById("pm_form_10d").value;

    document.getElementById("prescribe_medicine_form").style.display = "none";
    document.getElementById("add_medication_form").style.display = "block";
}

function add_medication_again() {
    document.getElementById("prescribe_medicine_form").style.display = "block";
    document.getElementById("add_medication_form").style.display = "none";
}

