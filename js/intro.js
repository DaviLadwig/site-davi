document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("introSequence");

    if (!intro) return;

    const steps = intro.querySelectorAll(".intro-step");

    document.body.classList.add("intro-running");

    const timeline = [
        { index: 0, duration: 1600 },
        { index: 1, duration: 1050 },
        { index: 2, duration: 1150 },
        { index: 3, duration: 1050 },
        { index: 4, duration: 1200 }
    ];

    let currentDelay = 0;

    timeline.forEach((item) => {
        setTimeout(() => {
            steps.forEach((step) => step.classList.remove("active"));
            steps[item.index].classList.add("active");
        }, currentDelay);

        currentDelay += item.duration;
    });

    setTimeout(() => {
        intro.classList.add("hide");
        document.body.classList.remove("intro-running");
    }, currentDelay);

    setTimeout(() => {
        intro.remove();
    }, currentDelay + 1000);
});
