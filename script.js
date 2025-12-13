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


//HERP COM ANIMAÇÃO 

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(74, 163, 255, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
