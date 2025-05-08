document.addEventListener('DOMContentLoaded', function() {
    updateAuthLink();
});

// Function to update the authentication link based on login status
function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        console.log('User is logged in:', currentUser);
        authLink.innerHTML = '<i class="fa fa-user-o"></i> Logout';
        authLink.href = '#';
        authLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            alert('You have been logged out successfully!');
            window.location.reload();
        });
        
        // You could also update other elements on the page to show the user is logged in
        // For example, display the user's name somewhere
        // document.getElementById('user-greeting').textContent = 'Hello, ' + currentUser.name;
    } else {
        authLink.innerHTML = '<i class="fa fa-user-o"></i> LogIn';
        authLink.href = 'login.html';
    }
}