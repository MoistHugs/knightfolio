function checkPassword(value) {
    if(value.length > 7) {
      document.getElementById("submitButton").disabled = false;
      document.getElementById("error").hidden = true;
    } 
    else{
        document.getElementById("error").hidden = false;
        document.getElementById("submitButton").disabled = true;
    }
}

function checkBox1(value) {
    if(value.equals(document.getElementById("password2").value)) {
        submitButton.disabled = false;
        matchMessage.textContent = "Passwords Match";
    } 
    else{
        submitButton.disabled = true;
        matchMessage.textContent = "";
    }
}

function checkBox2(value) {
    if(value.equals(document.getElementById("password1").value)) {
        submitButton.disabled = false;
        matchMessage.textContent = "Passwords Match";
    } 
    else{
        submitButton.disabled = true;
        matchMessage.textContent = "";
    }
} 
