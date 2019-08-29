let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

//

document.getElementById('button-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !==1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.getElementById('player0-panel').classList.toggle('active');
        document.getElementById('player1-panel').classList.toggle('active');

    }
})
