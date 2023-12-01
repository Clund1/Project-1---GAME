/**---------- PLAN OF ACTION ----------**/
//Identify and Initialize State Variables
const FORESTLOOKUP = {
    0:'', //empty space
    1:'brown', //hiding spot
    2:'green', //goblin_match_pair 1
    3:'blue', //goblin_match_pair 2
    4:'red', //goblin_match_pair 3
    5:'purple', //goblin_match_pair 4
    6:'turquoise', //goblin_match_pair 5
    7:'orange' //goblin_match_pair 6
}

//init correct value
let correctChoice = 0

//init wrong value
let wrongChoice = 0

let playerChoice = (choice1, choice2) =>//Player Choice will always contain 2 choices
    {if (choice1 === choice2){
        return correctChoice++ //if choices are equal return truthy value
        }else{
        return wrongChoice++ //if choice are different return falsey value
    }
}

//If player makes all matches, let winCondition runs
let winner = (correctChoice === 6)

//If Player makes 3 wrong matches loseCondition runs
let loser = (wrongChoice === 3)

//init board
let boardArr= null

//Code main render()
function render() {}

//Code Start/Retry buttons as initial renderer - same job
function start() {}

//Code main<divs> into gameboard("forest") using forEach array function
function renderForest(){
    boardArr= []
    for (let i = 0; i < 25; i++) {
        boardArr.push(Math.floor(Math.random() * 6))
    }
    let tiles= document.querySelectorAll(".box")

    tiles.forEach((tile)=>{
        tile.addEventListener('click',()=>{
            id = tile.id
            tileArrPosition = boardArr[id]
            tile.style.backgroundColor = FORESTLOOKUP[tileArrPosition]
            console.log ("Forest contains ",boardArr)
            console.log ("Id is ",id)
            console.log ("tileArrPosition is ", tileArrPosition)
            console.log(FORESTLOOKUP[tileArrPosition])
            console.log(tile)
        })
    })
}
renderForest()

//Code function to place 6 pairs of goblins and after 10 seconds cover all tiles 

//Code click event listeners
let choice1 
let choice2
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
/**---------- INITIAL STATE VARIABLE ----------**/

/**---------- FUNCTIONS ----------**/

/**---------- EVENT LISTENERS ----------**/