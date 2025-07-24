 function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
             document.getElementById(id).innerHTML = data;
         })
        .catch(error => console.error(`Error al cargar ${file}:`,
           error));
}
// Cargamos navbar y footer al cargar la página 
 loadComponent("navbar", "navbar.html");
 loadComponent("footer", "footer.html");

 //Otro cacho

 document.addEventListener("DOMContentLoaded", () => {       // Espera a que se cargue todo el DOM
   const habilidades = document.querySelectorAll('.habilidad');  //Selecciona todos los elementos con la clase habilidad

   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
         observer.unobserve(entry.target); // Deja de observar ese elemento
       }
     });
   }, {
     threshold: 0.1 // Aparece cuando el 10% del elemento entra en la vista
   });

   // Empieza a observar cada .habilidad
   habilidades.forEach(habilidad => {
     observer.observe(habilidad);
   });
 });


// //OJOOOOOOOOOOOOOOOOOOOOOOOO AQUI VAN LOS OTROS CODIGOS, EL PRIMERO ES EL NAVBAR

 let hamburguesa = document.getElementById("hamburguesa");

         function mostrar_lista(){
             hamburguesa.style.display = "block";
         }

function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();  // Aquí ejecutamos el código que depende del DOM cargado
        })
        .catch(error => console.error(`Error al cargar ${file}:`, error));
}

// // Carga navbar con callback
// loadComponent("navbar", "navbar.html", () => {
    

//     // Función para mostrar/ocultar la lista
//     function mostrar_lista() {
//         if (hamburguesa.style.display === "block") {
//             hamburguesa.style.display = "none";
//         } else {
//             hamburguesa.style.display = "block";
//         }
//     }

//     // Asignamos el evento al botón de hamburguesa
//     menuToggle.addEventListener("click", mostrar_lista);
// });
// loadComponent("footer", "footer.html");

// document.addEventListener("DOMContentLoaded", () => {       // Espera a que se cargue todo el DOM
//   const habilidades = document.querySelectorAll('.habilidad');  //Selecciona todos los elementos con la clase habilidad

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target); // Deja de observar ese elemento
//       }
//     });
//   }, {
//     threshold: 0.1 // Aparece cuando el 10% del elemento entra en la vista
//   });

//   // Empieza a observar cada .habilidad
//   habilidades.forEach(habilidad => {
//     observer.observe(habilidad);
//   });
// });