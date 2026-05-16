import { useState } from "react";

export default function RecipeItem({ recipe }) {
  // Локальний стан для управління відкриттям/закриттям акордеону
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)} // Зміна значення на протилежне
        style={{
          padding: "15px",
          background: isOpen ? "#e3f2fd" : "#f5f5f5",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <span>{recipe.title}</span>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>

      {/* Умовний рендеринг за допомогою оператора && */}
      {isOpen && (
        <div
          style={{
            padding: "15px",
            background: "#fff",
            borderTop: "1px solid #ddd",
          }}
        >
          <h4>Інгредієнти:</h4>
          <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <h4>Інструкція приготування:</h4>
          <p style={{ lineHeight: "1.5", color: "#333" }}>
            {recipe.instructions}
          </p>
        </div>
      )}
    </div>
  );
}
