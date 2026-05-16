import RecipeItem from "./RecipeItem";

const RECIPES = [
  {
    id: 1,
    title: "🍝 Паста Карбонара",
    ingredients: [
      "Спагеті — 200г",
      "Бекен — 100г",
      "Жовтки — 3 шт.",
      "Пармезан — 50г",
      "Часник, сіль, перець",
    ],
    instructions:
      "Відваріть пасту. Обсмажте бекон з часником. Змішайте жовтки з сиром та перцем. З'єднайте все разом із гарячою пастою.",
  },
  {
    id: 2,
    title: "🍕 Піца Маргарита",
    ingredients: [
      "Тісто для піци",
      "Томатний соус — 4 ст.л.",
      "Моцарела — 120г",
      "Базилік свіжий",
      "Оливкова олія",
    ],
    instructions:
      "Розкачайте тісто, змастіть соусом. Викладіть моцарелу. Випікайте при 220°C протягом 10-12 хвилин. Прикрасьте базиліком.",
  },
  {
    id: 3,
    title: "🥗 Салат Цезар",
    ingredients: [
      "Куряче філе — 150г",
      "Салат Ромен",
      "Сухарики — 50г",
      "Пармезан тертий",
      "Соус Цезар",
    ],
    instructions:
      "Обсмажте курку шматочками. Нарвіть салат, додайте курку, сухарики та пармезан. Заправте фірмовим соусом.",
  },
];

export default function RecipeCatalog() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        📖 Кулінарний каталог (Accordion)
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {RECIPES.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
