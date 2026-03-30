/* ============================================================
   Herzstrahlen – Hauptskript
   ============================================================ */


/* ── FAQ Accordion ── */

document.querySelectorAll('.faq-frage').forEach(button => {
  button.addEventListener('click', () => {
    const offen = button.getAttribute('aria-expanded') === 'true';
    // alle anderen schließen
    document.querySelectorAll('.faq-frage').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.hidden = true;
    });
    // geklickten toggling
    if (!offen) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.hidden = false;
    }
  });
});


const hamburger = document.getElementById('nav-hamburger');
const navbar    = document.getElementById('navbar');

// Menü öffnen / schließen beim Klick auf den Hamburger-Button
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('nav-offen');
});

// Menü automatisch schließen, wenn ein Navigationspunkt angeklickt wird
document.querySelectorAll('#nav-menue a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-offen');
  });
});


/* ── Nav: Scroll-Effekt (Hintergrund dunkler beim Scrollen) ── */

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('gescrollt');
  } else {
    navbar.classList.remove('gescrollt');
  }
});


/* ── Aktiver Menüpunkt per IntersectionObserver ── */

const sektionen = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('#nav-menue a');

const beobachter = new IntersectionObserver((eintraege) => {
  eintraege.forEach(eintrag => {
    if (eintrag.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('aktiv');
        if (link.getAttribute('href') === '#' + eintrag.target.id) {
          link.classList.add('aktiv');
        }
      });
    }
  });
}, { threshold: 0.4 });

sektionen.forEach(s => beobachter.observe(s));
