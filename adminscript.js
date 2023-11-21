document.getElementById('enviarBtn1').addEventListener('click', function () {
  // Ocultar el modal
  $('#exampleModal1').modal('hide');
  
  // Mostrar la alerta
  alert('Se creo el usuario exitosamente');
  
});

document.getElementById('enviarBtn').addEventListener('click', function () {
  // Ocultar el modal
  $('#exampleModal').modal('hide');
  
  // Mostrar la alerta
  alert('Se actualizó el usuario exitosamente');
  
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggle-switch');

  toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
  });
});

document.querySelectorAll('.btn-eliminar').forEach(function (button) {
  button.addEventListener('click', function () {
      // Encuentra el elemento padre de la tarjeta y ocúltalo
      var card = this.closest('.card');
      if (card) {
          card.style.display = 'none';
          alert('Se eliminó el usuario exitosamente');
      }
  });
});

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('nombre')
    const modalTitle = exampleModal.querySelector('.modal-title')
    const nombre = button.getAttribute('nombre')
    const apellido = button.getAttribute('apellido')
    const correo = button.getAttribute('correo')
    const telefono = button.getAttribute('telefono')
    const especialidad = button.getAttribute('terapia')
    const tarifa = button.getAttribute('tarifa')
    const edad = button.getAttribute('edad')
    const domicilio = button.getAttribute('domicilio')
    const horario = button.getAttribute('horario')
    const descripcion = button.getAttribute('descripcion')

    const modalBodyNombre = exampleModal.querySelector('#nombre')
    const modalBodyApellido = exampleModal.querySelector('#apellido')
    const modalBodyCorreo = exampleModal.querySelector('#correo')
    const modalBodyTelefono = exampleModal.querySelector('#telefono')
    const modalBodyEspecialidad = exampleModal.querySelector('#terapia')
    const modalBodyTarifa = exampleModal.querySelector('#tarifa')
    const modalBodyEdad = exampleModal.querySelector('#edad')
    const modalBodyHorario = exampleModal.querySelector('#horario')
    const modalBodyDomicilio = exampleModal.querySelector('#domicilio')
    const modalBodyDescripcion = exampleModal.querySelector('#descripcion')

    modalTitle.textContent = 'Modifica el perfil'
    modalBodyNombre.value = nombre
    modalBodyApellido.value = apellido
    modalBodyCorreo.value = correo
    modalBodyTelefono.value = telefono
    modalBodyEspecialidad.value = especialidad
    modalBodyTarifa.value = tarifa
    modalBodyEdad.value =edad
    modalBodyDomicilio.value =domicilio
    modalBodyHorario.value =horario
    modalBodyDescripcion.value =descripcion
  })
}



