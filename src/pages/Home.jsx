import { useState } from 'react'

export default function Home() {

  const [clicks, setClicks] = useState(0)

  function increment() {
    setClicks(clicks+1)
  }

  return(
    <>
    <h2>Homepage</h2>
    <p>This is a one-page app which demonstrates the power of the React.js framework. </p>
    <hr />
    <button className='click-button' onClick={increment}>{clicks}</button>
    <hr />
    </>
  )
}

/*
<div id="click-display"><h3>{clicks}</h3></div>
*/