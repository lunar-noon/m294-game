import Button from '../components/Buttons'

function App() {

  var x = false
  function button_clicked(event) {
    document.getElementById('result').innerHTML = event.target.innerHTML
    if (document.getElementById('result').innerHTML == correct_answer[count]) {
      x = true
      document.getElementById('img').src='./img/kiss_smiley.png'
    }
    if (document.getElementById('result').innerHTML != correct_answer[count]) {
      x = false
      document.getElementById('img').src='./img/sad_smiley.png'
    }
  }

  const question1 = {
    question: "Was ist 2 * 4",
    answers: [
      3, 5, 8
    ],
    correct_answer: 8
  }
  const question2 = {
    question: "Was ist 4 + 16 * 2",
    answers: [
      36, 40, 38
    ],
    correct_answer: 36
  }
  const question3 = {
    question: "Was ist 9 * 10 - 2 : 2 + 5",
    answers: [
      49, 94, 45
    ],
    correct_answer: 94
  }
  const questions = [question1.question, question2.question, question3.question]
  const answers = [question1.answers, question2.answers, question3.answers]
  const correct_answer = [question1.correct_answer, question2.correct_answer, question3.correct_answer]

  var count = 0
  var score = 0




    
  const answer_buttons = answers[count].map(a =>
    <Button key={ a } name={ a } fun={ button_clicked } />)

  
  function nextQuestion(event) {
    if (x === true) {
      if (count < 2) {
        count = count + 1
      }
      score = score + 1
      document.getElementById('result').innerHTML = ' '
      document.getElementById('question').innerHTML = questions[count]
      document.getElementById('img').src="./img/question_smiley.png"
      if (document.getElementById('result').innerHTML == correct_answer[count]) {
        score = score + 1
      }
      x = false
    }
  }

  const score_count =  "Score: " + score + " von " + questions.length


  document.getElementsByClassName('score').innerHTML = score_count
  

  const next_button = <Button name={ "Next Question" } fun={ nextQuestion } />


  return (
    <>
      <h2 id='question'>{ questions[count] }</h2>
      <img id="img" src="./img/question_smiley.png" alt=""/>
      <hr />
      <div className='score'>
        { score_count }
      </div>
      <div className='answer-buttons'>
        { answer_buttons }
      </div>
      <hr />
      <div id='result'></div>
      <div className='next-button'>
        { next_button }
      </div>
    </>
  )
}


export default App
