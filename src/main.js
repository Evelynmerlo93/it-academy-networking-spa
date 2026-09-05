import "./index.css";
import { createNavbar } from "./components/Navbar";
import { createHeroSection } from "./components/HeroSection";
import { createBenefitsSection } from "./components/BenefitsSection";
import { createTestimonialsSection } from "./components/TestimonialsSection";
import { createFooter } from "./components/Footer";

const header = document.querySelector("header");
header.appendChild(createNavbar());

const main = document.querySelector("main");
main.appendChild(createHeroSection());
main.appendChild(createBenefitsSection());
main.appendChild(createTestimonialsSection());

const footer = document.querySelector("footer");
footer.appendChild(createFooter());