import { Link } from 'react-router-dom'
export default function GlobalNavigation() {
  return (
    <>
    <div className='navigation'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/impressum">About Us</Link></li>
      </ul>
    </div>
    </>
  )
}
