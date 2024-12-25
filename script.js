const quizData = [
  {
    question: "Что такое HTML?",
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
    options: ["#p", "p", ".p", "*p"],
    correct: 1,
  },
  {
    question: "Что делает оператор '===' в JavaScript?",
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
    options: ["unshift()", "pop()", "shift()", "push()"],
    correct: 3,
  },
  {
    question: "Какой результат выполнения выражения '2' + 2 в JavaScript?",
    options: ["22", "4", "NaN", "Ошибка"],
    correct: 0,
  },
  {
    question: "Какой символ используется для комментариев в JavaScript?",
    options: ["//", "/* */", "#", "--"],
    correct: 0,
  },
  {
    question: "Что возвращает метод getElementById()?",
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

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next");
const resultContainer = document.getElementById("result");

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${questionData.question}</h3>
    ${questionData.options
      .map(
        (option, index) => `
        <label>
          <input type="radio" name="answer" value="${index}">
          ${option}
        </label><br>
      `
      )
      .join("")}
  `;
}

function showResult() {
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `Вы набрали ${score} из ${quizData.length} баллов!`;
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Пожалуйста, выберите ответ!");
  }
});

loadQuestion();
