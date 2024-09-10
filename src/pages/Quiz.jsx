import Button from '../components/Buttons'
import { useState, useEffect } from 'react'


export default function Quiz() {
  
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [start, setStart] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [reset, setReset] = useState(0)
  const [questions, setQuestions] = useState([])


  function selectCategory(event) {console.log(categoryIndex)
    if (event.target.innerHTML === "Category 1") {console.log(categoryIndex)
    } else if (event.target.innerHTML === "Category 2") {console.log(categoryIndex)
    } else if (event.target.innerHTML === "Category 3") {console.log(categoryIndex)
    } else if (event.target.innerHTML === "Category 3") {console.log(categoryIndex)
    }
    setStart(true)
  }

  function changeCategory() {
    setStart(false)
    setFeedback("")
    setQuestionAnswered(false)
    setQuestionIndex(0)
    setScore(0)
    setReset(0)
  }
  const categories = [
    { category: ["Category 1", "Category 2", "Category 3", "Category 4"],
      category_number: [0, 1, 2, 3]
    }]
    /*
    { category: ["Category 1", "Category 2", "Category 3", "Category 4"],
      category_number: [0, 1, 2, 3]
    },


    { category: ["Category 1"],
      category_number: 0
    },
    { category: ["Category 2"],
      category_number: 1
    },
    { category: ["Category 3"],
      category_number: 2
    },
    { category: ["Category 4"],
      category_number: 3
    }
    */



  function evaluateAnswer(event) {
    if (questions[questionIndex].correct_answer == event.target.innerHTML) {
      setScore(score + 1)
      setFeedback("\'" + event.target.innerHTML + "\'" + " ist Richtig")
      document.getElementById('img').src='./img/kiss_smiley.png'
      setQuestionAnswered(true)
    } else {
      setFeedback("\'" + event.target.innerHTML + "\'" + " ist Falsch")
      document.getElementById('img').src='./img/sad_smiley.png'
      setQuestionAnswered(true)
    }
  }

  function nextQuestion() {
    setQuestionIndex(questionIndex+1)
    setFeedback("")
    setQuestionAnswered(false)
    document.getElementById('img').src='./img/question_smiley.png'
  }

  function showScore() {
    if (score > 2) {
      document.getElementById('question').innerHTML = 'Gut gemacht!'
      setFeedback("Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ")
      document.getElementById('img').src='./img/kiss_smiley.png'
    } else if (score == 2) {
      document.getElementById('question').innerHTML = 'Das kannst du besser!'
      setFeedback("Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ")
      document.getElementById('img').src='./img/question_smiley.png'
    } else if (score < 2) {
      document.getElementById('question').innerHTML = 'Versuche es erneut!'
      setFeedback("Du hast " + score + " von " + questions.length + " Fragen richtig beantwortet. ")
      document.getElementById('img').src='./img/sad_smiley.png'
    }
    setReset(reset+1)
  }

  function resetQuiz() {
    document.getElementById('img').src='./img/question_smiley.png'
    setFeedback("")
    setQuestionAnswered(false)
    setQuestionIndex(0)
    setScore(0)
    setReset(0)
  }

  useEffect(() => {
    console.log("Mounted");
    fetch("http://localhost:8080/questions")
   .then(r => r.json())
   .then(qs => setQuestions(qs))
  }, [])

  /*
  const questions = [
    { question: "Was ist 2 * 4",
      answers: [3, 5, 8],
      correct_answer: 8,
      category: 0
    },
    { question: "Was ist 4 + 16 * 2",
      answers: [36, 40, 38],
      correct_answer: 36,
      category: 0
    },
    { question: "Was ist 9 * 10 - 2 : 2 + 5",
      answers: [49, 94, 45],
      correct_answer: 94,
      category: 0
    }/*
    ,
    { question: "Temp Cat 2",
      answers: [3, 5, 8],
      correct_answer: 8,
      category: 1
    },
    { question: "Temp Cat 2.2",
      answers: [36, 40, 38],
      correct_answer: 36,
      category: 1
    },
    { question: "Temp Cat 2.3",
      answers: [49, 94, 45],
      correct_answer: 94,
      category: 1
    }*/
   /*
   ]*/

 

    return (
      <>
        { start === false && <div id='category'>
          <div className='category-buttons'>
            <h2>Wähle eine Kategorie aus</h2>
            { categories[categoryIndex].category.map(a =>
                  <Button key={a} name={a} fun={selectCategory}/>) }
          </div>
        </div>}
        { start === true && <div id='quiz'>
          <div className='category-buttons'>
            { <button onClick={changeCategory}>Change Category</button> }
            { <button onClick={resetQuiz}>Try again</button> }
          </div>
          <hr />
          { categoryIndex === 0 && <h2 id='question'>{ questions[questionIndex].question }</h2> }
          { categoryIndex === 1 && <h2 id='question'>{ questions[questionIndex].question }</h2> }
          { categoryIndex === 2 && <h2 id='question'>{ questions[questionIndex].question }</h2> }
          { categoryIndex === 3 && <h2 id='question'>{ questions[questionIndex].question }</h2> }
          <img id="img" src="./img/question_smiley.png" alt=""/>
          <hr />
          <div className='score'>
            { "Score: " + score + " von " + questions.length }
          </div>
          <div className='answer-buttons'>
            { questionAnswered === true && questionIndex+1 < questions.length && <button onClick={nextQuestion}>Next Question</button> }
            { questionAnswered === true && questionIndex+1 === questions.length && reset === 0 && <button onClick={showScore}>View Score</button> }
            { reset != 0 && <button onClick={resetQuiz}>Try again</button> }
            { questionAnswered === false &&
                questions[questionIndex].answers.map(answer =>
                  <Button key={answer} name={answer} fun={evaluateAnswer}/>) }
          </div>
          <hr />
            { questionAnswered === true && <div id='result-correct'>{ feedback }</div> }
            { questionAnswered === false && <div id='result-false'>{ feedback }</div> }
        </div>}
        
      </>
    )
  }


