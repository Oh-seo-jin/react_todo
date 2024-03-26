export default function ProfilePicture() {
  const imgurl = '/src/assets/profile.jpg'

  const handleClick = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <img src={imgurl} onClick={(e) => handleClick(e)} width={700}/>
  )
}