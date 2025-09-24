<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CDA - Panel del Usuario</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;}
    body{display:flex;min-height:100vh;background:#f0f2f5;}
/***************************************************
 *   CDA DEMO - Dashboard Login & Gestión Básica   *
 ***************************************************/

// ================================
//  Credenciales del Administrador
// ================================
const ADMIN_USER = "admin";      // <-- Cambia aquí el usuario si lo deseas
const ADMIN_PASS = "admin123";   // <-- Cambia aquí la contraseña si lo deseas

// ================================
//  Lógica de Login y Sesión
// ================================
document.addEventListener("DOMContentLoaded", function () {

  // Captura de elementos del DOM
  const loginForm        = document.getElementById("adminLoginForm");
  const loginError       = document.getElementById("loginError");
  const dashboardSection = document.getElementById("dashboardContainer");
  const loginSection     = document.getElementById("loginContainer");
  const logoutBtn        = document.getElementById("logoutBtn");

  // ------------------------------
  //  Evento de inicio de sesión
  // ------------------------------
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("adminUser").value.trim();
    const pass = document.getElementById("adminPass").value.trim();

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      // Guardar sesión en el navegador
      sessionStorage.setItem("adminLogged", "true");

      // Mostrar dashboard y ocultar login
      loginSection.style.display = "none";
      dashboardSection.style.display = "block";
      loginError.textContent = "";
    } else {
      loginError.textContent = "❌ Usuario o contraseña incorrectos";
    }
  });

  // ------------------------------
  //  Evento de cierre de sesión
  // ------------------------------
  logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("adminLogged");
    dashboardSection.style.display = "none";
    loginSection.style.display = "block";
  });

  // ------------------------------
  //  Mantener sesión si ya está logueado
  // ------------------------------
  if (sessionStorage.getItem("adminLogged") === "true") {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
  }
});
    /* ===== SIDEBAR ===== */
    .sidebar{
      width:260px;
      background:#002D72;
      color:#fff;
      display:flex;
      flex-direction:column;
      position:fixed;
      height:100%;
      padding:20px 0;
      box-shadow:2px 0 8px rgba(0,0,0,0.2);
    }
    .profile{
      text-align:center;
      padding:20px;
      border-bottom:1px solid rgba(255,255,255,0.2);
    }
    .profile img{
      width:80px;
      height:80px;
      border-radius:50%;
      margin-bottom:10px;
      border:3px solid #00E0FF;
    }
    .profile h3{font-weight:600;margin-bottom:5px;}
    .profile p{font-size:0.9rem;opacity:0.8;}

    .menu{
      margin-top:20px;
      list-style:none;
    }
    .menu li a{
      display:flex;
      align-items:center;
      padding:14px 20px;
      color:#fff;
      text-decoration:none;
      font-size:1rem;
      border-left:4px solid transparent;
      transition:0.3s;
    }
    .menu li a i{
      margin-right:15px;
      font-size:1.3rem;
      width:25px;
      text-align:center;
    }
    .menu li a:hover,
    .menu li a.active{
      background:#00E0FF;
      color:#002D72;
      border-left:4px solid #fff;
    }

    /* ===== CONTENT ===== */
    .content{
      margin-left:260px;
      padding:30px;
      width:100%;
    }
    header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:25px;
    }
    header h1{color:#002D72;font-size:1.8rem;}
    .cards{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:20px;
      margin-top:20px;
    }
    .card{
      background:#fff;
      padding:25px;
      border-radius:12px;
      text-align:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.1);
      cursor:pointer;
      transition:0.3s;
    }
    .card:hover{
      transform:translateY(-5px);
      box-shadow:0 8px 18px rgba(0,0,0,0.2);
    }
    .card i{
      font-size:2rem;
      color:#002D72;
      margin-bottom:12px;
    }
    .card h3{margin-bottom:8px;color:#002D72;font-size:1.2rem;}
    .card p{font-size:0.9rem;color:#555;}

    section{display:none;}
    section.active{display:block;}

    /* Responsive */
    @media(max-width:768px){
      .sidebar{width:70px;}
      .profile h3,.profile p{display:none;}
      .menu li a span{display:none;}
      .menu li a{justify-content:center;}
      .content{margin-left:70px;}
    }
  </style>
</head>
<body>

<!-- ===== Sidebar ===== -->
<div class="sidebar">
  <div class="profile">
    <img src="https://i.pravatar.cc/80" alt="Usuario">
    <h3>Adriana Martínez</h3>
    <p>adriana@email.com</p>
    <p>Cédula: 123456789</p>
  </div>
  <ul class="menu">
    <li><a href="#" class="active" onclick="showSection('inicio')"><i class="fas fa-home"></i><span>Inicio</span></a></li>
    <li><a href="#" onclick="showSection('vehiculos')"><i class="fas fa-car"></i><span>Mis Vehículos</span></a></li>
    <li><a href="#" onclick="showSection('citas')"><i class="fas fa-calendar-check"></i><span>Agendar Citas</span></a></li>
    <li><a href="#" onclick="showSection('notificaciones')"><i class="fas fa-bell"></i><span>Notificaciones</span></a></li>
    <li><a href="#" onclick="showSection('chat')"><i class="fas fa-comments"></i><span>Chat / Soporte</span></a></li>
    <li><a href="#" onclick="showSection('config')"><i class="fas fa-cog"></i><span>Configuración</span></a></li>
    <li><a href="#" onclick="showSection('perfil')"><i class="fas fa-user"></i><span>Perfil</span></a></li>
  </ul>
</div>

<!-- ===== Content ===== -->
<div class="content">
  <header>
    <h1 id="section-title">Inicio</h1>
  </header>

  <!-- INICIO -->
  <section id="inicio" class="active">
    <div class="cards">
      <div class="card">
        <i class="fas fa-car"></i>
        <h3>Gestión de Vehículos</h3>
        <p>Registra, edita o elimina los vehículos asociados a tu cuenta.</p>
      </div>
      <div class="card">
        <i class="fas fa-calendar-check"></i>
        <h3>Agenda de Citas</h3>
        <p>Programa revisiones, control de vencimientos y seguimiento.</p>
      </div>
      <div class="card">
        <i class="fas fa-bell"></i>
        <h3>Notificaciones</h3>
        <p>Recibe alertas de vencimientos por WhatsApp, correo o SMS.</p>
      </div>
      <div class="card">
        <i class="fas fa-comments"></i>
        <h3>Chat/Soporte</h3>
        <p>Comunícate con nuestro agente virtual o solicita soporte en línea.</p>
      </div>
    </div>
  </section>

  <!-- VEHÍCULOS -->
  <section id="vehiculos">
    <h2>Mis Vehículos</h2>
    <p>Aquí podrás registrar varios carros y empresas, ver placas, fechas de revisión y más.</p>
    <!-- Formulario CRUD futuro -->
  </section>

  <!-- CITAS -->
  <section id="citas">
    <h2>Agendar Citas</h2>
    <p>Formulario para agendar citas de revisión, seleccionar servicio, fecha y hora.</p>
  </section>

  <!-- NOTIFICACIONES -->
  <section id="notificaciones">
    <h2>Notificaciones</h2>
    <p>Listado de alertas y recordatorios según placas y fechas de vencimiento.</p>
  </section>

  <!-- CHAT -->
  <section id="chat">
    <h2>Chat / Soporte</h2>
    <p>Integración de chatbot o WhatsApp API para asistencia en tiempo real.</p>
  </section>

  <!-- CONFIGURACIÓN -->
  <section id="config">
    <h2>Configuración</h2>
    <p>Administra tu cuenta, cambia contraseña y gestiona permisos de empresa.</p>
  </section>

  <!-- PERFIL -->
  <section id="perfil">
    <h2>Perfil de Usuario</h2>
    <div style="display:flex;align-items:center;margin-top:20px;">
      <img src="https://i.pravatar.cc/100" style="border-radius:50%;margin-right:20px;">
      <div>
        <p><strong>Nombre:</strong> Adriana Martínez</p>
        <p><strong>Cédula:</strong> 123456789</p>
        <p><strong>Correo:</strong> adriana@email.com</p>
        <p><strong>Teléfono:</strong> 300 123 4567</p>
        <p><strong>Ciudad:</strong> Villavicencio</p>
      </div>
    </div>
  </section>

</div>

<script>
function showSection(id){
  // Cambiar título y sección activa
  document.querySelectorAll('.menu a').forEach(a=>a.classList.remove('active'));
  event.target.closest('a').classList.add('active');
  document.querySelectorAll('.content section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('section-title').innerText =
    document.getElementById(id).querySelector('h2')?.innerText || 'Inicio';
}
</script>

</body>
</html>

