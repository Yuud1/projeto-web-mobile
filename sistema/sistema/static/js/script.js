document.addEventListener('DOMContentLoaded', function() {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const formBox = document.getElementById('form-box');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.innerText = 'Cadastro';
        formBox.style.height = 'auto';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.innerText = 'Login';
        formBox.style.height = 'auto';
    });
});
