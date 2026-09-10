import "./networking.css";
import { createNavbar } from "../components/Navbar";
import { createFooter } from "../components/Footer";
import { createAlumniCard } from "../components/AlumniCard";
import { alumniList } from "../data/alumni";

export function renderNetworkingPage() {
  const header = document.querySelector("header");
  header.appendChild(createNavbar());

  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="networking-page"> 
    
      <div class="networking-search"> 

        <input type="search"
          id="alumni-search"
          placeholder="Busca alumnos..."
          aria-label="Cerca alumnes"
        />

      </div>

      <div class="alumni-grid" id="alumni-grid"></div> 

<!-- Mensaje que se mostrara si no hay coincidencias mediante id no results *-->
      <p class="no-results" id="no-results" hidden>
      No s'han trobat alumnes amb aquest nom.
      </p>

    </section>

  `;

  const footer = document.querySelector("footer");
  footer.appendChild(createFooter());

  //Arranco la logica del buscador y la lista
  setupAlumniGrid();
}

function setupAlumniGrid() {
  const grid = document.querySelector("#alumni-grid");

  const noResults = document.querySelector("#no-results");

  const searchInput = document.querySelector("#alumni-search");

  function renderList(list) {
    grid.innerHTML = "";

    //alumni cada vez que tome un elemento de la lista lo llamara alumni
    list.forEach((alumni) => {
      grid.appendChild(createAlumniCard(alumni));
    });

    // Mostramos u ocultamos el mensaje dependiendo si list tiene 4 alumnos es 4 si no tiene ninguno es 0
    if (list.length === 0) {
      noResults.hidden = false; // Si la lista está vacía, MOSTRAR mensaje
    } else {
      noResults.hidden = true; // Si hay alumnos que mostrar, OCULTO mensaje
    }
  }

  // Escuchador del buscador cuando el usuario escribe SE EJECUTARA
  searchInput.addEventListener("input", () => {
    const textoBuscado = searchInput.value.trim().toLowerCase();

    //Recorro el array original de 4 alumnos, solo el array.
    const filtrados = alumniList.filter((alumni) => {
      const nombre = alumni.name.toLowerCase();
      const rol = alumni.role.toLowerCase();

      // ¿El texto está en el nombre?
      if (nombre.includes(textoBuscado)) {
        return true; // Conservar este alumno
      }
      // ¿El texto está en el rol?
      else if (rol.includes(textoBuscado)) {
        return true; // Conservar este alumno
      }
      // Si no está en ninguno de los dos
      else {
        return false; // Descarto alumno
      }
    });

    //llamo a la fncion renderlist.Se pintaran solo los friltrados.
    renderList(filtrados);
  });

  // Carga inicial: Muestra todos los alumnos al entrar a la pag por primera vez
  renderList(alumniList);
} //
