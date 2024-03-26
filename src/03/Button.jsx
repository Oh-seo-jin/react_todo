// import styles from './Button.module.css'
function Button() {
  const styles = {
    backgroundColor: "#72A7BC",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return <button style={styles}>
    Click me
    </button>;
}
export default Button;
