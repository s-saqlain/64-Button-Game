const btn1=document.querySelectorAll('button');
const number1=document.getElementById('number');
const score=document.getElementById('score-number');
const FinalScore=document.getElementById('final-score');
const popupbar=document.getElementById('popupbar');
const tryagain=document.getElementById('retryImage')

const timeLeftDisplay = document.getElementById('time-left');

popupbar.style.display="none";
score.innerText=0;
FinalScore.innerText=score.innerText;

const timeLimit=9000;
let countDown;
let timer;
let TimeRemaining=timeLimit/1000;

function newNum(){
    return Math.floor(Math.random()*10);
}

function startTimer(){
    clearInterval(countDown);
    TimeRemaining=timeLimit/1000;
    timeLeftDisplay.innerHTML=TimeRemaining;

    countDown=setInterval(()=>{
        TimeRemaining--;
        timeLeftDisplay.innerText = TimeRemaining;
        if(TimeRemaining<=0){
            clearInterval(countDown);
            popupbar.style.display="block";
            FinalScore.innerText=score.innerText;
            clearTimeout(timer);
        }
    },1000)

   
}

function resetTimer(){
    clearTimeout(timer);
    timer=setTimeout(() =>{
        popupbar.style.display="block";
        FinalScore.innerText=score.innerText;
    },timeLimit)
    startTimer();
}

number1.innerHTML=newNum();

btn1.forEach((btn)=> {
    btn.innerText=Math.floor(Math.random()*10);
});

btn1.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            if (btn.innerText===number1.textContent){
                number1.innerHTML= newNum();
                btn1.forEach((btn) =>{
                    btn.innerHTML = newNum();
                })
                score.innerText++;
                resetTimer();
            }
            else{
                popupbar.style.display="block";
                FinalScore.innerText=score.innerText;
                clearInterval(countDown);
            }
            
        })
})


tryagain.addEventListener('click',()=>{
    score.innerText=0;
    number1.innerHTML=newNum();
    btn1.forEach((btn)=>{
        btn.innerHTML=newNum();
    })

    popupbar.style.display="none";
    resetTimer();
})

