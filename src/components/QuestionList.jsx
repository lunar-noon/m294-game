import { useState, useEffect } from 'react'
import QuestionForm from './QuestionForm'

export default function QuestionList() {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    console.log("Mounted")
    fetch("http://localhost:8080/questions")
   .then(r => r.json())
   .then(qs => setQuestions(qs))
  }, [])
  
  
  return (
    <div className="App">
      <h2>Frageliste</h2>
      <ul id="questions">
        {  questions.map(q => <li key={ q.id }>{ q.question }</li>)  }
      </ul>
      <QuestionForm />
    </div>
  )
}
