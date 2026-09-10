import "./index.css";
import { createNavbar } from "./components/Navbar";
import { createHeroSection } from "./components/HeroSection";
import { createBenefitsSection } from "./components/BenefitsSection";
import { createTestimonialsSection } from "./components/TestimonialsSection";
import { createFooter } from "./components/Footer";
import { renderFormPage } from "./pages/form.js";

const header = document.querySelector("header");
header.appendChild(createNavbar());

const main = document.querySelector("main");
main.appendChild(createHeroSection());
main.appendChild(createBenefitsSection());
main.appendChild(createTestimonialsSection());

const footer = document.querySelector("footer");
footer.appendChild(createFooter());

//Si hacen clic en Apuntat, reemplaza el contenido por el formulario:
document.addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "Apunta't") {
    main.innerHTML = renderFormPage();
  }
});
