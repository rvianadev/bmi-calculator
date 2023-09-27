import styles from "./styles.module.css";

function Header(props) {
  return (
    <div
      className={`body-m-bold ${styles.header}`}
      style={
        props.rodrigo
          ? { backgroundColor: "red" }
          : { backgroundColor: "green" }
      }
    >
      Teste
    </div>
  );
}

export default Header;
