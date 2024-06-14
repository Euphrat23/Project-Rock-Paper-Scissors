let compScore = 0;
let playerScore = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game(playerItem){
    //Rock = 0, Paper = 1, Scissor = 2 
    let compItem = getRandomInt(0,2);
    let items = ["&#9994;", "&#9995;", "&#9996;"];

    document.getElementById('itemOfPlayer').innerHTML = items[playerItem];
    document.getElementById('itemOfComp').innerHTML = items[compItem];

    switch(playerItem){
        
        case 0:
            if (compItem == 1){
                document.getElementById('text').innerHTML = "Paper beats Rock.<br / >You lose!";
                compScore++;
            }else if(compItem == 2){
                document.getElementById('text').innerHTML = "Rock beats Scissor.<br / >You win!";
                playerScore++;
            }else{
                document.getElementById('text').innerHTML = "Rock can not beat Rock.<br / >draw!";
            }
            break;
        case 1:
            if (compItem == 2){
                document.getElementById('text').innerHTML = "Scissor beats Paper.<br / >You lose!";
                compScore++;
            }else if(compItem == 0){
                document.getElementById('text').innerHTML = "Paper beats Rock.<br / >You win!";
                playerScore++;
            }else {
                document.getElementById('text').innerHTML = "Paper can not beat Paper.<br / >draw!";
            }
            break;
        case 2:
            if (compItem == 0){
                document.getElementById('text').innerHTML = "Rock beats Scissor.<br / >You lose!";
                compScore++;
            }else if(compItem == 1){
                document.getElementById('text').innerHTML = "Scissor beats Paper.<br / >You win!";
                playerScore++;
            }else{
                document.getElementById('text').innerHTML = "Scissor can not beat Scissor.<br / >draw!";
            }
            break;
    }

    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('playerScore').innerHTML = playerScore;

}

function reset() {
    location.reload(); // Diese Methode lädt die Seite neu
}