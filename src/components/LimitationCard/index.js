import styles from "./styles.module.css";

function LimitationCard(props) {
  return (
    <div className={styles.cardContainer} key={props.key} id={props.id}>
      <div className={styles.cardContent}>
        <div className={styles.titleContent}>
          <img src={props.image} alt="" />
          <h4 className="heading-s">{props.title}</h4>
        </div>
        <p className="body-m">{props.text}</p>
      </div>
    </div>
  );
}

export default LimitationCard;
