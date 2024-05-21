// Obtener todos los elementos con la clase "toggleList" y "crearCitaBtn"
var toggleButtons = document.querySelectorAll('.toggleList');
var citaButtons = document.querySelectorAll('.crearCitaBtn');

// Iterar sobre cada botón y agregar un evento de clic
toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Obtener el contenedor asociado al botón actual
    var container = this.parentNode.nextElementSibling;

    // Alternar la visibilidad del contenedor
    if (container.style.display === 'none' || container.style.display === '') {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
});

// Función para mostrar el formulario de cita
function showCitaForm() {
  var fecha = prompt("Introduce la fecha de la cita (YYYY-MM-DD):");
  var hora = prompt("Introduce la hora de la cita (HH:MM):");
  var cita = "Fecha: " + fecha + "\nHora: " + hora;
  alert("Cita creada:\n" + cita);
}

function getUsername() {
  const inputUsuario = document.getElementById("inputUsuario");
  return inputUsuario.value;
}

window.onload = function () {
  // Obtener el nombre de usuario introducido
  const username = getUsername();

  // Mostrar el nombre de usuario en la esquina superior derecha
  const usuariofoto = document.getElementById("usuariofoto");
  usuariofoto.alt = username; // Asignar el nombre de usuario como atributo alt
};

