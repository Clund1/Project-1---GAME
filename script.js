/**---------- PLAN OF ACTION ----------**/
//Identify and Initialize State Variables
//init correctChoice value
//init wrong value
//If player makes all matches, let winCondition runs
//If Player makes 3 wrong matches loseCondition runs
//init board
//Code main render()
//Code Start/Retry buttons as initial renderer - same job
//Code main<divs> into gameboard("forest") using forEach array function
//Code click event listeners
//Code to either recover tiles or add +1 to goblinsFound
//Code winCondition

/**---------- CONSTANTS ----------**/
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
/**---------- CACHED ELEMENT REFs ----------**/
// contains playing field
const boardEl = document.querySelectorAll('.box')
// contains both play and retry, both hold same function
const playButton = document.querySelectorAll('button')

/**---------- INITIAL STATE VARIABLE ----------**/
let boardArr= null
let choice1 
let choice2
let correctMatch = 0
let wrongMatch = 0
/**---------- FUNCTIONS ----------**/
function start() {
    renderForest()
}
//RENDER GAME PLAYING FIELD//
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
    })
}}
//DETERMINES IF MATCH IS TRUE OR FALSE
let playerChoice = (choice1, choice2) =>{//Player Choice will always contain 2 choices
    if (choice1 === choice2){
        return correctMatch++ //if choices are equal return truthy value
        }else{
        return wrongMatch++ //if choice are different return falsey value
    }
}
//Determines WIN
function determineWin(){
    const winner = (correctMatch === 6)
    const loser = (wrongMatch === 4)
    if (winner === true){
        return true
        }
    if(loser === true){
        return false
    }
}
console.log(determineWin())
/**---------- EVENT LISTENERS ----------**/
