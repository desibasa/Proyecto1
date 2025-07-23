
window.addEventListener("load", () => {
  alert("Bienvenid@ en esta pagina puedes hacer una lista de tareas para apuntar tu dia a dia. Prueba a hacer click sobre los postits");
});

let posit = document.getElementById("escribir_posit");

function abrir_posit() {
    posit.style.display = "flex";

}
function listo(){
        posit.style.display = "none";
    }