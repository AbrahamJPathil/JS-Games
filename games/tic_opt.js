let win_sound = new Audio("win.m4a");
let lose_sound = new Audio("fail.m4a");
let alert_sound = new Audio("alert.m4a");

let i = 1, j = 0;
let flag1 = false, flag2 = false;
let player1 = [], player2 = [];
let grid_stat = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let x_btn = document.querySelector("#x");
let y_btn = document.querySelector("#y");
let message_window = document.querySelector("#game-messages");

let b1 = document.querySelector("#one");
let b2 = document.querySelector("#two");
let b3 = document.querySelector("#thr");
let b4 = document.querySelector("#for");
let b5 = document.querySelector("#fiv");
let b6 = document.querySelector("#six");
let b7 = document.querySelector("#sev");
let b8 = document.querySelector("#ei");
let b9 = document.querySelector("#non");

function startGame() {
    if (flag1 && flag2) {
        game();
    }
}

function alloc() {
    return grid_stat.includes(0) ? 0 : 1;
}

function ifwon(curr_ele) {
    if (
        (grid_stat[0] === curr_ele && grid_stat[1] === curr_ele && grid_stat[2] === curr_ele) ||
        (grid_stat[3] === curr_ele && grid_stat[4] === curr_ele && grid_stat[5] === curr_ele) ||
        (grid_stat[6] === curr_ele && grid_stat[7] === curr_ele && grid_stat[8] === curr_ele) ||
        (grid_stat[0] === curr_ele && grid_stat[3] === curr_ele && grid_stat[6] === curr_ele) ||
        (grid_stat[1] === curr_ele && grid_stat[4] === curr_ele && grid_stat[7] === curr_ele) ||
        (grid_stat[2] === curr_ele && grid_stat[5] === curr_ele && grid_stat[8] === curr_ele) ||
        (grid_stat[0] === curr_ele && grid_stat[4] === curr_ele && grid_stat[8] === curr_ele) ||
        (grid_stat[2] === curr_ele && grid_stat[4] === curr_ele && grid_stat[6] === curr_ele)
    ) {
        message_window.innerText = `Player ${curr_ele} has WON the Game!!! Refreshing in 10s`;
        win_sound.play();
        setTimeout(() => location.reload(), 10000);
        return true;
    }
    return false;
}

x_btn.addEventListener("click", () => {
    if (!flag1) {
        player1 = ['X'];
        player2 = ['O'];
        flag1 = true;
        flag2 = true;
        message_window.innerText = 'Player 1 has chosen X, Player 2 is O. Game starts!';
        startGame();
    }
});

y_btn.addEventListener("click", () => {
    if (!flag1) {
        player1 = ['O'];
        player2 = ['X'];
        flag1 = true;
        flag2 = true;
        message_window.innerText = 'Player 1 has chosen O, Player 2 is X. Game starts!';
        startGame();
    }
});


function box_check(index, b) {
    if (grid_stat[index] !== 0) {
        message_window.innerText = 'Position already occupied';
        alert_sound.play();
        return;
    }

    let currentPlayer = i > j ? 1 : 2;
    let symbol = currentPlayer === 1 ? player1[0] : player2[0];

    b.innerText = symbol;
    grid_stat[index] = currentPlayer;

    if (!ifwon(currentPlayer) && alloc()) {
        message_window.innerText = 'No one won the game, refreshing in 10s';
        lose_sound.play();
        setTimeout(() => location.reload(), 10000);
    }

    i > j ? i-- : j++;
}

function game() {
    b1.addEventListener("click", () => box_check(0, b1));
    b2.addEventListener("click", () => box_check(1, b2));
    b3.addEventListener("click", () => box_check(2, b3));
    b4.addEventListener("click", () => box_check(3, b4));
    b5.addEventListener("click", () => box_check(4, b5));
    b6.addEventListener("click", () => box_check(5, b6));
    b7.addEventListener("click", () => box_check(6, b7));
    b8.addEventListener("click", () => box_check(7, b8));
    b9.addEventListener("click", () => box_check(8, b9));
}
