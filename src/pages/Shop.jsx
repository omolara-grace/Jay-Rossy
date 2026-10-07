import { useState } from "react";
import FoodCard from "../components/FoodCard.jsx";
import { categories, foods } from "../data/foods.js";

export default function Shop() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? foods : foods.filter((f) => f.category === active);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Explore Our Menu</h1>
          <p>Freshly prepared dishes made with passion.</p>
        </div>
      </section>
      <section className="section container">
        <div className="filters" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button key={c} className={`chip ${active === c ? "active" : ""}`} aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="grid grid-3">
          {list.map((f) => <FoodCard key={f.id} food={f} />)}
        </div>
      </section>
    </>
  );
}
