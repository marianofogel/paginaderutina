const botonmarian = document.getElementById('botonmarian')
const botonmati = document.getElementById('botonmati')

let passwordMarian = "marianito"
let passwordMati = "matulais"
let contadorMarian = 0;
let contadorMati = 0;
const total = 2;


botonmarian.addEventListener("click", () => {

    if (contadorMarian === 1) {
        alert('Ya pusiste la contraseña')
        return;
    }
    let clave = prompt("Pone la contraseña Marian.");

    if (passwordMarian === clave) {
        alert('Contraseña correcta.')
        contadorMarian++;
        console.log(contadorMarian)

    } else {
        alert('Contraseña Incorrecta.')
    }
})

botonmati.addEventListener("click", () => {

    if (contadorMati === 1) {
        alert('Ya pusiste la contraseña')
        return;
    }
    let clave = prompt("Pone la contraseña Marian.");

    if (passwordMati === clave) {
        alert('Contraseña correcta.')
        contadorMati++;
        console.log(contadorMati)

    } else {
        alert('Contraseña Incorrecta.')
    }
})



let fechaActual = new Date();
console.log(fechaActual)

let fechaDeInicio = new Date(2024, 5, 24)
console.log(fechaDeInicio)

let numeroDeDiasTranscurridos = fechaActual - fechaDeInicio
console.log(numeroDeDiasTranscurridos)

let fechaEnDias = numeroDeDiasTranscurridos / (1000 * 60 * 60 * 24)

let fechaRedondeada = Math.trunc(fechaEnDias);
console.log(fechaRedondeada)


let final = 14 //DIAS QUE VAMOS
let diasSinFindes = final;

/*
for (let i = 1; i < final; i++) {
    if ( i % 7 === 0){
        let diasSinFindes = final - 2;
        
    } 
    console.log(diasSinFindes)

}
*/

/*
for (let i = 1; i <= final; i++) {
    // Verifica si el día es un sábado (múltiplo de 7) o un domingo (el día después de un múltiplo de 7)
    if (i % 7 === 0 || (i - 1) % 7 === 0) {
        diasSinFindes--; // Descuenta los fines de semana
    }
}

console.log(diasSinFindes);
*/

/*
if ((final % 7) === 0) {
    let final2 = final - 2;
    console.log(final2)
} else {
    console.log('no suma')
}
*/