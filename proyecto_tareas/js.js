
window.addEventListener("load", () => {
  alert("Bienvenid@ en esta pagina puedes hacer una lista de tareas para apuntar tu dia a dia. Prueba a hacer click sobre los postits");
});

let posit = document.getElementById("escribir_posit");
let texto = document.getElementById("texto");

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
    console.log("Se hizo clic en el posit");
};

function listo(){
  posit.style.display = "none";
  uno.style.display = "block";
  let contenido = texto.value;

  switch(contador) {
    case 0:
      uno.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      uno.style.display = "block";
      break;
    case 1:
      dos.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      dos.style.display = "block";
      break;
    case 2:
      tres.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      tres.style.display = "block";
      break;
    case 3:
      cuatro.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      cuatro.style.display = "block";
      break;
    case 4:
      cinco.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      cinco.style.display = "block";
      break;
    case 5:
      seis.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      seis.style.display = "block";
      break;
    case 6:
      siete.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      siete.style.display = "block";
      break;
    case 7:
      ocho.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      ocho.style.display = "block";
      break;
    case 8:
      nueve.innerHTML = `<button onclick="abrir_posit()" class="mirar_posit">${contenido}</button>`;
      nueve.style.display = "block";
      break;
  }

  contador++;
  
  if(contador==1){
    alert("¡Muy bien!, ahora prueba a pulsar el posit que esta en el corcho, de esa manera podras mirar tus tareas.");
  }


  contador++;
    if(contador==2){
      dos.style.display = "block";
    }
    else if(contador==3){
      tres.style.display = "block";
    }
    else if(contador==4){
      cuatro.style.display = "block";
    }
    else if(contador==5){
      cinco.style.display = "block";
    }
    else if(contador==6){
      seis.style.display = "block";
    }
    else if(contador==7){
      siete.style.display = "block";
    }
    else if(contador==8){
      ocho.style.display = "block";
    }
    else if(contador==9){
      nueve.style.display = "block";
    }
  if(contador==1){
  alert("¡Muy bien!, ahora prueba a pulsar el posit que esta en el corcho, de esa manera podras mirar tus tareas.");
  }
};



         