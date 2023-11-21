document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggle-switch');

  toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
  });
});

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    // const recipient = button.getAttribute('fullName')
    // const modalTitle = exampleModal.querySelector('.modal-title')
    const fullName = button.getAttribute('fullName')
    const terapia = button.getAttribute('terapia')
    const edad = button.getAttribute('edad')
    const correo = button.getAttribute('correo')
    const domicilio = button.getAttribute('domicilio')
    const telefono = button.getAttribute('telefono')
    const horarioDisponible = button.getAttribute('horarioDisponible')
    const valorHora = button.getAttribute('valorHora')

    const modalFullName = exampleModal.querySelector('#fullName')
    const modalTerapia = exampleModal.querySelector('#terapia')
    const modalEdad = exampleModal.querySelector('#edad')
    const modalCorreo = exampleModal.querySelector('#correo')
    const modalDomicilio = exampleModal.querySelector('#domicilio')
    const modalTelefono = exampleModal.querySelector('#telefono')
    const modalHorarioDisponible = exampleModal.querySelector('#horarioDisponible')
    const modalValorHora = exampleModal.querySelector('#valorHora')

    modalFullName.value = fullName
    modalTerapia.value = terapia
    modalEdad.value = edad
    modalCorreo.value = correo
    modalDomicilio.value = domicilio
    modalTelefono.value = telefono
    modalHorarioDisponible.value = horarioDisponible
    modalValorHora.value = valorHora
  })
}


document.getElementById('botonEnviar').addEventListener('click', function() {
  $(".fade").hide()
  $(".modal").hide()
  document.getElementById('message-text').value = '';
 alert('perfil modificado')
 window.location.href = 'profesionales.html';

});

