import React, { useState } from "react";

function Concept01() {
  const [counter, setCounter] = useState(0);

  function increament(){ 
    setCounter(counter+1)
  }

  function decreament(){
    setCounter(counter-1)
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-neutral-700">
      <h1 className="text-4xl  font-bold mb-6 text-white">useState</h1>
      <div className="bg-gray-500 flex flex-col justify-center items-center rounded-md h-[200px] w-[400px]">
        <label htmlFor="" className="text-white text-3xl">
          counter:{counter}{" "}
        </label>
        <div className="flex justify-around gap-7 mt-3 ">
          <button onClick={increament}
           className="bg-white px-2.5 py-1 font-bold rounded-r-sm rounded-l-sm active:bg-gray-400 cursor-pointer">
            +
          </button>
          <button onClick={decreament}
           className="bg-white px-3 py-1 font-bold rounded-r-sm rounded-l-sm active:bg-gray-400 cursor-pointer">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Concept01;
