/**---------- PLAN OF ACTION ----------**/
//Identify and Initialize State Variables
const forest = {
    0:'', //empty space
    1:'tree', //hiding spot
    2:'goblins1', //goblin_match_pair 1
    3:'goblins2', //goblin_match_pair 2
    4:'goblins3', //goblin_match_pair 3
    5:'goblins4', //goblin_match_pair 4
    6:'goblins5', //goblin_match_pair 5
    7:'goblins6', //goblin_match_pair 6
}

let playerChoice = (choice1, choice2) =>//Player Choice will always contain 2 choices
    if (choice1 === choice2) {
        return correctChoice++ //if choices are equal return truthy value
    }else{
        return wrongChoice++ //if choice are different return falsey value
    }
}

//If player makes all matches, let winCondition runs
let winner = (correctChoice === 6)

//If Player makes 3 wrong matches loseCondition runs
let loser = (wrongChoice === 3)

//init correct value
let correctChoice = 0

//init wrong value
let wrongChoice = 0

//init board
let boardArr= null

//Code main render()
function render() {}

//Code Start/Retry buttons as initial renderer - same job
function start() {}

//Code main<divs> into gameboard("forest") using forEach array function
function renderForest(){
    boardArr= 
    [0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0]
}

//Code function to place 6 pairs of goblins and after 10 seconds cover all tiles 

//Code click event listeners
let choice1 = ()
let choice2 =()
//Code function to reveal 2 goblins or empty tiles beneath and compare values

//Code to either recover tiles or add +1 to goblinsFound

//Code winCondition
function winCon() {
//if value of matches === correctMatch return end game win

}


/**---------- CONSTANTS ----------**/

/**---------- CACHED ELEMENT REFs ----------**/
const boardEl = document.querySelectorAll('.box')
const playButton = document.querySelectorAll('button')
const timer = document.querySelectorAll('timer')
/**---------- INITIAL STATE VARIABLE ----------**/

/**---------- FUNCTIONS ----------**/

/**---------- EVENT LISTENERS ----------**/