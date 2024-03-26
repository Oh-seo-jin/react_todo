import profileImg from '../assets/profile.jpg'
import './Card.css'

export default function Card() {
  return(
    <div className='card'>
      {/* <img className='card-image' src="http://via.placeholder.com/150" alt="profile image"/> */}
      <img className='card-image' src={profileImg} alt="profile image"/>
      <h2 className='card-title'>KAI</h2>
      <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus impedit cupiditate veritatis dolores eos delectus distinctio facere similique praesentium odio, ipsum perferendis rem quod doloremque aliquam qui dolorem. Ipsam, distinctio.</p>
    </div>
  )
}