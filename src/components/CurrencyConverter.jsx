import { useState, useEffect } from "react";
import CurrencySelect from "./CurrencySelect";
import ResultDisplay from "./ResultDisplay";

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amountInUah, setAmountInUah] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Завантаження курсів валют з API НБУ при монтуванні компонента
  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        if (!response.ok) throw new Error("Помилка завантаження даних");
        return response.json();
      })
      .then((data) => {
        // Трансформуємо масив у зручний об'єкт { "USD": 41.2, "EUR": 44.5 }
        const formattedRates = data.reduce((acc, item) => {
          acc[item.cc] = item.rate;
          return acc;
        }, {});
        setRates(formattedRates);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Порожній масив залежностей означає виклик один раз при монтуванні

  if (loading) return <div>Завантаження курсів валют...</div>;
  if (error) return <div>Сталася помилка: {error}</div>;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>💵 Конвертер валют (НБУ)</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Сума в ГРН (UAH):
        </label>
        <input
          type="number"
          value={amountInUah}
          onChange={(e) => setAmountInUah(e.target.value)}
          placeholder="Введіть суму..."
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      <CurrencySelect
        currencies={Object.keys(rates).filter((c) =>
          ["USD", "EUR", "GBP", "PLN"].includes(c),
        )} // Обмежимо список популярними
        selectedCurrency={selectedCurrency}
        onChangeCurrency={setSelectedCurrency}
      />

      <ResultDisplay
        amountInUah={amountInUah}
        selectedCurrency={selectedCurrency}
        rate={rates[selectedCurrency]}
      />
    </div>
  );
}
