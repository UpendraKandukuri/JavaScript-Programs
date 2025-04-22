const questions = [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "float", "string"],
      correctAnswer: "var"
    },
    {
      question: "Which method is used to write to the console in JavaScript?",
      options: ["console.write()", "console.log()", "log.console()", "write.console()"],
      correctAnswer: "console.log()"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "===", "=>"],
      correctAnswer: "="
    },
    {
      question: "Which built-in method removes the last element from an array?",
      options: ["pop()", "remove()", "shift()", "delete()"],
      correctAnswer: "pop()"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunc()", "def myFunc()", "create myFunc()", "method myFunc()"],
      correctAnswer: "function myFunc()"
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["number", "boolean", "undefined", "character"],
      correctAnswer: "character"
    },
    {
      question: "What will `typeof null` return in JavaScript?",
      options: ["null", "object", "undefined", "boolean"],
      correctAnswer: "object"
    },
    {
      question: "Which symbol is used for single-line comments?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctAnswer: "//"
    },
    {
      question: "What will `2 + '2'` output in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      correctAnswer: "22"
    },
    {
      question: "How do you call a function named `greet`?",
      options: ["call greet()", "greet()", "function greet()", "greet.call()"],
      correctAnswer: "greet()"
    }
  ];

  console.log(questions.length);

  let title = document.getElementById('title');
  let ques = document.getElementById("question");
  let opt1 = document.getElementById("option1");
  let opt2 = document.getElementById("option2");
  let opt3 = document.getElementById("option3");
  let opt4 = document.getElementById("option4");
  let options = document.getElementById("options");
  let nextBtn = document.getElementById("nextBtn");
  let feedback = document.getElementById('feedback');
  let result = document.getElementById('result');

  let index = 0;
  let score = 0;

  function loadQuestion() {
      const { question, options } = questions[index];
      ques.textContent = question;
      opt1.textContent = options[0];
      opt2.textContent = options[1];
      opt3.textContent = options[2];
      opt4.textContent = options[3];

      opt1.disabled = false;
      opt2.disabled = false;
      opt3.disabled = false;
      opt4.disabled = false;
  }

  loadQuestion();

  options.addEventListener('click', selectOption);

  function selectOption(e) {
    
      const ques = questions[index];
      const target = e.target;

      opt1.disabled = true;
      opt2.disabled = true;
      opt3.disabled = true;
      opt4.disabled = true;

      if (ques.correctAnswer === target.textContent) {
          score++;
          feedback.classList.remove("hidden");
          feedback.textContent = "Correct";
          feedback.classList.add("text-green-500");
          feedback.className = 'text-green-500 font-medium';
      } else {
          feedback.classList.remove("hidden");
          feedback.textContent = `Correct Answer is: ${ques.correctAnswer}`;
          feedback.className = 'text-red-500 font-medium';
      }

      index++;
      if (index < questions.length) {
        nextBtn.classList.remove('hidden');
      }

      localStorage.setItem("score",score);
  }

  nextBtn.addEventListener('click', function () {
  if (index <= questions.length) {
      loadQuestion();
      feedback.textContent = '';
      nextBtn.classList.add('hidden');
      console.log(index);
      
  } 
  if(index === questions.length-1) {
      title.textContent = "Quiz Completed";
      ques.textContent = "";
      options.textContent = "";
      result.textContent = `Final Score: ${localStorage.getItem("score")}`;
      result.className = "font-medium";
  }
});
