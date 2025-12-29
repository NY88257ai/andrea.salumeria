/* --------------------------------------------------
   MOBILE NAVIGATION
-------------------------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


/* --------------------------------------------------
   HERO IMAGE CAROUSEL
-------------------------------------------------- */
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

let currentHero = 0;
const heroEl = document.getElementById("hero-visual");

function rotateHero() {
  heroEl.style.backgroundImage = `url('${heroImages[currentHero]}')`;
  heroEl.classList.add("hero-visual--active");

  currentHero = (currentHero + 1) % heroImages.length;

  setTimeout(() => {
    heroEl.classList.remove("hero-visual--active");
  }, 5000);
}

rotateHero();
setInterval(rotateHero, 6000);


/* --------------------------------------------------
   ACCORDION LOGIC
-------------------------------------------------- */
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close all other accordion items
    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) {
        item.classList.remove("open");
        item.style.maxHeight = null;
      }
    });

    // Toggle selected accordion
    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});


/* --------------------------------------------------
   GALLERY HORIZONTAL SCROLL (Smooth)
-------------------------------------------------- */
const galleryTrack = document.querySelector(".gallery-track");

if (galleryTrack) {
  galleryTrack.addEventListener("wheel", (e) => {
    e.preventDefault();
    galleryTrack.scrollLeft += e.deltaY;
  });
}


/* --------------------------------------------------
   SMOOTH SCROLLING FOR INTERNAL LINKS
-------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
