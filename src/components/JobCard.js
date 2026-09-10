import "./JobCard.css"; 

//guardo lista de favoritos 
const FAVORITES_KEY = "xlumni-favorite-jobs";

//FUNCION PRINCIPAL
export function createJobCard(job) {
const article = document.createElement("article"); // le pido al navegador que cree la etiq article nueva y vacia
  article.className = "job-card"; // clase css para estilos
  article.dataset.id = String(job.id); //Asignamos el ID al elemento HTML para que la tarjeta sepa qué oferta representa

//Comprobamos si esta oferta es favorita
const favoriteList = getFavorites();
const isFavorite = favoriteList.includes(job.id); //Con .includes() comprobamos si el ID de esta oferta concreta está dentro de la lista de favoritas. Nos devolverá true (verdadero) o false (falso).

  //Defino el texto del botón según si es enlace externo o no
  let applyLabel ;
  let applyUrl ;
  let targetAttribute ;

  if (job.applyType === "external") {
    applyLabel = "Més informació";
    applyUrl = job.applyUrl;
    targetAttribute = 'target="_blank" rel="noopener noreferrer"';
  } else {
    applyLabel = "Aplica ara";
    applyUrl = "#";
    targetAttribute = "";
  }

  //Defino las clases y etiquetas de accesibilidad
  let buttonClass = "favorite-btn";
  let ariaLabelText = "Afegir a preferides";

  if (isFavorite === true) {
    buttonClass = "favorite-btn is-favorite";
    ariaLabelText = "Treure de preferides";
  }


  article.innerHTML = `
    <div class="job-info">
      <h3 class="job-title">${job.title}</h3>
      <p class="job-company">${job.company} · ${job.location}</p>
      <p class="job-meta">${job.contractType} · ${job.postedAgo}</p>

      <ul class="job-stack">
        ${job.stack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>

      <a href="${applyUrl}" class="btn-apply" ${targetAttribute}>
        ${applyLabel}
      </a>
    </div>

    <div class="job-media">
      <button
        class="${buttonClass}"
        aria-label="${ariaLabelText}"
        aria-pressed="${isFavorite}"
      >
        &#9733;
      </button>
      <img src="${job.image}" alt="${job.title}" class="job-image" />
    </div>
  `;

  setupFavoriteButton(article, job.id);
  
  return article;
}
//ESCUCHA CUANDO ALGUIEN HACE CLICK EN LA ESTRELLA
function setupFavoriteButton(article, jobId) {
  const button = article.querySelector(".favorite-btn");

  button.addEventListener("click", () => {
    let favorites = getFavorites();  
 //pregunto si esta dentro de la libreta?
    if (favorites.includes(jobId)) {
      //Si ya está en favoritos, lo quitamos de la lista con filter
      favorites = favorites.filter(id => id !== jobId);
    } else {
      //Si no está, lo añadimos con push
      favorites.push(jobId);
    }
//actualiza memoria,
    saveFavorites(favorites);
    button.classList.toggle("is-favorite"); // cambio color boton si esta pintado lo despinto 
  });
}
//LEER LA MEMORIA DEL NAVEGADOR
function getFavorites() {
  const data = localStorage.getItem(FAVORITES_KEY); 
  return data ? JSON.parse(data) : [];
}
// GUARDAR EN LA MEMORIA DEL NAVEGADOR
function saveFavorites(ids) { // Convertimos la lista en texto plano
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));// Lo guardamos en el navegador
}