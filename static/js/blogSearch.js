function searchContent() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let searchableElements = document.querySelectorAll('[data-search]');

    searchableElements.forEach(element => {
      let content = element.innerText.toLowerCase();

      if (content.includes(input)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }