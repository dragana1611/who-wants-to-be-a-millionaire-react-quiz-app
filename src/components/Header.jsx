import React from "react";
import logo from '../assets/images/quiz-logo.png'

function Header() {
  return (
    <>
      <header className="flex justify-center h-36 pt-5">
        <img src={logo} alt="logo"  className="h-full" />
      </header>
    </>
  );
}

export default Header;
 