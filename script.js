let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
let ballDirectionX = 0
let ballDirectionY = 0
let player = {
    x: 20,
    y: canvas.height / 2 - 20,
    width: 8,
    height: 40,
    velocity: 5
}
let adversary = {
    x: canvas.width - 28,
    y: canvas.height / 2 - 20,
    width: 8,
    height: 40,
    velocity: 5
}
let ball = {
    x: canvas.width / 2 - 4,
    y: canvas.height / 2 - 4,
    width: 8,
    height: 8
}

function draw() {
    //clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)
    //player
    context.fillStyle = "#8165ff"
    context.fillRect(player.x, player.y, player.width, player.height)
    //adversary
    context.fillStyle = "#ff6596"
    context.fillRect(adversary.x, adversary.y, adversary.width, adversary.height)
    //ball
    context.fillStyle = "#fff"
    context.fillRect(ball.x, ball.y, ball.width, ball.height)
}

function checkBallCollision() {
    if (ball.x <= 0 || ball.x >= canvas.width - ball.height) {
        ballDirectionX = -ballDirectionX
    }
    if (ball.y <= 0 || ball.y >= canvas.height - ball.height) {
        ballDirectionY = -ballDirectionY
    }
}

function update() {
    checkBallCollision()
    
    ball.x += ballDirectionX
    ball.y += ballDirectionY
}

let gameLoop = () => setInterval(() => { draw(); update() }, 1000 / 60);

function startGame() {
    Math.round(Math.random()) == 1 ? ballDirectionX = 1 : ballDirectionX = -1
    Math.round(Math.random()) == 1 ? ballDirectionY = 1 : ballDirectionY = -1

    gameLoop()
}

startGame()