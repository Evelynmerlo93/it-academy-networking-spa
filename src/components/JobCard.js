import "./JobCard.css";

const FAVORITES_KEY = "xlumni-favorite-jobs";

export function createJobCard(job) {
  const article = document.createElement("article");
  article.className = "job-card";
  article.dataset.id = String(job.id);

  const isFavorite = getFavorites().includes(job.id);
  const applyLabel = job.applyType === "external" ? "Més informació" : "Aplica ara";

  article.innerHTML = `
    <img src="${job.image}" alt="${job.title}" class="job-image" />

    <button
      class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
      aria-label="${isFavorite ? "Treure de preferides" : "Afegir a preferides"}"
      aria-pressed="${isFavorite}"
    >
      &#9733;
    </button>

    <div class="job-info">
      <h3 class="job-title">${job.title}</h3>
      <p class="job-company">${job.company} · ${job.location}</p>
      <p class="job-meta">${job.contractType} · ${job.postedAgo}</p>

      <ul class="job-stack">
        ${job.stack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>

      <a
        href="${job.applyType === "external" ? job.applyUrl : "#"}"
        class="btn-apply"
        ${job.applyType === "external" ? 'target="_blank" rel="noopener noreferrer"' : ""}
      >
        ${applyLabel}
      </a>
    </div>
  `;

  setupFavoriteButton(article, job.id);
  return article;
}

function setupFavoriteButton(article, jobId) {
  const button = article.querySelector(".favorite-btn");

  button.addEventListener("click", () => {
    const favorites = getFavorites();
    const isCurrentlyFavorite = favorites.includes(jobId);

    const updated = isCurrentlyFavorite
      ? favorites.filter((id) => id !== jobId)
      : [...favorites, jobId];

    saveFavorites(updated);

    button.classList.toggle("is-favorite", !isCurrentlyFavorite);
    button.setAttribute("aria-pressed", String(!isCurrentlyFavorite));
    button.setAttribute(
      "aria-label",
      !isCurrentlyFavorite ? "Treure de preferides" : "Afegir a preferides"
    );
  });
}

function getFavorites() {
  const raw = localStorage.getItem(FAVORITES_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveFavorites(ids) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}