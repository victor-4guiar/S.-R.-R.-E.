let yatoco = {intro: false, title: false, level: false};
let jump = new Audio('sounds/sfx/jump.ogg');
let ostLe = new Audio('sounds/ost/gameover.ogg');

let sonic = {
	sprite: 'graphycs/sonic/sonic_r0.png',
	runFrames: 4,
	jumpFrames: 5,
	stepVelocity: 1
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
		let verifiTecl = true
		let messageTitle = document.createElement('h2');
		messageTitle.style.color = 'yellow';
		messageTitle.style.textAlign = 'center';
		messageTitle.innerHTML = 'Press any key to play!';
		messageTitle.style.position = 'absolute';
		messageTitle.style.margin = '100px 100px 50px 250px';
		gameWindow.appendChild(messageTitle);
		document.addEventListener('keyup', function(event){
			if (event.keyCode != "undefined"){
				messageTitle.remove();
				gamePlay();
				title.pause();
			}
		});
	};
};

function gamePlay(){
	let pod = true;
	let eleSo = document.createElement('img');
	eleSo.src = sonic.sprite;
	eleSo.setAttribute('class', 'sonic');
	eleSo.style.imageRendering = 'pixelated';
	let controle = true
	
	if (yatoco.level == false){
		yatoco.level = true;
		gameWindow.style.backgroundColor = 'lightblue';
		let spikes = document.createElement('img');
		spikes.setAttribute('id', 'spikes');
		spikes.src = 'graphycs/spikes.png';
		
		gameWindow.appendChild(spikes);
		gameWindow.appendChild(eleSo);
	}
	
	document.addEventListener('keydown', function(verifi){
		if (verifi.keyCode == 65){
			if (controle == true){
				controle = false;
				jump.play();
				eleSo.classList.add('jumpFisi');
				eleSo.classList.add('jumpAnim');
				setTimeout(()=>{
					eleSo.classList.remove('jumpFisi');
					eleSo.classList.remove('jumpAisi');
					controle = true;
				}, 1 * 1000);
			};
		};
	});
};