let generatedCaptcha;

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('captcha-code').innerText = generatedCaptcha;
}

function validateCaptcha() {
    const userCaptcha = document.getElementById('captcha-input').value.trim();
    const errorMessage = document.getElementById('captcha-message');

    if (userCaptcha !== generatedCaptcha) {
        errorMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateCaptcha(); // Refresh the CAPTCHA
        document.getElementById('captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorMessage.textContent = "";
        return true; // Allow form submission
    }
}

// Generate CAPTCHA when the page loads
document.addEventListener("DOMContentLoaded", generateCaptcha);