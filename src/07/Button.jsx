import "./Button.css"

export default function Button(){

  const handleClick = () => {
    console.log("Click!")
  }

  const handleClick2 = (name) => {
    console.log( `${name} stop click me?`)
  }

  let count = 0
  const handleClick3 = (name) => {
    if (count<3){
      count++
      console.log(`${name} cliked me ${count} items`)
    } else {
      console.log(`${name} stop clicking me! ${count}`)
    }
  }

  const handleClick4 = (e) => {
    console.log(e)
    e.target.textContent = "😜"
  }

  return (
    <>
    <button className="button" onClick={handleClick}>Click Me!🥰</button>
    <button className="button" onClick={() => handleClick2("KAI")}>Look at Me!😉</button>
    <button className="button" onClick={() => handleClick3("KAI")}>Click me 💛{count}</button>
    <button className="button" onClick={(e) => handleClick4(e)}>궁금해?😘</button>
    </>
  )
}