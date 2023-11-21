var usuarios = [
    { fullName: 'Lucía', apellido: 'Gomez', usuario: 'sgomez@gmail.com', tipoUsuario: 'cliente', contraseña: 'asd123' },
    { fullName: 'María', apellido: 'Lopez', usuario: 'mlopez@gmail.com', tipoUsuario: 'profesional', contraseña: 'asd1234' },
    { fullName: 'Valentin', apellido: 'Russo', usuario: 'vrusso@gmail.com', tipoUsuario: 'administrador', contraseña: 'asd12345' }
];



document.getElementById('sign-in-btn').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Realiza la validación
    var usuario = validarUsuario(email, password);

    // Redirecciona según el tipo de usuario
    if (usuario) {
        redireccionarUsuario(usuario.tipoUsuario);
    } else {
        alert('Credenciales incorrectas');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle-switch');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', this.checked);
    });
});

function validarUsuario(email, password) {
    // Busca el usuario en el array
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === email && usuarios[i].contraseña === password) {
            return usuarios[i];
        }
    }
    return null;
}

function redireccionarUsuario(tipoUsuario) {
    // Redirecciona según el tipo de usuario
    switch (tipoUsuario) {
        case 'cliente':
            window.location.href = 'clientes.html';
            break;
        case 'profesional':
            window.location.href = 'profesionales.html';
            break;
        case 'administrador':
            window.location.href = 'administradores.html';
            break;
        default:
            alert('Tipo de usuario no reconocido');
            break;
    }
}