import "./form.css";

export function renderFormPage() {
  return `
    <main class="auth-page"> 
      <div class="auth-card">
        
        <header class="auth-header">
          <h1>Crea un compte</h1>
          <p>Uneix-te a nosaltres per connectar-te i compartir oportunitats!</p>
        </header>

        <form class="auth-form">
          
          <!-- Nombre -->
          <div class="input-with-icon">
            <img src="https://img.icons8.com/ios-glyphs/30/9ca3af/user--v1.png" alt="" class="input-icon" />
            <input type="text" id="first-name" placeholder="Posa el teu nom" required />
          </div>

          <!-- Apellido -->
          <div class="input-with-icon">
            <img src="https://img.icons8.com/ios-glyphs/30/9ca3af/user--v1.png" alt="" class="input-icon" />
            <input type="text" id="last-name" placeholder="Posa el teu cognom" required />
          </div>

          <!-- Email -->
          <div class="input-with-icon">
            <img src="https://img.icons8.com/material-rounded/24/9ca3af/mail.png" alt="" class="input-icon" />
            <input type="email" id="user-email" placeholder="El teu correu electrònic" required />
          </div>

          <!-- Contraseña -->
          <div class="input-with-icon">
            <img src="https://img.icons8.com/material-rounded/24/9ca3af/lock--v1.png" alt="" class="input-icon" />
            <input type="password" id="user-password" placeholder="Crea una contrasenya" required />
          </div>

          <!-- Terminos y condiciones -->
          <div class="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label for="terms">Accepto els Termes i Condicions</label>
          </div>

          <button type="submit" class="btn-primary">Registra't</button>
        </form>

        <div class="divider">
          <span>O</span>
        </div>

        <!-- Botones de redes sociales -->
        <div class="social-buttons">
          <button type="button" class="btn-social btn-apple">
            <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple" class="social-icon" />
            Continua amb Apple
          </button>
          
          <button type="button" class="btn-social btn-google">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" class="social-icon" />
            Continua amb Google
          </button>
          
          <button type="button" class="btn-social btn-facebook">
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" class="social-icon" />
            Continua amb Facebook
          </button>
        </div>

        <footer class="auth-footer">
          <span>Ja t'has registrat?</span>
          <a href="#" class="link-login">Inicia sessió</a>
        </footer>

      </div>
    </main>
  `;
}
