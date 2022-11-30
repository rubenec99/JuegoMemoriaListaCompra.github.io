const tablero = document.getElementById("tablero");
const div_btn = document.getElementById("btns");

const easy = document.createElement("button");
easy.value = 60;
easy.innerText = "Facil";
easy.classList.add("botonEasy");
div_btn.append(easy);

const mid = document.createElement("button");
mid.value = 60;
mid.innerText = "Medio";
mid.classList.add("botonMid");
div_btn.append(mid);

const hard = document.createElement("button");
hard.value = 40;
hard.innerText = "Dificil";
hard.classList.add("botonHard");
div_btn.append(hard);

/* 
  const extra = document.createElement("button");
  extra.value = 30;
  extra.innerText = "Extra";
  localStorage.getItem("success");
  extra.classList.add("extraHide"); */
