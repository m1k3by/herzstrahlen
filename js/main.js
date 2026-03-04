/* ============================================================
   Herzstrahlen – Hauptskript
   ============================================================ */


/* ── Hamburger-Navigation ── */

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
