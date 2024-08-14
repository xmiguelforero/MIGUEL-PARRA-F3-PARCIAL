import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateInputs = () => {
    if (input1.trim().length < 3 || input1.trim() !== input1) {
      return false;
    }
    if (input2.length < 6) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setError("");
      setSubmitted(true);
    } else {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ingresa tu nombre:</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <div>
            <label>Ingresa tu color favorito (formato HEX):</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {submitted && <Card input1={input1} input2={input2} />}
      </div>
    </>
  );
};

export default Form;
