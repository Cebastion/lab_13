import CurrencyConverter from "./components/CurrencyConverter";
import QuizApp from "./components/QuizApp";
import RecipeCatalog from "./components/RecipeCatalog";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "30px",
        }}
      >
        <CurrencyConverter />
        <QuizApp />
        <RecipeCatalog />
      </div>
    </div>
  );
}
export default App;
