//variables
const mainMenu = document.getElementById("start");
const buttonPlay = document.getElementById("button_play");
const gameOverScreen1 = document.getElementById("game_over1");
const gameOverScreen2 = document.getElementById("game_over2");
const buttonRestart1 = document.getElementById("button_restart1");
const buttonRestart2 = document.getElementById("button_restart2");
const buttonRestart3 = document.getElementById("button_restart3");
const levelCompleteScreen = document.getElementById("level_complete");
const codHorizontal1 = document.getElementById("cod_container_x1");
const codContainer1 = document.getElementById("cod_container1");
const codSprite1 = document.getElementById("cod_sprite1");
const codHorizontal2 = document.getElementById("cod_container_x2");
const codContainer2 = document.getElementById("cod_container2");
const codSprite2 = document.getElementById("cod_sprite2");
const codHorizontal3 = document.getElementById("cod_container_x3");
const codContainer3 = document.getElementById("cod_container3");
const codSprite3 = document.getElementById("cod_sprite3");
const codHorizontal4 = document.getElementById("cod_container_x4");
const codContainer4 = document.getElementById("cod_container4");
const codSprite4 = document.getElementById("cod_sprite4");
const codHorizontal5 = document.getElementById("cod_container_x5");
const codContainer5 = document.getElementById("cod_container5");
const codSprite5 = document.getElementById("cod_sprite5");
const cucumberHorizontal1 = document.getElementById("cucumber_container_x1");
const cucumberContainer1 = document.getElementById("cucumber_container1");
const cucumberSprite1 = document.getElementById("cucumber_sprite1");
const cucumberHorizontal2 = document.getElementById("cucumber_container_x2");
const cucumberContainer2 = document.getElementById("cucumber_container2");
const cucumberSprite2 = document.getElementById("cucumber_sprite2");
const cucumberHorizontal3 = document.getElementById("cucumber_container_x3");
const cucumberContainer3 = document.getElementById("cucumber_container3");
const cucumberSprite3 = document.getElementById("cucumber_sprite3");
const currentScoreDisplay = document.getElementById("current_score");
const lifeDisplay = document.getElementById("energy_bar");
const scoreDisplay = document.getElementById("score_bar");
const gameTimer = document.getElementById("time_bar");
const internalClock = document.getElementById("time_board");
const countDownDisplay = document.getElementById("time_text");
const currentLifeDisplay = document.getElementById("current_life");

let currentScore;
let currentLife;
let posRandom;
let heightRandom;
let delayRandom;
let horizontalRandom;
let speedRandom;
let timeLeft;
let soundRandom;

//wait for page load
window.addEventListener("load", pageLoad);

function pageLoad() {
  //console.log("pageLoad");

  //show main menu screen
  mainMenu.classList.remove("hide");

  //hide other screens
  gameOverScreen1.classList.add("hide");
  gameOverScreen2.classList.add("hide");
  levelCompleteScreen.classList.add("hide");

  //start game
  buttonPlay.addEventListener("click", gameStart);
}

function gameStart() {
  //console.log("gameStart");

  //hide other screens
  mainMenu.classList.add("hide");
  gameOverScreen1.classList.add("hide");
  gameOverScreen2.classList.add("hide");
  levelCompleteScreen.classList.add("hide");

  //reset score to 0 and life to 3
  currentScore = 0;
  scoreDisplay.style.width = "0%";
  currentScoreDisplay.textContent = 0;

  currentLife = 3;
  lifeDisplay.classList = "life3";
  currentLifeDisplay.textContent = 3 * 3;

  //reset timer
  timeLeft = 60;
  countDownDisplay.textContent = "time: 60";

  //start animations on cod and assign a random position and jump height
  //cod1
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  codHorizontal1.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  codContainer1.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cod2
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  codHorizontal2.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  codContainer2.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cod3
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  codHorizontal3.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  codContainer3.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cod4
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  codHorizontal4.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  codContainer4.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cod5
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  codHorizontal5.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  codContainer5.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //start animations on sea cucumber and assign a random position
  //cucumber1
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 5) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  cucumberHorizontal1.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  cucumberContainer1.classList.add("cucumber_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cucumber2
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 5) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  cucumberHorizontal2.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  cucumberContainer2.classList.add("cucumber_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //cucumber3
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 5) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  cucumberHorizontal3.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );

  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  cucumberContainer3.classList.add("cucumber_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);

  //add eventlisteners to elements
  //cod on click
  codContainer1.addEventListener("mousedown", clickGoodHandler);
  codContainer2.addEventListener("mousedown", clickGoodHandler);
  codContainer3.addEventListener("mousedown", clickGoodHandler);
  codContainer4.addEventListener("mousedown", clickGoodHandler);
  codContainer5.addEventListener("mousedown", clickGoodHandler);

  //cod click respawn
  codSprite1.addEventListener("animationend", goodRespawnClicked);
  codSprite2.addEventListener("animationend", goodRespawnClicked);
  codSprite3.addEventListener("animationend", goodRespawnClicked);
  codSprite4.addEventListener("animationend", goodRespawnClicked);
  codSprite5.addEventListener("animationend", goodRespawnClicked);

  //cod not clicked
  codContainer1.addEventListener("animationend", goodReset);
  codContainer2.addEventListener("animationend", goodReset);
  codContainer3.addEventListener("animationend", goodReset);
  codContainer4.addEventListener("animationend", goodReset);
  codContainer5.addEventListener("animationend", goodReset);

  //cucumber on click
  cucumberContainer1.addEventListener("mousedown", clickBadHandler);
  cucumberContainer2.addEventListener("mousedown", clickBadHandler);
  cucumberContainer3.addEventListener("mousedown", clickBadHandler);

  //cucumber respawn when clicked
  cucumberContainer1.addEventListener("animationend", badReset);
  cucumberContainer2.addEventListener("animationend", badReset);
  cucumberContainer3.addEventListener("animationend", badReset);

  //start game timer
  gameTimer.classList.add("timer");
  internalClock.classList.add("internal_second_counter");

  internalClock.addEventListener("animationiteration", countDown);

  //time is up 60 seconds later
  gameTimer.addEventListener("animationend", stopGame);
}

//click on good
function clickGoodHandler() {
  //console.log(this);

  //pause cod animations
  this.parentElement.classList.add("animation_pause");
  this.classList.add("animation_pause");

  //add 2 points
  currentScore += 2;
  //update score
  currentScoreDisplay.textContent = currentScore;
  updateScore();

  //play a random sound
  soundRandom = Math.floor(Math.random() * 4) + 1;
  if (soundRandom == 1) {
    document.getElementById("sound_good1").currentTime = 0;
    document.getElementById("sound_good1").play();
  } else if (soundRandom == 2) {
    document.getElementById("sound_good2").currentTime = 0;
    document.getElementById("sound_good2").play();
  } else if (soundRandom == 3) {
    document.getElementById("sound_good3").currentTime = 0;
    document.getElementById("sound_good3").play();
  } else {
    document.getElementById("sound_good4").currentTime = 0;
    document.getElementById("sound_good4").play();
  }

  //start cod exit animation
  this.firstElementChild.classList.add("cod_click");
}

//reset good when clicked
function goodRespawnClicked() {
  //console.log(this);

  //remove all classes
  this.parentElement.parentElement.removeAttribute("class");
  this.parentElement.removeAttribute("class");
  this.removeAttribute("class");

  //force reflow
  this.offsetTop;

  //respawn cod with a random position
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 10) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  this.parentElement.parentElement.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );
  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  this.parentElement.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);
}

//reset good when not clicked
function goodReset(isContainer) {
  //checks for animationend on cod_container or cod_sprite, continue if it is #cod_container and ignore animationend on child #cod_sprite
  if (isContainer.target !== isContainer.currentTarget) return;
  //continue function after animationend on container
  else {
    //console.log(this);

    //remove all classes
    this.parentElement.removeAttribute("class");
    this.removeAttribute("class");
    this.firstElementChild.removeAttribute("class");

    //force reflow
    this.offsetTop;

    //lower limit of 0, score can't drop below 0
    if (currentScore <= 0) {
      currentScore = 0;
    } else {
      //remove 1 point
      currentScore -= 1;
      //update score
      currentScoreDisplay.textContent = currentScore;
      updateScore();
    }

    //respawn cod with a random position
    posRandom = Math.floor(Math.random() * 15) + 1;
    delayRandom = Math.floor(Math.random() * 10) + 1;
    horizontalRandom = Math.floor(Math.random() * 4) + 1;
    speedRandom = Math.floor(Math.random() * 5) + 1;

    this.parentElement.classList.add(
      "horizontal" + horizontalRandom,
      "pos" + posRandom,
      "delay" + delayRandom,
      "speed" + speedRandom
    );
    //assign a random jump height
    heightRandom = Math.floor(Math.random() * 3) + 1;
    this.classList.add("cod_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);
  }
}

/* //back-up, ignore
function goodReset() {
  console.log("goodReset");
  //remove all classes
  codHorizontal.removeAttribute("class");
  codContainer.removeAttribute("class");
  codSprite.removeAttribute("class");
  //force reflow
  codHorizontal.offsetTop;
  codContainer.offsetTop;
  //remove 1 point
  currentScore -= 1;
  //update score
  currentScoreDisplay.textContent = currentScore;
  //respawn cod
  codHorizontal.classList.add("cod_horizontal", "pos1");
  codContainer.classList.add("cod_jump");
}
*/

//click on bad
function clickBadHandler() {
  //console.log(this);

  //pause cucumber animations
  this.parentElement.classList.add("animation_pause");
  this.classList.add("animation_pause");

  //lower limit of 0, score can't drop below 0
  if (currentScore <= 0) {
    currentScore = 0;
  } else {
    //remove 5 points
    currentScore -= 5;
    //update score
    currentScoreDisplay.textContent = currentScore;
    updateScore();
  }

  //remove 1 life
  currentLife -= 1;
  checkLife();

  //play sound
  document.getElementById("sound_bad").currentTime = 0;
  document.getElementById("sound_bad").play();

  //start cucumber exit animation
  this.firstElementChild.classList.add("cucumber_click");
}

//bad reset
function badReset() {
  //console.log(this);

  //remove all classes
  this.parentElement.removeAttribute("class");
  this.removeAttribute("class");
  this.firstElementChild.removeAttribute("class");

  //force reflow
  this.offsetTop;

  //respawn cucumber with a random position
  posRandom = Math.floor(Math.random() * 15) + 1;
  delayRandom = Math.floor(Math.random() * 5) + 1;
  horizontalRandom = Math.floor(Math.random() * 4) + 1;
  speedRandom = Math.floor(Math.random() * 5) + 1;

  this.parentElement.classList.add(
    "horizontal" + horizontalRandom,
    "pos" + posRandom,
    "delay" + delayRandom,
    "speed" + speedRandom
  );
  //assign a random jump height
  heightRandom = Math.floor(Math.random() * 3) + 1;
  this.classList.add("cucumber_jump" + heightRandom, "delay" + delayRandom, "speed" + speedRandom);
}

//update score bar
function updateScore() {
  if (currentScore <= 0) {
    //lower limit of 0
    currentScore = 0;
    currentScoreDisplay.textContent = 0;
    scoreDisplay.style.width = "0%";
  } else if (currentScore >= 75) {
    //upper limit of 75
    scoreDisplay.style.width = "13.8%";
  } else {
    scoreDisplay.style.width = currentScore * 0.184 + "%";
  }
}

//keep track of lives
function checkLife() {
  //console.log("checkLife");
  if (currentLife == 2) {
    //change life from 3 to 2
    lifeDisplay.classList.replace("life3", "life2");
    currentLifeDisplay.textContent = currentLife * 3;

    //change life from 2 to 1
  } else if (currentLife == 1) {
    lifeDisplay.classList.replace("life2", "life1");
    currentLifeDisplay.textContent = currentLife * 3;

    //change life from 1 to 0
  } else if (currentLife == 0) {
    lifeDisplay.classList.replace("life1", "life0");
    currentLifeDisplay.textContent = currentLife * 3;
    stopGame();
  }
}

//countdown text display
function countDown() {
  if (timeLeft != 0) {
    timeLeft -= 1;
    countDownDisplay.textContent = "time: " + timeLeft;
  } else return;
}

function stopGame() {
  //remove all event listeners on containers
  codContainer1.removeEventListener("mousedown", clickBadHandler);
  codContainer2.removeEventListener("mousedown", clickBadHandler);
  codContainer3.removeEventListener("mousedown", clickBadHandler);
  codContainer4.removeEventListener("mousedown", clickBadHandler);
  codContainer5.removeEventListener("mousedown", clickBadHandler);
  codContainer1.removeEventListener("animationend", goodReset);
  codContainer2.removeEventListener("animationend", goodReset);
  codContainer3.removeEventListener("animationend", goodReset);
  codContainer4.removeEventListener("animationend", goodReset);
  codContainer5.removeEventListener("animationend", goodReset);
  cucumberContainer1.removeEventListener("mousedown", clickBadHandler);
  cucumberContainer2.removeEventListener("mousedown", clickBadHandler);
  cucumberContainer3.removeEventListener("mousedown", clickBadHandler);
  cucumberContainer1.removeEventListener("animationend", badReset);
  cucumberContainer2.removeEventListener("animationend", badReset);
  cucumberContainer3.removeEventListener("animationend", badReset);

  //delay the function by 0.8 seconds
  setTimeout(() => {
    //remove all classes from elements
    //console.log("stopGame");
    codHorizontal1.removeAttribute("class");
    codHorizontal2.removeAttribute("class");
    codHorizontal3.removeAttribute("class");
    codHorizontal4.removeAttribute("class");
    codHorizontal5.removeAttribute("class");
    codContainer1.removeAttribute("class");
    codContainer2.removeAttribute("class");
    codContainer3.removeAttribute("class");
    codContainer4.removeAttribute("class");
    codContainer5.removeAttribute("class");
    codSprite1.removeAttribute("class");
    codSprite2.removeAttribute("class");
    codSprite3.removeAttribute("class");
    codSprite4.removeAttribute("class");
    codSprite5.removeAttribute("class");
    cucumberHorizontal1.removeAttribute("class");
    cucumberHorizontal2.removeAttribute("class");
    cucumberHorizontal3.removeAttribute("class");
    cucumberContainer1.removeAttribute("class");
    cucumberContainer2.removeAttribute("class");
    cucumberContainer3.removeAttribute("class");
    cucumberSprite1.removeAttribute("class");
    cucumberSprite2.removeAttribute("class");
    cucumberSprite3.removeAttribute("class");

    //stop game timer and remove classes
    gameTimer.classList.remove("timer");
    internalClock.classList.remove("internal_second_counter");

    //count points and lives
    if (currentLife == 0) {
      //game over screen when life = 0
      gameOver1();
    } else if (currentScore >= 75) {
      //level complete screen
      levelComplete();
    } else {
      //gameover screen when score is under 75
      gameOver2();
    }
  }, 800); //delay: 800 = 800ms = 0.8s
}

//level complete
function levelComplete() {
  //console.log("levelComplete");

  //display level complete screen
  levelCompleteScreen.classList.remove("hide");

  //display final score
  document.getElementById("final_score1").textContent = "Your final score is " + currentScore + "/75";

  //make restart button clickable
  buttonRestart1.addEventListener("click", gameStart);
}

//game over when life = 0
function gameOver1() {
  //console.log("gameOver");

  //display level complete screen
  gameOverScreen1.classList.remove("hide");

  //display final score
  document.getElementById("final_score2").textContent = "Your final score is " + currentScore + "/75";

  //make restart button clickable
  buttonRestart2.addEventListener("click", gameStart);
}

//gameover when score is under 75
function gameOver2() {
  //console.log("gameOver");

  //display level complete screen
  gameOverScreen2.classList.remove("hide");

  //display final score
  document.getElementById("final_score3").textContent = "Your final score is " + currentScore + "/75";

  //make restart button clickable
  buttonRestart3.addEventListener("click", gameStart);
}
