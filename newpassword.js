document.addEventListener("DOMContentLoaded", function() {
    var passwordInput1 = document.getElementById('password1');
    var passwordInput2 = document.getElementById('password2');
    var submitButton = document.getElementById('submitButton');
    var matchMessage = document.getElementById('matchMessage');

    function checkNewPassword() {
        var password1 = passwordInput1.value;
        var password2 = passwordInput2.value;

        if(password1 === password2) {
        		if(password1.length > 7) {
                submitButton.disabled = false;
                matchMessage.textContent = "";
            }
            else {
                submitButton.disabled = true;
                matchMessage.textContent = "Password must be at least 8 characters long.";
            }
        } else {
            submitButton.disabled = true;
            matchMessage.textContent = "Your passwords don't match";
        }
    }

    passwordInput1.addEventListener('input', checkNewPassword);
    passwordInput2.addEventListener('input', checkNewPassword);
});
