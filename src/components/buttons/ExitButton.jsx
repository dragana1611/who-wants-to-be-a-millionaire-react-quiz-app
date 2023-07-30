// import React from "react";
import { Link } from "react-router-dom";
import exit from '../../assets/images/walk-away.png'
const ExitButton = () => {
  return (
    <div className="flex justify-start mt-40 px-5">
      <Link to="/">
        <img src={exit} alt="" className="h-[100px]"/>
      </Link>
    </div>
  );
};

export default ExitButton;
