import "./BenefitsSection.css"; // cargo los estilos
import { benefits } from "../data/benefits"; // traigo info de benefits

export function createBenefitsSection() { // creo la funcion para poder utilizar

  const section = document.createElement("section"); //Creo la etiqueta HTML <section> en memoria y le asigna la clase "benefits-section".
  section.className = "benefits-section";

  section.innerHTML = `
    <h2 class="benefits-title">Què guanyes en formar-ne part?</h2>

    <div class="benefits-grid">  
  
      ${benefits.map(renderBenefitItem).join("")} 
    </div>
  `;
// map recorre la lista y crear las 4 tarjetas, unico texto con join
// div creo contenedor para las tarjetas .
  return section; // devuelve el elemento ya hecho con las tarjetas que hice
}

function renderBenefitItem(item) { // plantilla de una sola tarjeta. Recibe una ventaja individual (item).
//creo bloque con los datos contretos
return `
    <article class="benefit-item">
      <img src="${item.icon}" alt="${item.alt}" class="benefit-icon-img" />
      <p class="benefit-text">${item.text}</p>
      <a href="register.html" class="benefit-btn ${item.btnClass}">
        Apunta't ja
      </a>
    </article>
    
  `;
}