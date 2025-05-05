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
  

  const deleteQuestion = (id) => {
    if (id <= 3) {
      alert("This question cannot be deleted.");
      return;
    }
    
    fetch(`http://localhost:8080/questions/${id}`, {
      method: "DELETE"
    }).then(() => {
      setQuestions(prev => prev.filter(q => q.id !== id))
    }).catch(err => {
      console.error("Delete failed", err)
      alert("Failed to delete question.")
    })
  }
  
  return (
    <div className="App">
      <h2>Fragenliste (zum Löschen klicken)</h2>
      <ul id="questions">
        {questions.map((q) => (
          <li key={q.id} onClick={() => deleteQuestion(q.id)} style={{ cursor: 'pointer', maxWidth: '75%', margin: 'auto', overflow: 'hidden' }}>{q.question}</li>
        ))}
      </ul>
      <QuestionForm />
    </div>
  )
}
