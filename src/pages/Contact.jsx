import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import { Socials } from "../components/Footer.jsx";

const info = [
  { icon: MapPin, title: "Address", lines: ["24 Food Street, Lagos, Nigeria"] },
  { icon: Phone, title: "Phone", lines: ["+234 800 123 4567"] },
  { icon: Mail, title: "Email", lines: ["hello@savora.com"] },
  { icon: Clock, title: "Opening Hours", lines: ["Monday – Sunday", "10:00 AM – 10:00 PM"] },
];
const empty = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.phone && !/^[+\d][\d\s-]{6,}$/.test(v.phone)) e.phone = "Enter a valid phone number.";
  if (v.subject.trim().length < 3) e.subject = "Add a short subject.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };
  const submit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) { setSent(true); setValues(empty); }
  };

  const field = (name, label, type = "text", extra = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} rows="5" value={values[name]} onChange={change} aria-invalid={!!errors[name]} />
      ) : (
        <input id={name} name={name} type={type} value={values[name]} onChange={change} aria-invalid={!!errors[name]} {...extra} />
      )}
      {errors[name] && <small className="error" role="alert">{errors[name]}</small>}
    </div>
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Let's Talk</h1>
          <p>We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section container">
        <div className="grid grid-4">
          {info.map(({ icon: Icon, title, lines }) => (
            <article key={title} className="card feature">
              <span className="icon-wrap"><Icon size={24} /></span>
              <h3>{title}</h3>
              {lines.map((l) => <p key={l} className="muted">{l}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <form className="card form" onSubmit={submit} noValidate>
            <h2>Send us a message</h2>
            {sent && <p className="success" role="status"><CheckCircle size={18} /> Message sent. We'll reply within one working day.</p>}
            {field("name", "Full name", "text", { autoComplete: "name" })}
            {field("email", "Email", "email", { autoComplete: "email" })}
            {field("phone", "Phone (optional)", "tel", { autoComplete: "tel" })}
            {field("subject", "Subject")}
            {field("message", "Message", "textarea")}
            <Button type="submit" className="full">Send Message</Button>
          </form>

          <div className="map-card">
            <div className="map-pin"><MapPin size={28} /></div>
            <h3>Savora, Food Street</h3>
            <p>24 Food Street, Lagos, Nigeria</p>
            <a className="btn btn-light btn-sm" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=24+Food+Street+Lagos">Get directions</a>
            <Socials />
          </div>
        </div>
      </section>
    </>
  );
}
