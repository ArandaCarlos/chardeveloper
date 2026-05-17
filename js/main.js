(function () {
  'use strict';

  /* ── PROJECTS DATA ── */
  const projects = {
    hardx: {
      num: '// PROYECTO 01',
      name: 'Hardex',
      desc: 'Marketplace de compra y venta de hardware usado en Argentina. Cuenta con un sistema de cotización automática, donde ingresás los datos de tu hardware y recibís un rango de precio estimado al momento. Sin esperas ni mensajes previos. Ademas cuenta con un panel de administración para gestionar publicaciones, usuarios y transacciones de forma eficiente.',
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
      num: '// PROYECTO 02',
      name: 'Presupuestos Ya',
      desc: 'Creador de presupuestos profesionales en 60 segundos. Ideal para freelancers, agencias, profesionales de oficio y cualquier persona que necesite generar presupuestos online claros y atractivos sin perder tiempo. Ingresás los detalles del proyecto y obtenés un presupuesto listo para enviar por link o pdf a tu cliente en menos de un minuto.',
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
      num: '// PROYECTO 03',
      name: 'Cody',
      desc: 'Agente de WhatsApp construido con OpenAI API y n8n. Atiende consultas, califica leads según criterios definidos y agenda reuniones en cal.com de forma autónoma. Funciona 24/7 sin intervención humana. Hoy está activo para Char.Developer y puede adaptarse a cualquier negocio.',
      tags: ['OpenAI API', 'n8n', 'WhatsApp', 'Chatwoot', 'Cal.com'],
      link: '#',
      images: [
        { type: 'img', src: 'images/cody/cody1.png' },
        { type: 'img', src: 'images/cody/cody2.png' },
      ]
    },
    fitbox: {
      num: '// PROYECTO 04',
      name: 'Fitbox',
      desc: 'Ecommerce de suplementos nutricionales con un sistema de armado de cajas fit personalizado. Generación de rutinas personalizadas que llega al mail al completar un formulario y un sistema de suscripción para las personas que compran una caja todos los meses.',
      tags: ['Woocomerce', 'JavaScript', 'Node.js', 'OpenAI'],
      link: 'https://www.fitbox.ar/',
      images: [
        { type: 'img', src: 'images/fitbox/fitbox1.png' },
        { type: 'img', src: 'images/fitbox/fitbox2.png' },
        { type: 'img', src: 'images/fitbox/fitbox3.png' },
        { type: 'img', src: 'images/fitbox/fitbox4.png' },
      ]
    },
    chambea: {
      num: '// PROYECTO 05',
      name: 'Chambea',
      desc: 'Plataforma de empleo para trabajadores de oficio (plomeros, gasistas, electricistas, etc). Los usuarios pueden crear un perfil profesional, listar sus habilidades y experiencia, y funciona como una guia de paginas amarillas donde se pueden encontrar servicios de calidad.',
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

    // build slider
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
      } else {
        slide.innerHTML = `<div class="slide-placeholder"><span>${img.label}</span></div>`;
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

  // keyboard close + arrow nav
  document.addEventListener('keydown', e => {
    if (!document.getElementById('modalBd').classList.contains('open')) return;
    if (e.key === 'Escape') { document.getElementById('modalBd').classList.remove('open'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') slide(-1);
    if (e.key === 'ArrowRight') slide(1);
  });

  window.openModal = openModal;
  window.closeModal = closeModal;
  window.slide = slide;
  window.goSlide = goSlide;

  /* ── ACCORDION ── */
  function toggleCard(btn) {
    const card = btn.closest('.mcard');
    const wasOpen = card.classList.contains('open');
    document.querySelectorAll('.mcard.open').forEach(c => c.classList.remove('open'));
    if (!wasOpen) card.classList.add('open');
  }
  window.toggleCard = toggleCard;
  // open first by default
  const firstCard = document.querySelector('.mcard');
  if (firstCard) firstCard.classList.add('open');

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

  /* ── HERO PARALLAX ── */
  const mascot = document.getElementById('mascot');
  window.addEventListener('mousemove', e => {
    const dx = (e.clientX / innerWidth - .5);
    const dy = (e.clientY / innerHeight - .5);
    if (mascot) mascot.style.transform = `translateY(${-14 + dy * 8}px) translateX(${dx * 6}px)`;
  }, { passive: true });

  /* ── TEXT SCRAMBLE on hover for headings ── */
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  document.querySelectorAll('.svc-name').forEach(el => {
    // Save original text once on load
    el.dataset.orig = el.textContent;
    
    el.addEventListener('mouseenter', () => {
      // Clear any running interval for this specific element
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
          el.textContent = orig; // Ensure perfectly restored text
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
      const btn = cform.querySelector('.btn-submit');
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
          cform.innerHTML = '<div style="text-align:center; padding:2rem 0;"><h3 style="color:var(--c); margin-bottom:1rem;">¡Mensaje enviado!</h3><p style="color:var(--g);">Recibí tu consulta. En breve me pongo en contacto con vos.</p></div>';
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