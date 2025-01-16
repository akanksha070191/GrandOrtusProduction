if (window.innerWidth < 768) {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
        el.removeAttribute('data-aos');
    });
}