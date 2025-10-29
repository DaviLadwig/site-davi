const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


//carrossel

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
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu() });

