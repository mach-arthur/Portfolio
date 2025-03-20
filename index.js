document.addEventListener("DOMContentLoaded", function () {
  let toggle = document.getElementById("ios__button");

  if (localStorage.getItem("theme") === "light") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        localStorage.setItem("theme", "light");
      } else {
        document.body.style.backgroundColor = "#212121";
        document.body.style.color = "#ffffff";
        localStorage.setItem("theme", "dark");
      }
    });
  }
});

document.getElementById("formCadastro").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("Login").value;
  localStorage.setItem("nomeUsuario", nome);

  window.location.href = "eu.html";
});
