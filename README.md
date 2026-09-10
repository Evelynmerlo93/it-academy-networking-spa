
# Alumni Connect

Proyecto web desarrollado para mantener el contacto entre los estudiantes de la IT Academy, visualizar ofertas de empleo y gestionar favoritos de forma persistente.
<img width="143" height="552" alt="image" src="https://github.com/user-attachments/assets/8841589f-d195-4abb-81f5-5b61360ccba3" />

## Estructura del Proyecto
El proyecto está organizado por responsabilidades en carpetas independientes:
- **`data/`**: Contiene los datos simulados (arrays con información de empleos y alumnos).
- **`components/`**: Lógica y funciones reutilizables que generan los elementos visuales (como las tarjetas de trabajo).
- **Archivos HTML**: Estructura limpia basada en Multi-Page Application (`index.html`, `jobs.html`, etc.).
- ![Uploading image.png…]()

## Tecnologías y Características
- JavaScript modular.
- Manipulación del DOM.
- Sistema de favoritos conectado al `localStorage` mediante `JSON.parse` y `JSON.stringify` para que los datos no se pierdan al refrescar la página.
