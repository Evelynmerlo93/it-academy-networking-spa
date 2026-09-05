import "./Navbar.css";



export function createNavbar() {
  const nav = document.createElement("nav");
  nav.className = "navbar"; 

  nav.innerHTML = `
    <a href="index.html" class="navbar-logo" aria-label="Alumni Connect">
      <img src="/src/assets/alumni-connect.png"  /> 
      <h1 class="logo-text">Alumni Connect</h1>
    </a> 

    <ul class="navbar-links">
      <li><a href="index.html" data-page="inici">Inici</a></li>
      <li><a href="networking.html" data-page="networking">Xarxa</a></li>
      <li><a href="jobs.html" data-page="jobs">Oportunitats de feina</a></li>
      <li><a href="events.html" data-page="events">Esdeveniments</a></li>
    </ul>

    <div class="navbar-actions">
      <a href="register.html" class="btn btn-outline">Apunta't</a>
      <a href="login.html" class="btn btn-gradient">Com et veuen?</a>
    </div>
  `;

  markActiveLink(nav);
  return nav;
}

function markActiveLink(nav) {
  const currentPage = document.body.dataset.page;
  const links = nav.querySelectorAll("a[data-page]");

  links.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
}