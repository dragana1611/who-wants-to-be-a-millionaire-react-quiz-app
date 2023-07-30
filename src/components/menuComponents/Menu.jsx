import React from "react";
import MenuButton from "../buttons/MenuButton";

const Menu = () => {
  return (
    <div className ="text-2xl mt-16">
      <MenuButton source="/quiz" text="Start" />
      <MenuButton source="/bestscores" text="Best Scores" />
      <MenuButton source="/setup" text="Options" />
    </div>
  );
};
export default Menu;
