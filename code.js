const mainScreen = document.querySelector('#main_screen');
const chooseOptionScreen = document.querySelector('#choose_your__option__screen');
const changeScreen = document.querySelector('#change__screen');
const gameplayScreen = document.querySelector('#gameplay_screen')

changeScreen.addEventListener('click', (e) => {
    e.preventDefault();
    mainScreen.classList.add('d-none');
    chooseOptionScreen.classList.remove('d-none');
    chooseOptionScreen.classList.add('d-flex');
}, {once: true});



const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const options = document.querySelectorAll('.options');

let chosenOption;

options.forEach((item, i)=> {
    item.addEventListener('click', (e) => {
        item.querySelector('.input').setAttribute("checked", "true");
        item.classList.add("chosen_option");
        chosenOption = item.querySelector('.input').getAttribute("value");
        for (let value of options) {
            if (value.firstElementChild.hasAttribute("checked", "true")) {
                continue;
            } else {
                value.classList.add('d-none')
            }
        }
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        gameplayScreen.classList.remove('d-none');
                        gameplayScreen.classList.add('visible');
                        gaming();
                    }, 400);
                    gameplayScreen.classList.add('appearing');
                }, 300);
                chooseOptionScreen.classList.remove('d-flex');
                chooseOptionScreen.classList.add('d-none');
            }, 700);
            chooseOptionScreen.classList.add('disappearing');
        }, 200);
    })
})

let botHandForCountScore;


function gaming() {
    // Main seetings
    let userHand = document.querySelector('#user_hand');
    let enemyHand = document.querySelector('#enemy_hand');
    userHand.classList.add('shakling');
    enemyHand.classList.add('shakling-enemy');

    // Bot settings
    const botsOptions = ['rock', 'scissor', 'paper'];
    let i = Math.floor(Math.random() * 3);
    let botHand = botsOptions[i];
    // Gaming
    setTimeout(() => {
        userHand.setAttribute("src", `img/${chosenOption}.png`);
        enemyHand.setAttribute("src", `img/${botHand}-enemy.png`)


        // Counting score

        let userScore = document.querySelector('#user_score');
        let enemyScore = document.querySelector('#enemy_score');

        let userCounter = 0;
        let enemyCounter = 0;

        if (chosenOption == 'scissor' && botHand == 'paper') {
            userCounter += 1;
            userScore.innerHTML = userCounter;
        } else if (chosenOption == 'scissor' && botHand == 'rock') {
            enemyCounter += 1;
            enemyScore.innerHTML = enemyCounter;
        } else if (chosenOption == 'paper' && botHand == 'scissor') {
            enemyCounter += 1;
            enemyScore.innerHTML = enemyCounter;
        } else if (chosenOption == 'paper' && botHand == 'rock') {
            userCounter += 1;
            userScore.innerHTML = userCounter;
        } else if (chosenOption == 'rock' && botHand == 'scissor') {
            userCounter += 1;
            userScore.innerHTML = userCounter;
        } else if (chosenOption == 'rock' && botHand == 'paper') {
            enemyCounter += 1;
            enemyScore.innerHTML = enemyCounter;
        }
        console.log(chosenOption);
        console.log(botHand);
    }, 1650)
}



