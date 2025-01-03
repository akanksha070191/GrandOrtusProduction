
const captchaCodeElement = document.querySelector('.captcha-code');
const captchaInput = document.getElementById('captcha-input');
const captchaMessage = document.getElementById('captcha-message');

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }
    captchaCodeElement.textContent = captcha;
    captchaInput.value = '';
    captchaMessage.textContent = '';
}

function validateCaptcha() {
    const userInput = captchaInput.value.trim();
    if (userInput === captchaCodeElement.textContent) {
        captchaMessage.style.color = 'green';
        captchaMessage.textContent = 'CAPTCHA Verified Successfully!';
    } else {
        captchaMessage.style.color = 'red';
        captchaMessage.textContent = 'Incorrect CAPTCHA. Please try again.';
    }
}

// Generate the initial CAPTCHA when the page loads
generateCaptcha();

