import React, { useState } from "react";

function Concept02() {
  const [inputValue, setInputValue] = useState(0);

  let sum = 0;
  for (let i = 1; i <= inputValue; i++) {
    sum += i;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          useState Sum of 1 to n
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Enter a number:
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <p className="text-lg font-medium text-gray-700">
            Sum of 1 to {inputValue} is:{" "}
            <span className="text-blue-600 font-bold">{sum}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Concept02;
