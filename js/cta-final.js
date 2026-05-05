document.addEventListener("DOMContentLoaded", () => {
    const wordEl = document.getElementById("ctaWord");
    if (!wordEl) return;

    const words = ["aqui", "hoje", "agora"];
    let index = 0;

    setInterval(() => {
        wordEl.classList.add("is-changing");

        setTimeout(() => {
            index = (index + 1) % words.length;
            wordEl.textContent = words[index];
            wordEl.classList.remove("is-changing");
        }, 220);
    }, 1800);
});