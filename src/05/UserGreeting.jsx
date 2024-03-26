import "./UserGreeting.css";
import PropTypes from "prop-types";

export default function UserGreeting(props) {
  console.log(props.isLogginedIn);
  // if(props.isLogginedIn){
  //   return <h2>Welcome {props.username}</h2>
  // } else {
  //   return <h2>Please log in to continue</h2>
  // }
  const welcomeMassage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt"> Please log in to continue</h2>
  );
  return (
    <>
      {props.isLogginedIn && welcomeMassage}
      {props.isLogginedIn || loginPrompt}
    </>
  );
}

UserGreeting.propTypes = {
  isLogginedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLogginedIn: false,
  username: "Guest",
};
