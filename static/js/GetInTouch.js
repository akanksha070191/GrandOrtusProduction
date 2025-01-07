const button = document.getElementById("getQuoteBtn");
const form = document.getElementById("getInTouchForm");

function toggleFormVisibility() {
  if (form.style.opacity === "1") {
    hideForm();
  } else {
    showForm();
  }
}

function showForm() {
  form.style.opacity = "1";
  form.style.pointerEvents = "auto";
}

function hideForm() {
  form.style.opacity = "0";
  form.style.pointerEvents = "none";
}

button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission
  toggleFormVisibility();
});

document.addEventListener("click", (event) => {
  if (!form.contains(event.target) && event.target !== button) {
    hideForm();
  }
});
