
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor__dot');
const circle = document.querySelector('.cursor__circle');

window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;

    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
});

const hoverElements = document.querySelectorAll(
    'a, button, input, textarea, select, [data-cursor-hover]'
);

hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

const isMobile = window.matchMedia('(hover: none), (pointer: coarse)').matches;

if (!isMobile) {
    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor__dot');
    const circle = document.querySelector('.cursor__circle');

    window.addEventListener('mousemove', (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;

        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
    });

    const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, select, [data-cursor-hover]'
    );

    hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}
