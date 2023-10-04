import styles from "./styles.module.css";

function TipComponent() {
  return (
    <div className={styles.componentContainer}>
      <img alt="" />
      <div>
        <h3>Healthy eating</h3>
        <p>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
    </div>
  );
}

export default TipComponent;
