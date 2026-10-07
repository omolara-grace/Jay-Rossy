import { useMemo, useState } from "react";
import { CartContext } from "./CartContext.js";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const add = (food) =>
    setItems((prev) =>
      prev.some((i) => i.id === food.id)
        ? prev.map((i) => (i.id === food.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...food, qty: 1 }],
    );
  const increase = (id) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decrease = (id) =>
    setItems((p) =>
      p.flatMap((i) =>
        i.id !== id ? [i] : i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [],
      ),
    );
  const remove = (id) => setItems((p) => p.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return {
      items,
      count,
      subtotal,
      open,
      setOpen,
      add,
      increase,
      decrease,
      remove,
      clear,
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
