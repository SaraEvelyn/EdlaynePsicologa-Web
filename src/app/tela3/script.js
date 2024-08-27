"use client";
export function handleLogin() {
  const loginBox = document.querySelector(".login-box");

  if (loginBox.classList.contains("hidden")) {
    loginBox.classList.add("show");
  } else {
    loginBox.classList.remove("show");
    loginBox.classList.add("hidden");
  }
}
export  function mudaCor() {
  const mudaCor = document.querySelector(".ret-horario");
  if (mudaCor.classList.contains("hidden")) {
    mudaCor.classList.add("show");
  } else {
    mudaCor.classList.remove("show");
    mudaCor.classList.add("hidden");
  }
}

export function telaLogin() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == "evilayne" && pass == "evilayne") {
    window.location.assign("tela3");
  } else {
    alert("Usuário ou senha incorretos");
  }

  if (email !== "") {
    // Exibindo a mensagem de boas-vindas
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("email").innerText = email;
  } else {
    alert("Por favor, preencha o nome de usuário.");
  }
}

export function hamburguer() {
  const abrirAba = document.querySelector(".aba");
  if (abrirAba.classList.contains("show")) {
    abrirAba.classList.remove("show");
  } else {
    abrirAba.classList.add("show");
    abrirAba.classList.remove("hidden");
  }
}
export function showSearchInput() {
  var input = document.getElementById("searchInput");
  if (input.style.display === "none") {
    input.style.display = "inline-block";
    input.focus(); // Dá foco no input quando é exibido
  } else {
    input.style.display = "none";
  }
}

export function searchText(event) {
  if (event.keyCode === 13) {
    // Verifica se a tecla pressionada é Enter
    var searchText = document.getElementById("searchInput").value;
    var content = document.body.innerHTML;
    var highlightedContent = content.replace(
      new RegExp('<span class="highlight">(.*?)</span>', "g"),
      "$1",
    );
    document.body.innerHTML = highlightedContent;

    if (searchText.trim() !== "") {
      var newContent = content.replace(
        new RegExp(searchText, "gi"),
        "<span class='highlight'>$&</span>",
      );
      document.body.innerHTML = newContent;
    }
  }
}
export function podcast() {
  const podcast = document.querySelector(".todosPodcasts");
  if (podcast.classList.contains("hidden")) {
    podcast.classList.remove("hidden");
    const livro = document.querySelector(".recomendLivros");
    livro.classList.add("hidden");
  }
}
export function artPub() {
  const artPub = document.querySelector(".todosPodcasts");
  artPub.classList.add("hidden");
  const livro = document.querySelector(".recomendLivros");
  livro.classList.add("show");
}
