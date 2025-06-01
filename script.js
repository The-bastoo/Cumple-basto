function verificarPassword() {
  const passwordInput = document.getElementById("password").value;
  const contenido = document.getElementById("contenido");

  if (passwordInput === "Cumplebastiancito24") {
    contenido.style.display = "block";
  } else {
    alert("Contraseña incorrecta.");
  }
}
