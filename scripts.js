let mess = `" Hello, Pick any move to start the game "`;
let userMove = document.getElementById('your-move');
let compMoved = document.getElementById('comp-move');


let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0
}
    
function generateMove() {
    let randMove = '';
    let randNum = Math.random();
    if (randNum >= 2 / 3 && randNum) {
        randMove = 'Scissors';
        // compMove.src = 'images/scissor.png';
        return randMove;
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        randMove = 'Paper';
        // compMove.src = 'images/paper.png';
        return randMove;
    }
    else if (randNum > 0 && randNum < 1 / 3) {
        randMove = 'Rock';
        // compMove.src = 'images/rock.png';
        return randMove;
    }

}

function userRock(randMove) {
    // disCompMove(randMove);
    userMove.style.backgroundImage = "url('images/rock.png')";
    if (randMove === 'Rock') {
        score.tie++;
        mess = '" Tie. "';
    }
    else if (randMove === 'Paper') {
        score.loss++;
        mess = '" You Loose. "';
    }
    else if (randMove === 'Scissors') {
        score.wins++;
        mess = '" You Win. "';
    }
    store();
    display();
}

function userPaper(randMove) {
    // disCompMove(randMove);
    userMove.style.backgroundImage = "url('images/paper.png')";
    
    if (randMove === 'Rock') {
        score.wins++;
        mess = '" You Win. "';
    }
    else if (randMove === 'Paper') {
        score.tie++;
        mess = '" Tie. "';
    }
    else if (randMove === 'Scissors') {
        score.loss++;
        mess = '" You Loose. "';
    }
    store();
    display();
}

function userScissors(randMove) {
    // disCompMove(randMove);
    userMove.style.backgroundImage = "url('images/scissor.png')";
    if (randMove === 'Rock') {
        score.loss++;
        mess = '" You Loose. "';
    }
    else if (randMove === 'Paper') {
        score.wins++;
        mess = '" You Win. "';
    }
    else if (randMove === 'Scissors') {
        score.tie++;
        mess = '" Tie. "';
    }
    store();
    display();
}

function resetScore() {
    score.wins = 0;
    score.loss = 0;
    score.tie = 0;
    mess = `" Score has been reset "`;
    display();
    localStorage.removeItem('score');
}

function display() {
    document.getElementById('mess-output').innerHTML = mess;
    document.getElementById('dis-win').innerHTML = score.wins;
    document.getElementById('dis-loss').innerHTML = score.loss;
    document.getElementById('dis-tie').innerHTML = score.tie;
}

function store(){
    localStorage.setItem('score',JSON.stringify(score));
}

function disCompMove(randMove){
    if(randMove === 'Rock'){
        compMoved.style.backgroundImage = "url('images/rock.png')";
    }if(randMove === 'Paper'){
        compMoved.style.backgroundImage = "url('images/paper.png')";
    }if(randMove === 'Scissors'){
        compMoved.style.backgroundImage = "url('images/scissor.png')";
    }
}

document.getElementById('mess-output').innerHTML = mess;
document.getElementById('dis-win').innerHTML = score.wins;
document.getElementById('dis-loss').innerHTML = score.loss;
document.getElementById('dis-tie').innerHTML = score.tie;