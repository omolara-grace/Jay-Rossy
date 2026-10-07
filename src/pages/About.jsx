import { Leaf, ChefHat, Zap, Flame } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const features = [
  { icon: Leaf, title: "Fresh Ingredients", text: "Produce from local farms, delivered every morning." },
  { icon: ChefHat, title: "Expert Chefs", text: "A kitchen team trained across three continents." },
  { icon: Zap, title: "Fast Service", text: "Most tables are served within fifteen minutes." },
  { icon: Flame, title: "Warm Atmosphere", text: "Low light, open fire and room to linger." },
];
const stats = [["10+", "Years Experience"], ["50+", "Menu Items"], ["20K+", "Happy Customers"], ["15+", "Professional Staff"]];

export default function About() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(26,15,10,.88), rgba(26,15,10,.35)), url(${img("photo-1414235077428-338989a2e8c0", 1800)})` }}>
        <div className="container hero-inner">
          <h1>Good Food. Great Moments.</h1>
          <p>Fresh ingredients, passionate chefs, and unforgettable flavors — crafted for every moment.</p>
          <Button to="/shop">Explore Our Menu</Button>
        </div>
      </section>

      <section className="section container split">
        <img className="rounded-img" src={img("photo-1555396273-367ea4eb4db5", 900)} alt="Savora dining room" loading="lazy" />
        <div>
          <SectionTitle title="Our Story" />
          <p>Savora began in 2014 as a six-table room on Food Street, with one wood grill and a short menu written on a chalkboard. Our founders wanted a place where the food tasted like home, only better.</p>
          <p>Ten years later the chalkboard is gone but the rule stays: we cook what is in season and buy from farmers we can call by name. Every sauce, bread and dessert is made in our kitchen each day.</p>
          <p>Whether it is a quick lunch or a birthday for twenty, we want you to leave full and a little reluctant to go.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionTitle center title="Why Choose Us" subtitle="Four things we refuse to compromise on." />
          <div className="grid grid-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card feature">
                <span className="icon-wrap"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container split reverse">
        <img className="rounded-img" src={img("photo-1577219491135-ce391730fb2c", 800)} alt="Head chef Adaeze Okonkwo" loading="lazy" />
        <div>
          <SectionTitle title="Chef Adaeze Okonkwo" subtitle="Head Chef & Co-Founder" />
          <p>Chef Adaeze grew up cooking beside her grandmother in Enugu, then trained in Lyon and Lisbon before coming home to lead Savora's kitchen.</p>
          <p>Her cooking pairs West African flavours with classical technique, and she still tastes every sauce before service.</p>
        </div>
      </section>

      <section className="stats">
        <div className="container grid grid-4">
          {stats.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>
    </>
  );
}
