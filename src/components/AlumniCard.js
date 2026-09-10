import "./AlumniCard.css"; 

export function createAlumniCard(alumni) { 
  const article = document.createElement("article");  
  article.className = "alumni-card"; 
  article.dataset.id = String(alumni.id); // Guardo el ID del alumno dentro del propio elemento HTML

  let roleText;
  if (alumni.company) { 
    roleText = `${alumni.role} de ${alumni.company}`; // si la tiene mostrare sus dos infos
  } else {
    roleText = alumni.role; // y si no la tiene solo mostrare su role. 
  }

//Texto y clase para el botón 
  let buttonText;
  let buttonClass;

  if (alumni.isConnected) {
    buttonText = "Message";
    buttonClass = "btn-message";
  } else {
    buttonText = "Connect";
    buttonClass = "btn-connect";
  }

  //Generamos el HTML usando las variables limpias
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

  //Conectamos el evento del boton
  setupConnectButton(article, alumni);

  //Entrego la tarjeta terminada
  return article;
}

function setupConnectButton(article, alumni) {
  const button = article.querySelector(".btn-alumni");

  button.addEventListener("click", () => { 
    
    if (alumni.isConnected === true) {
      alumni.isConnected = false;
    } else {
      alumni.isConnected = true;
    }

    // Actualizamos la apariencia del botón segun el nuevo estado
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