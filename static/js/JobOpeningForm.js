//  JobForm JavaScript
// console.log('File loaded')
// document.getElementById('applyForm').addEventListener('submit', function (event) {
//     if (!this.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//         alert('Please fill all required fields!');
//     }
//     this.classList.add('was-validated');
// });


document.getElementById('applyForm').addEventListener('submit', function (event) {
    let isValid = true;
    const form = event.target;

    const emailField = document.getElementById('email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Check all form fields
    form.querySelectorAll('.form-control').forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('is-invalid');
            input.nextElementSibling.style.display = 'block'; // Show error
        } else {
            input.classList.remove('is-invalid');
            input.nextElementSibling.style.display = 'none'; // Hide error
        }
    });

    // email validation
    if (!emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('is-invalid');
        emailField.nextElementSibling.style.display = 'block';
    } else {
        emailField.classList.remove('is-invalid');
        emailField.nextElementSibling.style.display = 'none';
    }

    // Check checkbox
    const terms = document.getElementById('terms');
    if (!terms.checkValidity()) {
        isValid = false;
        terms.classList.add('is-invalid');
        terms.nextElementSibling.style.display = 'block';
    } else {
        terms.classList.remove('is-invalid');
        terms.nextElementSibling.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault(); // Stop form submission if invalid
    }
});

// Real-time validation on blur
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.checkValidity()) {
            input.classList.add('is-invalid');
            input.nextElementSibling.style.display = 'block';
        } else {
            input.classList.remove('is-invalid');
            input.nextElementSibling.style.display = 'none';
        }
        if (input.id === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('is-invalid');
                input.nextElementSibling.style.display = 'block';
            } else {
                input.classList.remove('is-invalid');
                input.nextElementSibling.style.display = 'none';
            }
        }
    });
});