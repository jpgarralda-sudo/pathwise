// Pathwise — efecto de scroll del hero.
// Calcula cuánto se ha recorrido el hero (0 = arriba, 1 = ya ha salido) y lo
// guarda en la variable CSS --p. El CSS la usa para mover las capas:
// la escena se acerca, la palabra baja y los montes se abren hacia los lados.

(function () {
  const hero = document.querySelector('.hero-cine');
  if (!hero) return;

  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pendiente = false;

  function actualizar() {
    pendiente = false;
    if (reducido.matches) {
      hero.style.setProperty('--p', '0');
      return;
    }
    const p = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
    hero.style.setProperty('--p', p.toFixed(4));
  }

  window.addEventListener('scroll', function () {
    if (!pendiente) {
      pendiente = true;
      requestAnimationFrame(actualizar);
    }
  }, { passive: true });

  window.addEventListener('resize', actualizar);
  actualizar();
})();
