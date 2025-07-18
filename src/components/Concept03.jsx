import React, { useMemo, useState } from "react";

function Concept03() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  //   let count = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     count = count + i;
  //   }

  let count = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-5">useMemo</h1>
      <h1 className="text-2xl font-semibold mb-4">
        memoize the value across re-renders, only recalculate it if inputVal
        changes
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Sum from 1 to n & Counter
        </h1>

        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder="Find sum from 1 to n"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <p className="text-gray-700 text-lg mb-4">
          Sum from 1 to {inputValue} is{" "}
          <span className="font-bold text-blue-600">{count}</span>
        </p>

        <button
          onClick={() => setCounter(counter + 1)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Counter ({counter})
        </button>
      </div>
    </div>
  );
}

export default Concept03;
