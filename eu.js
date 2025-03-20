document.addEventListener("DOMContentLoaded", function () {
  let nomeUsuario = localStorage.getItem("nomeUsuario") || "Visitante";
  document.getElementById("welcomeMessage").innerText = `Bem-vindo, ${nomeUsuario}`;
  document.querySelector(".button__nav").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementsByTagName("footer")[0];
  const photo = document.getElementsByTagName("img")[0];
  const nav = document.getElementsByClassName("button__nav")[0];
  const desc0 = document.getElementsByClassName("description")[0];
  const desc1 = document.getElementsByClassName("description")[1];
  const desc2 = document.getElementsByClassName("description")[2];
  let toggle = document.getElementById("ios__button");

  if (localStorage.getItem("theme") === "light") {
    document.body.style.backgroundColor = "#DEDEDE";
    document.body.style.color = "#040316";
    footer.classList.add("light-mode");
    nav.classList.add("light-nav");
    photo.classList.add("light-mode");
    desc0.classList.add("light-mode");
    desc1.classList.add("light-mode");
    desc2.classList.add("light-mode");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.style.backgroundColor = "#DEDEDE";
        document.body.style.color = "#040316";
        footer.classList.add("light-mode");
        nav.classList.add("light-nav");
        photo.classList.add("light-mode");
        desc0.classList.add("light-mode");
        desc1.classList.add("light-mode");
        desc2.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.style.backgroundColor = "#212121";
        document.body.style.color = "#eae9fc";
        footer.classList.remove("light-mode");
        nav.classList.remove("light-nav");
        photo.classList.remove("light-mode");
        desc0.classList.remove("light-mode");
        desc1.classList.remove("light-mode");
        desc2.classList.remove("light-mode");

        localStorage.setItem("theme", "dark");
      }
    });
  }
});

function showDescription(index) {
  let descriptions = document.querySelectorAll(".description");

  descriptions.forEach((desc, i) => {
    if (i + 1 === index) {
      desc.classList.remove("hide");
      desc.classList.add("show");
      desc.style.display = "block";
    } else {
      desc.classList.remove("show");
      desc.classList.add("hide");
      setTimeout(() => (desc.style.display = "none"), 300);
    }
  });
}
