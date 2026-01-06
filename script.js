// CONFIG: Ganti nomor admin di format internasional tanpa tanda plus/spasi, contoh: 6281234567890
const ADMIN_WA_NUMBER = "6281234567890";

document.getElementById('year').textContent = new Date().getFullYear();

/* Simple mobile nav toggle */
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    // very small mobile nav: toggle links visibility
    document.querySelectorAll('.nav a').forEach(a => {
      a.style.display = expanded ? 'none' : 'inline-block';
    });
  });
}

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

/* Reveal on scroll using IntersectionObserver */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Hero parallax subtle effect */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  hero.style.setProperty('--y', `${scrolled * 0.08}px`);
  const preview = document.querySelector('.card-preview');
  if (preview) preview.style.transform = `translateY(${Math.min(scrolled * 0.05, 18)}px)`;
});

/* WhatsApp consultation buttons */
const waBtns = [document.getElementById('wa-consult'), document.getElementById('wa-consult-2')];
waBtns.forEach(b => {
  if (!b) return;
  b.addEventListener('click', () => {
    const msg = encodeURIComponent(
`Halo Admin storyline, saya ingin konsultasi mengenai Undangan Digital. Mohon info katalog dan harga. Terima kasih.`
    );
    window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${msg}`, '_blank');
  });
});

/* Order modal logic */
const orderBtns = document.querySelectorAll('.order-btn');
const modal = document.getElementById('order-modal');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const pkgInput = document.getElementById('pkg');
const themeInput = document.getElementById('theme');

orderBtns.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const p = btn.dataset.package || btn.getAttribute('data-package') || 'Paket';
    const theme = btn.dataset.theme || btn.getAttribute('data-theme') || '';
    if (pkgInput) pkgInput.value = p;
    if (themeInput && theme) themeInput.value = theme;
    openModal();
  });
});

function openModal(){
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalCancel) modalCancel.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

/* Submit form -> open wa with formatted message */
const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const paket = document.getElementById('pkg').value || '[Nama Paket]';
    const theme = document.getElementById('theme').value || '[Kode Tema]';
    const name = document.getElementById('cust-name').value || '[Nama Pemesan]';
    const custPhone = document.getElementById('cust-wp').value || '';
    let msg =
`Halo Admin storyline, saya tertarik untuk memesan Undangan Digital.
Detail Pesanan:
Paket: ${paket}
Kode Desain: ${theme}
Nama Pemesan: ${name}
`;
    if (custPhone) msg += `No. WA Pemesan: ${custPhone}\n`;
    msg += `Mohon informasi langkah selanjutnya untuk pengiriman data dan pembayaran. Terima kasih.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${0895701087915}?text=${encoded}`, '_blank');
    closeModal();
  });
}

/* Carousel logic (simple) */
(function initCarousel(){
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const items = Array.from(track.children);
  let idx = 0;
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');

  function show(i){
    idx = (i + items.length) % items.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }
  if (prev) prev.addEventListener('click', ()=> show(idx -1));
  if (next) next.addEventListener('click', ()=> show(idx +1));
  // auto-rotate
  let auto = setInterval(()=> show(idx+1), 4500);
  track.addEventListener('mouseover', ()=> clearInterval(auto));
  track.addEventListener('mouseout', ()=> auto = setInterval(()=> show(idx+1), 4500));
})();

/* Background music control */
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
if (musicToggle && music) {
  musicToggle.addEventListener('click', async ()=>{
    const playing = musicToggle.getAttribute('aria-pressed') === 'true';
    try {
      if (!playing) {
        await music.play();
        musicToggle.setAttribute('aria-pressed','true');
        musicToggle.classList.add('playing');
      } else {
        music.pause();
        musicToggle.setAttribute('aria-pressed','false');
        musicToggle.classList.remove('playing');
      }
    } catch(err){
      // Autoplay might be blocked; open a prompt modal/notification if needed
      alert('Pemutaran otomatis diblokir oleh browser. Silakan klik tombol play sekali lagi.');
    }
  });
  // pause music on page hide
  document.addEventListener('visibilitychange', ()=> {
    if (document.hidden && !music.paused) music.pause();
  });
}

/* Improve accessibility: focus trap minimal for modal (basic) */
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});