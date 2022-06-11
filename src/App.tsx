import styles from './App.module.css'
import { useState } from "react";
import { levels, calculateImc } from './helpers/imc'
import { GridItem } from './components/GridItem';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Preencha todos os campos.")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <h3>Calculadora de IMC</h3>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC </h1>
          <p>IMC significa Índice de Massa Corporal. É um padrão para calcular o peso ideal para cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite sua altura em metros."
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite seu peso em Kg."
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calculate</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;