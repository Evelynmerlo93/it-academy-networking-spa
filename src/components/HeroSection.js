import "./HeroSection.css";

export function createHeroSection() {
  const section = document.createElement("section");
  section.className = "hero";

  section.innerHTML = `
    <h1>Benvingut, Alumni</h1>
    <p>Connectant i empoderant la nostra comunitat global d'alumnes</p>
    <div class="hero-buttons">
      <button id="join-btn">Uneix-te</button>
      <button id="learn-more-btn" class="btn-outline-hero">Mira que fem</button>
    </div>
    <img src="/VIDEO.png" alt="Video reunio de grup" />
  `;

  return section;
}