import { Link } from "react-router-dom";
import {
  Globe2,
  MessageCircle,
  Music2,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const XIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.2 2h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2H8l4.7 6.2L18.2 2Zm-1.2 18h1.8L7.1 3.9H5.2L17 20Z" />
  </svg>
);

const socials = [
  { name: "Instagram", icon: <Globe2 size={20} /> },
  { name: "Facebook", icon: <MessageCircle size={20} /> },
  { name: "TikTok", icon: <Music2 size={20} /> },
  { name: "X", icon: <XIcon /> },
];

export function Socials() {
  return (
    <div className="socials">
      {socials.map((s) => (
        <a
          key={s.name}
          href="#"
          aria-label={s.name}
          onClick={(e) => e.preventDefault()}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">Savora</p>
          <p className="muted">
            Seasonal, fire-cooked food made from ingredients we know by name.
            Lagos' favourite table since 2014.
          </p>
          <Socials />
        </div>
        <div>
          <h3>Quick links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Visit us</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={16} /> 24 Food Street, Lagos
            </li>
            <li>
              <Phone size={16} /> +234 800 123 4567
            </li>
            <li>
              <Mail size={16} /> hello@savora.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Opening hours</h3>
          <ul className="contact-list">
            <li>
              <Clock size={16} /> Monday – Sunday
            </li>
            <li>
              <Clock size={16} /> 10:00 AM – 10:00 PM
            </li>
          </ul>
        </div>
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} Savora Restaurant. All rights reserved.
      </p>
    </footer>
  );
}
