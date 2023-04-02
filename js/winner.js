const getWinnerHTML = (player) => {
  return `
    
  <div class="header-container">
  <div class="header"><img src="img/tictactoepng.png" alt="" /></div>
  <div class="view-winner">
    <div class="container-winner">
      <h1 class="finish">Finish</h1>
      <div class="conainer_ganador">
        <h2 class="winner-title">The Winner is</h2>
        <h2><span id="ganador">"${player}"</span></h2>
        
        <button id="play-again" onclick="backtoGame()">PLAY AGAIN</button>
          
        </div>
  </div>
    `;
};
const getEmpateHTML = () => {
  return `<div class="header-container">
  <div class="header"><img src="img/tictactoepng.png" alt="" /></div>
  <div id="containerTie">
    <div class="containerMessage"> <h2 id="empate_title">
        Tie</h2></div>  
             <button id="reset_tie" onclick="resetTie()">PLAY AGAIN</button>
         </div>    
     </div>`;
};
const renderEmpate = () => {
  root.innerHTML = getEmpateHTML();
};

function resetTie() {
  document.getElementById("reset_tie").addEventListener("click", () => {
    renderWelcome();
    setWelcomeUiEventos();
  });
}

function backtoGame() {
  document.getElementById("play-again").addEventListener("click", () => {
    renderWelcome();
    setWelcomeUiEventos();
  });
}

const renderWinner = () => {
  root.innerHTML = getWinnerHTML();
};

const Winner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "x") {
      root.innerHTML = getWinnerHTML(game.player1.name);
    } else {
      root.innerHTML = getWinnerHTML(game.player2.name);
    }
  };
  if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
    uiRenderWinner();
  }
  if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
    uiRenderWinner();
  }
  if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
    uiRenderWinner();
  }
  if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
    uiRenderWinner();
  }

  if (
    mapC[0] != undefined &&
    mapC[1] != undefined &&
    mapC[2] != undefined &&
    mapC[3] != undefined &&
    mapC[4] != undefined &&
    mapC[5] != undefined &&
    mapC[6] != undefined &&
    mapC[7] != undefined &&
    mapC[8] != undefined
  ) {
    renderEmpate();
  }
};
