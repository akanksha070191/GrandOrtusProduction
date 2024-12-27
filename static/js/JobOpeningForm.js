//  JobForm JavaScript

document.getElementById('applyForm').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert('Please fill all required fields!');
    }
    this.classList.add('was-validated');
});
