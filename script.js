// Projects Data
const projects = [
  {
    num: "Case Study 01",
    title: "Kathmandu Metropolitan Police Digital Diary",
    blurb: "A robust digital tracking system built to improve transparency and operational efficiency across municipal police departments.",
    tags: ["Next.js", "PostgreSQL", "Public Sector"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HFDTS0PQhjQ5la26PADreCgVC4_LlgnxsEflJcwUSsAFeD5xpUMBMUE7vWZvo3hIFGUjC15Ma6o1gkdDwYlGWw8mhH7VqO8_4YBcZVKjnixJ1FSIH7m8XWRhhq-NpcbfN0gnSW64rl0RWe0FRplX57RDjU4yU_Kxt-YgkdF9JDuJLwNFRV0AXET1QW0hhFZsil63-ew6Wv_boV0qdaRMOikQjuLqNHVyKecAe2OFxmWu5kP1bbdhH9izJA3saAwwg8RZE3u_c1cQ",
    reverse: false,
    deepDive: {
      problem: "Paper-based incident logs across precincts produced inconsistent records, delayed reporting up the chain, and made cross-station audits nearly impossible.",
      architecture: "Next.js App Router frontend, PostgreSQL via Prisma, role-based access control with audit trails, and a write-once incident ledger backed by Postgres triggers.",
      contributions: [
        "Designed the incident intake flow and role hierarchy with 4 ranks of access",
        "Built the offline-tolerant draft system so officers can log on patrol",
        "Shipped the supervisor dashboard with cohort filtering and export",
      ],
      outcomes: [
        "Cut average report turnaround from 36h to under 4h in pilot precincts",
        "Adopted as the digital ledger of record across 3 metropolitan units",
      ],
      stack: ["Next.js 14", "PostgreSQL", "Prisma", "NextAuth", "Tailwind"],
    },
  },
  {
    num: "Case Study 02",
    title: "SwadKhoj — Local Food Discovery",
    blurb: "Connecting food enthusiasts with local hidden gems through a curated, community-driven restaurant discovery experience in Nepal.",
    tags: ["Product Design", "Full Stack", "Consumer App"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvcz83oAM-kPgjC-N9b40Ob-iY7ZQ4y1dcTxLXnNfMtYmaAqxcXvOSQuuW_EDoMR0FIOT2nSBNAHficYLt2KIwiA-cG22DSRilDHVpbSWSBnCmKJJP39mmr33KFVl-EWGSEYGuoQIze1ZbMN5Xo4njRFwHlPl4fYYVEUUHB4nYSOyFJcrMIN-UB7QycAnkfZYWY5Blk_7JkvOUUns_5l4YAPuR8gluptNYCnWqpAiaBlHgW_uGPrMZ_ZFXMl5HhVYIzWKaWav0kdE2",
    reverse: true,
    deepDive: {
      problem: "Generic ratings drown out the small, owner-run kitchens that define Kathmandu's food culture. Discovery defaulted to whoever had the loudest marketing.",
      architecture: "React Native client, Node/Express API, Postgres with PostGIS for geo queries, and a taste-graph recommender weighted on tagged community visits.",
      contributions: [
        "Led end-to-end product design across 4 core flows",
        "Defined the taste-graph schema and the trust score for community reviews",
        "Prototyped the map-first home and validated through 12 user interviews",
      ],
      outcomes: [
        "Closed beta reached 850 active tasters across Kathmandu valley",
        "62% of saved spots came from community curation, not search",
      ],
      stack: ["React Native", "Node", "Express", "PostGIS", "Figma"],
    },
  },
  {
    num: "Case Study 03",
    title: "AI Transaction Monitoring System",
    blurb: "Real-time fraud detection utilizing ensemble machine learning models to secure high-volume financial transactions.",
    tags: ["AI/ML", "Fintech", "Hackathon Winner"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByVSYhapIKzHLQb-VwjjTAYD2fcQfSJY4C9RRtLV9Q7bGkYqRdFSt-lZQiJQcvf8HIZ6g4rW0D92uht9ZeMOTP7Ti83FZ6Gyy4FzzU17mKgyK9DdWXcocKlk_0Sdqs19iP14XqG2Xf94bjUfz8Q44k6OORaY088qXA64JTV7l16uRmKWVmrKEYYjaY5Wp5bSbeainI5-YckS--dcOQm69BVUqantywvITF-z9RSswtxo7DsFYlEWfgWSoY5DPNJLGKRJZIAc9J8nUx",
    reverse: false,
    deepDive: {
      problem: "Rule-based fraud filters were too brittle for emerging digital wallet abuse patterns, generating high false positives and missing coordinated mule activity.",
      architecture: "Streaming pipeline ingesting transactions into a feature store, served by an ensemble of gradient-boosted trees and an autoencoder anomaly model behind a low-latency scoring API.",
      contributions: [
        "Owned the analyst-facing review console — case timelines, evidence, decisions",
        "Engineered the feature pipeline for velocity, peer-graph, and device signals",
        "Tuned the ensemble threshold against an analyst-reviewed labeled set",
      ],
      outcomes: [
        "Reduced false positives by 41% versus the existing rule engine",
        "Awarded 4th Runner-Up at the Global IME Bank AI Hackathon",
      ],
      stack: ["Python", "XGBoost", "Kafka", "FastAPI", "Postgres"],
    },
  },
];

// Render Projects
function renderProjects() {
  const container = document.getElementById("projects-container");

  projects.forEach((project, index) => {
    const slideDirection = index % 2 === 0 ? "slide-from-left" : "slide-from-right";
    const projectHTML = `
      <div class="project-row group ${slideDirection}">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="project-image lg:col-span-7 ${project.reverse ? "order-1 lg:order-2" : ""} aspect-video overflow-hidden rounded-xl bg-surface-container border border-white-5">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
          </div>
          <div class="project-content lg:col-span-5 ${project.reverse ? "order-2 lg:order-1" : ""} space-y-8">
            <div class="space-y-4">
              <span class="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">
                ${project.num}
              </span>
              <h3 class="display text-3xl md:text-2xl leading-tight">${project.title}</h3>
              <p class="text-base text-on-surface-variant leading-relaxed">${project.blurb}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              ${project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
            </div>
            <button class="toggle-deepdive inline-flex items-center gap-2 text-on-surface" data-index="${index}">
              View Technical Deep-Dive
              <span class="material-symbols-outlined transition-transform duration-500" style="font-size:1.125rem;">expand_more</span>
            </button>
          </div>
        </div>

        <div class="deepdive-container" data-index="${index}" style="display: none;">
          <div class="mt-16 border-t border-white-5 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div class="lg:col-span-7 space-y-10">
              <div class="space-y-3">
                <span class="label text-xs">The Problem</span>
                <p class="text-on-surface-variant leading-relaxed">${project.deepDive.problem}</p>
              </div>
              <div class="space-y-3">
                <span class="label text-xs">Architecture</span>
                <p class="text-on-surface-variant leading-relaxed">${project.deepDive.architecture}</p>
              </div>
              <div class="space-y-4">
                <span class="label text-xs">My Contributions</span>
                <ul class="space-y-3">
                  ${project.deepDive.contributions.map(c => `
                    <li class="flex gap-4 text-on-surface-variant leading-relaxed">
                      <span class="text-primary mt-2">—</span>
                      <span>${c}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            <div class="lg:col-span-5 space-y-10">
              <div class="space-y-4">
                <span class="label text-xs">Outcomes</span>
                <div class="space-y-4">
                  ${project.deepDive.outcomes.map(o => `
                    <div class="p-5 rounded-xl bg-surface-container-low border border-white-5">
                      <p class="text-on-surface text-sm leading-relaxed">${o}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="space-y-4">
                <span class="label text-xs">Tech Stack</span>
                <div class="flex flex-wrap gap-2">
                  ${project.deepDive.stack.map(s => `
                    <span class="stack-chip">${s}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += projectHTML;
  });

  // Add event listeners to toggle buttons
  document.querySelectorAll(".toggle-deepdive").forEach(button => {
    button.addEventListener("click", function() {
      const index = this.dataset.index;
      const deepDive = document.querySelector(`.deepdive-container[data-index="${index}"]`);
      const isOpen = deepDive.style.display !== "none";
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        deepDive.classList.add("closing");
        setTimeout(() => {
          deepDive.style.display = "none";
          deepDive.classList.remove("closing");
        }, 550);
        this.setAttribute("aria-expanded", "false");
        this.textContent = "View Technical Deep-Dive";
        this.innerHTML += '<span class="material-symbols-outlined text-base">expand_more</span>';
      } else {
        deepDive.style.display = "block";
        deepDive.classList.add("project-deepdive");
        this.setAttribute("aria-expanded", "true");
        this.textContent = "Hide Technical Deep-Dive";
        this.innerHTML += '<span class="material-symbols-outlined text-base">expand_more</span>';
      }
    });
  });
}

// Scroll animations with Intersection Observer
function observeElements() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add("visible");
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll(
    ".fade-in, .slide-from-left, .slide-from-right, .scale-in, .animate-stagger"
  ).forEach(el => {
    observer.observe(el);
  });

  // Observe About and Contact grid items
  document.querySelectorAll(".animate-items > *").forEach((child, index) => {
    child.classList.add("animate-stagger");
    observer.observe(child);
  });
}

// Scroll-based animation controller for experience items
function setupScrollAnimations() {
  const scrollItems = document.querySelectorAll(".scroll-animate-item");
  const windowHeight = window.innerHeight;

  if (scrollItems.length === 0) return;

  const handleScroll = () => {
    scrollItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemTop = itemRect.top;

      // Trigger at 80% of viewport for all items
      const triggerPoint = windowHeight * 0.8;
      const progress = (triggerPoint - itemTop) / (triggerPoint + itemRect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      if (clampedProgress > 0) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Use passive event listener for better performance
  window.addEventListener("scroll", handleScroll, { passive: true });
  // Run once on load
  handleScroll();
}

// Handle form submission
function setupFormHandler() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById("submitBtn");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="material-symbols-outlined text-lg">hourglass_empty</span> Sending...';

      const formData = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/mrevyrzy', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          submitBtn.innerHTML = '<span class="material-symbols-outlined text-lg">check_circle</span> Message Sent!';
          form.reset();
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }, 3000);
        } else {
          const errorMsg = data.errors ? data.errors.map(e => e.message).join(', ') : 'Failed to send message';
          throw new Error(errorMsg);
        }
      } catch (error) {
        console.error('Form submission error:', error.message);
        submitBtn.innerHTML = '<span class="material-symbols-outlined text-lg">error</span> Error Sending';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 3000);
      }
    });
  }
}

// Mobile menu
function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  if (menu) menu.classList.remove("mobile-menu-open");
  if (menu) menu.classList.add("mobile-menu-hidden");
  if (toggle) toggle.classList.remove("menu-open");
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("mobile-menu-open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      menu.classList.remove("mobile-menu-hidden");
      menu.classList.add("mobile-menu-open");
      toggle.classList.add("menu-open");
    }
  });
}

// Typing animation
function setupTypingAnimation() {
  const el = document.getElementById("typing-word");
  if (!el) return;

  const words = ["intelligent", "purposeful", "impactful", "human-centered"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPING_SPEED   = 80;   // ms per character when typing
  const DELETING_SPEED = 45;   // ms per character when deleting
  const HOLD_DURATION  = 5000; // ms to hold the full word before deleting

  function tick() {
    const current = words[wordIndex];

    if (!isDeleting) {
      // Typing forward
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // Word fully typed — pause before deleting
        isDeleting = true;
        setTimeout(tick, HOLD_DURATION);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      // Deleting
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // Word fully deleted — move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    }
  }

  // Start with the first word already visible, then cycle
  el.textContent = words[0];
  charIndex = words[0].length;
  isDeleting = true;
  setTimeout(tick, HOLD_DURATION);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  observeElements();
  setupScrollAnimations();
  setupFormHandler();
  setupMobileMenu();
  setupTypingAnimation();
});
