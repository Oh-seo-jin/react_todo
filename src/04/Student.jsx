import "./Student.css"
import PropTypes from 'prop-types'

export default function Student(props) {
  return(
    <div className="student">
      <img src="http://via.placeholder.com/150" alt="" />
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

// 타입이 안맞을 경우 웹브라우저 콘솔에서 오류 확인, 실행은 정상
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Geust",
  age: 0,
  isStudent: false,
}