
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game(playerItem){
    //Rock = 0, Paper = 1, Scissor = 2 
    let compItem = getRandomInt(0,2);

    switch(playerItem){
        case 0:
            if (compItem == 1){
                //player lose
            }else if(compItem == 2){
                //player wins
            }
            break;
        case 1:
            if (compItem == 2){
                //player lose
            }else if(compItem == 0){
                //player wins
            }
            break;
        case 2:
            if (compItem == 0){
                //player lose
            }else if(compItem == 1){
               //player wins
            }
            break;
    }

}
