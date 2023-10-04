import styles from "./styles.module.css";

import TipCard from "../TipCard/index";

import Eating from "./assets/images/icon-eating.svg";
import Exercise from "./assets/images/icon-exercise.svg";
import Sleep from "./assets/images/icon-sleep.svg";

function Tips() {
  const tipProps = [
    {
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];

  return (
    <section className={styles.tipsContainer}>
      <TipCard
        image={Eating}
        title={tipProps[0].title}
        text={tipProps[0].text}
      ></TipCard>
      <TipCard
        image={Exercise}
        title={tipProps[1].title}
        text={tipProps[1].text}
      ></TipCard>
      <TipCard
        image={Sleep}
        title={tipProps[2].title}
        text={tipProps[2].text}
      ></TipCard>
    </section>
  );
}

export default Tips;
