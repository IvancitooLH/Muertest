import React, { useState } from "react";
import { GiDeathSkull } from "react-icons/gi";

interface Props {
  onAccept: () => void;
  onExit: () => void;
}

const WarningScreen: React.FC<Props> = ({ onAccept, onExit }) => {
  const [showError, setShowError] = useState(false);

  const age = 18;

  const handleContinue = () => {
    if (age !== null && age >= 18) {
      onAccept();
    } else {
      setShowError(true);
      setTimeout(() => onExit(), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-red-900 text-red-200 flex flex-col items-center justify-center p-6 text-center font-carolloPlayscript">
      <GiDeathSkull className="text-black text-9xl mb-4" />
      <h2 className="text-3xl font-bold mb-2">Antes de comenzar...</h2>
      <p className="mb-4 text-2xl max-w-xl">
        Se hace de tu conocimiento que este es un proyecto escolar de
        entrenamiento de datos con el fin de realizar predicciones en base a
        conocimientos obtenidos de una base de datos.
      </p>
      <p className="mb-4 text-xl max-w-xl font-bold">
        El resultado del siguiente test no tiene la certeza total ni
        implicaciones reales en el destino de la persona quien lo realice.
      </p>
      <p className="mb-2">¿Deseas continuar?</p>

      {showError && (
        <p className="text-red-300 font-bold mb-2">Debes ser mayor de edad</p>
      )}

      <div className="flex col-auto gap-4">
        <button
          onClick={handleContinue}
          className="bg-gray-600 hover:bg-gray-500 w-24 px-4 py-2 rounded-lg"
        >
          SÍ
        </button>
        <button
          onClick={window.close}
          className="bg-gray-600 hover:bg-gray-500 w-24 px-4 py-2 rounded-lg"
        >
          SALIR
        </button>
      </div>
    </div>
  );
};

export default WarningScreen;
