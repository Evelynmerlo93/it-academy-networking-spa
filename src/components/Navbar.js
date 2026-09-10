import "./Navbar.css";

import iconLupa from "../assets/lupa.svg";
import iconCampana from "../assets/campana.svg";
import iconTuerca from "../assets/tuerca.svg";
import imgAvatar from "../assets/imagenLogueo.png";

//funcion principal
export function createNavbar() {
  const nav = document.createElement("nav");
  nav.className = "navbar"; 

  // Compruebo si estoy en la pagina de empleos
  const currentPage = document.body.dataset.page;

  // Si estoy en jobs uso los ICONOS, si no los BOTONES
  const actionsContent = currentPage === "jobs" 
    ? `
      <div class="navbar-user-menu">
        <button type="button" class="icon-btn" aria-label="Cercar">
          <img src="${iconLupa}" alt="Cercar" class="nav-icon" />
        </button>
        <button type="button" class="icon-btn" aria-label="Notificacions">
          <img src="${iconCampana}" alt="Notificacions" class="nav-icon" />
        </button>
        <button type="button" class="icon-btn" aria-label="Configuracio">
          <img src="${iconTuerca}" alt="Configuracio" class="nav-icon" />
        </button>
        <img src="${imgAvatar}" alt="Perfil" class="user-avatar" />
      </div>
    `
    : `
      <div class="navbar-actions">
        <button type="button" class="btn btn-outline">Apunta't</button>
        <button type="button" class="btn btn-gradient">Com et veuen?</button>
      </div>
    `;

  nav.innerHTML = `
    <a href="index.html" class="navbar-logo" aria-label="Alumni Connect">
      <img src="/src/assets/alumni-connect.png" /> 
      <h1 class="logo-text">Alumni Connect</h1>
    </a> 

    <ul class="navbar-links">
      <li><a href="index.html" data-page="inici">Inici</a></li>
      <li><a href="networking.html" data-page="networking">Xarxa</a></li>
      <li><a href="jobs.html" data-page="jobs">Oportunitats de feina</a></li>
      <li><a href="events.html" data-page="events">Esdeveniments</a></li>
    </ul>

    ${actionsContent}
  `;

  markActiveLink(nav);
  return nav;
}

function markActiveLink(nav) {

  const currentPage = document.body.dataset.page;

  //Buscamos TODOS los a dentro del navbar
  const links = nav.getElementsByTagName("a");

  // Recorremos los enlaces uno por uno
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    
    // Si el data-page del enlace coincide con la pagina actual, le ponemos la clase active
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  }
}