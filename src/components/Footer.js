import "./Footer.css";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <form class="footer-form" id="newsletter-form">
      <label for="email">Subscriu-te i no et perdis res!</label>
      <div class="input-group">
        <input id="email" type="email" placeholder="El teu email" required />
        <button type="submit">Subscriu-te</button>
      </div>
    </form>

    <nav class="footer-nav">
      <a href="/" class="logo"><span>X</span>LUMNI</a>
      <a href="#sobre">Sobre nosaltres</a>
      <a href="#funcionalitats">Funcionalitats</a>
      <a href="#centre">Centre d'ajuda</a>
      <a href="#contacta">Contacta'ns</a>
      <a href="#faqs">FAQs</a>
      <a href="#oportunitats">Oportunitats laborals</a>
    </nav>

    <hr />

    <section class="footer-bottom">
      <select id="lang-select">
        <option value="ca" selected>Català</option>
        <option value="es">Español</option>
      </select>

      <p>© 2026 Brand, Inc. • Privadesa • Termes d'ús • Mapa del lloc</p>

      <nav class="social-links">
        <a href="#fb" aria-label="Facebook">f</a>
        <a href="#in" aria-label="LinkedIn">in</a>
        <a href="#yt" aria-label="YouTube">&#9654;</a>
      </nav>
    </section>
  `;

  setupNewsletterForm(footer);
  return footer;
}

function setupNewsletterForm(footer) {
  const form = footer.querySelector("#newsletter-form");
  const emailInput = footer.querySelector("#email");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      return;
    }

    console.log("Subscripció simulada per a:", email);
    emailInput.value = "";
    emailInput.setAttribute("placeholder", "Gràcies per subscriure't!");
  });
}