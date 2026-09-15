// data.js is loaded before this script, so experienceData, projectsData, mentoringData are available.

gsap.registerPlugin(ScrollTrigger);

// Render Experience
function renderExperience() {
  const el = document.getElementById('experience-list');
  if (!el) return;
  el.innerHTML = experienceData.map((item, index) => `
    <div class="timeline-item opacity-0 transform translate-y-4" data-index="${index}">
      <h3 class="timeline-title text-xl font-bold text-zinc-900 mb-1">${item.title}</h3>
      <div class="timeline-date text-indigo-600 font-mono text-sm mb-2">${item.date} | ${item.location || 'Remote'}</div>
      <p class="timeline-desc text-zinc-700 text-sm leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

// Render Projects
function renderProjects(filter = "all") {
  const el = document.getElementById('project-list');
  if (!el) return;
  let filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);
  el.innerHTML = filtered.map(item => {
    const isGitHubPersonal = item.category === "personal" && item.url.includes("github");
    const titleToShow = isGitHubPersonal ? `${item.title} <i class="fa-brands fa-github ml-1"></i>` : item.title;
    return `
    <a href="${item.url}" target="_blank" class="project-card relative block group opacity-0 transform translate-y-4">
      
      <!-- Sharp Image Container -->
      <div class="w-full h-72 bg-zinc-200 border-2 border-zinc-900 relative overflow-hidden">
        <img src="${item.img}" alt="${item.imgAlt}" loading="lazy" class="w-full h-full object-cover object-top filter grayscale-0 xl:grayscale xl:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
        
        <!-- Category Tag (Sharp Ribbon) -->
        <div class="absolute top-4 -left-2 bg-indigo-500 text-white text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1 border-2 border-zinc-900 shadow-[2px_2px_0_0_#18181b]">
          ${item.category}
        </div>
      </div>

      <!-- Overlapping Brutalist Content Box -->
      <div class="relative -mt-12 mx-4 bg-white border-2 border-zinc-900 p-6 shadow-[6px_6px_0_0_#18181b] group-hover:shadow-[2px_2px_0_0_#18181b] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 flex flex-col z-10">
        
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-bold text-zinc-900 font-serif">${titleToShow}</h3>
          <div class="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-all border-2 border-zinc-900 flex-shrink-0 ml-4">
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </div>
        </div>
        
        <p class="text-sm text-zinc-700 leading-relaxed mb-4 line-clamp-2">${item.desc}</p>
        
        <!-- Tech Stack -->
        ${item.tech ? `<div class="flex flex-wrap gap-2 pt-4 border-t-2 border-zinc-900 border-dashed mt-auto">
          ${item.tech.map(t => `<span class="text-zinc-900 bg-zinc-100 border border-zinc-900 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5">${t}</span>`).join('')}
        </div>` : ''}

      </div>
    </a>
  `;
  }).join('');

  // Re-trigger GSAP for new items
  animateProjects();
}

// Render Mentoring
function renderMentoring() {
  const el = document.getElementById('mentoring-list');
  if (!el) return;
  el.innerHTML = mentoringData.map(item => `
    <div class="mentoring-card opacity-0 transform translate-y-4 p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl border border-white/10">
      <h3 class="text-lg font-bold text-zinc-900 mb-1">${item.title}</h3>
      <p class="text-sm text-indigo-600 mb-3">${item.role} ${item.date ? `| ${item.date}` : ''}</p>
      <p class="text-sm text-zinc-700">${item.desc}</p>
    </div>
  `).join('');
}

// Filtering setup
function setupProjectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(b => {
      b.classList.remove('active', 'bg-indigo-500', 'text-white', 'shadow-[4px_4px_0_0_#18181b]');
      b.classList.add('bg-white', 'text-zinc-900', 'shadow-[2px_2px_0_0_#18181b]', 'hover:shadow-[4px_4px_0_0_#18181b]', 'hover:-translate-y-0.5');
    });
    this.classList.remove('bg-white', 'text-zinc-900', 'shadow-[2px_2px_0_0_#18181b]', 'hover:shadow-[4px_4px_0_0_#18181b]', 'hover:-translate-y-0.5');
    this.classList.add('active', 'bg-indigo-500', 'text-white', 'shadow-[4px_4px_0_0_#18181b]');
      const cat = this.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

// Active Nav Links
function setupScrollSpy() {
  const sections = document.querySelectorAll('section, header, footer');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id') || 'home';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('text-brand');
      }
    });
  });
}

// Animations
function initAnimations() {

  // Professional Ambient Background Animations
  gsap.to('.ambient-orb', {
    x: 'random(-50, 50)',
    y: 'random(-50, 50)',
    scale: 'random(0.95, 1.05)',
    duration: 'random(20, 30)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 5
  });

  

  // Hero
  gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
  gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power3.out" });
  gsap.from(".hero-cta", { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power3.out" });
  gsap.from(".avatar-container", { opacity: 0, scale: 0.9, duration: 1, delay: 0.4, ease: "power3.out" });

  // About Section
  gsap.utils.toArray(".about-text p").forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      { scrollTrigger: { trigger: ".about", start: "top 80%", toggleActions: "play none none reverse" }, opacity: 1, y: 0, duration: 0.8, delay: i * 0.2 }
    );
  });

  gsap.utils.toArray(".stat-item").forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      { scrollTrigger: { trigger: ".about-stats", start: "top 85%", toggleActions: "play none none reverse" }, opacity: 1, y: 0, duration: 0.6, delay: i * 0.15 }
    );
  });

  // Tech Stack
  gsap.utils.toArray(".tech-item").forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.5, y: 50, rotation: 15 },
      { scrollTrigger: { trigger: "#tech-stack", start: "top 80%", toggleActions: "play none none reverse" }, opacity: 1, scale: 1, y: 0, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: i * 0.1 }
    );
  });

  // Experience
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" },
      opacity: 1, y: 0, duration: 0.6
    });
  });

  // Mentoring
  gsap.utils.toArray('.mentoring-card').forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none reverse" },
      opacity: 1, y: 0, duration: 0.6
    });
  });
}

function animateProjects() {
  // Kill old triggers to avoid duplicates on filter
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger && t.trigger.classList && t.trigger.classList.contains('project-card')) {
      t.kill();
    }
  });

  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: i * 0.05
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupProjectFilter();
  setupScrollSpy();

  // Simulate network loading to show skeleton effect
  setTimeout(() => {
    renderExperience();
    renderProjects();
    renderMentoring();

    // Initialize GSAP scroll animations after DOM is updated
    setTimeout(initAnimations, 100);
  }, 1200);
});