import React from "react";

const Card = ({ input1, input2 }) => {
  const boxStyle = {
    backgroundColor: input2,
    border: "1px solid #000",
    marginTop: "10px",
  };

  return (
    <>
      <div
        style={{ border: "1px solid #000", padding: "10px", marginTop: "20px" }}
      >
        <p>Hola {input1}</p>
        <p>
          Sabemos que tu color favorito es <div style={boxStyle}>{input2}</div>
        </p>
      </div>
    </>
  );
};

export default Card;
