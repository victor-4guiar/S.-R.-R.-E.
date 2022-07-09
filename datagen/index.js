let yatoco = 0;
function introGame(){
	if(yatoco <= 0){
		yatoco++;
		var gameWindow = document.getElementById('gameWindow');
		var gameFlash = document.getElementById('gameFlash');
		var gameLogo = document.getElementById('logoIm');
		var logo = new Audio('sounds/sfx/logo.ogg');
			
		gameWindow.style.backgroundColor = 'white';
		gameFlash.classList.add('whiteDown');
		gameLogo.classList.add('whiteUp');
				
		setTimeout(()=>{
			logo.play();
			setTimeout(()=>{
				gameFlash.classList.remove('whiteDown');
				gameLogo.remove();
				titleScreen();
			}, 7 * 1000);
		}, 2 * 1000);
	};
};

function titleScreen(){
	window.alert('Arriba');
};