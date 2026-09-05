import "./networking.css";
import { createNavbar } from "../components/Navbar";
import { createFooter } from "../components/Footer";
import { createAlumniCard } from "../components/AlumniCard";
import { alumniList } from "../data/alumni";

export function renderNetworkingPage() {

  const header = document.querySelector("header"); // Navega por el HTML y encuéntrame la etiqueta header vacia
  header.appendChild(createNavbar()); //una vez encontrada le meto el contenido de la funcion createnavbar(q es la barra de navegacion con logo, enlaces e iconos)

  const main = document.querySelector("main"); // otra vez encuentro la zona vacia de main y coloco su contenido
//agrupo elementos que van juntos en el html visualmente:
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

<!-- Mensaje que se muestra si no hay coincidencias *-->
      <p class="no-results" id="no-results" hidden> 
        No s'han trobat alumnes amb aquest nom.
      </p>

    </section>

  `;
//hidder: msj oculto por primera vez
  const footer = document.querySelector("footer");
  footer.appendChild(createFooter());

//Arranco la lógica del buscador y la lista
  setupAlumniGrid();
}

function setupAlumniGrid() {
  const grid = document.querySelector("#alumni-grid");

  const noResults = document.querySelector("#no-results");

  const searchInput = document.querySelector("#alumni-search");
  
 
  //creo una funcion que recibe un dato, la lista de alumnos
function renderList(list) {
    grid.innerHTML = ""; //1) limpio la pantalla

    list.forEach((alumni) => { //2)recorro con los alumnos
      grid.appendChild(createAlumniCard(alumni)); // 3)meto las tarjetas nuevas
    });

    noResults.hidden = list.length > 0; // ocultar o mostrar el mensaje * // hidden sirve para ocultar o mostrar un elemento en pantalla 
  }

//busqueda , cuando alguien escribe algo:
//.value significa "lo que hay escrito ahí dentro ahora mismo
//searchInput es el campo de texto
//Si el usuario escribió "Jane", searchInput.value sería el texto "Jane".
// trim() quita espacios de mas
//toLowerCase() convierte a minusculas ( asi todos encuentran el mismo resultado)
 
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
//array con los 4 alumnos y con filter recorro
//condicion para saber si se queda  o no el nombredel alumno es 
//recorre ese array con filter , y por cada uno decide si se queda o se descarta.
//por cada elemento del array que estoy recorriendo, lo voy a llamar alumni mientras reviso si se queda o no es los dos querys
    const filtered = alumniList.filter(
        (alumni) =>
        alumni.name.toLowerCase().includes(query) ||alumni.role.toLowerCase().includes(query),
    );

    renderList(filtered);
  });

  renderList(alumniList);
}
