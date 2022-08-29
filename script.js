const darkMode = document.querySelector(".header__item--special--dark");
const lightMode = document.querySelector(".header__item--special--light");
const form = document.getElementById("form-main");
const input = document.querySelectorAll("input")
const usernameConatainer = document.getElementById("username-container");
const emailContainer = document.getElementById("email-container");
const phoneContainer = document.getElementById("number-container");
const passwordContainer = document.getElementById("password-container");
const passwordConfirmationContainer = document.getElementById("password_confirmation-container");

const footerInput = document.getElementById("footer__input");
const submit = document.getElementById("submit");

window.addEventListener('click', activeElement)

// active element validity
function activeElement() {
    input.forEach((input) => {
        checkValidity(input, "username", usernameRegex, "at least 4 characters");
        checkValidity(input, "email", emailRegex);
        checkValidity(input, "phone-number", phoneNumberRegex)
        checkValidity(input, "user_password", passwordRegex)
    })

    console.log(userValid, emailValid, phoneValid, passwordValid)
}

// check whether input is valid
let userValid;
let emailValid;
let phoneValid;
let passwordValid;

// function to check if username, email, and password is valid 
function checkValidity(input, idName, regex, message) {
    if(input.id === idName) {
        if (input.value === "") {
            changeValidity(input.id, undefined);
            input.parentElement.classList.remove("valid");
            input.parentElement.classList.remove("invalid");
        }
        else if(regex.test(input.value) === false && input.value !== "" && input !== document.activeElement) {
            changeValidity(input.id, false);
            input.parentElement.classList.remove("valid");
            input.parentElement.classList.add('invalid');
        }
        else if (regex.test(input.value) === true) {
            changeValidity(input.id, true);
            input.parentElement.classList.remove("invalid");
            input.parentElement.classList.add("valid");
            // document.querySelectorAll(`.invalid-${input.id}`).forEach(el => el.remove());
        }
        
    }
}

function changeValidity(inputElement, state) {
    switch(inputElement) {
        case "username":
            userValid = state;
            break;
        case "email":
            emailValid = state;
            break;
        case "phone-number":
            phoneValid = state;
            break;
        case "user_password":
            passwordValid = state;
    }
}

// add Error message
function addErrorMessage() {
    if(userValid === false && Array.from(form.querySelectorAll('.invalid-username-message')).length < 1) {
        console.log("d")
        insertAfter(createErrorMessage("username-message", "is too short (minimum is 4 characters)"), usernameConatainer)
    }
    else if(userValid !== false) {
        const child = document.querySelector(".invalid-username-message")
        if(child !== null) {
            child.parentNode.removeChild(child);
        }
    }
    if(emailValid === false && Array.from(form.querySelectorAll('.invalid-email-message')).length < 1) {
        insertAfter(createErrorMessage("email-message", "Is not a valid email"), emailContainer)
    }
    else if(emailValid !== false) {
        const child = document.querySelector(".invalid-email-message")
        if(child !== null) {
            child.parentNode.removeChild(child);
        }
    }
    if(phoneValid === false && Array.from(form.querySelectorAll('.invalid-phone-number-message')).length < 1) {
        insertAfter(createErrorMessage("phone-number-message", "Number is either invalid or location unregistered"), phoneContainer)
    }
    else if(phoneValid !== false) {
        const child = document.querySelector(".invalid-phone-number-message")
        if(child !== null) {
            child.parentNode.removeChild(child);
        }
    }
    if(passwordValid === false && Array.from(form.querySelectorAll('.invalid-password-message')).length < 1) {
        insertAfter(createErrorMessage("password-message", "Is too short (minimum is 6 characters)"), passwordContainer)
    }
    else if(passwordValid !== false) {
        const child = document.querySelector(".invalid-password-message")
        if(child !== null) {
            child.parentNode.removeChild(child);
        }
    }
    
}

window.addEventListener("click", () => {
    addErrorMessage()
})



// insertAfter(createErrorMessage("username", "hello world"), emailContainer)

// create a function that creates an error message when called
function createErrorMessage(errorElement, message) {
        const newElement = document.createElement(`div`);
        newElement.classList.add(`invalid-${errorElement}`)
        newElement.innerHTML = `<p>${message}</p>`
        return newElement
    
}

// create a function to insert an element after each input in case the input value is invalid

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}


// is too short (minimum is 4 characters)
// Is not a valid email
// is too short (minimum is 6 characters)
// The passwords do not match

// regex to check validity
const usernameRegex = /.{4,}/;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /.{6,}/; 
const phoneNumberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// console.log(usernameRegex.test(username.value))

submit.addEventListener('click', submitForm);

function submitForm(e) {

}