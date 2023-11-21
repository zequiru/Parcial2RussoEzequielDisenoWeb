document.getElementById('enviarBtn').addEventListener('click', function () {
  // Ocultar el modal
  $('#exampleModal').modal('hide');
  
  // Mostrar la alerta
  alert('Se envió el mensaje correctamente');
  
});

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
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Nuevo mensaje para ${recipient}`
    modalBodyInput.value = recipient
  })
}


