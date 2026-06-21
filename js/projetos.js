document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("projectsSlider");

    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    /*
        Importante:
        No celular/tablet, NÃO controlamos o touch via JS.
        O scroll lateral fica nativo do navegador, muito mais fluido.
    */

    slider.addEventListener("mousedown", (event) => {
        if (window.innerWidth <= 900) return;

        isDown = true;
        slider.classList.add("is-dragging");

        startX = event.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("is-dragging");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("is-dragging");
    });

    slider.addEventListener("mousemove", (event) => {
        if (!isDown) return;

        event.preventDefault();

        const x = event.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.2;

        slider.scrollLeft = scrollLeft - walk;
    });

    slider.querySelectorAll("img").forEach((img) => {
        img.setAttribute("draggable", "false");
    });
});