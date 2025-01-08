// Name Validation
function validateGetName() {
    const name = document.getElementById("getname");
    console.log("Name field value:", name.value.trim());
    const nameError = document.getElementById("getname-error");
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces allowed
  
    if (!name.value.trim()) {
      nameError.textContent = "Name is required.";
      return false;
    } else if (!nameRegex.test(name.value.trim())) {
      nameError.textContent = "Name must only contain alphabets and spaces.";
      return false;
    } else {
      nameError.textContent = "";
      return true;
    }
  }
  
  // Email Validation
  function validateGetEmail() {
    const email = document.getElementById("getemail");
    console.log("Email field value:", email.value.trim());
    const emailError = document.getElementById("getemail-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
  
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      return false;
    } else if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }
  
  // Phone Validation
  function validateGetPhone() {
    const phone = document.getElementById("getphone");
    console.log("Phone field value:", phone.value.trim());
    const phoneError = document.getElementById("getphone-error");
    const phoneRegex = /^\d{10}$/; // 10 digits only
  
    if (!phone.value.trim()) {
      phoneError.textContent = "Phone number is required.";
      return false;
    } else if (!phoneRegex.test(phone.value.trim())) {
      phoneError.textContent = "Phone number must be exactly 10 digits.";
      return false;
    } else {
      phoneError.textContent = "";
      return true;
    }
  }
  
  // Prevent form submission if there are errors
  document.getElementById("getInTouchForm").addEventListener("submit", function(event) {
    console.log("DOM Loaded ")
    console.log("Submit event triggered");
    
    const isNameValid = validateGetName();
    console.log("Name validation result:", isNameValid);
  
    const isEmailValid = validateGetEmail();
    console.log("Email validation result:", isEmailValid);
  
    const isPhoneValid = validateGetPhone();
    console.log("Phone validation result:", isPhoneValid);
  
    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      console.log("Form submission prevented due to validation errors");
      event.preventDefault();
    } else {
      console.log("Form submitted successfully");
    }
  });