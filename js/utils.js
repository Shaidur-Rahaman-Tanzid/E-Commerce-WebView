function showError(id, message) {
    $('#' + id).text(message).show();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}