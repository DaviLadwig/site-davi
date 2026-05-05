document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const statsSection = document.querySelector(".stats-premium");

    if (!counters.length || !statsSection) return;

    let hasAnimated = false;

    function animateCounter(counter) {
        const target = Number(counter.dataset.target);
        const duration = 1800; // duração em ms
        const startTime = performance.now();

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            const currentValue = Math.floor(easedProgress * target);

            counter.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                counters.forEach((counter) => {
                    counter.textContent = "0";
                    animateCounter(counter);
                });

                hasAnimated = true;
                observer.unobserve(statsSection);
            }
        });
    }, {
        threshold: 0.35
    });

    observer.observe(statsSection);
});