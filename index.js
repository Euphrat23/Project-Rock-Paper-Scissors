
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game(playerItem){
    //Rock = 1, Paper = 2, Scissor = 3 
    let compItem = getRandomInt(1,3);

    switch(playerItem){
        case 1:
            if (compItem = 1){
                //draw
            }
            break;
            case 2:
    }

}
