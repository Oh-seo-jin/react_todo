import { useState } from "react"

// 프로필 사진, 버튼을 누르면 보였다가 사라졌다가
export default function ProfilePicture() {
  const imgurl = './src/assets/profile.jpg'

  // 권장X 방식 : useState의 등장
  let displayValue = ""
  const handleClick = () => {
    displayValue ? displayValue = "" : displayValue = "none"
    console.log(displayValue)
    document.getElementById("img-dis").style.display = displayValue
  }

  // set변수 함수로 값을 변경해야 렌더링이 일어남
  const [display, setDisplay] = useState("");
  const styles = {display: display, width: "50%"}
  const handleClick1 = () => {
    setDisplay(display ? "" : "none")
  }

  return (
    <>
    <img src={imgurl} id="img-dis" width="50%" alt="profile image" />
    <button onClick={handleClick}>Image #1</button>
    <hr/>
    <img src={imgurl} style={styles} alt="profile image"/>
    <button onClick={handleClick1}>Image #2: {display}</button>
    </>
  )
}