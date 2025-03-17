let quizData = [
  {
    question: "Что такое HTML?",
    image: "i.jpg",
    options: [
      "Язык программирования",
      "Язык гипертекстовой разметки",
      "Редактор текста",
      "Программа для создания сайтов",
    ],
    correct: 1,
  },
  {
    question: "Что такое CSS?",
    image: "i_2.jpg",
    options: [
      "Язык программирования",
      "Фреймворк",
      "Каскадные таблицы стилей",
      "Система управления базами данных",
    ],
    correct: 2,
  },
  {
    question: "Что такое DOM в контексте веб-разработки?",
    image: "i_3.jpg",
    options: [
      "Документный объект модели",
      "Модуль обработки данных",
      "Интерфейс программирования приложений",
      "Тип данных",
    ],
    correct: 0,
  },  
  {
    question: "Какой селектор в CSS выберет все элементы <p>?",
    image: "i_4.jpg",
    options: ["#p", "p", ".p", "*p"],
    correct: 1,
  },
  {
    question: "Что делает оператор '===' в JavaScript?",
    image: "i_5.jpg",
    options: [
      "Сравнивает значения и типы данных",
      "Сравнивает только значения",
      "Присваивает значение переменной",
      "Объединяет строки",
    ],
    correct: 0,
  },
  {
    question: "Какой JS код выведет числа от 1 до 10 с использованием цикла for?",
    image: "i_6.jpg",
    options: [
      "for (let i = 1; i <= 10; i++) { console.log(i); }",
      "for (let i = 0; i < 10; i++) { console.log(i + 1); }",
      "for (let i = 1; i < 10; i++) { console.log(i); }",
      "for (let i = 0; i <= 10; i++) { console.log(i); }",
    ],
    correct: 0,
  },
  {
    question: "Какой метод добавляет элемент в конец массива?",
    image: "i_7.jpg",
    options: ["unshift()", "pop()", "shift()", "push()"],
    correct: 3,
  },
  {
    question: "Какой результат выполнения выражения '2' + 2 в JavaScript?",
    image: "i_8.jpg",
    options: ["22", "4", "NaN", "Ошибка"],
    correct: 0,
  },
  {
    question: "Какой символ используется для комментариев в JavaScript?",
    image: "i_9.jpg",
    options: ["//", "/* */", "#", "--"],
    correct: 0,
  },
  {
    question: "Что возвращает метод getElementById()?",
    image: "i_10.jpg",
    options: [
      "HTML-элемент",
      "Массив элементов",
      "Текст элемента",
      "Числовое значение",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

let questionContainer = document.getElementById("question-container");
let resultContainer = document.getElementById("result");

function loadQuestion() {
  let question = quizData[currentQuestion];

  questionContainer.innerHTML = "";

  let questionElement = document.createElement("h3");
  questionElement.textContent = question.question;
  questionContainer.appendChild(questionElement);

  let imageElement = document.createElement("img");
  imageElement.src = question.image;
  questionContainer.appendChild(imageElement);

  question.options.forEach((option, index) => {
    let button = document.createElement("button");
    button.textContent = option;
    button.classList.add("answer-btn");
    button.dataset.index = index;

    button.addEventListener("click", () => checkAnswer(index));

    questionContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {

  userAnswers.push({
    question: quizData[currentQuestion].question,
    selected: quizData[currentQuestion].options[selectedIndex],
    correct: quizData[currentQuestion].options[quizData[currentQuestion].correct],
  });

  if (selectedIndex === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";

  resultContainer.style.display = "block";
  resultContainer.innerHTML = "";

  let resultHeader = document.createElement("h2");
  resultHeader.textContent = "Результат";
  resultContainer.appendChild(resultHeader);

  let scoreText = document.createElement("p");
  scoreText.textContent = `Вы набрали ${score} из ${quizData.length} баллов!`;
  resultContainer.appendChild(scoreText);

  let statsHeader = document.createElement("h3");
  statsHeader.textContent = "Статистика ответов:";
  resultContainer.appendChild(statsHeader);

  let statsList = document.createElement("ol");

  userAnswers.forEach(answer => {
    let listItem = document.createElement("li");

    let questionText = document.createElement("strong");
    questionText.textContent = `Вопрос: ${answer.question}`;
    listItem.appendChild(questionText);

    let selectedText = document.createElement("div");
    selectedText.textContent = `Ваш ответ: ${answer.selected}`;
    listItem.appendChild(selectedText);

    let correctText = document.createElement("div");
    correctText.textContent = `Правильный ответ: ${answer.correct}`;
    listItem.appendChild(correctText);

    statsList.appendChild(listItem);
  });

  resultContainer.appendChild(statsList);
}

loadQuestion();