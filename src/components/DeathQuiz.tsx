import React, { useState } from "react";
import { questions } from "../data/Question";
import { GiDeathSkull } from "react-icons/gi";

const DeathQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isMinor, setIsMinor] = useState(false);

  const handleAnswer = (answer: string) => {
    if (step === 0 && answer === "10-18") {
      setIsMinor(true);
      return;
    }

    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
    setIsMinor(false);
  };

  const exit = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 py-8 font-sans">
      <GiDeathSkull className="text-red-600 text-9xl mb-4 animate-pulse" />
      <h1 className="text-3xl font-bold text-red-600 mb-6 font-pirate">
        MUERTEST Chat
      </h1>

      <div className="w-full max-w-md space-y-4">
        {questions.slice(0, step).map((q, index) => (
          <div key={index}>
            <div className="bg-gray-800 rounded-xl p-3 text-left w-fit max-w-xs mb-1">
              <p className="text-sm">{q.question}</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-red-700 rounded-xl p-3 text-white text-right w-fit max-w-xs ml-auto">
                <p className="text-sm">{answers[index]}</p>
              </div>
            </div>
          </div>
        ))}

        {isMinor ? (
          <div className="text-center mt-6">
            <p className="text-red-500 text-lg mb-4 bg-red-800 px-4 py-2 rounded-xl">
              No puedes continuar si eres menor de edad
            </p>
            <button
              onClick={exit}
              className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-full"
            >
              Salir
            </button>
          </div>
        ) : step < questions.length ? (
          <>
            <div className="bg-gray-800 rounded-xl p-3 text-left w-fit max-w-xs mb-1">
              <p className="text-sm">{questions[step].question}</p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-red-700 hover:bg-red-600 text-white w-1/4 px-4 py-2 rounded-full text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-6 text-center">
            <p className="text-lg my4-3 bg-red-800 px-4 py-2 rounded-xl inline-block">
              Algun motivo aleatorio de muerte va a parecer aquí.
            </p>
            <div className="mt-4">
              <button
                onClick={restart}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full"
              >
                Volver a intentar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeathQuiz;
