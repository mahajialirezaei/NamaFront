
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const twofaCheckbox = document.getElementById('twofaCheckboxSignup');
const twofaDemo = document.getElementById('twofaDemoSignup');

tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});
tabSignup.addEventListener('click', () => {
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

if (twofaCheckbox) {
    twofaCheckbox.addEventListener('change', (e) => {
        twofaDemo.style.display = e.target.checked ? 'block' : 'none';
    });
}