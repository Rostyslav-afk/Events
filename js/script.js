// // // // // const buttonCilova = document.querySelector(".button-1");
// // // // // const buttonAdd = document.querySelector(".button-2");
// // // // // const buttonDelete = document.querySelector(".button-3");

// // // // // buttonCilova.addEventListener("click", () => {
// // // // //     buttonAdd.addEventListener("click", handleButtonClick);
// // // // //     document.body.style.background = "#99a3a4";
// // // // // });

// // // // // buttonDelete.addEventListener("click", () => {
// // // // //     buttonAdd.removeEventListener("click", handleButtonClick);
// // // // //     document.body.style.background = "white"

// // // // // });

// // // // // function handleButtonClick() {
// // // // //     console.log("click");
// // // // // }

// // // // // //=================SUBMIT=======================

// // // // // const formEl = document.querySelector(".form")
// // // // // const inputEl = document.querySelector(".form-input");
// // // // // const checkEl = document.querySelector(".form-check");
// // // // // const btnEl = document.querySelector(".btn")

// // // // // formEl.addEventListener("submit", onFormSubmit);

// // // // // function onFormSubmit(event) {
// // // // //     event.preventDefault();
// // // // //     console.log(event.currentTarget.elements['пошта'].value);
// // // // // };

// // // // //    Подія click
// // // // // 1. Задача: Натисни кнопку — зміниться текст, колір тексту та його розмір
// // // // const btn = document.querySelector("#btn");
// // // // const text = document.querySelector("#output");
// // // // const img = document.querySelector("#img");
// // // // img.src = "https://localo.com/es/assets/img/definitions/what-is-fonts.webp";
// // // // btn.addEventListener("click", (event) => {
// // // //     event.preventDefault();
// // // //     text.style.color = "blue";
// // // //     text.style.fontSize = "50px";
// // // //     text.textContent = "HELLO";

// // // //     img.src = "https://yt3.googleusercontent.com/ytc/AIdro_k9ebK1StFdYcW5JnOqUw5vRVweF0JljFlron9Vf78V4UE=s900-c-k-c0x00ffffff-no-rj"
// // // // });

// // // // 2. Задача: Натискання додає елемент до списку
// // // // const btn = document.querySelector("#add-item");
// // // // const list = document.querySelector("#list");

// // // // btn.addEventListener("click", (event) => {
// // // //     event.preventDefault();
// // // //     const question = prompt("Який елемент хочете добавити?(наприклад: div, p, li)").trim();
// // // //     console.log(question);
// // // //     if (question) {
// // // //         const element = document.createElement(question);
// // // //         element.textContent = "Новий елемент";
// // // //         list.appendChild(element);
// // // //     };
// // // // });


// // // // Подія input
// // // // 3. Задача: Відображення вмісту input у реальному часі
// // // // const inpt = document.querySelector("#name-input");
// // // // const text = document.querySelector("#greeting");

// // // // inpt.addEventListener("input", (event) => {
// // // //     event.preventDefault();
// // // //     console.log(event.currentTarget.value);

// // // //     text.textContent = `Привіт!${event.currentTarget.value}`;
// // // // });


// // // // 4. Задача: Показати кількість символів у полі вводу
// // // // const inpt = document.querySelector("#text-input");
// // // // const text = document.querySelector("#length-display");

// // // // inpt.addEventListener("input", (event) => {
// // // //     event.preventDefault();

// // // //     text.textContent = `${event.currentTarget.value.length} символів`
// // // // });

// // // // Подія change
// // // // 5. Задача: Обрати колір і змінити фон

// // // // const input = document.querySelector("#color-picker");
// // // // const div = document.querySelector("#color-box");

// // // // input.addEventListener("change", (event) => {
// // // //     div.style.background = event.currentTarget.value;
// // // //     alert(`Ви обрали колір ${event.currentTarget.value}`)
// // // // });


// // // // 6. Задача: Вибір з випадаючого списку та показ вибраного
// // // // const select = document.querySelector("#select-fruit");
// // // // const text = document.querySelector("#fruit-output");
// // // // select.addEventListener("change", (event) => {
// // // //     text.textContent = `Ви обрали ${event.currentTarget.value}`
// // // // });


// // // // 7. Задача: Перевірка, чи не порожнє поле
// // // const inpt = document.querySelector("#username");
// // // const text = document.querySelector("#error-msg");

// // // inpt.addEventListener("blur", (event) => {
// // //     if (inpt.value.length === 0) {
// // //         text.textContent = "Error, Ви не ввели нічого"
// // //     };

// // // });


// // ////////////////KEY DOWN////////////

// // document.addEventListener("keydown", (event) => {
// //     event.preventDefault();

// //     if ((event.ctrlKey || event.metaKey) && event.code == "KeyS") {
// //         console.log("Ctrl + S or Commnad + s combo");

// //     }


// // })


// // // Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці. При натисканні на кнопку “Очистити” очищувати надрукований текст. Використати можна наступну розмітку

// // const button = document.querySelector(".js-clear");
// // const text = document.querySelector(".output")

// // document.addEventListener("keydown", (event) => {
// //     if (event.key.length === 1) {
// //         text.textContent += event.key;
// //     } else if (event.key === "Backspace") {
// //         text.textContent = text.textContent.slice(0, -1);
// //         event.preventDefault();
// //     }

// // });

// // button.addEventListener("click", (event) => {
// //     text.textContent = "";
// // });

// // Змінити текст елементу з id="message" на текст, який користувач вводить у текстове поле з id="input" під час події keypress.

// const input = document.querySelector("#input");
// const text = document.querySelector("#message");

// input.addEventListener("keydown", (event) => {
//     if (event.key === "Backspace") {
//         text.textContent = text.textContent.slice(0, -1);
//     } else if (event.key === "Control" || event.key === "Alt" || event.key === "AltGraph") {
//         text.textContent += "";
//     } else {
//         text.textContent += event.key;
//     }

// });


const box = document.querySelector(".box");

//Mousemove кожне переміщення миші над елементом викликає цю подію.
// box.addEventListener("mousemove", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green"
// });

//Mousedown клікання
// box.addEventListener("mousedown", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green";
// })

// //Mouseup відпускання кнопки миші над елементом.
// box.addEventListener("mouseup", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green";
// });

//mouseover  курсор заходить
// box.addEventListener("mouseover", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green";
// });

//mouseout виходить з елемента
// box.addEventListener("mouseout", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green";
// });

//dblclick спрацьовує після двох кліків
// box.addEventListener("dblclick", (event) => {
//     event.preventDefault();
//     box.style.border = "3px solid green";
// });

document.addEventListener('keyup', function (event) {
    console.log('Key up: ', event.key);
});
