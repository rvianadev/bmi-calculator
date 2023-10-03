import styles from "./styles.module.css";

function TipComponent({ children }) {
  return <div className={styles.componentContainer}>{children}</div>;
}

export default TipComponent;
