/* ===========================
   YASH SHARMA — PORTFOLIO JS
   =========================== */

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower) {
  let mx = 0, my = 0;
  let fx = 0, fy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
}

// ── NAV SCROLL EFFECT ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal-up, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ── SMOOTH ACTIVE NAV LINKS ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ── TYPED EFFECT ON HERO TAG ──
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const original = heroTag.textContent.trim();
  heroTag.textContent = '';
  const dot = document.createElement('span');
  dot.className = 'tag-dot';
  heroTag.appendChild(dot);
  const textNode = document.createTextNode('');
  heroTag.appendChild(textNode);

  let i = 0;
  const text = ' ' + original.replace(/^\s*/, '');
  function typeChar() {
    if (i < text.length) {
      textNode.textContent += text[i];
      i++;
      setTimeout(typeChar, 40);
    }
  }
  setTimeout(typeChar, 600);
}

// ── SKILL PILL HOVER GLOW ──
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    pill.style.color = 'var(--accent-2)';
    pill.style.borderColor = 'rgba(124,106,255,0.5)';
    pill.style.background = 'rgba(124,106,255,0.08)';
  });
  pill.addEventListener('mouseleave', () => {
    pill.style.color = '';
    pill.style.borderColor = '';
    pill.style.background = '';
  });
});

// ── STAGGER PROJECT CARDS ──
document.querySelectorAll('.project-card').forEach((card, i) => {
  if (!card.dataset.delay) {
    card.dataset.delay = i * 80;
  }
});

// ── CONSOLE EASTER EGG ──
console.log('%c👋 Hey there!', 'font-size:20px; font-weight:bold; color:#00d4ff;');
console.log('%cYash Sharma\'s Portfolio', 'font-size:14px; color:#7c6aff;');
console.log('%cFeel free to reach out: yash740180@gmail.com', 'font-size:12px; color:#7a8898;');
