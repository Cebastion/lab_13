import { useState } from "react";
import QuestionCard from "./QuestionCard";
import QuizResult from "./QuizResult";

const QUESTIONS = [
  {
    id: 1,
    question: "Яка компанія створила бібліотеку React?",
    answers: ["Google", "Meta (Facebook)", "Microsoft", "Apple"],
    correctAnswer: "Meta (Facebook)",
  },
  {
    id: 2,
    question: "Який хук використовується для збереження внутрішнього стану?",
    answers: ["useEffect", "useContext", "useState", "useRef"],
    correctAnswer: "useState",
  },
  {
    id: 3,
    question: "Що таке JSX?",
    answers: [
      "База даних",
      "Синтаксичне розширення для JavaScript",
      "Фреймворк",
      "Стилістичний препроцесор",
    ],
    correctAnswer: "Синтаксичне розширення для JavaScript",
  },
  {
    id: 4,
    question: "Який атрибут є обов'язковим при рендерингу списків у React?",
    answers: ["id", "class", "key", "index"],
    correctAnswer: "key",
  },
  {
    id: 5,
    question:
      "Яку команду використовує Vite для побудови (build) продуктової версії?",
    answers: ["npm run dev", "npm run build", "npm start", "npm run test"],
    correctAnswer: "npm run build",
  },
];

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    // Перевірка відповіді
    if (selectedAnswer === QUESTIONS[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <h2>🧠 React Вікторина</h2>
      <hr />

      {!isFinished ? (
        <QuestionCard
          questionData={QUESTIONS[currentQuestionIndex]}
          currentNumber={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS.length}
          onAnswerSelect={handleAnswerClick}
        />
      ) : (
        <QuizResult
          score={score}
          total={QUESTIONS.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}
