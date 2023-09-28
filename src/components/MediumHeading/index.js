import styles from "./styles.module.css";

function MediumHeading({ children }) {
  return <h3 className={styles.mediumHeading}>{children}</h3>;
}

export default MediumHeading;
