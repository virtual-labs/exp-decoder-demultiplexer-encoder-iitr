/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "BCD to seven segment conversion is a ________________",  ///// Write the question inside double quotes
      answers: {
        a: "Decoding process",                  ///// Write the option 1 inside double quotes
        b: "Encoding process",                  ///// Write the option 2 inside double quotes
        c: "Comparing process",                  ///// Write the option 3 inside double quotes
        d: "None of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "Invalid BCD can be made to valid BCD by adding with _______________",  ///// Write the question inside double quotes
      answers: {
        a: "0101",                  ///// Write the option 1 inside double quotes
        b: "0110",                  ///// Write the option 2 inside double quotes
        c: "0111",                  ///// Write the option 3 inside double quotes
        d: "1001"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

     {
     question: "Device which converts an input device state into a binary representation of ones or zeros is termed as",  ///// Write the question inside double quotes
      answers: {
        a: "encoder",                  ///// Write the option 1 inside double quotes
        b: "decoder",                  ///// Write the option 2 inside double quotes
        c: "multiplexer",                  ///// Write the option 3 inside double quotes
        d: "data selecter"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


     {
     question: "A circuit that changes a code into a set of signals is called",  ///// Write the question inside double quotes
      answers: {
        a: "encoder",                  ///// Write the option 1 inside double quotes
        b: "decoder",                  ///// Write the option 2 inside double quotes
        c: "multiplexer",                  ///// Write the option 3 inside double quotes
        d: "data selecter"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


     {
     question: "Modulo 6 counter can be built using a three-element",  ///// Write the question inside double quotes
      answers: {
        a: "shift register",                  ///// Write the option 1 inside double quotes
        b: "bus",                  ///// Write the option 2 inside double quotes
        c: "flip flop",                  ///// Write the option 3 inside double quotes
        d: "trigger"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////