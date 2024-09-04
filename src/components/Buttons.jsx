function Button(props) {
  return (
    <>
      <button id="test" onClick={props.fun}>{props.name}</button>
    </>
  )
}


export default Button
