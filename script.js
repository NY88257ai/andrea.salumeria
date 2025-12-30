</main>
  
<script>
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

/* ========= HERO ROTATOR ========= */
let heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  "photos/hero/hero3.jpg",
  "photos/hero/hero4.jpg",
  "photos/hero/hero5.jpg",
  "photos/hero/herotray1.jpg",
  "photos/hero/prosciuttodiparma.jpg",
  "photos/hero/wassup.jpg"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(heroImages);

const heroVisual = document.getElementById('hero-visual');
let currentHeroIndex = 0;
const heroDuration = 6000;

function showHeroImage(index) {
  if (!heroVisual || heroImages.length === 0) return;

  heroVisual.style.opacity = 0;

  setTimeout(() => {
    heroVisual.style.backgroundImage = `url("${heroImages[index]}")`;

    requestAnimationFrame(() => {
      heroVisual.classList.add('hero-visual--active');
      heroVisual.style.opacity = 1;
    });
  }, 200);
}

function rotateHero() {
  heroVisual.classList.remove('hero-visual--active');
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  showHeroImage(currentHeroIndex);
}

if (heroImages.length > 0 && heroVisual) {
  showHeroImage(currentHeroIndex);
  setInterval(rotateHero, heroDuration);
}

/* ========= GALLERY CAROUSEL AUTO-SCROLLING SLIDE CAROUSEL ========= */
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
    img.className = "gallery-photo";

    slide.appendChild(img);
    galleryTrack.appendChild(slide);
  });

  let scrollAmount = 0;
  const slideWidth = 260 + 16; // slide width + gap

  function autoScrollCarousel() {
    scrollAmount += slideWidth;

    if (scrollAmount >= galleryTrack.scrollWidth - galleryTrack.clientWidth) {
      scrollAmount = 0; // reset to start
    }

    galleryTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  setInterval(autoScrollCarousel, 2500); // every 2.5 seconds
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
</script>

</body>
</html>
