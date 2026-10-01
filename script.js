const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details').forEach(other => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = document.getElementById('service').value;
  const vehicle = document.getElementById('vehicle').value.trim();
  const problem = document.getElementById('problem').value.trim();

  let message = 'Olá Auto Center Max! Gostaria de solicitar um orçamento.%0A%0A';
  message += '*Serviço:* ' + encodeURIComponent(service) + '%0A';
  message += '*Veículo:* ' + encodeURIComponent(vehicle) + '%0A';
  if (problem) message += '*Problema relatado:* ' + encodeURIComponent(problem) + '%0A';
  message += '%0APode me orientar sobre o atendimento?';

  window.open('https://wa.me/5562998230185?text=' + message, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
