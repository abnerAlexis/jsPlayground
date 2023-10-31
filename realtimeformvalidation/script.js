(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");

    //parameters are input(DOM element) and a message
    function showErrorMessage(input, message) {
        let container = input.parentElement; //The .input-wrapper
        //Check and remove any existing errors.
        let error = containeer.querySelector("error-message");
        if (error) {
            container.removeChild(error);
        }

        //Add the error if the message isn't empty.
        if (message) {
            let error = document.createElement("div");
            error.classList.add("error-message");
            error.innerText = message;
            container.appendChild(error);
        }
    }

    //an “@” symbol and a “.” required in the user input
    function validateEmail() {
        let value = emailInput.value;
        // ! sign infront of value is called bang operator.
        if (!value) {
            showErrorMessage(emailInput, "Email is a required field.");
            return false;
        }

        if (value.indexOf("@") === -1) {
            showErrorMessage(emailInput, "You must enter a valid email address.");
            return false;
        }

        if (value.indexOf(".") === -1) {
            showErrorMessage(emailInput, "You must enter a valid email address.");
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validatePassword() {
        let value = passwordInput.value; 
        if (!value) {
            showErrorMessage(passwordInput, "Password is a required field.");
            return false;
        }

        if (value.length < 8) {
            showErrorMessage(passwordInput, "The password needs to be at least 8 characters long.");
            return false;
        }

        showErrorMessage(passwordInput, null);
        return true;
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