/**---------- PLAN OF ACTION ----------**/
//Identify and Initialize State Variables
//init correctMatch value
//init wrongMatch value
//If player makes all matches, let winCondition runs
//If Player makes X amount of wrong matches loseCondition runs
//init board
//Code main render()
//Code Start/Retry buttons as initial renderer - same job
//Code main<divs> into gameboard("forest") using forEach array function
//Code click event listeners
//Code to either add +1 to correctMatch or +1 to wrongMatch determined on playerChoice function
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
// Each Selectable box
const boardEl = document.querySelectorAll('.box')
// contains both play and retry, both hold same function
const playButton = document.querySelectorAll('button')
//Contains entire Playing Field
const gameFieldEl = document.querySelectorAll('.gameField')

/**---------- INITIAL STATE VARIABLE ----------**/
let forest = []
let choice1 
let choice2
let correctMatch = 0
let wrongMatch = 0
let id = 0
/**---------- FUNCTIONS ----------**/
//ON CLICK PLAY BUTTON - Creates Empty Grid , push random values then Add Event Listener to Each Choice
function initialLaunch() {
    forest = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    forest.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            let scatter = Math.floor(Math.random() * 6);
            cellVal * scatter
            return cellVal
        })
    console.log(forest)
    gameFieldEl.forEach((box) => {
        box.addEventListener('click', (e) => {
            playerTurn(e);
        });
    })
    render()
})}
function render() {
    // renderForest()
    determineWin()
}
// for (let i = 0; i < 25; i++) {

//RENDER GAME PLAYING FIELD//
// function renderForest(){
//     forest.forEach((colArr, colIdx) => {
//             const cellId = `x${colIdx}y${rowIdx}`
//             const cellEl = document.getElementById(cellId)
//             cellEl.style.backgroundColor = FORESTLOOKUP[cellVal]
//         })
//     })
// }

//DETERMINES IF MATCH IS TRUE OR FALSE
function playerChoice (choice1, choice2){ //Player Choice will always contain 2 choices
    if (choice1 === choice2){
        return correctMatch++ //if choices are equal return ++truthy value
        }else{
        return wrongMatch++ //if choice are different return ++falsey value
    }
}

//DETERMINES WIN
function determineWin(){
    const winner = (correctMatch === 6) //if player makes 6 correct matches, they win
    const loser = (wrongMatch === 4) //if player makes 4 wrong matches, they lose
    if (winner === true){
        return true
        }
    if(loser === true){
        return false
    }
}


//POWER RANGERS DRAGOFORCE GO!
initialLaunch()

/**---------- EVENT LISTENERS ----------**/