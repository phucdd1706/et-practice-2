import React from "react";

const Problem = () => {
  //generate random number array start from 1 to length number
  const generateRandomNumber = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * length) + 1);
    }
    return arr;
  };

  const handleGenerate = () => {
    const length = document.getElementById("length") as HTMLInputElement;
    const result = document.querySelector(".result") as HTMLDivElement;
    const arr = generateRandomNumber(parseInt(length.value));
    const isArrEmpty = arr.length === 0;
    result.innerHTML = isArrEmpty ? "Result: " : `Result: [${arr}]`;
  };

  return (
    <div className="container">
      <h1 className="title align-center">Random Array Generator</h1>
      <div className="input-length">
        <label htmlFor="length" className="font-bold">
          Length:{" "}
        </label>
        <input type="number" id="length" />
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <p className="result font-bold" id="result">
        Result:{" "}
      </p>
    </div>
  );
};

export default Problem;
