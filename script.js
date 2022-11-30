//Creación del tablero de juego, y agregarlo al body

const tablero = document.createElement("section");
tablero.id = "tablero";

//Creción de la caja de botones y agregarlos al tablero de juego.

const div_btn = document.createElement("div");
div_btn.id = "btns";
document.body.append(tablero);

//Estatería
const estanteria = document.createElement("div");
estanteria.classList.add("estanteria");

//Carrito
const carrito = document.createElement("div");
carrito.classList.add("carrito");

//Bloc de notas
const bloc = document.createElement("fieldset");
bloc.classList.add("bloc");

//Array de imagenes
const comidas = [
  {
    index: 0,
    img: "./img/calabaza.png",
  },
  {
    index: 1,
    img: "./img/fresa.png",
  },
  {
    index: 2,
    img: "./img/guisantes.png",
  },
  {
    index: 3,
    img: "./img/huevo.png",
  },
  {
    index: 4,
    img: "./img/lechuga.png",
  },
  {
    index: 5,
    img: "./img/maiz.png",
  },
  {
    index: 6,
    img: "./img/manzana.png",
  },
  {
    index: 7,
    img: "./img/nabo.png",
  },
  {
    index: 8,
    img: "./img/patata.png",
  },
  {
    index: 9,
    img: "./img/pera.png",
  },
  {
    index: 10,
    img: "./img/rabano.png",
  },
  {
    index: 11,
    img: "./img/tomate.png",
  },
];

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
  let bloc = document.createElement("fieldset");
  bloc.classList.add("bloc");
  if (dificultad == "FACIL") {
    Listado("FACIL");
    setTimeout(() => {
      tablero.innerHTML = "";
    }, 10000);
  } else if (dificultad == "MEDIO") {
    Listado("MEDIO");
    setTimeout(() => {
      tablero.innerHTML = "";
    }, 10000);
  } else if (dificultad == "DIFICIL") {
    Listado("DIFICIL");
    setTimeout(() => {
      tablero.innerHTML = "";
    }, 8000);
  }
}

function Listado(dificultad) {
  let array = [];
  let html = "";
  let exists = false;
  switch (dificultad) {
    case "FACIL":
      for (let index = 0; index < 7; index++) {
        array.push(comidas[Math.floor(Math.random() * 11)]);
        html += `<img src="${array[index].img}">`;
      }
      bloc.innerHTML = html;
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", JSON.stringify(array));
      break;
    case "MEDIO":
      for (let index = 0; index < 7; index++) {
        array.push(comidas[Math.floor(Math.random() * 11)]);
        html += `<img src="${array[index].img}">`;
      }
      bloc.innerHTML = html;
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", array);
      break;
    case "DIFICIL":
      for (let index = 0; index < 9; index++) {
        array.push(comidas[Math.floor(Math.random() * 11)]);
        html += `<img src="${array[index].img}">`;
      }
      bloc.innerHTML = html;
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", array);
      break;
    default:
      break;
  }
}
/* 
  const extra = document.createElement("button");
  extra.value = 30;
  extra.innerText = "Extra";
  localStorage.getItem("success");
  extra.classList.add("extraHide"); */
