import { useState, useEffect } from 'react'

export default function QuestionForm() {
  const [entries, setEntries] = useState({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correctAnswer: ""
  })

  const [questions, setQuestions] = useState([])

  const store = (e) => {
    setEntries({
      ...entries,
      [e.target.name]: e.target.value
    })
  }

  const fetchQuestions = () => {
    fetch("http://localhost:8080/questions")
      .then(res => res.json())
      //.then(data => setQuestions(data))
      .then(data => {
        const sorted = data.sort((a, b) => a.id - b.id); // Sort by id
        setQuestions(sorted);
      });
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const submit = (e) => {
    e.preventDefault();
  
    const { question, answer1, answer2, answer3, correctAnswer } = entries;
  
    // Trim inputs
    const q = question.trim();
    const a1 = answer1.trim();
    const a2 = answer2.trim();
    const a3 = answer3.trim();
  
    // Validate required fields
    if (!q) {
      alert("Question field is required.");
      return;
    }
  
    if (!a1 || !a2 || !a3) {
      alert("All three answers must be provided.");
      return;
    }
  
    if (!correctAnswer) {
      alert("Please select the correct answer.");
      return;
    }
  
    // Validate uniqueness of answers
    const uniqueAnswers = new Set([a1.toLowerCase(), a2.toLowerCase(), a3.toLowerCase()]);
    if (uniqueAnswers.size < 3) {
      alert("Answers must be different from each other.");
      return;
    }
  
    // Determine correct answer text
    let correctAnswerText;
    if (correctAnswer === "1") correctAnswerText = a1;
    else if (correctAnswer === "2") correctAnswerText = a2;
    else if (correctAnswer === "3") correctAnswerText = a3;
  
    const submitData = {
      question: q,
      answers: [a1, a2, a3],
      correct_answer: correctAnswerText
    };
  
    fetch("http://localhost:8080/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submitData)
    }).then(() => {
      setEntries({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correctAnswer: ""
      });
      fetchQuestions();
    });
  };
  

  

  return (
    <>
      <form onSubmit={submit}>
        <div className="form-control-question">
          <label>Question:</label>
          <input type="text" name="question" value={entries.question} onChange={store} />
        </div>
        <div className="form-control">
          <label>Answer 1:</label>
          <input type="text" name="answer1" value={entries.answer1} onChange={store} />
          <label>Answer 2:</label>
          <input type="text" name="answer2" value={entries.answer2} onChange={store} />
          <label>Answer 3:</label>
          <input type="text" name="answer3" value={entries.answer3} onChange={store} />
        </div>
        <div className="form-control">
          <label>Correct Answer:</label>
          <div>
            <label>
              <input
                type="radio"
                name="correctAnswer"
                value="1"
                checked={entries.correctAnswer === "1"}
                onChange={store}
              />
              Answer 1
            </label>
            <label>
              <input
                type="radio"
                name="correctAnswer"
                value="2"
                checked={entries.correctAnswer === "2"}
                onChange={store}
              />
              Answer 2
            </label>
            <label>
              <input
                type="radio"
                name="correctAnswer"
                value="3"
                checked={entries.correctAnswer === "3"}
                onChange={store}
              />
              Answer 3
            </label>
          </div>
        </div>
        <hr />
        <button type="submit">Save</button>
      </form>

      <hr />
    </>
  )
}
