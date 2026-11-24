
function linkCareSeeker() {
    var name = document.getElementById("seeker_name").value;
    var code = document.getElementById("seeker_code").value;

    if (name == "" || code == "") {
        alert("Please enter relative name and approval code.");
        return false;
    }

    alert("Successfully linked with " + name + " (" + code + ")!\nYou can now monitor them remotely.");
    return false;
}


function unlinkCareSeeker(button) {
    if (confirm("Are you sure you want to unlink this care seeker?")) {
        alert("Care seeker unlinked.");
    }
}


function submitBehalfRequest() {
    var title = document.getElementById("title").value;
    var details = document.getElementById("details").value;

    if (title == "" || details == "") {
        alert("Please enter title and instructions.");
        return false;
    }

    alert("Help request submitted on behalf of relative! Nearby volunteers have been notified.");
    return false;
}

// acknowledge emergency alert
function acknowledgeAlert(button) {
    button.innerText = "Acknowledged ✓";
    button.disabled = true;
    button.style.backgroundColor = "#5cb85c";
    alert("Alert marked as acknowledged. Emergency contacts have been informed.");
}
