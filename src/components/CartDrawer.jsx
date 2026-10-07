import { useEffect } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../contex/useCart.js";
import Button from "./Button.jsx";

export default function CartDrawer() {
  const { items, open, setOpen, increase, decrease, remove, subtotal, clear } =
    useCart();
  const delivery = items.length ? 2.5 : 0;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <>
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`drawer ${open ? "open" : ""}`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="drawer-head">
          <h2>Your order</h2>
          <button
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="empty">
            <ShoppingBag size={40} />
            <p>Your cart is empty. Add a dish from the menu to get started.</p>
            <Button to="/shop" onClick={() => setOpen(false)}>
              Browse the menu
            </Button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((i) => (
                <li key={i.id} className="cart-item">
                  <img src={i.image} alt="" />
                  <div>
                    <h3>{i.name}</h3>
                    <p className="price">${(i.price * i.qty).toFixed(2)}</p>
                    <div className="qty">
                      <button
                        onClick={() => decrease(i.id)}
                        aria-label={`Decrease ${i.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{i.qty}</span>
                      <button
                        onClick={() => increase(i.id)}
                        aria-label={`Increase ${i.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="icon-btn"
                    onClick={() => remove(i.id)}
                    aria-label={`Remove ${i.name}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <p>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p>
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </p>
              <p className="total">
                <span>Total</span>
                <span>${(subtotal + delivery).toFixed(2)}</span>
              </p>
              <Button
                className="full"
                onClick={() => {
                  alert("Thank you! Your order has been placed.");
                  clear();
                  setOpen(false);
                }}
              >
                Place order
              </Button>
              <button className="link-btn" onClick={clear}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
