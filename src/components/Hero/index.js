import React, { useState } from "react";

import MediumHeading from "../../ui/MediumHeading";
import styles from "./styles.module.css";
import image from "./assets/image.svg";

function Hero() {
  const [selectedSystem, setSelectedSystem] = useState("metric");

  const [heightInCentimeter, setHeightInCentimeter] = useState(0);
  const [weightInKilo, setWeightInKilo] = useState(0);

  const [heightInFeet, setHeightInFeet] = useState(0);
  const [heightInInch, setHeightInInch] = useState(0);
  const [weightInStone, setWeightInStone] = useState(0);
  const [weightInPound, setWeightInPound] = useState(0);

  const [bmi, setBMI] = useState(0);

  const calculateBMIMetricSystem = (height, weight) => {
    const bmiMetric = (weight / Math.pow(height / 100, 2)).toFixed(1);
    setBMI(bmiMetric);
  };

  const calculateBMIImperialSystem = (foot, inch, stone, pound) => {
    const bmiImperial = (
      ((stone * 14 + pound) / Math.pow(foot * 12 + inch, 2)) *
      703
    ).toFixed(1);

    setBMI(bmiImperial);
  };

  const handleHeightValue = (event) => {
    const height = Number(event.target.value);
    setHeightInCentimeter(height);

    if (event.target.value !== 0 && weightInKilo !== 0) {
      calculateBMIMetricSystem(height, weightInKilo);
    } else {
      setBMI(0);
    }
  };

  const handleWeightValue = (event) => {
    const weight = Number(event.target.value);
    setWeightInKilo(weight);

    if (event.target.value !== 0 && heightInCentimeter !== 0) {
      calculateBMIMetricSystem(heightInCentimeter, weight);
    } else {
      setBMI(0);
    }
  };

  const handleHeightInFeetValue = (event) => {
    const heightFeet = Number(event.target.value);
    setHeightInFeet(heightFeet);

    if (event.target.value !== "") {
      calculateBMIImperialSystem(
        heightFeet,
        heightInInch,
        weightInStone,
        weightInPound
      );
    } else {
      setBMI(0);
    }
  };

  const handleHeightInInchValue = (event) => {
    const heightInch = Number(event.target.value);
    setHeightInInch(heightInch);

    if (event.target.value !== "") {
      calculateBMIImperialSystem(
        heightInFeet,
        heightInch,
        weightInStone,
        weightInPound
      );
    } else {
      setBMI(0);
    }
  };

  const handleWeightInStoneValue = (event) => {
    const weightStone = Number(event.target.value);
    setWeightInStone(weightStone);

    if (event.target.value !== "") {
      calculateBMIImperialSystem(
        heightInFeet,
        heightInInch,
        weightStone,
        weightInPound
      );
    } else {
      setBMI(0);
    }
  };

  const handleWeightInPoundValue = (event) => {
    const weightPound = Number(event.target.value);
    setWeightInPound(weightPound);

    if (event.target.value !== "") {
      calculateBMIImperialSystem(
        heightInFeet,
        heightInInch,
        weightInStone,
        weightPound
      );
    } else {
      setBMI(0);
    }
  };

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
    const inputs = document.querySelectorAll('[type="number"]');

    // Limpa os inputs quando troca de sistema
    inputs.forEach((input) => {
      input.value = null;
    });

    setBMI(0);
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
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
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
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
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
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
                  onChange={handleHeightInFeetValue}
                />
                <span>ft</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                  onChange={handleHeightInInchValue}
                />
                <span>in</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <label>Weight</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                  onChange={handleWeightInStoneValue}
                />
                <span>st</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  className="heading-m"
                  placeholder="0"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                  onChange={handleWeightInPoundValue}
                />
                <span>lbs</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.resultContainer}>
          {bmi === 0 ? (
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
