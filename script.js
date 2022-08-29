const darkMode = document.querySelector(".header__item--special--dark");
const lightMode = document.querySelector(".header__item--special--light");
const usernameContainer = document.getElementById("username-container");
const username = document.getElementById("username");
const emailContainer = document.getElementById("email-container")
const email = document.getElementById("email");
const phonContainer = document.getElementById("email-container")
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("user_password");
const passwordConfirm = document.getElementById("user_password_confirmation");
const footerInput = document.getElementById("footer__input");
const submit = document.getElementById("submit")

console.log(usernameContainer)

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

window.addEventListener('click', (e)=> {
    // console.log(e.target.id)
    if (username === document.activeElement) {
        
    } else{ 
        if(usernameRegex.test(username.value)) {
            // console.log(username.value)
            userValid = true;
        }
        if(!usernameRegex.test(username.value)) {
            // console.log(username.value)
            userValid = false;
        }
    }
    // console.log(userValid)


})



submit.addEventListener('click', submitForm);

function submitForm(e) {

}