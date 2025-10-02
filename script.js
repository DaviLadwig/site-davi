const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


//carrossel

const slide = document.getElementById('carousel-slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.querySelectorAll('#carousel-slide img');

let index = 0;
const total = images.length;

function showSlide(i) {
  if (i < 0) {
    index = total - 1;
  } else if (i >= total) {
    index = 0;
  }
  slide.style.transform = `translateX(${-index * 100}%)`;
}

function autoSlide() {
  index++;
  showSlide(index);
}

let interval = setInterval(autoSlide, 3000);

next.addEventListener('click', () => {
  index++;
  showSlide(index);
  resetInterval();
});

prev.addEventListener('click', () => {
  index--;
  showSlide(index);
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 3000);
}

//menu hamburguer
const btn = document.getElementById('hamburgerBtn')
const panel = document.getElementById('mobilePanel')
const overlay = document.getElementById('overlay')


function openMenu() {
  btn.classList.add('open')
  panel.classList.add('open')
  overlay.classList.add('show')
}


function closeMenu() {
  btn.classList.remove('open')
  panel.classList.remove('open')
  overlay.classList.remove('show')
}


btn.addEventListener('click', () => {
  if (panel.classList.contains('open')) closeMenu();
  else openMenu();
})


overlay.addEventListener('click', closeMenu)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu() })
