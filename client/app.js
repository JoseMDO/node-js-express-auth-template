fetch('/login/success')
.then(response => response.json())
.then(user => {
    if (user.username) {
        document.getElementById('welcome-message').innerHTML = `<p>Welcome, ${user.username}!</p>`;
    } else if (user.displayName) {
        document.getElementById('welcome-message').innerHTML = `<p>Welcome, ${user.displayName}!</p>`;
    }
})
.catch(error => console.error('Error fetching user information:', error));