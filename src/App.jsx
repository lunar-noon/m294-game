import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Rules from './pages/Rules'
import QuestionList from './components/QuestionList'
import Impressum from './pages/Impressum'
import Layout from './components/Layout'
import PageNotFound from './pages/404page'
import './App.css'



function App() {

  return (
  
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="home" element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="rules" element={<Rules />} />
      <Route path="questions" element={<QuestionList />} />
      <Route path="impressum" element={<Impressum />} />
    </Route>
  </Routes>
  
  )
}


export default App
