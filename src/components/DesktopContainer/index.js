import styles from "./styles.module.css";

function DesktopContainer({ children }) {
  return <main className={styles.desktopContainer}>{children}</main>;
}

export default DesktopContainer;
