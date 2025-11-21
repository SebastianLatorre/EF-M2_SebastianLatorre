document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservationForm');
    const formAlert = document.getElementById('formAlert');

    function showAlert(message, type = 'danger') {
        formAlert.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            formAlert.innerHTML = '';

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value;
            const people = parseInt(document.getElementById('people').value, 10);
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !date || !people || people < 1) {
                showAlert('Por favor completa todos los campos requeridos correctamente.', 'danger');
                return;
            }

            // Mostrar modal de confirmación con resumen
            const modalBody = document.getElementById('confirmModalBody');
            modalBody.innerHTML = `<p>Gracias, <strong>${name}</strong>! Hemos recibido tu reserva para <strong>${people}</strong> persona(s) el <strong>${date}</strong>.</p><p>Te contactaremos al: <strong>${email}</strong>.</p>${
                message ? `<p>Mensaje: ${message}</p>` : ''
            }`;

            const confirmModalEl = document.getElementById('confirmModal');
            const confirmModal = new bootstrap.Modal(confirmModalEl);
            confirmModal.show();

            form.reset();
        });
    }
});
