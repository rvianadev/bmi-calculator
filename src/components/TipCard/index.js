import styles from "./styles.module.css";

function TipCard(props) {
  return (
    <div className={styles.cardContainer}>
      <img src={props.image} alt="" />
      <div className={styles.textContainer}>
        <h3 className="heading-m">{props.title}</h3>
        <p className="body-m">{props.text}</p>
      </div>
    </div>
  );
}

export default TipCard;
