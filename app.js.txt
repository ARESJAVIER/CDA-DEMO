function login(){
  const cedula = document.getElementById('cedula').value;
  const placa = document.getElementById('placa').value;

  if(cedula && placa){
    window.location.href = "dashboard.html"; // Simula el ingreso
  } else {
    alert("Por favor ingresa cédula y placa");
  }
}
