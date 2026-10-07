import { Star, Plus } from "lucide-react";
import { useCart } from "../contex/useCart.js";

export default function FoodCard({ food }) {
  const { add } = useCart();
  return (
    <article className="card food-card">
      <div className="food-img">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
        />
      </div>
      <div className="food-body">
        <div className="food-meta">
          <span className="tag">{food.category}</span>
          <span className="rating">
            <Star size={14} fill="currentColor" /> {food.rating}
          </span>
        </div>
        <h3>{food.name}</h3>
        <p className="muted">{food.description}</p>
        <div className="food-foot">
          <strong className="price">${food.price.toFixed(2)}</strong>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => add(food)}
            aria-label={`Add ${food.name} to cart`}
          >
            <Plus size={16} /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
