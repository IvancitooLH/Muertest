import React, { useState } from "react";
import { questions } from "../data/Question";

const DeathQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4 font-pirate">
        MUERTEST
      </h1>

      {step < questions.length ? (
        <div className="bg-red-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl mb-4">{questions[step].question}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {questions[step].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-red-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl mb-2">Tu estilo de vida cotidiana...</h2>
          <p className="text-2xl font-bold text-red-300 mb-4">
            es estilo de muerte en vida 💀
          </p>
          <button
            onClick={restart}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Volver a intentar
          </button>
        </div>
      )}
    </div>
  );
};

export default DeathQuiz;
