// Smooth Section Navigation & Active Highlight
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.nav-links a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});/* Continuous Learning Layout */
.learning-container {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 50px;
  align-items: start;
}

.learning-header .section-title {
  font-size: 3.2rem;
  line-height: 1.15;
  margin-top: 10px;
}

.learning-header .section-subtitle {
  margin-top: 20px;
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 340px;
}

/* Certificate Cards Grid */
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.cert-card {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cert-card:hover {
  background: rgba(31, 41, 61, 0.85);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.cert-badge-icon {
  font-size: 1.6rem;
  margin-bottom: 20px;
}

/* Ribbon Color Variants from Image */
.badge-green { color: #10b981; }
.badge-white { color: #e5e7eb; }
.badge-pink  { color: #f43f5e; }
.badge-cyan  { color: #06b6d4; }

.cert-card h4 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.35;
  margin-bottom: 15px;
}

.cert-provider {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .learning-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .certificates-grid {
    grid-template-columns: 1fr;
  }
}