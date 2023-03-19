const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    //0 - 30 랜덤 숫자 생성
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    //키보드 방향키 입력시 방향값 전환
    if(e.key === "ArrowUp") {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowDown") {
        velocityX = 1;
        velocityY = 0;
    } else if(e.key === "ArrowLeft") {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowRight") {
        velocityX = 0;
        velocityY = 1;
    }
    initGame();
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    //방향전환 값 업데이트
    snakeX += velocityX;
    snakeY += velocityY;

    htmlMarkup += `<div class="head" style="grid-area: ${snakeX} / ${snakeY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);