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
const goblinEl = document.querySelectorAll('.goblin')
// contains both play and retry, both hold same function
const playButton = document.querySelector('button')
//Contains entire Playing Field
const forestEl = document.querySelectorAll('.forest')
//Contains Win/Loss Message
const messageEl = document.querySelectorAll('.winLoseMessage')
//Contains Amouunts of correct/incorrect Matches
const matchesEl = document.querySelector('.matches')

/**---------- INITIAL STATE VARIABLE ----------**/
let forest = [];
let choice1;
let choice2;
let correctMatch = 0;
let wrongMatch = 0;
let id = 0;
let i = 0;
let hidingSpots;
let tileArrPosition = 0;

/**---------- FUNCTIONS ----------**/
//ON CLICK PLAY BUTTON - Creates Empty Grid , push random values then Add Event Listener to Each Choice
function initialLaunch() {
    forest = {
        goblins: [],
        generateHidingSpots() {
            for (let i = 0; i < 5; i++) {
                arr = [];
                for (let j = 0; j < 5; j++) {
                const randomNumber = Math.floor(Math.random() * 8); 
                arr.push(randomNumber);
                }
                this.goblins.push(arr)
            }
        }
    }
    forest.generateHidingSpots() //This generates random spawn of goblins on forest
    goblinEl.forEach((tile) =>{
            id = tile.id;
            tileArrPosition = forest.goblins[parseInt(id[1])][parseInt(id[3])]; // takes ID of each goblin space to formulate reference
            console.log(tileArrPosition);
            tile.style.backgroundColor = FORESTLOOKUP[tileArrPosition]; //uses FORESTLOOKUP to ref. background color/url choice
    })
setTimeout(hide,5000); //5 seconds to memorize then hide
}

//HIDES CHOICES
function hide(){
    goblinEl.style.visibility = "hidden";
}

//TAKES INFO FOR FIRST CLICK



//DETERMINES IF MATCH IS TRUE OR FALSE
function playerChoice (choice1, choice2){ //Player Choice will always contain 2 choices
    if (choice1 === choice2){
        return correctMatch++; //if choices are equal return ++truthy value
        }else{
        return wrongMatch++; //if choice are different return ++falsey value
    }
}

//DETERMINES WIN
function determineWin(){
    const winner = (correctMatch === 6); //if player makes 6 correct matches, they win
    const loser = (wrongMatch === 4); //if player makes 4 wrong matches, they lose
    if (winner === true){ //if WIN remove gameboard and add win text
        forest.style.display = "none"
        messageEl.innerText = 'YOU HAVE WON!';
        }
    if(loser === true){ // if LOSE remove gameboard and add loss text
        forest.style.display = "none";
        messageEl.innerText = 'YOU HAVE LOST!';
    }
}


//POWER RANGERS DRAGONFORCE GO!

/**---------- EVENT LISTENERS ----------**/

//Launch Button
playButton.addEventListener ('click', () =>{
    initialLaunch(); //launches gameboard
    playButton.style.backgroundColor = "brown";// 'hides' functionality
    playButton.style.color = "warm grey";

});

//Takes tileArrPosition of goblin div and gives it to choice1 or choice 2
    //on click of goblin tile store tileArrPosition
// goblinEl.addEventListener('click',()=>{
//     for (tileArrPosition of goblinEl)

//     })

