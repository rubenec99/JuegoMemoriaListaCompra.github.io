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

//boton comprobar
const btnComprobar = document.createElement("button");
btnComprobar.classList.add("boton");

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
  easy.classList.add("boton");
  div_btn.append(easy);

  const mid = document.createElement("button");
  mid.value = 60;
  mid.innerText = "Medio";
  mid.classList.add("boton");
  div_btn.append(mid);

  const hard = document.createElement("button");
  hard.value = 40;
  hard.innerText = "Dificil";
  hard.classList.add("boton");
  div_btn.append(hard);
  tablero.append(div_btn);
}

//Llamada a la función de creación de botones
CrearBtn();

document.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "FACIL":
      play(e.target.innerText);
      break;

    case "MEDIO":
      play(e.target.innerText);
      break;
    case "DIFICIL":
      play(e.target.innerText);
      break;

    default:
      break;
  }
});

//Funcion para el click
function play(dificultad) {
  tablero.innerHTML = "";
  let bloc = document.createElement("fieldset");
  bloc.classList.add("bloc");
  if (dificultad == "FACIL") {
    Listado("FACIL");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      tablero.append(btnComprobar);
      LLenadoEstanteria("facil");
      timeShelving(dificultad);
    }, 1000);
  } else if (dificultad == "MEDIO") {
    Listado("MEDIO");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      LLenadoEstanteria("medio");
      timeShelving(dificultad);
    }, 10000);
  } else if (dificultad == "DIFICIL") {
    Listado("DIFICIL");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      LLenadoEstanteria("dificil");
      timeShelving(dificultad);
    }, 8000);
  }
}

//Obtener todas las imgs de la estanteria
let imgsComidas;

//Funcion para llenar la estantería con la img del array
function LLenadoEstanteria(dificultad) {
  comidas.forEach((comida) => {
    const imgComida = document.createElement("img");
    imgComida.classList.add("imgComida");
    imgComida.src = comida.img;
    imgComida.draggable = true;
    estanteria.append(imgComida);
  });
  imgsComidas = document.querySelectorAll(".imgComida");
  //Drag and drop
  let arrastrar = "";
  let arrayIComidas = [];
  imgsComidas.forEach((com) => {
    com.addEventListener("drag", (event) => {
      event.preventDefault();
      arrastrar = event.target;
    });
    com.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  });
  carrito.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  carrito.addEventListener("drop", (e) => {
    e.preventDefault();
    arrayIComidas.push(arrastrar.src);
    localStorage.setItem("listaPropia", JSON.stringify(arrayIComidas));
  });

  btnComprobar.addEventListener("click", () => {
    switch (dificultad) {
      case value:
        break;

      default:
        break;
    }
  });
}

function Listado(dificultad) {
  let arrayListado = [];
  switch (dificultad) {
    case "FACIL":
      arrayListado = mostrarBlocRandom(7);
      bloc.innerHTML = arrayListado[1];
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", JSON.stringify(arrayListado[0]));

      break;
    case "MEDIO":
      arrayListado = mostrarBlocRandom(7);
      bloc.innerHTML = arrayListado[1];
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", JSON.stringify(arrayListado[0]));

      break;
    case "DIFICIL":
      arrayListado = mostrarBlocRandom(9);
      bloc.innerHTML = arrayListado[1];
      tablero.append(bloc);
      localStorage.setItem("Lista Compra", JSON.stringify(arrayListado[0]));

      break;

    default:
      break;
  }
}

//Funcion que muestra la lista de la compra sin ningun item repetido y lo guarda en el local
function mostrarBlocRandom(numero) {
  let array = [];
  let html = "";
  let cont = 0;
  while (array.length < numero) {
    let exists = false;
    let food = comidas[Math.floor(Math.random() * 11)];
    if (array.length > 0) {
      array.forEach((comida) => {
        if (food == comida) {
          exists = true;
        }
      });
      if (exists == false) {
        array.push(food);
        html += `<img src="${array[cont].img}">`;
        cont++;
      }
    } else {
      array.push(food);
      html += `<img src="${array[cont].img}">`;
      cont++;
    }
  }
  return [array, html];
}

//Funcion para el tiempo que se muestra la estantería según el nivel
function timeShelving(dificultad) {
  let estanteria = document.createElement("fieldset");
  estanteria.classList.add("estanteria");
  if (dificultad == "FACIL") {
    setTimeout(() => {
      let localEasy = localStorage.getItem("facil");
      console.log("hola");
      if (localEasy != undefined) {
        if (localEasy == "superado") {
          tablero.innerHTML =
            "<h1 class='resultadoAcierto'>¡Has superado el nivel!</h1>";
        } else {
          tablero.innerHTML =
            "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
        }
      } else {
        localStorage.setItem("facil", "fallado");
        tablero.innerHTML =
          "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
      }
    }, 60000);
  } else if (dificultad == "MEDIO") {
    setTimeout(() => {
      let localEasy = localStorage.getItem("medio");
      if (localEasy != undefined) {
        if (localEasy == "superado") {
          tablero.innerHTML =
            "<h1 class='resultadoAcierto'>¡Has superado el nivel!</h1>";
        } else {
          tablero.innerHTML =
            "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
        }
      } else {
        localStorage.setItem("medio", "fallado");
        tablero.innerHTML =
          "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
      }
    }, 60000);
  } else if (dificultad == "DIFICIL") {
    setTimeout(() => {
      let localEasy = localStorage.getItem("dificil");
      if (localEasy != undefined) {
        if (localEasy == "superado") {
          tablero.innerHTML =
            "<h1 class='resultadoAcierto'>¡Has superado el nivel!</h1>";
        } else {
          tablero.innerHTML =
            "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
        }
      } else {
        localStorage.setItem("dificil", "fallado");
        tablero.innerHTML =
          "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
      }
    }, 40000);
  }
}

/* 
  const extra = document.createElement("button");
  extra.value = 30;
  extra.innerText = "Extra";
  localStorage.getItem("success");
  extra.classList.add("extraHide"); */
