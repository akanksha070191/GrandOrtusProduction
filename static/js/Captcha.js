let generatedCaptcha;
let generatedGetQuoteCaptcha;
let generatedContactUsCaptcha

function generateCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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

function generateQuoteCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedGetQuoteCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('quote-captcha-code').innerText = generatedGetQuoteCaptcha;
}

function validateQuoteCaptcha() {
    const userQuoteCaptcha = document.getElementById('quote-captcha-input').value.trim();
    const errorQuoteMessage = document.getElementById('quote-captcha-message');

    if (userQuoteCaptcha !== generatedGetQuoteCaptcha) {
        errorQuoteMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateQuoteCaptcha(); // Refresh the CAPTCHA
        document.getElementById('quote-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorQuoteMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateContactUsCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedContactUsCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('contact-captcha-code').innerText = generatedContactUsCaptcha;
}

function validateContactUsCaptcha() {
    const usercontactCaptcha = document.getElementById('contact-captcha-input').value.trim();
    const errorcontactMessage = document.getElementById('contact-captcha-message');

    if (usercontactCaptcha !== generatedContactUsCaptcha) {
        errorMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateContactUsCaptcha(); // Refresh the CAPTCHA
        document.getElementById('contact-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorcontactMessage.textContent = "";
        return true; // Allow form submission
    }
}



// Generate CAPTCHA when the page loads
document.addEventListener("DOMContentLoaded", generateCaptcha);
document.addEventListener("DOMContentLoaded", generateQuoteCaptcha);
document.addEventListener("DOMContentLoaded", generateContactUsCaptcha);