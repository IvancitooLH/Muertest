interface Question {
  question: string;
  options: string[];
}

export const questions: Question[] = [
  {
    question: "¿Cuál es tu edad?",
    options: ["10-20", "20-30", "30-40", "40+"],
  },
  {
    question: "En clase, tú eres el que...",
    options: ["Se duerme", "Hace reír", "Hace la tarea", "No va a clase"],
  },
  {
    question: "¿Prefieres trabajar o estudiar?",
    options: ["Trabajar", "Estudiar", "Ninguno", "Ambos"],
  },
  {
    question: "¿Cómo pasas la mayoría de tu tiempo?",
    options: ["Redes sociales", "Estudiando", "Trabajando", "Durmiendo"],
  },
];
