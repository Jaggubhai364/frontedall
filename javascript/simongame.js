let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let col = ['yellow', 'red', 'green', 'purple'];
let arr1 =[];

document.addEventListener('keypress', function () {
    if (!started) {
        started = true;
        console.log('game started');
        levelup();
    }
});

function gameflashup(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userflashup(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `level-${level}`;
    let randex = Math.floor(Math.random() * col.length);  // Use col.length to include all colors
    let randcolour = col[randex];
    gameseq.push(randcolour);
    let x = document.querySelector(`.${randcolour}`);
    gameflashup(x);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup,1000)
        }
    } else {
        h2.innerHTML = h2.innerHTML = `Wrong answer! Try again! Your score was <b>${level}</b>`;
        highestscore();
        setTimeout(reset,1000);

    }
}

function btnpres() {
    let btn = this;
    userflashup(btn);
    let usercolour = btn.getAttribute('id');  // Declared usercolour with let
    userseq.push(usercolour);
    checkans(userseq.length - 1);
}

let btns = document.querySelectorAll('.btn');
for (let btn of btns) {
    btn.addEventListener('click', btnpres);
}

    function reset() {
        userseq = [];
        gameseq = []; // Clear the game sequence
        started = false;
        level = 0;
        h2.innerText = 'Press any key to start';
    }
    
 

function highestscore(){
    arr1.push(level);
    let highestscore =Math.max(...arr1);
    console.log(`the highest score is ${highestscore}`);
    document.getElementById("highest-score").innerText = `highest score is ${highestscore}`;
}

