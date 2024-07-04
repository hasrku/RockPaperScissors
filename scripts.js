let mess = `" Hello, Pick any move to start the game "`;
let wins = 0;
let loss = 0;
let tie = 0;

function generateMove() {
    let randMove = '';
    let randNum = Math.random();
    if (randNum >= 2 / 3 && randNum) {
        randMove = 'Scissors';
        return randMove;
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        randMove = 'Paper';
        return randMove;
    }
    else if (randNum > 0 && randNum < 1 / 3) {
        randMove = 'Rock';
        return randMove;
    }

}

function userRock(randMove) {

    let result = '';
    if (randMove === 'Rock') {
        tie++;
        result = ', Tie.';
    }
    else if (randMove === 'Paper') {
        loss++;
        result = ', you Loose.';
    }
    else if (randMove === 'Scissors') {
        wins++;
        result = ', you Win.';
    }
    mess = `" Computer picked ${randMove} and you picked Rock${result} "`;
    display();
}

function userPaper(randMove) {

    let result = '';
    if (randMove === 'Rock') {
        wins++;
        result = ', you Win.';
    }
    else if (randMove === 'Paper') {
        tie++;
        result = ', Tie.';
    }
    else if (randMove === 'Scissors') {
        loss++;
        result = ', you Loose.';
    }
    mess = `" Computer picked ${randMove} and you picked Paper${result} "`;
    display();
}

function userScissors(randMove) {

    let result = '';
    if (randMove === 'Rock') {
        loss++;
        result = ', you Loose.';
    }
    else if (randMove === 'Paper') {
        wins++;
        result = ', you Win.';
    }
    else if (randMove === 'Scissors') {
        tie++;
        result = ', Tie.';
    }
    mess = `" Computer picked ${randMove} and you picked Scissors${result} "`;
    display();
}

function resetScore(){
    wins = 0;
    loss = 0;
    tie = 0;
    mess = `" Score has been reset "`;
    display();
}

function display() {
    document.getElementById('messa').innerHTML = mess;
    document.getElementById('dis-win').innerHTML = wins;
    document.getElementById('dis-loss').innerHTML = loss;
    document.getElementById('dis-tie').innerHTML = tie;
}

document.getElementById('messa').innerHTML = mess;
document.getElementById('dis-win').innerHTML = wins;
document.getElementById('dis-loss').innerHTML = loss;
document.getElementById('dis-tie').innerHTML = tie;