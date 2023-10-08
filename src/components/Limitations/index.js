import styles from "./styles.module.css";

import LimitationCard from "../LimitationCard/index";

function Limitations() {
  const limitationProps = [
    {
      image: "gender",
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      image: "age",
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      image: "muscle",
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      image: "pregnancy",
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
      image: "race",
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ];

  return (
    <section className={styles.limitationsContainer}>
      <div className={styles.limitationsTitleContent}>
        <h2 className="heading-l">Limitations of BMI</h2>
        <p className="body-m">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      {window.screen.width > 768 ? (
        <div className={styles.limitationsCardsWrapperDesktop}>
          <div className={styles.wrapperDesktopTop}>
            <LimitationCard
              image={`/images/icon-${limitationProps[0].image}.svg`}
              title={limitationProps[0].title}
              text={limitationProps[0].text}
            />
          </div>
          <div className={styles.wrapperDesktopMiddle}></div>
          <div className={styles.wrapperDesktopBottom}></div>
        </div>
      ) : (
        <div className={styles.limitationsCardsWrapperTablet}>
          {limitationProps.map((value, index) => {
            return (
              <LimitationCard
                key={index}
                image={`/images/icon-${value.image}.svg`}
                title={value.title}
                text={value.text}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Limitations;
