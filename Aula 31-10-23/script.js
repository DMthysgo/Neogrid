let x = 5;
let z = 2;
/*
x == 8 // false
x == 5 // true
x == "5" // true
*/

/*
x === 5 // true
x === "5" // false
*/

/*
x != 8 // true
x != 5 // false
*/

/*
x !== 5 // false
x !== "5" // true
x !== 8 // true
*/

/*
x > 8 // false
x < 8 // true
x >= 8 // false
x <= 8 // true
*/

/*
(x < 10 && z > 1) // true
(x == 5 || z == 5) // true
!(x == z) // true
*/

function voto(idade) {
let obrigadoVotar = (idade < 18 && idade > 15) ? "Não é obrigado":"É obrigado"
console.log(obrigadoVotar)
}

document.addEventListener('contextmenu', function (event) {event.preventDefault();});
/*
document.addEventListener('mousedown', function (event) {console.log("Button: " + event.button);});
*/

/*
document.addEventListener('mousedown', function (event) {console.log("Buttons: " + event.buttons);});
*/

/*
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 65) {
        console.log('Tecla "A" foi pressionada.');
    } else if (event.keyCode === 13) {
        console.log('Tecla "Enter" foi pressionada.');
    }
});
*/

/*
*/
document.addEventListener('keydown', function (event) {
    if (event.key === 'a' && event.shiftKey) {
        console.log('Tecla "A" foi pressionada.');
    } else if (event.key === 'Enter') {
        console.log('Tecla "Enter" foi pressionada.');
    }
});