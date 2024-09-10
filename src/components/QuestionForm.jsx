import { useState } from 'react'

export default function QuestionForm() {
  
  const [entries, setEntries] = useState([])

  const store = (e) => {
    setEntries({...entries, //Spread Operator!
      [e.target.name]: e.target.value
    })
  }


  const submit = (e) => {
    const correctAnswer = entries.correctAnswer==="1" ? entries.answer1
    : entries.correctAnswer==="2" ? entries.answer2
    : entries.correctAnswer==="3" ? entries.answer3
    : undefined
    if (entries.correctAnswer===1) correctAnswer = entries.answer1
    if (entries.correctAnswer===2) correctAnswer = entries.answer2
    if (entries.correctAnswer===3) correctAnswer = entries.answer3
  
    if (!correctAnswer) {
      alert("Please enter correct answer")
      e.preventDefault()
      e.stopPropagation()
      return
    }

    const submitData = {
      question: entries.question,
      answers: [entries.answer1, entries.answer2, entries.answer3],
      correct_answer: correctAnswer
    }











    e.preventDefault();
    fetch("http://localhost:8080/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submitData)
    }).then(() => {
      setEntries({question: "",
        answer: ["", "", ""],
        correct_answer: ""
      })
    })
  }

  








  
  
  return (
    <form onSubmit={ submit }>
      <div className="form-control-question">
        <label>Question:</label>
        <input type="text" name="question" onChange={store} />
      </div>
      <div className="form-control">
        <label>Answer:</label>
        <input type="text" name="answer1" onChange={store} />
        <label>Answer:</label>
        <input type="text" name="answer2" onChange={store} />
        <label>Answer:</label>
        <input type="text" name="answer3" onChange={store} />
      </div>
      <div className="form-control">
        <label>Korrekte Antwort:</label>
        <input type="radio" name="correctAnswer" onChange={store} />
      </div>
      <hr />
      <button type="submit">Speichern</button>
    </form>
  )
}
