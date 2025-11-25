const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


//carrossel

// menu hamburguer
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const overlay = document.getElementById("overlay");

const toggleMenu = () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
};

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Fechar o menu ao clicar em qualquer link
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1224) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  }
});


//ANIMAÇÕES

const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-fade');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120; // quanto antes a animação inicia

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
      reveal.classList.add('reveal'); // ativa o estado CSS
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

//ANIMAÇÃO CARD

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // ativa quando 20% do card aparece
});

cards.forEach(card => {
  observer.observe(card);
});


//SUBMMIT + MODAL

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formsubmit.co/daviladwigdev@gmail.com", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      modal.style.display = "flex";
      form.reset();
    } else {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    }

  } catch (error) {
    alert("Erro de conexão. Tente novamente.");
  }
});

//ANIMAÇÃO AVALIAÇÕES



