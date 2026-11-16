// Small progressive enhancement. The page works fully without it.
// It adds this page's address to the "forward to a venture" WhatsApp messages,
// so the person who receives the message gets a link back to the page.
(function () {
  var page = window.location.origin + window.location.pathname;
  if (!/^https?:/.test(page)) return;
  document.querySelectorAll('a[data-forward]').forEach(function (link) {
    var text =
      'חשבתי עליכם. אנה לובסקי עובדת עם מיזמים רפואיים בדיוק במצב הזה: "' +
      link.getAttribute('data-forward') +
      '"\n' + page + '#match';
    link.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
  });
})();

// "How I work": pins the section while scrolling and reveals one lens per step.
// Without this script, with reduced motion, or on very short screens,
// the section simply shows the final picture and all five lenses.
(function () {
  var sec = document.querySelector('.lens');
  if (!sec || !window.matchMedia || !('requestAnimationFrame' in window)) return;
  var track = sec.querySelector('.lens-track');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  var live = false, queued = false, STEPS = 6;

  function update() {
    queued = false;
    if (!live) return;
    var r = track.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
    var step = Math.min(STEPS - 1, Math.floor(p * STEPS));
    if (sec.getAttribute('data-step') !== String(step)) sec.setAttribute('data-step', step);
  }
  function setup() {
    live = !calm.matches && window.innerHeight >= 640;
    sec.classList.toggle('is-live', live);
    if (!live) sec.removeAttribute('data-step');
    update();
  }
  function onScroll() { if (!queued) { queued = true; window.requestAnimationFrame(update); } }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', setup);
  if (calm.addEventListener) calm.addEventListener('change', setup);
  setup();
})();
