export default function CurrencySelect({
  currencies,
  selectedCurrency,
  onChangeCurrency,
}) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        Цільова валюта:
      </label>
      <select
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
