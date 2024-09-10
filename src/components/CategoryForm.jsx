import { useState, useEffect } from 'react'

export default function CategoryForm() {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    console.log("Mounted");
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
    </div>
  )
}
