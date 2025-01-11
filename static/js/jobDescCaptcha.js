let generatedAccountCaptcha;
let generatedDACaptcha;
let generatedNetworkCaptcha;
let generatedSSECaptcha;
let generatedSEngCaptcha;
let generatedUIUXCaptcha;

function generateAccountCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedAccountCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('account-captcha-code').innerText = generatedAccountCaptcha;
}

function validateAccountCaptcha() {
    const userAccountCaptcha = document.getElementById('account-captcha-input').value.trim();
    const errorAccountMessage = document.getElementById('account-captcha-message');

    if (userAccountCaptcha !== generatedAccountCaptcha) {
        errorAccountMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateAccountCaptcha(); // Refresh the CAPTCHA
        document.getElementById('account-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorAccountMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateDACaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedDACaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('da-captcha-code').innerText = generatedDACaptcha;
}

function validateDACaptcha() {
    const userDACaptcha = document.getElementById('da-captcha-input').value.trim();
    const errorDAMessage = document.getElementById('da-captcha-message');

    if (userDACaptcha !== generatedDACaptcha) {
        errorDAMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateAccountCaptcha(); // Refresh the CAPTCHA
        document.getElementById('da-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorDAMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateNetworkCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedNetworkCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('network-captcha-code').innerText = generatedNetworkCaptcha;
}

function validateNetworkCaptcha() {
    const userNetworkCaptcha = document.getElementById('network-captcha-input').value.trim();
    const errorNetworkMessage = document.getElementById('network-captcha-message');

    if (userNetworkCaptcha !== generatedNetworkCaptcha) {
        errorNetworkMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateNetworkCaptcha(); // Refresh the CAPTCHA
        document.getElementById('network-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorNetworkMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateSSECaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedSSECaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('sse-captcha-code').innerText = generatedSSECaptcha;
}

function validateSSECaptcha() {
    const userSSECaptcha = document.getElementById('sse-captcha-input').value.trim();
    const errorSSEMessage = document.getElementById('sse-captcha-message');

    if (userSSECaptcha !== generatedSSECaptcha) {
        errorSSEMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateSSECaptcha(); // Refresh the CAPTCHA
        document.getElementById('sse-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorSSEMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateSEngCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedSEngCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('system-captcha-code').innerText = generatedSEngCaptcha;
}

function validateSSECaptcha() {
    const userSEngCaptcha = document.getElementById('system-captcha-input').value.trim();
    const errorSEngMessage = document.getElementById('system-captcha-message');

    if (userSEngCaptcha !== generatedSEngCaptcha) {
        errorSEngMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateSSECaptcha(); // Refresh the CAPTCHA
        document.getElementById('system-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorSEngMessage.textContent = "";
        return true; // Allow form submission
    }
}

function generateUIUXCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedUIUXCaptcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('ui-ux-captcha-code').innerText = generatedUIUXCaptcha;
}

function validateUIUXCaptcha() {
    const userUIUXCaptcha = document.getElementById('ui-ux-captcha-input').value.trim();
    const errorUIUXMessage = document.getElementById('ui-ux-captcha-message');

    if (userUIUXCaptcha !== generatedUIUXCaptcha) {
        errorUIUXMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        generateUIUXCaptcha(); // Refresh the CAPTCHA
        document.getElementById('ui-ux-captcha-input').value = ""; // Clear the input field
        return false; // Prevent form submission
    } else {
        errorUIUXMessage.textContent = "";
        return true; // Allow form submission
    }
}



document.addEventListener("DOMContentLoaded", generateAccountCaptcha);
document.addEventListener("DOMContentLoaded", generateDACaptcha);
document.addEventListener("DOMContentLoaded", generateNetworkCaptcha);
document.addEventListener("DOMContentLoaded", generateSSECaptcha);
document.addEventListener("DOMContentLoaded", generateSEngCaptcha);
document.addEventListener("DOMContentLoaded", generateUIUXCaptcha);