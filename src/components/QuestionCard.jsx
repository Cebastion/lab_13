export default function QuestionCard({
  questionData,
  currentNumber,
  totalQuestions,
  onAnswerSelect,
}) {
  return (
    <div>
      <p style={{ color: "#666" }}>
        Питання {currentNumber} з {totalQuestions}
      </p>
      <h3 style={{ marginBottom: "20px" }}>{questionData.question}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(answer)}
            style={{
              padding: "12px",
              textAlign: "left",
              background: "#f0f0f0",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
