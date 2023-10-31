(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");

    //an “@” symbol and a “.” required in the user input
    function validateEmail() {
        let value = emailInput.value;
        let hasAtSign = value.indexOf("@") > -1;
        let hasDot = value.indexOf(".") > -1;
        return value && hasAtSign && hasDot;
    }

    function validatePassword() {
        let value = passwordInput.value; 
        return value && value.length >= 8;
    }

    function validateForm() {
        return validateEmail() && validatePassword();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // do not submit to the server.
        if (validateForm()) {
            alert("Success");
        } else {
            alert("Password or email not valid.")
        }
    })

    //The Return Statement
})();