import styles from "./styles.module.css";

import LimitationCard from "../LimitationCard/index";

import Gender from "../../assets/images/icon-gender.svg";
import Age from "../../assets/images/icon-age.svg";
import Muscle from "../../assets/images/icon-muscle.svg";
import Pregnancy from "../../assets/images/icon-pregnancy.svg";
import Race from "../../assets/images/icon-race.svg";

function Limitations() {
  const limitationProps = [
    {
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ];

  return (
    <section className={styles.limitationsContainer}>
      <LimitationCard
        image={Gender}
        title={limitationProps[0].title}
        text={limitationProps[0].text}
      ></LimitationCard>
      <LimitationCard></LimitationCard>
    </section>
  );
}

export default Limitations;
