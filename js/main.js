//Definimos una variable global que sera visible para los demás js
const root = document.getElementById("root"); //Capturamos el contenedor General

//Definimos un objeto dentro de un objeto
const game = {
    player1: {
        name: null,
        mark: '<img class= "mark" src="img/steve.jpg" width="50px">',
    },
    player2: {
        name: null,
        mark: '<img class= "mark" src="img/creeper.jpg" width="50px">',
    },
    winner: null,
   
};




const getWelcomeHTML = () => {
    return `
    <div class="header">
    <img src="img/tictactoepng.png" alt="">
  </div>
  <div class="background"></div>
  <div class="main-container">

  <div class="data-container">
    <div class="info">
      <h2 class:"welcome-tictoc">Welcome to tic tac toe</h2>
      <p></p>
    </div>
    <div class="players-container">
      <h2 class= "choose-name">Choose your name
      </h2>
      <div class="player1-container"><input type="text" placeholder="Player-1" id="inicio-1"></div>
      <div class="player2-container"><input type="text" placeholder="Player-2" id="inicio-2"></div>
      
      <div id="container-btn-play">
    </div>
  </div>
  <div class="play-container">
    <button id="btn-play">PLAY</button>
  </div>
</div>
</div>`;
    
}
const setWelcomeUiEventos = () => {
    document.getElementById("btn-play").addEventListener("click", () =>{
        const name1Input = document.getElementById("inicio-1").value;
        const name2Input = document.getElementById("inicio-2").value;

        //Validar
        
        //actualizar
        game.player1.name = name1Input;
        game.player2.name = name2Input;

        // renderizar vista game
        renderGame();
        setGameUiEventos();
       
    });
}

//Función que pinta la estructura HTML de la vista principal
const renderWelcome = () => {
    root.innerHTML = getWelcomeHTML();
}




//Llamamos a la función que pinta el HTML
const renderIndex = () => {
  root.innerHTML = uiIndex();
};

renderWelcome();
setWelcomeUiEventos();