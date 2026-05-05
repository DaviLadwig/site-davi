console.log("processo.js carregou");

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".process-pin");
    const track = document.getElementById("processTrack");
    const dots = document.querySelectorAll(".process-pin__progress span");

    if (!section || !track) {
        console.warn("Processo: elementos não encontrados.");
        return;
    }

    const steps = track.querySelectorAll(".process-step");
    const totalSteps = steps.length;

    function updateProcess() {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const start = sectionTop;
        const end = sectionTop + sectionHeight - viewportHeight;

        const scrollY = window.scrollY;

        if (scrollY < start) {
            section.classList.remove("is-fixed", "is-ended");
            track.style.transform = "translateX(0px)";
            setActiveDot(0);
            return;
        }

        if (scrollY >= start && scrollY <= end) {
            section.classList.add("is-fixed");
            section.classList.remove("is-ended");

            const progress = (scrollY - start) / (end - start);

            const maxTranslate = (totalSteps - 1) * window.innerWidth;
            const translateX = progress * maxTranslate;

            track.style.transform = `translateX(-${translateX}px)`;

            const activeIndex = Math.min(
                totalSteps - 1,
                Math.round(progress * (totalSteps - 1))
            );

            setActiveDot(activeIndex);
            return;
        }

        if (scrollY > end) {
            section.classList.remove("is-fixed");
            section.classList.add("is-ended");

            const maxTranslate = (totalSteps - 1) * window.innerWidth;
            track.style.transform = `translateX(-${maxTranslate}px)`;

            setActiveDot(totalSteps - 1);
        }
    }

    function setActiveDot(index) {
        dots.forEach((dot) => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    updateProcess();

    window.addEventListener("scroll", updateProcess, { passive: true });
    window.addEventListener("resize", updateProcess);
});