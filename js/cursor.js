const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor__dot");
const circle = document.querySelector(".cursor__circle");

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

// pega posição do mouse
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // dot acompanha instantâneo
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

// animação suave do círculo (efeito lag)
function animate() {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;

    circle.style.left = circleX + "px";
    circle.style.top = circleY + "px";

    requestAnimationFrame(animate);
}

animate();

const hoverItems = document.querySelectorAll("a, button, .hover-target");

hoverItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});