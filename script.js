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