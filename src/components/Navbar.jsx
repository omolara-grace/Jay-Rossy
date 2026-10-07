import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../contex/useCart.js";

const links = [
  ["/about", "About"],
  ["/shop", "Shop"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useCart();
  const closeMenu = () => setMenu(false);

  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Main">
        <Link to="/about" className="brand" onClick={closeMenu}>
          Savora
        </Link>
        <ul className={`nav-links ${menu ? "open" : ""}`}>
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="icon-btn cart-btn"
            onClick={() => setOpen(true)}
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag size={22} />
            {count > 0 && <span className="badge">{count}</span>}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="Toggle menu"
          >
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
