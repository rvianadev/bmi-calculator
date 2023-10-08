import React, { useState } from "react";

import MediumHeading from "../../ui/MediumHeading";
import styles from "./styles.module.css";
import image from "./assets/image.svg";

function Hero() {
  const [selectedSystem, setSelectedSystem] = useState("metric");

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = (height, weight) => {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    setBMI(bmi);
  };

  const handleHeightValue = (event) => {
    const height = Number(event.target.value);
    setHeight(height);
    calculateBMI(height, weight);
  };

  const handleWeightValue = (event) => {
    const weight = Number(event.target.value);
    setWeight(weight);
    calculateBMI(height, weight);
  };

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
  };

  console.log(bmi);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroTitleContainer}>
        <img src={image} alt="Imagem" />
        <div className={styles.heroContents}>
          <h1 className="heading-xl">
            Body Mass
            <br /> Index Calculator
          </h1>
          <p className="body-m">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <MediumHeading>Enter yours details below</MediumHeading>
        <div className={styles.systemContainer}>
          <div className={styles.unitSystem}>
            <input
              type="radio"
              name="system"
              value="metric"
              defaultChecked={true}
              onChange={handleSystemChange}
            />
            <label className="body-m-bold">Metric</label>
          </div>
          <div className={styles.unitSystem}>
            <input
              type="radio"
              name="system"
              value="imperial"
              onChange={handleSystemChange}
            />
            <label className="body-m-bold">Imperial</label>
          </div>
        </div>

        {selectedSystem === "metric" ? (
          <div className={styles.metricDataContainer}>
            <div className={styles.dataGroup}>
              <label>Height</label>
              <div className={styles.inputGroup}>
                <input
                  id="heightInput"
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleHeightValue}
                />
                <span>cm</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <label>Weight</label>
              <div className={styles.inputGroup}>
                <input
                  id="weightInput"
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleWeightValue}
                />
                <span>kg</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.imperialDataContainer}>
            <div className={styles.dataGroup}>
              <label>Height</label>
              <div className={styles.inputGroup}>
                <input type="text" className="heading-m" placeholder="0" />
                <span>ft</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input type="text" className="heading-m" placeholder="0" />
                <span>in</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <label>Weight</label>
              <div className={styles.inputGroup}>
                <input type="text" className="heading-m" placeholder="0" />
                <span>st</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input type="text" className="heading-m" placeholder="0" />
                <span>lbs</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.resultContainer}>
          {height === null || weight === null ? (
            <div className={styles.textWelcomeContainer}>
              <MediumHeading>Welcome!</MediumHeading>
              <span>
                Enter your height and weight and you’ll see your BMI result here
              </span>
            </div>
          ) : (
            <div className={styles.textResultContainer}>
              <div className={styles.bmiResult}>
                <label className="body-m-bold">Your BMI is...</label>
                <h2 className="heading-xl">{bmi}</h2>
              </div>
              <div className={styles.bmiText}>
                <p className="body-s">
                  Your BMI suggests you’re a healthy weight. Your ideal weight
                  is between <strong>63.3kgs - 85.2kgs</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
