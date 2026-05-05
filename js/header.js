
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("portfolioMenuBtn");
    const menu = document.getElementById("portfolioMenu");
    const menuLinks = menu.querySelectorAll("a[href^='#']");

    if (!menuBtn || !menu) return;

    function openMenu() {
        menuBtn.classList.add("is-open");
        menu.classList.add("is-open");
        document.body.classList.add("menu-open");

        menuBtn.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
    }

    function closeMenu() {
        menuBtn.classList.remove("is-open");
        menu.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        menuBtn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
    }

    menuBtn.addEventListener("click", () => {
        const isOpen = menu.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});