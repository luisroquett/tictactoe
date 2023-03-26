//Función que construyo la estructura HTML de la vista Game
const getGameHTML = (game) => {
    return `
    <div class="header-container">
    <div class="header"><img src="img/tictactoepng.png" alt="" /></div>
  </div>
  

  <div class="board">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
  <div class="players2-container">
   <p id="game-view-name1">${game.player1.name}</p>
   <p id="game-view-name2">${game.player2.name}</p>
  </div>
            
         
        </div>
    `;
}


//Función que pinta la estructura HTML de la vista Game
const renderGame = () => {
    root.innerHTML = getGameHTML(game);
};

const handleBoardGameClick = (e) => {
    console.log(e.currentTarget);

    let algo = 1
    verifyBoardGame(algo);
};

const verifyBoardGame = (e) => {
    if(e==1){
        game.winner = game.player1.name
        renderWinner();
        setWinnerUiEventos();
    }else{
        game.winner = game.player2.name
        renderWinner();
        setWinnerUiEventos();
    }
}

//Eventos
const setGameUiEventos = () => {
    const boxes = document.querySelectorAll(".square");

    for(const box of boxes) {
        box.addEventListener("click", handleBoardGameClick);
    }
};