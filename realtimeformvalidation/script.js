(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");

    function validateEmail() {
        return false;
    }

    function validatePassword() {
        return false;
    }

    function validateForm() {
        return validateEmail() && validatePassword();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // do not submit to the server.
        if (validateForm()) {
            alert("Success");
        }
    })

    //The Return Statement
})();