/* ========= MOBILE NAV ========= */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ========= FOOTER YEAR ========= */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ========= HERO FADE ROTATOR – Ken Burns ========= */
const heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  "photos/hero/hero3.jpg",
  "photos/hero/hero4.jpg",
  "photos/hero/hero5.jpg",
  "photos/hero/herotray1.jpg",
  "photos/hero/prosciuttodiparma.jpg",
  "photos/hero/wassup.jpg"
];

// Preload all images first
heroImages.forEach(src => { const i = new Image(); i.src = src; });

const heroVisualWrapper = document.querySelector(".hero-visual-wrapper");
let heroIndex = 0;

const kenBurnsVariants = [
  { transformStart: "scale(1.08) translate(-2%, -2%)", transformEnd: "scale(1.0) translate(2%, 2%)" },
  { transformStart: "scale(1.0) translate(2%, 2%)",    transformEnd: "scale(1.08) translate(-2%, -2%)" },
  { transformStart: "scale(1.06) translate(0%, -3%)",  transformEnd: "scale(1.0) translate(0%, 3%)" },
  { transformStart: "scale(1.0) translate(-3%, 0%)",   transformEnd: "scale(1.06) translate(3%, 0%)" },
];

function createLayer(src, index) {
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: absolute; inset: 0; overflow: hidden;
    opacity: 0; transition: opacity 1.5s ease-in-out; z-index: 0;
  `;

  const inner = document.createElement("div");
  const kb = kenBurnsVariants[index % kenBurnsVariants.length];
  inner.style.cssText = `
    position: absolute; inset: -6%;
    background: url('${src}') center/cover no-repeat;
    transform: ${kb.transformStart};
    transition: transform 6s ease-in-out;
  `;

  wrapper.appendChild(inner);
  return { wrapper, inner, kb };
}

if (heroVisualWrapper) {
  // ensure overlay and label sit above the photo layers
  const overlay = heroVisualWrapper.querySelector(".hero-visual-overlay");
  const label = heroVisualWrapper.querySelector(".hero-visual-label");
  if (overlay) overlay.style.zIndex = "1";
  if (label) label.style.zIndex = "2";

  function showNext() {
    const { wrapper, inner, kb } = createLayer(heroImages[heroIndex], heroIndex);
    heroVisualWrapper.insertBefore(wrapper, heroVisualWrapper.firstChild);

    requestAnimationFrame(() => requestAnimationFrame(() => {
      wrapper.style.opacity = "1";
      inner.style.transform = kb.transformEnd;
    }));

    setTimeout(() => {
      const layers = heroVisualWrapper.querySelectorAll(":scope > div[style]");
      layers.forEach((l, i) => {
        if (i < layers.length - 1 && l !== overlay && l !== label) {
          l.style.opacity = "0";
          setTimeout(() => l.remove(), 1500);
        }
      });
    }, 1500);

    heroIndex = (heroIndex + 1) % heroImages.length;
  }

  showNext();
  setInterval(showNext, 5000);
}

/* ========= GALLERY CAROUSEL ========= */
const galleryImages = [
  "photos/gallery/footerhero1.jpg",
  "photos/gallery/footerhero2.jpg",
  "photos/gallery/homemadepestopasta.jpg",
  "photos/gallery/saladtray1.jpg",
  "photos/gallery/tray1.jpg",
  "photos/gallery/tray2.jpg",
  "photos/gallery/tray3.jpg",
  "photos/gallery/tray4.jpg",
  "photos/gallery/tray5.jpg"
];

const galleryTrack = document.getElementById("gallery-track");

if (galleryTrack) {
  galleryImages.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.className = "gallery-photo";

    slide.appendChild(img);
    galleryTrack.appendChild(slide);
  });

  let scrollAmount = 0;
  const slideWidth = 260 + 16;

  function autoScrollCarousel() {
    scrollAmount += slideWidth;

    if (scrollAmount >= galleryTrack.scrollWidth - galleryTrack.clientWidth) {
      scrollAmount = 0;
    }

    galleryTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  setInterval(autoScrollCarousel, 2500);
}

/* ========= ACCORDION MENU ========= */
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach(section => {
      if (section !== content) {
        section.style.maxHeight = null;
        section.classList.remove("open");
      }
    });

    if (content.classList.contains("open")) {
      content.style.maxHeight = null;
      content.classList.remove("open");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
    }
  });
});

/* ========= GOOGLE REVIEW BUTTON ========= */
function openGoogleReview() {
  const reviewUrl = "https://www.google.com/maps/place/Andrea+Salumeria/data=!4m2!3m1!1s0x0:0x61689fe0e35ef8a5?sa=X";
  window.open(reviewUrl, "_blank");
}
