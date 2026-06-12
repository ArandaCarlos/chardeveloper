(function () {
  'use strict';

  /* ── PROJECTS DATA ── */
  const projects = {
    hardx: {
      num: 'CASO 01',
      name: 'Hardex',
      desc: 'Marketplace de compra y venta de hardware usado en Argentina. Sistema de cotización automática y panel de administración.',
      tags: ['Next.js', 'Supabase', 'MercadoPago', 'IA'],
      link: 'https://hardex.com.ar',
      images: [
        { type: 'img', src: 'images/hardex/hardex1.png' },
        { type: 'img', src: 'images/hardex/hardex2.png' },
        { type: 'img', src: 'images/hardex/hardex3.png' },
        { type: 'img', src: 'images/hardex/hardex4.png' },
      ]
    },
    presupuestosya: {
      num: 'CASO 03',
      name: 'Presupuestos Ya',
      desc: 'Creador de presupuestos profesionales en 60 segundos. Ideal para freelancers, agencias y profesionales de oficio. Link público, firma digital y suscripciones automatizadas.',
      tags: ['React', 'Node.js', 'Supabase', 'n8n', 'OpenAI'],
      link: 'https://presupuestosya.app',
      images: [
        { type: 'img', src: 'images/prespuestosya/pya1.png' },
        { type: 'img', src: 'images/prespuestosya/pya2.png' },
        { type: 'img', src: 'images/prespuestosya/pya3.png' },
        { type: 'img', src: 'images/prespuestosya/pya4.png' },
      ]
    },
    cody: {
      num: 'CASO 02',
      name: 'Cody',
      desc: 'Agente de WhatsApp con OpenAI y n8n. Atiende consultas, califica leads y agenda reuniones en cal.com de forma autónoma. Funciona 24/7 sin intervención humana.',
      tags: ['OpenAI API', 'n8n', 'WhatsApp', 'Chatwoot', 'Cal.com'],
      link: '#',
      images: [
        { type: 'img', src: 'images/cody/cody1.png' },
        { type: 'img', src: 'images/cody/cody2.png' },
      ]
    },
    fitbox: {
      num: 'CASO 01',
      name: 'Fitbox',
      desc: 'Ecommerce de suplementos con motor de precios automático conectado a cotización del dólar, cálculo de márgenes e impuestos, y recuperación de carritos abandonados.',
      tags: ['WooCommerce', 'JavaScript', 'Node.js', 'OpenAI'],
      link: 'https://www.fitbox.ar/',
      images: [
        { type: 'img', src: 'images/fitbox/fitbox1.png' },
        { type: 'img', src: 'images/fitbox/fitbox2.png' },
        { type: 'img', src: 'images/fitbox/fitbox3.png' },
        { type: 'img', src: 'images/fitbox/fitbox4.png' },
      ]
    },
    chambea: {
      num: 'CASO 04',
      name: 'Chambea',
      desc: 'Plataforma de empleo para trabajadores de oficio. Perfiles profesionales, búsqueda y contacto directo por WhatsApp sin registro.',
      tags: ['React', 'Supabase', 'OpenAI'],
      link: 'https://www.chambea.com.ar/',
      images: [
        { type: 'img', src: 'images/chambea/chambea1.png' },
        { type: 'img', src: 'images/chambea/chambea2.png' },
        { type: 'img', src: 'images/chambea/chambea3.png' },
        { type: 'img', src: 'images/chambea/chambea4.png' },
      ]
    }
  };

  let curSlide = 0;
  let totalSlides = 0;

  function openModal(id) {
    const p = projects[id];
    if (!p) return;
    document.getElementById('modalN').textContent = p.num;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;
    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');
    const linkEl = document.getElementById('modalLink');
    linkEl.href = p.link;
    linkEl.style.opacity = p.link === '#' ? '.4' : '1';
    linkEl.style.pointerEvents = p.link === '#' ? 'none' : 'all';
    if (p.link === '#') linkEl.textContent = 'Próximamente';

    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');
    track.innerHTML = '';
    dots.innerHTML = '';
    totalSlides = p.images.length;
    p.images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      if (img.type === 'img') {
        slide.innerHTML = `<img src="${img.src}" alt="${p.name} screenshot ${i + 1}" loading="lazy">`;
      }
      track.appendChild(slide);
      const dot = document.createElement('div');
      dot.className = 'sdot' + (i === 0 ? ' on' : '');
      dot.onclick = (e) => { e.stopPropagation(); goSlide(i); };
      dots.appendChild(dot);
    });
    curSlide = 0;
    track.style.transform = 'translateX(0)';

    document.getElementById('modalBd').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if (e && e.target !== document.getElementById('modalBd') && !e.target.closest('.modal-close')) return;
    document.getElementById('modalBd').classList.remove('open');
    document.body.style.overflow = '';
  }

  function goSlide(n) {
    curSlide = (n + totalSlides) % totalSlides;
    document.getElementById('sliderTrack').style.transform = `translateX(-${curSlide * 100}%)`;
    document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('on', i === curSlide));
  }

  function slide(dir) { goSlide(curSlide + dir); }

  document.addEventListener('keydown', e => {
    if (!document.getElementById('modalBd').classList.contains('open')) return;
    if (e.key === 'Escape') { closeModal(); }
    if (e.key === 'ArrowLeft') slide(-1);
    if (e.key === 'ArrowRight') slide(1);
  });

  window.openModal = openModal;
  window.closeModal = closeModal;
  window.slide = slide;
  window.goSlide = goSlide;

  /* ── INTERACTIVE STACK TABS ── */
  const tabs = document.querySelectorAll('.stack-tab');
  const previews = document.querySelectorAll('.stack-preview-item');
  let autoRotateTimer = null;
  let currentTabIndex = 0;

  function activateTab(tabName) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    previews.forEach(p => p.classList.toggle('active', p.dataset.preview === tabName));
    // Update index
    tabs.forEach((t, i) => { if (t.dataset.tab === tabName) currentTabIndex = i; });
  }

  function autoRotate() {
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    activateTab(tabs[currentTabIndex].dataset.tab);
  }

  function startAutoRotate() {
    stopAutoRotate();
    autoRotateTimer = setInterval(autoRotate, 4000);
  }

  function stopAutoRotate() {
    if (autoRotateTimer) clearInterval(autoRotateTimer);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab);
      stopAutoRotate();
      // Restart after 8 seconds of inactivity
      setTimeout(startAutoRotate, 8000);
    });
  });

  // Start auto-rotation
  if (tabs.length > 0) startAutoRotate();

  // Pause on hover
  const stackPreview = document.querySelector('.stack-preview');
  if (stackPreview) {
    stackPreview.addEventListener('mouseenter', stopAutoRotate);
    stackPreview.addEventListener('mouseleave', startAutoRotate);
  }

  /* ── SCROLL REVEAL ── */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  /* ── NAV ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 60), { passive: true });

  /* ── BURGER ── */
  const brgr = document.getElementById('brgr');
  const mob = document.getElementById('mob');
  brgr.addEventListener('click', () => {
    const o = mob.classList.toggle('open');
    brgr.setAttribute('aria-expanded', String(o));
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ── TEXT SCRAMBLE on hover for headings ── */
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  document.querySelectorAll('.case-name').forEach(el => {
    el.dataset.orig = el.textContent;
    el.addEventListener('mouseenter', () => {
      if (el.scrambleInterval) clearInterval(el.scrambleInterval);
      const orig = el.dataset.orig;
      let iter = 0;
      el.scrambleInterval = setInterval(() => {
        el.textContent = orig.split('').map((c, i) => {
          if (i < iter) return orig[i];
          if (c === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        if (iter >= orig.length) {
          clearInterval(el.scrambleInterval);
          el.textContent = orig;
        }
        iter += 1.5;
      }, 28);
    });
  });

  /* ── FORM HANDLING ── */
  const cform = document.getElementById('contactForm');
  if (cform) {
    cform.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = cform.querySelector('.btn');
      const prevText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      const formData = new FormData(cform);

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await res.json();

        if (res.ok) {
          cform.innerHTML = '<div style="text-align:center; padding:2rem 0;"><h3 style="margin-bottom:0.5rem;">¡Mensaje enviado!</h3><p style="color:var(--text-secondary);">Recibí tu consulta. En breve me pongo en contacto.</p></div>';
        } else {
          alert('Error: ' + result.message);
          btn.textContent = prevText;
          btn.disabled = false;
        }
      } catch (err) {
        alert('Algo salió mal. Por favor, intentá de nuevo o escribime directo a WhatsApp.');
        btn.textContent = prevText;
        btn.disabled = false;
      }
    });
  }

})();
