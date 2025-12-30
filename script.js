console.log("Gallery script is running");

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

/* ========= HERO FADE ROTATOR ========= */
let heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  "photos/hero/hero3.jpg",
  "photos/hero/hero4.jpg",
  "photos/hero/hero5.jpg",
  "photos/hero/herotrya1.jpg",
  "photos/hero/prosciuttodiparma.jpg",
  "photos/hero/wassup.jpg"
];

shuffle(heroImages);

let heroIndex = 0;
const heroEl = document.querySelector(".hero");

function rotateHero() {
  if (!heroEl) return;

  heroEl.classList.add("fade");

  setTimeout(() => {
    heroEl.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    heroEl.classList.remove("fade");

    heroIndex = (heroIndex + 1) % heroImages.length;
  }, 800); // matches fade duration
}

setInterval(rotateHero, 4000);
rotateHero();


/* ========= GALLERY CAROUSEL AUTO-SCROLLING SLIDE CAROUSEL ========= */
/* ========= AUTO-SCROLLING SLIDE CAROUSEL ========= */
console.log("Gallery script is running");

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
} else {
  console.log("ERROR: #gallery-track not found");
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
