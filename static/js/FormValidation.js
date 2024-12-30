// Name Validation
function validateName() {
  const name = document.getElementById("name");
  const nameError = document.getElementById("name-error");
  const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces allowed

  if (!name.value.trim()) {
    nameError.textContent = "Name is required.";
  } else if (!nameRegex.test(name.value.trim())) {
    nameError.textContent = "Name must only contain alphabets and spaces.";
  } else {
    nameError.textContent = "";
  }
}

// Email Validation
function validateEmail() {
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format

  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
}

// Phone Validation
function validatePhone() {
  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const phoneRegex = /^\d{10}$/; // 10 digits only

  if (!phone.value.trim()) {
    phoneError.textContent = "Phone number is required.";
  } else if (!phoneRegex.test(phone.value.trim())) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
  } else {
    phoneError.textContent = "";
  }
}

// Prevent form submission if there are errors
document.getElementById("contactForm").addEventListener("submit", function(event) {
  validateName();
  validateEmail();
  validatePhone();

  // Check if any error messages exist
  if (document.querySelector(".error-message").textContent) {
    event.preventDefault(); // Prevent form submission if errors exist
  }
});