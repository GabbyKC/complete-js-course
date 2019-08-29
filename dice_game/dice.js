let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('button-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !==1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.getElementById('button-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner Winner, Chicken Dinner";
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('player-' + activePlayer + '-panel').classList.add('winner');
        document.getElementById('player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('player-0-panel').classList.toggle('active');
    document.getElementById('player-1-panel').classList.toggle('active');
}
