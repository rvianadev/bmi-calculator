import styles from "./styles.module.css";

import TipCard from "../TipCard/index";

function Tips() {
  const tipProps = [
    {
      image: "eating",
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      image: "exercise",
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      image: "sleep",
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];

  return (
    <section className={styles.tipsContainer}>
      <div className={styles.tipsContainerBackground}></div>
      <div className={styles.tipsWrapper}>
        {tipProps.map((value, index) => {
          return (
            <TipCard
              image={`/images/icon-${value.image}.svg`}
              title={value.title}
              text={value.text}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tips;
