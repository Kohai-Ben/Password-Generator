const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alphaChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbersOnly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let answerEl1 = document.getElementById("answer-1")
let answerEl2 = document.getElementById("answer-2")
let password1 = ""
let password2 = ""
let allChar = document.getElementById("all-characters")
let alphaNum = document.getElementById("alpha-numerical")
let numOnly = document.getElementById("numbers-only")

let hasPasswords = false

generatebutton.addEventListener("click", function() {
    let number = document.getElementById("password-length")
    let passLength = parseInt(number.value)
    let password1 = ""
    let password2 = ""
    if (allChar.checked) {
        for (let i = 0; i < passLength; i++) {
        password1 += allCharacters[Math.floor (Math.random() * allCharacters.length)]
        password2 += allCharacters[Math.floor (Math.random() * allCharacters.length)]
        answerEl1.textContent = password1
        answerEl2.textContent = password2
        }
    } else if (alphaNum.checked) {
        for (let i = 0; i < passLength; i++) {
        password1 += alphaChar[Math.floor (Math.random() * alphaChar.length)]
        password2 += alphaChar[Math.floor (Math.random() * alphaChar.length)]
        answerEl1.textContent = password1
        answerEl2.textContent = password2
        }
    } else {
        for (let i = 0; i < passLength; i++) {
        password1 += numbersOnly[Math.floor (Math.random() * numbersOnly.length)]
        password2 += numbersOnly[Math.floor (Math.random() * numbersOnly.length)]
        answerEl1.textContent = password1
        answerEl2.textContent = password2
        }
    }
    hasPasswords = true
})

let lightMode = document.getElementById("light")
let darkMode = document.getElementById("dark")

lightMode.addEventListener("click", function () {
    document.querySelector("html").setAttribute("data-theme", "lightmode")
})

darkMode.addEventListener("click", function () {
    document.querySelector("html").setAttribute("data-theme", "darkmode")
})

answerEl1.addEventListener("click", function () {
    if (hasPasswords === true) {
        let password1 = document.getElementById("answer-1")
        writeClipboardText(password1.textContent)
        async function writeClipboardText(text) {
            try {
                await navigator.clipboard.writeText(text);
            } catch (error) {
                console.error(error.message);
            }
        }

        const copied1 = document.getElementById("copied1")
            copied1.style.display = 'block'

            setTimeout(() => {
            copied1.style.display = 'none';
        }, 1000);
    }
})

answerEl2.addEventListener("click", function () {
    if (hasPasswords === true) {
        let password2 = document.getElementById("answer-2")
        writeClipboardText(password2.textContent)
        async function writeClipboardText(text) {
            try {
                await navigator.clipboard.writeText(text)
            } catch (error) {
                console.error(error.message)
            }
        }

        const copied2 = document.getElementById("copied2")
            copied2.style.display = 'block'

            setTimeout(() => {
            copied2.style.display = 'none';
        }, 1000);
    }
})