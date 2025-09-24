/***************************************************
 *   CDA DEMO - Login Usuario + Admin              *
 ***************************************************/

// ================================
//  Credenciales del Administrador
// ================================
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// ================================
//  Datos demo de usuario (simulación)
// ================================
const DEMO_USER_EMAIL = "user@test.com";
const DEMO_USER_PASS  = "user123";
const DEMO_USER_NAME  = "Juan Pérez";

// ================================
//  Login Usuario
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const userLoginForm   = document.getElementById("userLoginForm");
  const userLoginError  = document.getElementById("userLoginError");
  const userAppContainer = document.getElementById("userAppContainer");
  const userLoginContainer = document.getElementById("userLoginContainer");
  const userLogoutBtn   = document.getElementById("userLogoutBtn");
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (userLoginForm) {
    userLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("userEmail").value.trim();
      const pass  = document.getElementById("userPass").value.trim();

      if (email === DEMO_USER_EMAIL && pass === DEMO_USER_PASS) {
        sessionStorage.setItem("userLogged", "true");
        sessionStorage.setItem("userName", DEMO_USER_NAME);
        userLoginContainer.style.display = "none";
        userAppContainer.style.display = "block";
        userNameDisplay.textContent = DEMO_USER_NAME;
      } else {
        userLoginError.textContent = "Correo o contraseña incorrectos";
      }
    });

    userLogoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("userLogged");
      userAppContainer.style.display = "none";
      userLoginContainer.style.display = "block";
    });

    if (sessionStorage.getItem("userLogged") === "true") {
      userLoginContainer.style.display = "none";
      userAppContainer.style.display = "block";
      userNameDisplay.textContent = sessionStorage.getItem("userName");
    }
  }
});

// ================================
//  Login Administrador
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const adminLoginForm  = document.getElementById("adminLoginForm");
  const loginError      = document.getElementById("loginError");
  const dashboardContainer = document.getElementById("dashboardContainer");
  const loginContainer  = document.getElementById("loginContainer");
  const logoutBtn       = document.getElementById("logoutBtn");

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("adminUser").value.trim();
      const pass = document.getElementById("adminPass").value.trim();

      if (user === ADMIN_USER && pass === ADMIN_PASS) {
        sessionStorage.setItem("adminLogged", "true");
        loginContainer.style.display = "none";
        dashboardContainer.style.display = "block";
        loginError.textContent = "";
      } else {
        loginError.textContent = "Usuario o contraseña incorrectos";
      }
    });

    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("adminLogged");
      dashboardContainer.style.display = "none";
      loginContainer.style.display = "block";
    });

    if (sessionStorage.getItem("adminLogged") === "true") {
      loginContainer.style.display = "none";
      dashboardContainer.style.display = "block";
    }
  }
});
