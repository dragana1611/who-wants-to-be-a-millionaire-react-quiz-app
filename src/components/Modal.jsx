import React from "react";
import { useGlobalContext } from "../context";
import ExitButton from "./buttons/ExitButton";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="">
        <h2>congrats!</h2>
        <p>You answered all questions correctly</p>
        <button className="" onClick={closeModal}>
          <ExitButton />
        </button>
      </div>
    </div>
  );
};

export default Modal;
