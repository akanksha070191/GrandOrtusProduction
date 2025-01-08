const button = document.getElementById("getQuoteBtn");
const formContainer = document.getElementById("formContainer");

 
function showForm() {
  formContainer.style.display = "flex";  
  document.body.classList.add("no-scroll");  
}


function hideForm() {
  formContainer.style.display = "none";  
  document.body.classList.remove("no-scroll");  
}


button.addEventListener("click", (event) => {
  event.stopPropagation(); 
  showForm();
});


formContainer.addEventListener("click", (event) => {
  if (event.target === formContainer) {
    hideForm(); 
  }
});
