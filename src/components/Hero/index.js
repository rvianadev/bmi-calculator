import React, { useState } from "react";

import MediumHeading from "../../ui/MediumHeading";
import styles from "./styles.module.css";
import image from "./assets/image.svg";

function Hero() {
  let [selectedSystem, setSelectedSystem] = useState("metric");

  const handleSystemChange = (event) => {
    setSelectedSystem((selectedSystem = event.target.value));
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
                <input type="text" className="heading-m" placeholder="0" />
                <span>cm</span>
              </div>
            </div>
            <div className={styles.dataGroup}>
              <label>Weight</label>
              <div className={styles.inputGroup}>
                <input type="text" className="heading-m" placeholder="0" />
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
          <div className={styles.textResultContainer}>
            <MediumHeading>Welcome!</MediumHeading>
            <span>
              Enter your height and weight and you’ll see your BMI result here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
