import "./BenefitsSection.css"; 
import { benefits } from "../data/benefits"; 

export function createBenefitsSection() { 

  const section = document.createElement("section"); 
  section.className = "benefits-section";

  section.innerHTML = `
    <h2 class="benefits-title">Què guanyes en formar-ne part?</h2>

    <div class="benefits-grid">  
  
      ${benefits.map(renderBenefitItem).join("")} 
    </div>
  `;
// map recorre la lista y crear las 4 tarjetas, unico texto con join

  return section; 
}

function renderBenefitItem(item) { 
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