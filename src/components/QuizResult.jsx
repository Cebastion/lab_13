export default function QuizResult({ score, total, onRestart }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <h3 style={{ color: "#2e7d32", fontSize: "24px" }}>Тест завершено! 🎉</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Ваш результат: {score} з {total} балів
      </p>

      <button
        onClick={onRestart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Пройти знову
      </button>
    </div>
  );
}
