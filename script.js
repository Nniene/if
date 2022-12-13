
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue < -999 ? minValue = -999 : minValue = minValue;
if (isNaN(minValue)){
    minValue = 0
}
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue > 999 ? maxValue = 999 : maxValue = maxValue;
if (isNaN(maxValue)){
    maxValue = 100
}
 

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
var succses = [
    `Я всегда угадываю\n\u{1F60E}`,
    `Это успех `,
    `Да я крут`,
    `Это все математика`
]
let uspex = succses[Math.floor(Math.random() * 4)];
var phrases = [
    `Это `,
    `Скорее всего число  `,
    `Вы загадали число  `,
    `Я знаю, это число  `
  ];
let phrase = phrases[Math.floor(Math.random() * 4)];



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText =  ` ${phrase} ${answerNumber} ?` ;

document.getElementById('btnRetry').addEventListener('click', function () {
   location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phrase = phrases[Math.floor(Math.random() * 4)];
            answerField.innerText =  ` ${phrase} ${answerNumber} ?` ;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phrase = phrases[Math.floor(Math.random() * 4)];
            answerField.innerText =  ` ${phrase} ${answerNumber} ?` ;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${uspex}`;
        gameRun = false;
    }
})


