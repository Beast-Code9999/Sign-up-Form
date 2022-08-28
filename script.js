const darkMode = document.querySelector(".header__item--special--dark");
const lightMode = document.querySelector(".header__item--special--light");
const formSection = document.querySelectorAll(".form__section")
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("user_password");
const passwordConfirm = document.getElementById("user_password_confirmation");
const footerInput = document.getElementById("footer__input");
const submit = document.getElementById("submit")

// formSection.style.borderBlockColor = "green"
// formSection.style.borderBlockWidth = "3px"
// formSection.style.borderBlockStyle = "solid"

// is too short (minimum is 4 characters)
// Is not a valid email
// is too short (minimum is 6 characters)
// The passwords do not match


formSection.forEach((section) => {
    console.log(section)
    
})

window.addEventListener('click', (e) => {
    // console.log(e.target.value)
})


submit.addEventListener('click', submitForm);

function submitForm(e) {
    console.log(username.value)
    console.log(e)
}