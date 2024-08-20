function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded authentication
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
}
