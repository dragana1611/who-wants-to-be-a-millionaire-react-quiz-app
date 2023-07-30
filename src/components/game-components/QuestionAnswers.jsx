import React from "react";
import { useGlobalContext } from "../../context";

const QuestionAnswers = () => {
  const { questions, index, correct, checkAnswer } = useGlobalContext();
  console.log(questions, index, correct);
  const { question, incorrect_answers, correct_answer } = questions[index];
  console.log(question);
  const answers = [...incorrect_answers, correct_answer];

  // const tempIndex = Math.floor(Math.random() * 4);
  // if (tempIndex === 3) {
  //   answers.push(correct_answer);
  // } else {
  //   answers.push(answers[tempIndex]);
  //   answers[tempIndex] = correct_answer;
  // }

  return (
    <div className="flex flex-col justify-center gap-y-3 align-middle w-full text-center">
      {/* <h2 dangerouslySetInnerHTML={{ __html: question }} /> */}
      <h2 className="w-full text-2xl mb-3 p-4 bg-blue-950 rounded-full"> {question} </h2>
      <div className="w-full flex flex-wrap justify-center align-middle gap-2 p-2 mb-3">
        {answers.map((answer, index) => (
          <button className="w-[45%] p-2 cursor-pointer bg-blue-950 rounded-full"
          key={index} onClick={() => checkAnswer(correct_answer === answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswers;
