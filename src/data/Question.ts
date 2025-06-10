interface Question {
  question: string;
  options: string[];
}

export const questions: Question[] = [
  {
    question: "¿Cuál es tu edad?",
    options: ["10-18", "20-30", "30-40"],
  },
  {
    question: "Eres hombre o mujer?",
    options: ["Hombre", "Mujer"],
  },
  {
    question: "En qué país vives?",
    options: ["España", "México", "Argentina", "Otro"],
  },
];
