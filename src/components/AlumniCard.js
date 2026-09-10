//xarxa
import "./AlumniCard.css"; // traigo los estilos 

export function createAlumniCard(alumni) { // creo funcion recibiendo una variable llamada alumni
  const article = document.createElement("article");  // Creo una etiqueta HTML <article> vacía en la memoria del navegador
  article.className = "alumni-card"; // para aplicar estilos
  article.dataset.id = String(alumni.id); // Guardo el ID del alumno dentro del propio elemento HTML

  let roleText;
  if (alumni.company) { // reviso si el alumno tiene company registrada 
    roleText = `${alumni.role} de ${alumni.company}`; // si la tiene mostrare sus dos infos
  } else {
    roleText = alumni.role; // y si no la tiene solo mostrare su role. 
  }

// 2. Texto y clase para el botón (según el estado inicial)
  let buttonText;
  let buttonClass;

  if (alumni.isConnected) {
    buttonText = "Message";
    buttonClass = "btn-message";
  } else {
    buttonText = "Connect";
    buttonClass = "btn-connect";
  }

  // 3. Generamos el HTML usando las variables limpias
  article.innerHTML = `
    <div class="alumni-card-content">
      <img src="${alumni.avatar}" alt="${alumni.name}" class="alumni-avatar" />
      <div class="alumni-info">
        <h3 class="alumni-name">${alumni.name}</h3>
        <p class="alumni-role">${roleText}</p>
        <span class="alumni-location">${alumni.location}</span>
      </div>
    </div>

    <button class="btn-alumni ${buttonClass}">
      ${buttonText}
    </button>
  `;

  // 4. Conectamos el evento del botón
  setupConnectButton(article, alumni);

  //  Entrego la tarjeta terminada
  return article;
}

function setupConnectButton(article, alumni) {
  const button = article.querySelector(".btn-alumni");

  button.addEventListener("click", () => { // cuando haga click lo detectara con addEventListener
    //ya dentro de ese evento hago las verificaciones y los invierto 
    if (alumni.isConnected === true) {
      alumni.isConnected = false;
    } else {
      alumni.isConnected = true;
    }

    // Actualizamos la apariencia del botón según el nuevo estado
    if (alumni.isConnected === true) {
      button.textContent = "Message";
      button.classList.remove("btn-connect");
      button.classList.add("btn-message");
    } else {
      button.textContent = "Connect";
      button.classList.remove("btn-message"); 
      button.classList.add("btn-connect");
    }
  });
}