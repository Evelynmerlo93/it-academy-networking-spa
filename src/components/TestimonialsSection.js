import "./TestimonialsSection.css";
import { testimonials } from "../data/testimonials";

export function createTestimonialsSection() {
  const section = document.createElement("section");
  section.className = "testimonials-section";

  section.innerHTML = `
    <h2 class="testimonials-title">
      "T'ensenyem el que opinen els nostres súper-usuaris!"
    </h2>

    <div class="testimonials-grid" id="testimonials-grid">
      ${testimonials.map(renderTestimonialCard).join("")}
    </div>

    <div class="testimonials-controls">
      <button class="control-btn" id="prev-btn" aria-label="Testimoni anterior">
        &#8592;
      </button>
      <button class="control-btn" id="next-btn" aria-label="Testimoni següent">
        &#8594;
      </button>
    </div>
  `;

  setupCarousel(section);
  return section;
}

function renderTestimonialCard(item) {
  return `
    <article class="testimonial-card" data-id="${item.id}">
      <div class="testimonial-header">
        <img
          src="${item.avatar}"
          alt="${item.name}"
          class="testimonial-avatar"
        />
        <div class="testimonial-info">
          <h3>${item.name}</h3>
          <div class="stars" aria-label="5 de 5 estrelles">★★★★★</div>
        </div>
      </div>
      <p class="testimonial-text">"${item.text}"</p>
    </article>
  `;
}

function setupCarousel(section) {
  let currentIndex = 0;

  const cards = section.querySelectorAll(".testimonial-card");
  const prevBtn = section.querySelector("#prev-btn");
  const nextBtn = section.querySelector("#next-btn");

  function updateVisibleCard() {
    cards.forEach((card, index) => {
      card.classList.toggle("is-active", index === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    updateVisibleCard();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    updateVisibleCard();
  });

  updateVisibleCard();
}