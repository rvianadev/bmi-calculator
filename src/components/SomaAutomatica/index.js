import React, { useState } from "react";

const SomaAutomatica = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [soma, setSoma] = useState(0);

  const handleValor1Change = (event) => {
    const novoValor1 = parseFloat(event.target.value);
    setValor1(novoValor1);
    setSoma(novoValor1 + valor2);
  };

  const handleValor2Change = (event) => {
    const novoValor2 = parseFloat(event.target.value);
    setValor2(novoValor2);
    setSoma(valor1 + novoValor2);
  };

  return (
    <div>
      <label>
        Valor 1:
        <input type="number" onChange={handleValor1Change} />
      </label>
      <br />
      <label>
        Valor 2:
        <input type="number" onChange={handleValor2Change} />
      </label>
      <br />
      <p>A soma é: {soma}</p>
    </div>
  );
};

export default SomaAutomatica;
