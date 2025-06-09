const buttonCilova = document.querySelector(".button-1");
const buttonAdd = document.querySelector(".button-2");
const buttonDelete = document.querySelector(".button-3");

buttonCilova.addEventListener("click", () => {
    buttonAdd.addEventListener("click", handleButtonClick);
    document.body.style.background = "#99a3a4";
});

buttonDelete.addEventListener("click", () => {
    buttonAdd.removeEventListener("click", handleButtonClick);
    document.body.style.background = "white"

});

function handleButtonClick() {
    console.log("click");
}

//=================SUBMIT=======================

const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".form-input");
const checkEl = document.querySelector(".form-check");
const btnEl = document.querySelector(".btn")

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.log(event.currentTarget.elements['пошта'].value);
};