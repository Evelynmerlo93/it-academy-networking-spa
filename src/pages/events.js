import "./events.css";
import { createNavbar } from "../components/Navbar";
import { createFooter } from "../components/Footer";
import { events } from "../data/events";

export function renderEventsPage() {
  const header = document.querySelector("header");
  header.appendChild(createNavbar());

  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="events-page">
      <h1>Esdeveniments</h1>
      <p class="events-subtitle">Participa en activitats i trobades de la comunitat.</p>

      <div class="events-search">
        <input
          type="search"
          id="events-search"
          placeholder="Cerca per nom o ubicació..."
          aria-label="Cerca esdeveniments"
        />
      </div>

      <div class="events-grid" id="events-grid"></div>

      <p class="no-results" id="no-results" hidden>
        No s'han trobat esdeveniments amb aquest nom.
      </p>
    </section>
  `;

  const footer = document.querySelector("footer");
  footer.appendChild(createFooter());

  setupEventsSearch();
}

function setupEventsSearch() {
  const grid = document.querySelector("#events-grid");
  const noResults = document.querySelector("#no-results");
  const searchInput = document.querySelector("#events-search");

  function renderList(list) {
    grid.innerHTML = list.map(renderEventCard).join("");
    noResults.hidden = list.length > 0;
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = events.filter((item) =>
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
    );

    renderList(filtered);
  });

  renderList(events);
}

function renderEventCard(item) {
  return `
    <article class="event-card" data-id="${item.id}">
      <h3 class="event-title">${item.title}</h3>
      <p class="event-meta">${item.date} · ${item.location}</p>
    </article>
  `;
}