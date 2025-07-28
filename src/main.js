import './style.css'

const btnStart = document.getElementById('BtnStart');
const btnStop = document.getElementById('BtnStop');

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
//! Завдання 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let count = 0;

const timerId = setInterval(() => {
console.log("%cTimer%c: " + (count + 1), "color: orange; font-weight: bold;");
count++;
if (count >= 5) {
  clearInterval(timerId);
}
}, 1000)

//! Завдання 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.
let animationCount = 0;
let animation; //! Для зберігання setInterval

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnStart.addEventListener('click', () => {
  clearInterval(animation);
  animationCount = 0;

animation = setInterval(() => {
    animationCount++;

    box1.style.width = getRandom(30, 100) + 'px';
    box1.style.left = getRandom(0, 200) + 'px';
    box1.style.backgroundColor = `rgb(${getRandom(100,255)}, ${getRandom(100,255)}, ${getRandom(100,255)})`;

    box2.style.height = getRandom(30, 100) + 'px';
    box2.style.left = getRandom(0, 200) + 'px';
    box2.style.backgroundColor = `rgb(${getRandom(100,255)}, ${getRandom(100,255)}, ${getRandom(100,255)})`;

    if (animationCount >= 10) {
      clearInterval(animation);
      alert("Анімація завершена");
    }
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(animation);
  alert("Анімація зупинена");
});

//! Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.
//! DOM elements
const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const target = document.querySelector('.target');

let score = 0;
let timeLeft = 10;
let gameInterval;
let countdown;

function getRandomPosition(max){
  return Math.floor(Math.random()*(max - 40));
}

function spawnTarget() {
  if (target) target.remove();

  const targetElement = document.createElement('div');
  targetElement.classList.add('target');
  targetElement.style.top = getRandomPosition(400) + 'px';
  targetElement.style.left = getRandomPosition(400) + 'px';


  targetElement.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    targetElement.remove();
  });

  gameArea.appendChild(targetElement);
}

startBtn.addEventListener('click', () => {

  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  clearInterval(gameInterval);
  clearInterval(countdown);

  gameInterval = setInterval(spawnTarget, 1000);

  countdown = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(countdown);
      const existing = document.querySelector('.target');
      if (existing) existing.remove();
      alert("Гру завершено! Ваш рахунок: " + score);
    }
  }, 1000);
});
//! Завдання 4

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const timeInput = document.getElementById('timeInput');
const BtnStartt = document.getElementById('BtnStartt');
const message = document.getElementById('message');

BtnStartt.addEventListener('click', () => {
  const seconds = parseInt(timeInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    message.textContent = "Будь ласка, введіть коректний час (> 0)";
    message.style.color = 'red';
    return;
  }

  message.textContent = `Очікування ${seconds} секунд...`;
  message.style.color = 'black';

  setTimeout(() => {
    message.textContent = `⏰ Час вийшов! Пройшло ${seconds} сек.`;
    message.style.color = 'green';
  }, seconds * 1000); 
});