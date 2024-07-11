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
    let clave = prompt("Pone la contraseña Mati.");

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

const semanas = Math.trunc(fechaRedondeada / 7);
const findes = semanas * 2
const diasSinFindes = fechaRedondeada - findes;
console.log(diasSinFindes);

let elementoConElNumero = document.getElementById('diasEstudiando');
elementoConElNumero.textContent = diasSinFindes




document.addEventListener('DOMContentLoaded', () => {
    let tablaActual = null;

    function crearTabla() {

        //    let botonesMeses = document.getElementsByClassName('.btn')
        let body = document.getElementsByTagName('body')[0]; //OBTENER LA REFERENCIA DEL ELEMETNO BODY => necesitamos que tome el pri
        let botonesMeses = document.querySelectorAll(".btn")

        botonesMeses.forEach(boton => {
            boton.addEventListener('click', () => {
                //ESTABLECE EL LIMITE SEGUN EL BOTON CLICKEADO:
                let limite;
                if (boton.id === "31") {
                    limite = 31
                } else {
                    limite = 30
                }

                //elimina la tabla que hay puesta
                if (tablaActual) {
                    tablaActual.remove();
                }


                //CREAMOS UNA NUEVA TABLA:
                let tabla = document.createElement('table'); //CREA LA TABLA
                let tblbody = document.createElement('tbody');
                let contador = 1;



                for (let i = 1; i <= 5; i++) {
                    let hilera = document.createElement('tr');

                    for (let j = 1; j <= 7; j++) {

                        if (contador <= limite) {
                            let celda = document.createElement('td');
                            let textoCelda = document.createTextNode(contador);
                            celda.appendChild(textoCelda)
                            hilera.appendChild(celda)
                            contador++;
                        }
                    }
                    tblbody.appendChild(hilera) //AGREGA LA HILERA AL FINAL DE LA TABLA 
                }
                tabla.appendChild(tblbody) //POSICIONA EL ELEMENTO TBODY ABAJO DEL ELEMENTO TABLE
                body.appendChild(tabla)
                tabla.setAttribute('border', '2')//MODOFICA EL ATRIBUTO BORDER DE LA TABLA Y LO PONE EN 2


                tablaActual = tabla;
            });
        });
    }

    crearTabla();
});

