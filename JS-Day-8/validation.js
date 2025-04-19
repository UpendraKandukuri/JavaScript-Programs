const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const male = document.getElementById('male');
const female = document.getElementById('female');

form.addEventListener('submit', formData);

function formData(e) {
    e.preventDefault();

   
    const h5name = document.getElementById('h5name');

    if (name1.value.trim() === '') {
        h5name.innerText = "Name can't be empty";
        h5name.style.color = 'red';
        h5name.classList.remove('hidden');
    } else {
        h5name.classList.add('hidden');
    }

    const h5email = document.getElementById('h5email');

    if (email.value.trim() === '') {
        h5email.innerText = "Email can't be empty";
        h5email.style.color = 'red';
        h5email.classList.remove('hidden');
    } else if (!isValidEmail(email.value)) {
        h5email.innerText = "Provide correct format email";
        h5email.style.color = 'red';
        h5email.classList.remove('hidden');
    } else {
        h5email.classList.add('hidden');
    }


    const h5pass = document.getElementById('h5pass');
    if (password.value.trim() === '') {
        h5pass.innerText = "Password can't be empty";
        h5pass.style.color = 'red';
        h5pass.classList.remove('hidden');
    } else if (password.value.trim().length < 6) {
        h5pass.innerText = "Password must be at least 6 characters";
        h5pass.style.color = 'red';
        h5pass.classList.remove('hidden');
    } else {
        h5pass.classList.add('hidden');
    }

   
    const h5cpass = document.getElementById('h5cpass');
    if (confirmPassword.value.trim() === '') {
        h5cpass.innerText = "Confirm Password can't be empty";
        h5cpass.style.color = 'red';
        h5cpass.classList.remove('hidden');
    } else if (confirmPassword.value !== password.value) {
        h5cpass.innerText = "Passwords do not match";
        h5cpass.style.color = 'red';
        h5cpass.classList.remove('hidden');
    } else {
        h5cpass.classList.add('hidden');
    }


    const h5gender = document.getElementById('h5gender');
    if (!male.checked && !female.checked) {
        h5gender.innerText = "Please select your gender";
        h5gender.style.color = 'red';
        h5gender.classList.remove('hidden');
    } else {
        h5gender.classList.add('hidden');
    }
}

function isValidEmail(email1) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email1);
}
