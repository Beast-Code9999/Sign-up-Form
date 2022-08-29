const darkMode = document.querySelector(".header__item--special--dark");
const lightMode = document.querySelector(".header__item--special--light");
const usernameContainer = document.getElementById("username-container");
const emailContainer = document.getElementById("email-container");
const phoneContainer = document.getElementById("number-container");
const passwordContainer = document.getElementById("password-container");
const passwordConfirmationContainer = document.getElementById("password_confirmation-container");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phoneNumber = document.getElementById("phone-number");
// const password = document.getElementById("user_password");
// const passwordConfirmation = document.getElementById("user_password_confirmation");
const input = document.querySelectorAll("input")
const footerInput = document.getElementById("footer__input");
const submit = document.getElementById("submit")

window.addEventListener('click', activeElement)

function activeElement() {
    input.forEach((input) => {
        usernameCheck(input, "username", usernameRegex)
    })
}

// function to check if username is correct 
function usernameCheck(input, idName, regex) {
    if(input.id === idName) {
        console.log(input.value)
        if (input.value === "") {
            console.log("this works")
            input.parentElement.classList.remove("valid");
            input.parentElement.classList.remove("invalid");
        }
        else if(regex.test(input.value) === false && input.value !== "" && input !== document.activeElement) {
            console.log(regex.test(input.value), input.value)
            input.parentElement.classList.remove("valid")
            input.parentElement.classList.add('invalid')
        }
        else if (regex.test(input.value) === true) {
            console.log(regex.test(input.value))
            input.parentElement.classList.remove("invalid")
            input.parentElement.classList.add("valid")
        }
            
    }
}
// is too short (minimum is 4 characters)
// Is not a valid email
// is too short (minimum is 6 characters)
// The passwords do not match

// check whether input is valid
let userValid = false;

// regex to check validity
const usernameRegex = /.{4,}/;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /.{6,}/; 



// console.log(usernameRegex.test(username.value))




submit.addEventListener('click', submitForm);

function submitForm(e) {

}