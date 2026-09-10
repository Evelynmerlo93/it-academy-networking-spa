import "./jobs.css";
import { createNavbar } from "../components/Navbar";
import { createFooter } from "../components/Footer";
import { createJobCard } from "../components/JobCard";
import { jobs } from "../data/jobs";



export function renderJobsPage() {
  const header = document.querySelector("header");
  header.appendChild(createNavbar());

  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="jobs-page">
      <h1>Borsa de treball</h1>
      <p class="jobs-subtitle">Explora oportunitats laborals adaptades al teu perfil.</p>

      <div class="jobs-filters">
        <input
          type="search"
          id="jobs-search"
          placeholder="Cerca per càrrec o empresa..."
          aria-label="Cerca ofertes"
        />

        <select id="stack-filter" aria-label="Filtra per stack">
          <option value="">Tot el stack</option>
        </select>

        <select id="location-filter" aria-label="Filtra per ubicació">
          <option value="">Totes les ubicacions</option>
        </select>
      </div>

      <div class="jobs-grid" id="jobs-grid"></div>

      <p class="no-results" id="no-results" hidden>
        No s'han trobat ofertes amb aquests filtres.
      </p>
    </section>
  `;

  const footer = document.querySelector("footer");
  footer.appendChild(createFooter()); 

  setupFilters();
}
//CORAZON DE LA BUSQUEDA JOB
function setupFilters() {
  const grid = document.querySelector("#jobs-grid");
  const noResults = document.querySelector("#no-results");
  const searchInput = document.querySelector("#jobs-search");
  const stackFilter = document.querySelector("#stack-filter");
  const locationFilter = document.querySelector("#location-filter");

  populateSelect(stackFilter, getUniqueStacks(jobs));
  populateSelect(locationFilter, getUniqueLocations(jobs));

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const stack = stackFilter.value;
    const location = locationFilter.value;
    
//METODO FILTER 
    const filtered = jobs.filter((job) => {
      const matchesQuery =
        job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query);

      const matchesStack = stack === "" || job.stack.includes(stack);
      const matchesLocation = location === "" || job.location === location;

      return matchesQuery && matchesStack && matchesLocation;
    });

    renderList(filtered);
  }

  function renderList(list) {
    grid.innerHTML = "";
    list.forEach((job) => {
      grid.appendChild(createJobCard(job));
    });
    noResults.hidden = list.length > 0;
  }

  searchInput.addEventListener("input", applyFilters);
  stackFilter.addEventListener("change", applyFilters);
  locationFilter.addEventListener("change", applyFilters);

  renderList(jobs);
}

function getUniqueStacks(list) {
  const all = list.flatMap((job) => job.stack);
  return [...new Set(all)].sort();
}

function getUniqueLocations(list) {
  const all = list.map((job) => job.location);
  return [...new Set(all)].sort();
}

function populateSelect(select, options) {
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}