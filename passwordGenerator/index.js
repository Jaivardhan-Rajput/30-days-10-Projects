
const characters = {
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    symbols: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
    words:[ "grass", "shy", "rabbit", "pencil", "fruit", "pear", "bus", "galaxy", "hut", "apartment", 
            "brave", "apartment", "marker", "seed", "proud", "earth", "marker", "cloud", "seed", "sing" ]
    }


const generateBtn = document.getElementById("generate-btn");

let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let password3 = document.getElementById("password-3");

let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let special = document.getElementById("special-symbols");
let words = document.getElementById("words");
let includeAll = document.getElementById("include-all");


let charactersPool = [];




function characterPool() {
    password1.textContent = "";
    password2.textContent = "";
    password3.textContent = "";

    if (uppercase.checked) {
        charactersPool = charactersPool.concat(characters.uppercase);
        console.log(charactersPool);
    }
    if (lowercase.checked) {
        charactersPool = charactersPool.concat(characters.lowercase);
        console.log(charactersPool);
    }
    if (numbers.checked) {
        charactersPool = charactersPool.concat(characters.numbers);
        console.log(charactersPool);
    }
    if (special.checked) {
        charactersPool = charactersPool.concat(characters.symbols);
        console.log(charactersPool);
    }
    if(words.checked){
        charactersPool = charactersPool.concat(characters.words);
        console.log(charactersPool);
    }
    if (includeAll.checked && charactersPool.length == 0) {
        charactersPool = charactersPool.concat(characters.uppercase).concat(characters.lowercase).concat(characters.numbers).concat(characters.symbols).concat(characters.words);
        console.log(charactersPool);
    }
    
    if(!uppercase.checked && !lowercase.checked && !special.checked && !includeAll.checked && !words.checked){
        password1.textContent = "Please Select your requirements";
    }
}

function generatePassword(){
    charactersPool.length = 0;
    characterPool();
    if(uppercase.checked || lowercase.checked || special.checked || includeAll.checked || words.checked){
        for (let i = 0; i < 8; i++) {
            let randomIndex = Math.floor(Math.random() * charactersPool.length);
            password1.textContent += charactersPool[randomIndex];
        }
        for (let i = 0; i < 12; i++) {
            let randomIndex = Math.floor(Math.random() * charactersPool.length);
            password2.textContent += charactersPool[randomIndex];
        }
        for (let i = 0; i < 16; i++) {
            let randomIndex = Math.floor(Math.random() * charactersPool.length);
            password3.textContent += charactersPool[randomIndex];
        }
    
    }
}






// let checkUppercase = uppercase.checked;
// let checkLowercase = lowercase.checked;
// let checkNumbers = numbers.checked;
// let checkSymbols = special.checked;

// function generatePassword() {
//     password1.textContent = ""
//     password2.textContent = ""

//     if (uppercase.checked && !lowercase.checked) {


//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((characters.uppercase).length) - 1);
//             console.log(randomIndex)

//             password1.textContent += characters.uppercase[randomIndex];

//         }
//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((characters.uppercase).length) - 1);
//             console.log(randomIndex)
//             password2.textContent += characters.uppercase[randomIndex];

//         }


//     }


//     else if (uppercase.checked && lowercase.checked && !numbers.checked) {
//         let letters = characters.uppercase.concat(characters.lowercase)

//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password1.textContent += letters[randomIndex];

//         }
//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password2.textContent += letters[randomIndex];

//         }
//     }
//     else if (uppercase.checked && lowercase.checked && numbers.checked && !special.checked) {
//         let letters = characters.uppercase.concat(characters.lowercase).concat(characters.numbers);
//         console.log(letters)

//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password1.textContent += letters[randomIndex];

//         }
//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password2.textContent += letters[randomIndex];

//         }
//     }
//     else if (uppercase.checked && lowercase.checked && numbers.checked && special.checked && !includeAll.checked) {
//         let letters = characters.uppercase.concat(characters.lowercase).concat(characters.numbers).concat(characters.symbols);
//         console.log(letters)

//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password1.textContent += letters[randomIndex];

//         }
//         for (let i = 0; i < 15; i++) {
//             let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//             console.log(randomIndex)

//             password2.textContent += letters[randomIndex];

//         }
//     }
//     else if (includeAll.checked) {

//         if (!checkUppercase && !checkLowercase && !checkNumbers && !checkSymbols) {
//             let letters = characters.uppercase.concat(characters.lowercase).concat(characters.numbers).concat(characters.symbols);
//             console.log(letters);

//             for (let i = 0; i < 15; i++) {
//                 let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//                 console.log(randomIndex)

//                 password1.textContent += letters[randomIndex];

//             }
//             for (let i = 0; i < 15; i++) {
//                 let randomIndex = Math.ceil(Math.random() * ((letters).length) - 1);
//                 console.log(randomIndex)

//                 password2.textContent += letters[randomIndex];

//             }
//         }

//     }
//     else{
//         console.log("Select Your Requirements")
//     }
// }


