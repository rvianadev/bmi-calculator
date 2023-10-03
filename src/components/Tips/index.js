import styles from "./styles.module.css";

function Tips({ children }) {
  return (
    <section className={styles.tipsContainer}>
      <div className={styles.tipsComponentsContainer}>{children}</div>
    </section>
  );
}

export default Tips;
