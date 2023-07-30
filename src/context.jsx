import React, { useState, useContext, useEffect } from "react";
// import PropTypes from "prop-types";
import { quizData } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const questionsData = quizData.results;
  console.log(quizData);
  console.log(questionsData);
  useEffect(() => {
    setQuestions(questionsData);
  }, [questionsData]);

  // const fetchQuestions = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const questionsData = await response
  //       .json()
  //       .catch((err) => console.log(err));

  //     console.log(questionsData);
  //     console.log(questionsData.results);
  //     if (questionsData) {
  //       const data = questionsData.results;
  //       console.log(data);
  //       if (data.length > 0) {
  //         setQuestions(data);
  //         setError(false);
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        //openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => { //valu -> true / false
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCorrect(0);
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   const url =
  //     "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  //   fetchQuestions(url);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// AppProvider.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
