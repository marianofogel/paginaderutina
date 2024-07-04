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
   
   