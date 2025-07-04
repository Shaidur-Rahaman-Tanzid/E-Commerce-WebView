
// Function to update the authentication link based on login status
document.addEventListener('DOMContentLoaded', function() {
    updateAuthLink();
});

function updateAuthLink() {
    const userId = getCurrentUserId();
    const authLink = document.getElementById('store-auth-link');
    // const authLink = document.getElementsByClassName('auth-link');
    if (!authLink) return;
    if (userId) {
        authLink.innerHTML = '<i class="fa fa-user-o"></i> Logout';
        authLink.href = '#';
        authLink.onclick = function (e) {
            e.preventDefault();
            removeCurrentUserId();
            window.location.href = 'login.html?returnUrl=' + encodeURIComponent(window.location.pathname + window.location.search);
        };
    } else {
        authLink.innerHTML = '<i class="fa fa-user-o"></i> LogIn';
        authLink.href = 'login.html?returnUrl=' + encodeURIComponent(window.location.pathname + window.location.search);
        authLink.onclick = null;
    }
}