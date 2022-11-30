//Creación del tablero de juego, y agregarlo al body

const tablero = document.createElement("section");
tablero.id = "tablero";

//Creción de la caja de botones y agregarlos al tablero de juego.

const div_btn = document.createElement("div");
div_btn.id = "btns";
document.body.append(tablero);

//Funcion para la creacion de los botones de nivel y agregandolos a la caja de botones, asignación de clase a cada boton
function CrearBtn() {
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
  tablero.append(div_btn);
}

//Llamada a la función de creación de botones
CrearBtn();

document.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "FACIL":
      play(e.target.value, e.target.innerText);
      console.log("facil");
      break;

    case "MEDIO":
      play(e.target.value, e.target.innerText);
      console.log("medio");
      break;
    case "DIFICIL":
      play(e.target.value, e.target.innerText);
      console.log("dificil");
      break;

    default:
      break;
  }
});

//Funcion para el click
function play(tiempo, dificultad) {
  tablero.innerHTML = "";
  let blog = document.createElement("fieldset");
  blog.classList.add("blog");
  if (dificultad == "FACIL") {
    let html = "";
    for (let index = 0; index < 7; index++) {}
  }
}
/* 
let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", play(btn[0].value, btn[0].innerText));
btn[1].addEventListener("click", play(btn[1].value, btn[1].innerText));
btn[2].addEventListener("click", play(btn[2].value, btn[2].innerText)); */
//Funcion de onclick para los botones

/* 
  const extra = document.createElement("button");
  extra.value = 30;
  extra.innerText = "Extra";
  localStorage.getItem("success");
  extra.classList.add("extraHide"); */
