import styles from './App.module.css'
import { useState } from "react";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Fill all fields.")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <h3>BMI Calculator</h3>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI </h1>
          <p>BMI stands for Body Mass Index. It is a person adopted to calculate the ideal weight of each person.</p>
          <input
            type="number"
            placeholder="Type your height in meters"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Type your weight in Kg"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calculate</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}
export default App;