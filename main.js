const player1 = {
    name: 'Sub-Zero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun','automat','baseball bat'],
    attac: function(){
        console.log(player1.name + ' Fight...')
    }
};

const player2 = {
    name: 'Kitana',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['gun','automat','baseball bat'],
    attac: function(){
        console.log(player2.name + ' Fight...')
    }
};

function creatPlayer(player,name,hp){
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = hp;
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);
    
    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';
    
    $character.appendChild($img);

}
creatPlayer('player1','Sub-Zero', '80');
creatPlayer('player2', 'Kitana', '50');



