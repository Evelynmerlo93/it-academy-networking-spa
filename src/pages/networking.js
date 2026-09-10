import "./networking.css";
import { createNavbar } from "../components/Navbar";
import { createFooter } from "../components/Footer";
import { createAlumniCard } from "../components/AlumniCard";
import { alumniList } from "../data/alumni";

export function renderNetworkingPage() {

  const header = document.querySelector("header"); //  encuéntrame la etiqueta header vacia
  header.appendChild(createNavbar()); //una vez encontrada le meto el contenido de la funcion createnavbar(q es la barra de navegacion con logo, enlaces e iconos)

  const main = document.querySelector("main"); // otra vez encuentro la zona vacia de main y coloco su contenido
//agrupo elementos que van juntos en el html visualmente:
//section class estilos
//div class class estilos por separado
// input type buscador para escribir
// id alumni search el nombre único con el que desp encuentro este campo con document.querySelector("#alumni-search"
 // div class asigna estilos, div id para js pra encontrar caja alumni-grid mas aldeante y meter alumnos(caja)
main.innerHTML = `
    <section class="networking-page"> //
    
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
  
 
  //creo una funcion que recibe un parametro, que es la lista de alumnos
// Función para pintar la lista en pantalla
function renderList(list) {
  grid.innerHTML = ""; //  Limpio la pantalla, sin contenido, llo hago antes de meter tarjetas nuevas

  //forEach dice que por cada elemento de esta lista haz lo que este entre llaves.
  //alumni cada vez q agarre un elemento de la lista lo llamara alumni 
  list.forEach((alumni) => { 
    grid.appendChild(createAlumniCard(alumni)); // Agrego cada tarjeta
  });

  // Mostramos u ocultamos el mensaje dependiendo si list tiene 4 alumnos es 4 si no tiene ninguno es 0 
  if (list.length === 0) {
    noResults.hidden = false; // Si la lista está vacía, MOSTRAR mensaje
  } else {
    noResults.hidden = true;  // Si hay alumnos que mostrar, OCULTO mensaje 
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
      return false; // Descartar este alumno
    }
  });


  //llamo a la fncion renderlist pero solo soy lista filtrada, no copleta. Se pintaran solo los friltrados.
  renderList(filtrados);
});

// Carga inicial: Muestra todos los alumnos al entrar a la página por primera vez
  renderList(alumniList);
} //