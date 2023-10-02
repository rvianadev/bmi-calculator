import styles from "./styles.module.css";
import image from "./assets/image-man-eating.webp";

function YourResults() {
  return (
    <section className={styles.yourResultsContainer}>
      <img src={image} alt="" />
      <div className={styles.resultTextContainer}>
        <h2 className="heading-l">What your BMI result means</h2>
        <p className="body-m">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}

export default YourResults;
