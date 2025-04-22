

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

  let questions = [];
  let selectedQuestions = [];

  let index = 0;
  let score = 0;

  function shuffleQuestions(questions) {
    let currentIndex = questions.length;
  
    while (currentIndex !== 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
    [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex],questions[currentIndex]];
    }
  
    return questions;
  }



  async function getQuestions() {
    const res = await fetch('questions.json');
    questions = await res.json();
    selectedQuestions = shuffleQuestions(questions).slice(0, 10);
    console.log(selectedQuestions);
    loadQuestion();
  }

  getQuestions();

  function loadQuestion() {
    
      const { question, options } = selectedQuestions[index];
      ques.textContent = `${index+1}. ${question}`
      opt1.textContent = options[0];
      opt2.textContent = options[1];
      opt3.textContent = options[2];
      opt4.textContent = options[3];

      opt1.disabled = false;
      opt2.disabled = false;
      opt3.disabled = false;
      opt4.disabled = false;
  }

  options.addEventListener('click', selectOption);

  function selectOption(e) {
    
      const ques = selectedQuestions[index];
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
      if (index < selectedQuestions.length) {
        nextBtn.classList.remove('hidden');
      }

      localStorage.setItem("score",score);
  }

  nextBtn.addEventListener('click', function () {
  if (index <= selectedQuestions.length) {
      loadQuestion();
      feedback.textContent = '';
      nextBtn.classList.add('hidden');
      console.log(index);
      
  } 
  if(index === selectedQuestions.length-1) {
      title.textContent = "Quiz Completed";
      ques.textContent = "";
      options.textContent = "";
      result.textContent = `Final Score: ${localStorage.getItem("score")}`;
      result.className = "font-medium";
  }
});
