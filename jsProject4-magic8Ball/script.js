'use strict';
const answerArr = [
  'Sure, why not',
  'It is decidedly so',
  'Certain as a wombat is to beep...',
  'Now is not the right time.',
  'Puffadders in session. Please try again later.',
  'Evidently...',
  'Reasonable chance',
  'Outlook good',
  'First appease the Great Spider Gods',
  'Signs point to yes',
  `Don't count on it`,
  'Dependent upon barn owl intervention',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
  'Reply hazy, try again',
  'How about a nice game  of chess?',
  'Better not tell you now',
  'Terrible question. Disturb me no more.',
  'Concentrate and ask again',
];

let eight = document.getElementById('eight');
let answer = document.getElementById('answer');
let eightball = document.getElementById('eight-ball');
let question = document.getElementById('question');

window.onload = function () {
  eightball.addEventListener('click', function () {
    if (question.length < 1) {
      alert('Enter a question!');
    } else {
      let num = Math.floor(Math.random() * Math.floor(answerArr.length));
      let txt = answerArr[num];
      eight.innerText = '';
      answer.innerText = txt;
    }
  });
};
