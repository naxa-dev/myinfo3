// ===== DATA FROM data.js =====
const {
  contact: contactData,
  hero: heroData,
  footer: footerData,
  skills: skillsData,
  projects: projectsData,
  timeline: timelineData
} = window.PORTFOLIO_DATA;

// ===== INITIALIZATION FUNCTIONS =====

// Load Hero
function loadHero() {
  document.querySelector('.hero-title').textContent = heroData.title;
  document.querySelector('.hero-subtitle').textContent = heroData.subtitle;
}

// Load Footer
function loadFooter() {
  const socialContainer = document.querySelector('.social-links');
  const footerTagline = document.querySelector('.footer-tagline');
  const footerText = document.querySelector('.footer-text');

  // Tagline
  if (footerTagline) {
    footerTagline.textContent = footerData.tagline;
  }

  // Social Links
  socialContainer.innerHTML = footerData.social.map(link => `
    <a href="${link.url}" target="_blank" class="social-link" aria-label="${link.label}" title="${link.label}">
      <i class="${link.icon}"></i>
    </a>
  `).join('');

  // Footer Text
  footerText.innerHTML = `© ${new Date().getFullYear()} <strong>${footerData.name}</strong> • All Rights Reserved`;
}

// Load Skills
function loadSkills() {
  const container = document.getElementById('skillsContainer');
  container.innerHTML = skillsData.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
      <p class="skill-description">${skill.description}</p>
      <div class="skill-bar">
        <div class="skill-progress" data-progress="${skill.progress}"></div>
      </div>
    </div>
  `).join('');
}

// Load Projects
let currentRotation = 0;
const carousel = document.getElementById('carousel');
const scrollIndicators = document.getElementById('scrollIndicators');
let angleStep = 0;

function loadProjects() {
  angleStep = 360 / projectsData.length;
  carousel.innerHTML = '';
  scrollIndicators.innerHTML = '';
  const isMobile = window.innerWidth <= 768;

  // 모바일용 인디케이터
  if (isMobile) {
    projectsData.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'scroll-dot';
      if (index === 0) dot.classList.add('active');
      scrollIndicators.appendChild(dot);
    });
  }

  projectsData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-index', index);

    if (!isMobile) {
      card.style.transform = `
        translateX(-50%) translateY(-50%)
        rotateY(${angleStep * index}deg)
        translateZ(600px)
      `;
    }

    const frontHTML = `
      <div class="card-face card-front">
        <div class="project-image">
          ${project.image
        ? `<img src="${project.image}" alt="${project.title}">`
        : `<i class="${project.icon}"></i>`
      }
        </div>
        <div class="card-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="tech-tags">
            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    const backHTML = `
      <div class="card-face card-back">
        <h3 class="back-title">${project.title}</h3>

        <div class="project-details">
          ${Object.entries(project.details).map(([key, value]) => `
            <div class="detail-item">
              <i class="fas fa-check-circle"></i>
              <div>
                <strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                <span>${value}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="project-stats">
          ${Object.entries(project.stats).map(([key, value]) => `
            <div class="stat-item">
              <div class="stat-number">${value}</div>
              <div class="stat-label">${key.toUpperCase()}</div>
            </div>
          `).join('')}
        </div>

        <div class="project-details">
          <div class="detail-item" style="margin-bottom: 0.5rem;">
            <i class="fas fa-star"></i>
            <strong>Key Features</strong>
          </div>
          ${project.features.map(feature => `
            <div class="detail-item">
              <i class="fas fa-angle-right"></i>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>

        <div class="project-links">
          ${project.links.github
        ? `<a href="${project.links.github}" target="_blank" class="project-link secondary">
                <i class="fab fa-github"></i> GitHub
              </a>`
        : ''
      }
          ${project.links.demo
        ? `<a href="${project.links.demo}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>`
        : ''
      }
          ${project.links.download
        ? `<a href="${project.links.download}" download class="project-link secondary">
                <i class="fas fa-download"></i> Download
              </a>`
        : ''
      }
        </div>
      </div>
    `;

    card.innerHTML = `<div class="card-inner">${frontHTML}${backHTML}</div>`;

    card.addEventListener('click', function (e) {
      if (!e.target.closest('.project-link')) {
        this.classList.toggle('flipped');
      }
    });

    carousel.appendChild(card);
  });
}

// Load Timeline
function loadTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = timelineData.map(item => `
    <div class="timeline-item" onclick="this.classList.toggle('flipped')">
      <div class="timeline-content">
        <div class="timeline-card-inner">
          <!-- Front -->
          <div class="timeline-card-front">
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-desc">${item.description}</p>
            ${item.download ? `
              <a href="${item.download.url}" download class="timeline-download" onclick="event.stopPropagation()">
                <i class="${item.download.icon}"></i>
                ${item.download.label} 다운로드
              </a>
            ` : ''}
            ${item.details ? `
              <div class="timeline-flip-hint">
                <i class="fas fa-info-circle"></i>
                클릭하여 상세 경력 보기
              </div>
            ` : ''}
          </div>

          <!-- Back -->
          ${item.details ? `
            <div class="timeline-card-back">
              <div class="timeline-date">${item.date}</div>
              <h3 class="timeline-detail-title">
                <i class="fas fa-list-check"></i>
                주요 업무 및 성과
              </h3>
              ${renderDetails(item.details)}
              ${item.download ? `
                <a href="${item.download.url}" download class="timeline-download" onclick="event.stopPropagation()" style="margin-top: 1rem;">
                  <i class="${item.download.icon}"></i>
                  ${item.download.label} 다운로드
                </a>
              ` : ''}
              <div class="timeline-flip-hint" style="margin-top: 1rem;">
                <i class="fas fa-rotate-left"></i>
                클릭하여 돌아가기
              </div>
            </div>
          ` : ''}
        </div>
      </div>
      <div class="timeline-dot"></div>
    </div>
  `).join('');
}

// Helper function to render details (supports both array and object structure)
function renderDetails(details) {
  if (!details || details.length === 0) return '';

  // Check if details is an array of objects with subtitle
  if (typeof details[0] === 'object' && details[0].subtitle) {
    return details.map(section => `
      <div class="timeline-detail-section">
        <h4 class="timeline-detail-subtitle">${section.subtitle}</h4>
        <ul class="timeline-detail-list">
          ${section.items.map(item => `
            <li class="timeline-detail-item">${item}</li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Fallback to simple list for string arrays
  return `
    <ul class="timeline-detail-list">
      ${details.map(detail => `
        <li class="timeline-detail-item">${detail}</li>
      `).join('')}
    </ul>
  `;
}

// ===== CAROUSEL FUNCTIONS =====
function rotateCarousel(direction) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const firstCard = carousel.querySelector('.project-card');
    if (!firstCard) return;
    const scrollAmount = firstCard.offsetWidth + 24;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  } else {
    currentRotation += angleStep * direction;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
  }
}

// Touch/Swipe + Mobile Indicator
(function setupCarouselInput() {
  let touchStartX = 0, touchStartY = 0;
  let touchEndX = 0, touchEndY = 0;
  const swipeThreshold = 50;

  carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  carousel.addEventListener('touchmove', e => {
    const touchMoveX = e.changedTouches[0].screenX;
    const touchMoveY = e.changedTouches[0].screenY;
    const diffX = Math.abs(touchMoveX - touchStartX);
    const diffY = Math.abs(touchMoveY - touchStartY);

    // 데스크탑/태블릿(3D)에서 가로 스와이프만 막기
    if (window.innerWidth > 768 && diffX > diffY) e.preventDefault();
  }, { passive: false });

  carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    const diffX = touchStartX - touchEndX;
    const diffY = Math.abs(touchStartY - touchEndY);

    if (window.innerWidth > 768 && Math.abs(diffX) > diffY) {
      if (diffX > swipeThreshold) rotateCarousel(1);
      if (diffX < -swipeThreshold) rotateCarousel(-1);
    }
  }, { passive: true });

  // 모바일: 스크롤 인디케이터
  carousel.addEventListener('scroll', () => {
    if (window.innerWidth > 768) return;
    const card = carousel.querySelector('.project-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;
    const currentIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));

    document.querySelectorAll('.scroll-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  });
})();

// Keyboard Navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') rotateCarousel(-1);
  if (e.key === 'ArrowRight') rotateCarousel(1);
});

// ===== UTILITY FUNCTIONS =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleNav() {
  document.getElementById('nav').classList.toggle('active');
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const icon = document.querySelector('.theme-toggle i');
  icon.className = document.body.classList.contains('light-theme') ? 'fas fa-sun' : 'fas fa-moon';
}

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('.submit-btn');
  const originalBtnText = submitBtn.innerHTML;

  // 버튼 로딩 상태
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // 성공
      submitBtn.innerHTML = '<i class="fas fa-check"></i> 전송 완료!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.background = '';
      }, 3000);

      alert("메시지가 성공적으로 전송되었습니다! 🚀\n빠른 시일 내에 답변드리겠습니다.");
    } else {
      // 실패 - Formspree 에러 메시지 표시
      const errorData = await response.json();
      let errorMessage = '전송 실패';

      if (errorData.errors) {
        errorMessage = errorData.errors.map(error => error.message).join(", ");
      }

      submitBtn.innerHTML = '<i class="fas fa-times"></i> ' + errorMessage;
      submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.background = '';
      }, 3000);

      alert("메시지 전송에 실패했습니다. 😢\n" + contactData.email + "로 직접 연락 부탁드립니다.");
    }
  } catch (error) {
    // 네트워크 에러
    console.error('Error:', error);
    submitBtn.innerHTML = '<i class="fas fa-times"></i> 전송 실패';
    submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      submitBtn.style.background = '';
    }, 3000);

    alert("메시지 전송에 실패했습니다. 😢\n" + contactData.email + "로 직접 연락 부탁드립니다.");
  }
}

// Scroll Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      if (entry.target.classList.contains('skills-section')) {
        document.querySelectorAll('.skill-progress').forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          setTimeout(() => { bar.style.width = progress + '%'; }, 200);
        });
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('nav').classList.remove('active');
  });
});

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('hidden');
  }, 1500);
});

// Initialize Everything
window.addEventListener('DOMContentLoaded', () => {
  loadHero();
  loadSkills();
  loadProjects();
  loadTimeline();
  loadFooter();

  // Contact form submit handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
});

// 윈도우 리사이즈 시 카루셀 재로드
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    loadProjects();
  }, 250);
});

// Parallax Effect
document.addEventListener('mousemove', e => {
  const moveX = (e.clientX - window.innerWidth / 2) / 50;
  const moveY = (e.clientY - window.innerHeight / 2) / 50;

  document.querySelector('.bg-gradient').style.transform = `translate(${moveX}px, ${moveY}px)`;
});