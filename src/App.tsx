import { useEffect, useState } from "react";
import DeathQuiz from "./components/DeathQuiz";
import WarningScreen from "./components/WarningScreen";
import { GiDeathSkull } from "react-icons/gi";

export default function App() {
  const [step, setStep] = useState<"loading" | "warning" | "quiz" | "exit">(
    "loading"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep("warning");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (step === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <GiDeathSkull className="text-red-600 text-9xl mb-4 animate-pulse" />
        <h1 className="text-9xl font-creepster text-red-200 font-pirate">
          MUERTEST
        </h1>
      </div>
    );
  }

  if (step === "warning") {
    return (
      <WarningScreen
        onAccept={() => setStep("quiz")}
        onExit={() => setStep("exit")}
      />
    );
  }

  if (step === "quiz") {
    return <DeathQuiz />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
      Has salido del test.
    </div>
  );
}
