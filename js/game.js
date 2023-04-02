//Función que construyo la estructura HTML de la vista Game
const getGameHTML = (game) => {
  return `
    <div class="header-container">
    <div class="header"><img src="img/tictactoepng.png" alt="" /></div>
  </div>
  

  <div class="board">
    <div id="0" class="square"></div>
    <div id="1" class="square"></div>
    <div id="2" class="square"></div>
    <div id="3" class="square"></div>
    <div id="4" class="square"></div>
    <div id="5" class="square"></div>
    <div id="6" class="square"></div>
    <div id="7" class="square"></div>
    <div id="8" class="square"></div>
  </div>
  <div class="players2-container">
   <div id="gameview1-container">${game.player1.name}</div>
   <div id="gameview2-container">${game.player2.name}</div>
  </div>
            
         
        </div>
    `;
};


//Función que pinta la estructura HTML de la vista Game
const renderGame = () => {
  root.innerHTML = getGameHTML(game);
};

const handleBoardGameClick = (e) => {
  console.log(e.currentTarget);

  let algo = 1;
  verifyBoardGame(algo);
};

//Eventos
const setGameUiEventos = () => {





const htmlCasillas = document.querySelectorAll(".square");
const mapCasillas = [];
let turno1 = false;

const manageClick = (element) => {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
    if (turno1) {
      element.innerHTML = game.player1.mark;

      mapCasillas[element.id] = "x";
    } else {
      element.innerHTML = game.player2.mark;
      mapCasillas[element.id] = "o";
    }
    turno1 = !turno1;
    Winner(mapCasillas[element.id],mapCasillas)
  }

  manageBoard(mapCasillas);
};




for (let i = 0; i < htmlCasillas.length; i++) {
  htmlCasillas[i].addEventListener("click", (event) => {
    const element = event.target;
    manageClick(element);
  });

  htmlCasillas[i].id = i;

 
}
};