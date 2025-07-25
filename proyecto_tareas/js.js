
window.addEventListener("load", () => {
  alert("Bienvenid@ en esta pagina puedes hacer una lista de tareas para apuntar tu dia a dia. Prueba a hacer click sobre los postits");
});

let posit = document.getElementById("escribir_posit");

let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");

let contador = 0;

function abrir_posit() {
    posit.style.display = "flex";

}

function listo(){
        posit.style.display = "none";
        uno.style.display = "block";
        contador++;
    };

if(contador==1){
  function listo(){
    posit.style.display = "none";
    dos.style.display = "block";
    contador++;
  }
}
         