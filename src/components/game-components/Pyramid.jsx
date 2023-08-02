// import React from "react";
import { prizeMoney } from "../../data";
import { useGlobalContext } from "../../../../who-wants-to-be-a-millionaire-react-quiz-app/src/context";
import half from "../../assets/images/lifeline-5050.png";
import ata from "../../assets/images/lifeline-ata.png";
import switchq from "../../assets/images/lifeline-switch.png";

const example = "flex flex-col justify-between h-screen px-1 bg-[#040450c9] "



const Pyramid = () => {
  const { correct, index } = useGlobalContext();
  return (
    <div className={example}>
      <div className="flex justify-center align-middle mt-3">
        <span className="flex justify-center align-middle w-1/3">
          <img src={half} alt="" className=" max-h-12" />
        </span>
        <span className="flex justify-center align-middlew-1/3">
          <img src={ata} alt="" className="max-h-12" />
        </span>
        <span className="flex justify-center align-middle w-1/3">
          <img src={switchq} alt="" className="max-h-12" />
        </span>
      </div>
      <div className="flex flex-col w-full my-5 pt-3">
        <ul className="flex flex-col px-2">
          {prizeMoney.map((m) => (
            <li key={m.id} className={`flex h-full py-2 ${index+1===m.id && 'bg-blue-950'}`}>
              <span className="block w-1/4 text-lg text-center">{m.id}</span>
              <span className="block w-11/12 text-xl text-left font-bold pl-3">
                {m.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pyramid;
