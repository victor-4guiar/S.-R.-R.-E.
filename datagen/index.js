let yatoco = {intro: false, title: false, level: false, over: false};

let sonic = {
	sprite: 'graphycs/sonic/sonic_r0.png',
};

function introGame(){
	if(yatoco.intro == false){
		yatoco.intro = true;
		let gameWindow = document.getElementById('gameWindow');
		let gameLogo = document.getElementById('logoIm');
		let logo = new Audio('sounds/sfx/logo.ogg');
			
		gameWindow.style.backgroundColor = 'black';
		gameWindow.classList.add('whiteDown');
		gameLogo.classList.add('whiteUp');
				
		setTimeout(()=>{
			logo.play();
			setTimeout(()=>{
				gameLogo.remove();
				titleScreen();
			}, 7 * 1000);
		}, 2 * 1000);
	};
};

function titleScreen(){
	if (yatoco.title == false){
		yatoco.title = true;
		let title = new Audio('sounds/ost/title.ogg');
		title.play();
		let verifiTecl = true;
		
		let messageTitle = document.createElement('h2');
		messageTitle.setAttribute('id', 'msgTit');
		messageTitle.innerHTML = 'Press any key to play!';
		
		let imageTitle = document.createElement('img');
		imageTitle.src = './graphycs/title.png';
		imageTitle.setAttribute('id','TitleSprite');
		
		imageTitle.classList.add('opaciUp');
		messageTitle.classList.add('opaciUp');
		gameWindow.appendChild(imageTitle);
		gameWindow.appendChild(messageTitle);
		setTimeout(()=>{
			messageTitle.classList.remove('opaciUp');
			imageTitle.classList.remove('opaciUp');
			messageTitle.style.opacity = '100%';
			imageTitle.style.opacity = '100%';
			
			document.addEventListener('keyup', function(event){
				if (event.keyCode != "undefined"){
					messageTitle.remove();
					imageTitle.remove();
					gamePlay();
					title.pause();
				}
			});
		}, 4 * 1000);
	};
};

function gamePlay(){
	if (yatoco.level == false){
		llave = false;
		
		let backgroundUno = document.createElement('img');
		backgroundUno.setAttribute('id', 'backgroundUno');
		backgroundUno.src = 'graphycs/parallax/parallax_0.png';
		backgroundUno.classList.add('moverback');
		
		let jump = new Audio('sounds/sfx/jump.ogg');
		let ostLe = new Audio('sounds/ost/gameover.ogg');
		let intr = new Audio('sounds/ost/level_0.ogg');
		let fas = new Audio('sounds/ost/level_1.ogg');
		fas.loop = true;
		let controle = true;
		let eleSo = document.createElement('img');
		
		eleSo.src = sonic.sprite;
		eleSo.setAttribute('class', 'sonic');
		eleSo.style.imageRendering = 'pixelated';
		
		let spikes = document.createElement('img');
		spikes.setAttribute('id', 'spike');
		spikes.src = 'graphycs/spike.png';
		spikes.style.imageRendering = 'pixelated';
		spikes.classList.add('spikemov');
			
		gameWindow.appendChild(backgroundUno);
		gameWindow.appendChild(spikes);
		gameWindow.appendChild(eleSo);
		yatoco.level = true;
		intr.play();
		setTimeout(()=>{
			intr.pause();
			fas.play();
		}, 3.81 * 1000);
		
		if (llave == false){
			document.addEventListener('keydown', function(verifi){
				if (verifi.keyCode == 65){
					if (controle == true){
						controle = false;
						jump.play();
						eleSo.classList.add('jumpFisi');
						eleSo.classList.add('jumpAnim');
						setTimeout(()=>{
							eleSo.classList.remove('jumpFisi');
							eleSo.classList.remove('jumpAnim');
							controle = true;
						}, 1 * 1500);
					};
				};
			});
			
			const loop = setInterval(()=>{
				const spikePosition = spikes.offsetLeft;
				const sonicPosition = +window.getComputedStyle(eleSo).bottom.replace('px', '');
				const backgroundPosition = +window.getComputedStyle(backgroundUno).right.replace('px', '');
				if (spikePosition <= 120 && spikePosition > 0 && sonicPosition < 90){
					spikes.classList.remove('spikemov');
					spikes.style.left = `${spikePosition}px`;
					backgroundUno.classList.remove('moverback');
					backgroundUno.style.right = `${backgroundPosition}px`;
					eleSo.classList.remove('jumpFisi');
					eleSo.classList.remove('jumpAnim');
					eleSo.classList.add('die');
					eleSo.style.bottom = `${sonicPosition}px`;
					llave = true;
					controle = false;
					setTimeout(()=>{
						eleSo.remove();
					}, 1500);
					fas.pause();
					gameOver();
				};
			}, 10);
		};
	};
};

function gameOver(){
	if(yatoco.over == false){
		let backgroundUno = document.getElementById('backgroundUno');
		let gameO = new Audio('sounds/ost/gameover.ogg');
		let dano = new Audio('sounds/sfx/die.ogg');
		let spike = document.getElementById('spike');
		
		let gameOverMsg = document.createElement('h1');
		gameOverMsg.setAttribute('id', 'gameOverMsg');
		
		dano.play();
		yatoco.over = true;
		
		setTimeout(()=>{
			backgroundUno.classList.add('opacityOff');
			gameO.play();
			spike.classList.add('tirspiop');
			dano.pause();
			gameWindow.appendChild(gameOverMsg);
			gameOverMsg.innerHTML = 'Game Over';
			gameOverMsg.style.color = 'black';
			gameOverMsg.style.webkitTextStroke = '2px white';
			gameOverMsg.classList.add('opaciUp');
			setTimeout(()=>{
				gameWindow.classList.remove('opacityOff');
				gameWindow.classList.remove('whiteDown');
				backgroundUno.remove();
				gameOverMsg.style.opacity = '100%';
				spike.remove();
			}, 4 * 1010);
		}, 3 * 1000);
	};
};