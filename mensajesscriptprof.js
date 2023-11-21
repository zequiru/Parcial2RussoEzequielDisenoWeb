document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggle-switch');

  toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
  });
});

const gridSystemModal = document.getElementById('gridSystemModal')
if (gridSystemModal) {
    gridSystemModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = gridSystemModal.querySelector('.modal-title')
    const modalBodyInput = gridSystemModal.querySelector('.modal-body input')

    modalTitle.textContent = `Nuevo mensaje para ${recipient}`
    modalBodyInput.value = recipient
  })
}


document.getElementById('enviarBtnUno').addEventListener('click', function() {
  $(this).hide();
  document.getElementById('floatingTextarea').value = '';
  alert('¡Su mensaje será revisado por un moderador!');
});


document.getElementById('enviarBtnDos').addEventListener('click', function() {
  $(this).hide();
  document.getElementById('floatingTextarea').value = '';
  alert('¡Su mensaje será revisado por un moderador!');
});


document.getElementById('enviarBtnTres').addEventListener('click', function() {
  $(this).hide();
  document.getElementById('floatingTextarea').value = '';
  alert('¡Su mensaje será revisado por un moderador!');
});