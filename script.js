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
    0:'url(imgs/Goblin0.png)', //empty space
    1:'url(imgs/Goblin1.png)', //hiding spot
    2:'url(imgs/Goblin2.png)', //goblin_match_pair 1
    3:'url(imgs/Goblin3.png)', //goblin_match_pair 2
    4:'url(imgs/Goblin4.png)', //goblin_match_pair 3
    5:'url(imgs/Goblin5.png)', //goblin_match_pair 4
    6:'url(imgs/Goblin6.png)', //goblin_match_pair 5
    7:'url(imgs/Goblin7.png)' //goblin_match_pair 6
}
/**---------- CACHED ELEMENT REFs ----------**/
// Each Selectable box
const goblinEls = document.querySelectorAll('.goblin')
// contains both play and retry, both hold same function
const playButton = document.querySelector('button')
//Contains entire Playing Field
const forestEl = document.querySelectorAll('.forest')
//Contains Win/Loss Message
const messageEl = document.querySelectorAll('.winLoseMessage')
//Contains Amount of correctMatches
const correctMatchesEl = document.querySelector('.correctMatches')
//Contains Amount of wrongMatches
const wrongMatchesEl = document.querySelector('.wrongMatches')

/**---------- INITIAL STATE VARIABLE ----------**/
let forest = [];
let choice1;
let choice2;
let correctMatch = 0;
let wrongMatch = 0;
let id;
let i = 0;
let hidingSpots;
let tileArrPosition;
let tile1;
let tile2;
/**---------- FUNCTIONS ----------**/
//ON CLICK PLAY BUTTON -  then Add Event Listener to Each Choice
function initialLaunch() {
    forest = {
        goblins: [], //Creates Empty Grid
        generateHidingSpots() {
            for (let i = 0; i < 5; i++) {
                arr = [];
                for (let j = 0; j < 5; j++) {
                const randomNumber = Math.floor(Math.random() * 8); 
                arr.push(randomNumber);
                }
                this.goblins.push(arr) // use random math to push random goblins into array filling grid
            }
        }
    }
    forest.generateHidingSpots() //This generates which goblins ppear in which spot
    goblinEls.forEach((tile) =>{
            id = tile.id;
            tileArrPosition = forest.goblins[parseInt(id[1])][parseInt(id[3])]; // takes ID of each goblin space to formulate reference
            tile.style.backgroundImage = FORESTLOOKUP[tileArrPosition]; //uses FORESTLOOKUP to ref. background image choice
            })
    setTimeout(hide,5000); //5 seconds to memorize then the goblins hide
}

//HIDES CHOICES
function hide(){
    goblinEls.forEach((goblin) =>{
        goblin.style.backgroundImage = "";
    })
}

//HANDLE PLAYER TURN (EVENT LISTENER 'CLICK' GATHERS THE [tileArrPosition] OF EACH CLICK => OUTPUT to playerChoice input Choice1 || Choice2)

//Takes tileArrPosition of goblinsEl tile and gives to choice1 || choice 2
goblinEls.forEach((tile) => {
    tile.addEventListener('click',() => {
        id = tile.id
        tileArrPosition = forest.goblins[parseInt(id[1])][parseInt(id[3])]
        //console.log(id)
        tile.style.backgroundImage = FORESTLOOKUP[tileArrPosition]
        if(!choice1){//If choice1 has no value
            choice1 = tileArrPosition; //give choice1 value of tileArrPos.
        //declare choice1 coordinates to global var
        }else if(!choice2){ //If choice1 has value, look for value at choice2
            choice2 = tileArrPosition; //If no value found, give choice2 value of tileArrPos.
        //declare choice2 to global variable
            checkForMatch(choice1,choice2) //compare choices & ++correctMatch || ++wrongMatch
            console.log("this is wrongMatch", wrongMatch) 
            console.log("this is correctMatch", correctMatch)
            determineWin() //Check for when wrongMatch || correctMatch functions are met.. if so LET IT RIP and end game
        }
    })
})

//DETERMINES IF MATCH IS TRUE OR FALSE
function checkForMatch (c1, c2){ //Player Choice will always contain 2 choices
    if (c1 === c2){
        choice1 = null;
        choice2 = null; 
        console.log("We got ONE!")  ; 
        return correctMatch++; //if choices are equal return ++truthy value
    }else{
        console.log()
        choice1 = null;//empty choice1
        choice2 = null;//empty choice2
        console.log("We Dont Got One!");
        return wrongMatch++;
    }
}

//SHOWS WIN LOSE VALUES
function renderScore(){
    correctMatchesEl.innerText = `${correctMatch}`;
    wrongMatchesEl.innerText =  `${wrongMatch}`;
}

//DETERMINES WIN
function determineWin(){
    const winner = (correctMatch === 6); //if player makes 6 correct matches, they win
    const loser = (wrongMatch === 4); //if player makes 4 wrong matches, they lose
    if (winner === true){ //if WINNER remove gameboard and add win text
        forest.style.display = "none"
        messageEl.innerText = 'YOU HAVE WON!';
        }
    if(loser === true){ // if LOSER remove gameboard and add loss text
        forest.style.display = "none";
        messageEl.innerText = 'YOU HAVE LOST!';
        playButton.style.backgroundColor = "antiqueWhite";// 'hides' functionality
        playButton.style.color = "black";
    }
}


//POWER RANGERS DRAGONFORCE GO!

/**---------- EVENT LISTENERS ----------**/

//Launch Button
playButton.addEventListener ('click', () =>{
    initialLaunch(); //launches gameboard
    playButton.style.backgroundColor = "brown";// shows 'change' in functionality
    playButton.style.color = "burlywood";
    correctMatch = 0;
    wrongMatch = 0;

});