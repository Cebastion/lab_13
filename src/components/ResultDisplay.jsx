export default function ResultDisplay({ amountInUah, selectedCurrency, rate }) {
  const uah = parseFloat(amountInUah);

  // Якщо поле пусте або не число — не рахуємо
  if (isNaN(uah) || uah <= 0) {
    return (
      <p style={{ fontWeight: "bold", color: "#555" }}>
        Будь ласка, введіть коректну суму.
      </p>
    );
  }

  const result = uah / rate;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "4px",
      }}
    >
      <p>
        Поточний курс: 1 {selectedCurrency} = {rate.toFixed(2)} UAH
      </p>
      <h3 style={{ margin: 0, color: "#2e7d32" }}>
        Результат: {result.toFixed(2)} {selectedCurrency}
      </h3>
    </div>
  );
}
