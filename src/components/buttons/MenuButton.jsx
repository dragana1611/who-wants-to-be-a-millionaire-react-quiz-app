import React from "react";
import { Link } from "react-router-dom";

const MenuButton = (props) => {
  return (
    <Link className="block h-12 w-80 bg-[#040450] mb-5 py-2 text-center rounded-3xl shadow-inner" to={props.source} >
      {props.text}
    </Link>
  );
};

export default MenuButton;
