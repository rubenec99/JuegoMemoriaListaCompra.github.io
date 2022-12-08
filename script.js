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
btnComprobar.innerText = "Comprobar";
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
const easy = document.createElement("button");
const mid = document.createElement("button");
const hard = document.createElement("button");
const extra = document.createElement("button");
//Funcion para la creacion de los botones de nivel y agregandolos a la caja de botones, asignación de clase a cada boton
function CrearBtn() {
  tablero.innerHTML = "";
  const tituloJuego = document.createElement("h1");
  tituloJuego.innerText = "JUEGO DEL CARRITO DE LA COMPRA";
  tituloJuego.classList.add("informacion");
  tablero.append(tituloJuego);

  const reglas = document.createElement("p");
  reglas.innerText =
    "El funcionamiento del juego es sencillo. En primer lugar se mostrará una lista de la compra con diferentes artículos, estos deberán ser memorizados en un tiempo en concreto. A continuación se visualizará una estantería llena con los productos, estos deberán ser arrastrados al carrito de la compra en un tiempo y orden determinado en función del nivel seleccionado.";
  reglas.classList.add("reglas");
  tablero.append(reglas);

  const inform = document.createElement("h3");
  inform.innerText =
    "El nivel extra será desbloqueado una vez se hayan superado todos los niveles";
  inform.classList.add("informacion");
  tablero.append(inform);

  easy.value = 60;
  easy.innerText = "Facil";
  easy.classList.add("boton");
  div_btn.append(easy);

  mid.value = 60;
  mid.innerText = "Medio";
  mid.classList.add("boton");
  div_btn.append(mid);

  hard.value = 40;
  hard.innerText = "Dificil";
  hard.classList.add("boton");
  div_btn.append(hard);

  extra.value = 30;
  extra.innerText = "Extra";
  extra.classList.add("boton");
  if (
    localStorage.getItem("facil") == "superado" &&
    localStorage.getItem("medio") == "superado" &&
    localStorage.getItem("dificil") == "superado"
  ) {
    extra.classList.remove("desactivado");
  } else {
    extra.classList.add("desactivado");
  }

  div_btn.append(extra);
  tablero.append(div_btn);
}

//Llamada a la función de creación de botones
CrearBtn();

document.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "FACIL":
      play(e.target.innerText, 60);
      break;

    case "MEDIO":
      play(e.target.innerText, 60);
      break;
    case "DIFICIL":
      play(e.target.innerText, 40);
      break;
    case "EXTRA":
      play(e.target.innerText, 30);
      break;

    default:
      break;
  }
});

//Funcion para el click
function play(dificultad, tiempo) {
  tablero.innerHTML = "";
  let info = document.createElement("h2");
  info.classList.add("informacion");
  let bloc = document.createElement("fieldset");
  bloc.classList.add("bloc");
  if (dificultad == "FACIL") {
    info.innerText = `Dispones de ${tiempo} segundos para ingresar la compra en cualquier orden`;
    tablero.append(info);
    Listado("FACIL");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      tablero.append(btnComprobar);
      LLenadoEstanteria("facil");
      timeShelving(dificultad);
    }, 10000);
  } else if (dificultad == "MEDIO") {
    info.innerText = `Dispones de ${tiempo} segundos para ingresar la compra en el orden mostrado`;
    tablero.append(info);
    Listado("MEDIO");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      tablero.append(btnComprobar);
      LLenadoEstanteria("medio");
      timeShelving(dificultad);
    }, 10000);
  } else if (dificultad == "DIFICIL") {
    info.innerText = `Dispones de ${tiempo} segundos para ingresar la compra en el orden mostrado`;
    tablero.append(info);
    Listado("DIFICIL");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      tablero.append(btnComprobar);
      LLenadoEstanteria("dificil");
      timeShelving(dificultad);
    }, 8000);
  } else {
    info.innerText = `Dispones de ${tiempo} segundos para ingresar la compra en el orden mostrado`;
    tablero.append(info);
    Listado("EXTRA");
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.append(estanteria);
      tablero.append(carrito);
      tablero.append(btnComprobar);
      LLenadoEstanteria("extra");
      timeShelving(dificultad);
    }, 6000);
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
    const listCompraArray = JSON.parse(localStorage.getItem("Lista Compra"));
    const miCompra = JSON.parse(localStorage.getItem("listaPropia"));
    let contadorValido = 0;
    switch (dificultad) {
      case "facil":
        listCompraArray.forEach((compra) => {
          for (let index = 0; index < miCompra.length; index++) {
            if (
              compra.img ==
              "." + miCompra[index].substr(21, miCompra[index].length - 1)
            ) {
              contadorValido++;
            }
          }
        });
        if (contadorValido == listCompraArray.length) {
          localStorage.setItem("facil", "superado");
          nivelAcabado(dificultad.toLowerCase());
        } else {
          localStorage.setItem("facil", "fallado");
          nivelAcabado(dificultad.toLowerCase());
        }
        break;
      case "medio":
        contadorValido = 0;
        listCompraArray.forEach((compra, i) => {
          for (let index = 0; index < miCompra.length; index++) {
            if (
              compra.img ==
                "." + miCompra[index].substr(21, miCompra[index].length - 1) &&
              index == i
            ) {
              contadorValido++;
            }
          }
        });
        if (contadorValido == listCompraArray.length) {
          localStorage.setItem("medio", "superado");
          nivelAcabado(dificultad.toLowerCase());
        } else {
          localStorage.setItem("medio", "fallado");
          nivelAcabado(dificultad.toLowerCase());
        }
        break;
      case "dificil":
        contadorValido = 0;
        listCompraArray.forEach((compra, i) => {
          for (let index = 0; index < miCompra.length; index++) {
            if (
              compra.img ==
                "." + miCompra[index].substr(21, miCompra[index].length - 1) &&
              index == i
            ) {
              contadorValido++;
            }
          }
        });
        if (contadorValido == listCompraArray.length) {
          localStorage.setItem("dificil", "superado");
          nivelAcabado(dificultad.toLowerCase());
        } else {
          localStorage.setItem("dificil", "fallado");
          nivelAcabado(dificultad.toLowerCase());
        }
        break;
      case "extra":
        contadorValido = 0;
        listCompraArray.forEach((compra, i) => {
          for (let index = 0; index < miCompra.length; index++) {
            if (
              compra.img ==
                "." + miCompra[index].substr(21, miCompra[index].length - 1) &&
              index == i
            ) {
              contadorValido++;
            }
          }
        });
        if (contadorValido == listCompraArray.length) {
          localStorage.setItem("extra", "superado");
          nivelAcabado(dificultad.toLowerCase());
        } else {
          localStorage.setItem("extra", "fallado");
          nivelAcabado(dificultad.toLowerCase());
        }
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
    case "EXTRA":
      arrayListado = mostrarBlocRandom(10);
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

function nivelAcabado(dificultad) {
  let localEasy = localStorage.getItem(dificultad);
  const btnVolver = document.createElement("button");
  btnVolver.classList.add("boton");
  btnVolver.innerText = "Volver a inicio";
  if (localEasy != undefined) {
    if (localEasy == "superado") {
      if (dificultad == "extra") {
        tablero.innerHTML =
          "<h1 class='resultadoAcierto'>¡Enhorabuen has superado todos los niveles!</h1>";

        tablero.append(btnVolver);
      } else {
        tablero.innerHTML =
          "<h1 class='resultadoAcierto'>¡Has superado el nivel!</h1>";
        tablero.append(btnVolver);
      }
    } else {
      tablero.innerHTML =
        "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";

      tablero.append(btnVolver);
    }
  } else {
    localStorage.setItem(dificultad, "fallado");
    tablero.innerHTML =
      "<h1 class='resultadoFallo'>Has fallado el nivel. Prueba otra vez</h1>";
    tablero.append(btnVolver);
  }
  btnVolver.addEventListener("click", CrearBtn);
}

//Funcion para el tiempo que se muestra la estantería según el nivel
function timeShelving(dificultad) {
  let estanteria = document.createElement("fieldset");
  estanteria.classList.add("estanteria");
  if (dificultad == "FACIL") {
    setTimeout(() => {
      nivelAcabado(dificultad.toLowerCase());
    }, 60000);
  } else if (dificultad == "MEDIO") {
    setTimeout(() => {
      nivelAcabado(dificultad.toLowerCase());
    }, 60000);
  } else if (dificultad == "DIFICIL") {
    setTimeout(() => {
      nivelAcabado(dificultad.toLowerCase());
    }, 40000);
  } else {
    setTimeout(() => {
      nivelAcabado(dificultad.toLowerCase());
    }, 30000);
  }
}

/* 
  const extra = document.createElement("button");
  extra.value = 30;
  extra.innerText = "Extra";
  localStorage.getItem("success");
  extra.classList.add("extraHide"); */
