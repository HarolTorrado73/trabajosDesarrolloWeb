// función para mostrar alertas
function showAlert(message) {
    alert(message);
}

function showModal() {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = '¡Hola! Este es un mensaje dinámico en el modal.';
    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}

// Validación basica del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        showAlert('Por favor, completa todos los campos.');
        return;
    }

    if (username === 'admin' && password === 'admin') {
        showAlert('¡Inicio de sesión exitoso!');
        // Aquí podrías redirigir o hacer algo más
    } else {
        showAlert('Usuario o contraseña incorrectos.');
    }
});

// mnsaje dinamico al cargar la página
window.addEventListener('load', function() {
    console.log('Página cargada completamente.');
    // se podria colocar mas cararcteristicas aca
});