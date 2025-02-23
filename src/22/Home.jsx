import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles/kai">Profile1</Link>
        </li>
        <li>
          <Link to="/profiles/suho">Profile2</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  )
}