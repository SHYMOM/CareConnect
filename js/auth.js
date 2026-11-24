// Simple validation helpers
function isValidEmail(email) {
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        return false;
    }
    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function isValidPhone(phone) {
    if (isNaN(phone) || phone.length !== 11) {
        return false;
    }
    return true;
}

function isValidPassword(password) {
    return password.length >= 6;
}

// login validation
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (email == "" || password == "") {
        alert("Please enter both email and password.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address (e.g. name@example.com).");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (role == "") {
        alert("Please select your role.");
        return false;
    }

    if (role == "care-seeker") {
        window.location.href = "pages/care-seeker/dashboard.html";
    } else if (role == "volunteer") {
        window.location.href = "pages/volunteer/dashboard.html";
    } else if (role == "doctor") {
        window.location.href = "pages/doctor/dashboard.html";
    } else if (role == "guardian") {
        window.location.href = "pages/guardian/dashboard.html";
    } else if (role == "provider") {
        window.location.href = "pages/provider/dashboard.html";
    } else if (role == "admin") {
        window.location.href = "pages/admin/dashboard.html";
    }

    return false;
}

// registration form validation
function validateRegister() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm_password").value;

    if (name == "" || email == "" || phone == "" || pass == "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!isValidPhone(phone)) {
        alert("Please enter a valid 11-digit phone number (e.g. 01XXXXXXXXX).");
        return false;
    }

    if (!isValidPassword(pass)) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (pass != confirmPass) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
    return false;
}

// password reset
function resetPassword() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Password reset instructions sent to " + email);
    window.location.href = "login.html";
    return false;
}

// save profile changes
function saveProfile() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!isValidPhone(phone)) {
        alert("Please enter a valid 11-digit phone number.");
        return false;
    }

    alert("Profile details updated successfully!");
    return false;
}

// change password
function updatePassword() {
    var newPass = document.getElementById("new_password").value;
    var confirmPass = document.getElementById("confirm_password").value;

    if (newPass == "") {
        alert("Please enter a new password.");
        return false;
    }

    if (!isValidPassword(newPass)) {
        alert("New password must be at least 6 characters long.");
        return false;
    }

    if (newPass != confirmPass) {
        alert("New passwords do not match!");
        return false;
    }

    alert("Password changed successfully!");
    return false;
}
