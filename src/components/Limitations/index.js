import styles from "./styles.module.css";

import LimitationCard from "../LimitationCard/index";

function Limitations() {
  return (
    <section className={styles.limitationsContainer}>
      <LimitationCard></LimitationCard>
      <LimitationCard></LimitationCard>
    </section>
  );
}

export default Limitations;
