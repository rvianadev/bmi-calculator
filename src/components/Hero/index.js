import React, { useState } from "react";

import MediumHeading from "../../ui/MediumHeading";
import styles from "./styles.module.css";
import image from "./assets/image.svg";

function Hero() {
  const [selectedSystem, setSelectedSystem] = useState("metric");

  const [heightInCentimeter, setHeightInCentimeter] = useState(null);
  const [weightInKilo, setWeightInKilo] = useState(null);

  const [heightInFeet, setHeightInFeet] = useState(null);
  const [heightInInch, setHeightInInch] = useState(null);
  const [weightInStone, setWeightInStone] = useState(null);
  const [weightInPound, setWeightInPound] = useState(null);

  const [bmi, setBMI] = useState(0);

  const calculateBMIMetricSystem = (height, weight) => {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    setBMI(bmi);
  };

  const calculateBMIImperialSystem = (foot, inch, stone, pound) => {
    const bmi = (
      ((stone * 14 + pound) / Math.pow(foot * 12 + inch, 2)) *
      703
    ).toFixed(1);
    setBMI(bmi);
  };

  const handleHeightValue = (event) => {
    const height = Number(event.target.value);
    setHeightInCentimeter(height);
    calculateBMIMetricSystem(height, weightInKilo);
  };

  const handleWeightValue = (event) => {
    const weight = Number(event.target.value);
    setWeightInKilo(weight);
    calculateBMIMetricSystem(heightInCentimeter, weight);
  };

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
  };

  const handleHeightInFeetValue = (event) => {
    const heightInFeet = Number(event.target.value);
    setHeightInFeet(heightInFeet);
    calculateBMIImperialSystem(
      heightInFeet,
      heightInInch,
      weightInStone,
      weightInPound
    );
  };

  const handleHeightInInchValue = (event) => {
    const heightInInch = Number(event.target.value);
    setHeightInInch(heightInInch);
    calculateBMIImperialSystem(
      heightInFeet,
      heightInInch,
      weightInStone,
      weightInPound
    );
  };

  const handleWeightInStoneValue = (event) => {
    const weightInStone = Number(event.target.value);
    setWeightInStone(weightInStone);
    calculateBMIImperialSystem(
      heightInFeet,
      heightInInch,
      weightInStone,
      weightInPound
    );
  };

  const handleWeightInPoundValue = (event) => {
    const weightInPound = Number(event.target.value);
    setWeightInPound(weightInPound);
    calculateBMIImperialSystem(
      heightInFeet,
      heightInInch,
      weightInStone,
      weightInPound
    );
  };

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
                <input
                  type="text"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleHeightInFeetValue}
                />
                <span>ft</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleHeightInInchValue}
                />
                <span>in</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <label>Weight</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleWeightInStoneValue}
                />
                <span>st</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className="heading-m"
                  placeholder="0"
                  onChange={handleWeightInPoundValue}
                />
                <span>lbs</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.resultContainer}>
          {heightInCentimeter === null || weightInKilo === null ? (
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
