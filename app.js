const ressultEl = document.querySelector('.result');
const startEl = document.querySelector('.start');
const endEl = document.querySelector('.end');
const okEl = document.querySelector('.ok');
const sound = document.getElementById('sound');
const blockImg = document.querySelector('.blockImg');

let arr = [];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let cnt = 0;
const resultProgram = () => {
    ressultEl.innerHTML = ""
    let a = startEl.value;
    let b = endEl.value;
    timeId = setInterval(() => {
        cnt += 1;
        ressultEl.innerHTML = (randomInteger(Number(a), Number(b)));
        if (cnt % 12 === 0) {
            clearInterval(timeId);
        }
    }, 150);
};

const revFunc = () => {
    setTimeout(() => {        
        ressultEl.classList.add("rev");  
        blockImg.classList.add("imgBig");
    }, (150 * 12));
}

okEl.onclick = () => {
    ressultEl.classList.remove("rev");  
    blockImg.classList.remove("imgBig");
    sound.play();
    resultProgram();  
    revFunc();  
}
