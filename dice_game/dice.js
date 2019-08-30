// the rules are as follows:
// you roll two sixes; you lose all your points
// you roll a one, on either dice, you lose your current score
// you determine the score to reach; if not, defualt is 100

let scores, roundScore, activePlayer, gamePlaying, lastRolled;

init();

document.getElementById('button-new').addEventListener('click', init);
document.getElementById('button-roll').addEventListener('click', rollTheDice);
document.getElementById('button-hold').addEventListener('click', keepMyScore);
document.getElementById('points-to-win').addEventListener('input', changePointsToWin);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // lastRolled = 0;
    pointsToWin = 100;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('second-dice').style.display = 'none';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('points-to-win').value = '100';
    document.getElementById('player-0-panel').classList.remove('winner');
    document.getElementById('player-1-panel').classList.remove('winner');
    document.getElementById('player-0-panel').classList.remove('active');
    document.getElementById('player-1-panel').classList.remove('active');

    document.getElementById('player-0-panel').classList.add('active');
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function rollTheDice() {
    if (gamePlaying) {
        let dice = generateRandomNumber(1, 6);
        let secondDice = generateRandomNumber(1, 6);
        console.log(dice, secondDice);
        let diceDom = document.querySelector('.dice');
        let secondDiceDom = document.getElementById('second-dice');
        diceDom.style.display = 'block';
        secondDiceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        secondDiceDom.src = 'dice-' + secondDice + '.png';

        if (dice === 6 && secondDice === 6) {
            alert("Doube 6's!! >.< .. you lose it all!!");
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('second-dice').style.display = 'none';
            nextPlayer();
        } else if (dice === 1 || secondDice === 1) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = 0;
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('second-dice').style.display = 'none';
            alert('one dice rolled a one.. boo hoo :(');
            nextPlayer();
        } else {
            roundScore += dice + secondDice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
}

function keepMyScore() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('second-dice').style.display = 'none';

        if (scores[activePlayer] >= pointsToWin) {
            document.querySelector('#name-' + activePlayer).textContent = "WINNER!!";
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('second-dice').style.display = 'none';
            document.getElementById('player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('player-' + activePlayer + '-panel').classList.remove('active');
            // document.getElementById('button-hold').style.display = 'none';
            // document.getElementById('button-roll').style.display = 'none';
            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }
}

function changePointsToWin() {
    pointsToWin = this.value;
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // lastRolled = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('player-0-panel').classList.toggle('active');
    document.getElementById('player-1-panel').classList.toggle('active');
}
