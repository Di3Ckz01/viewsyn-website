import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  LayoutDashboard,
  CreditCard,
} from "lucide-react";

const items = [
  {
    icon: Boxes,
    title: "Funcionalidades",
    description:
      "Conoce cómo ViewSyn organiza activos, empleados, agentes, alertas y operación.",
    href: "/funcionalidades",
  },
  {
    icon: LayoutDashboard,
    title: "Tableros",
    description:
      "Explora cómo la información operativa se convierte en vistas claras y útiles.",
    href: "/tableros",
  },
  {
    icon: CreditCard,
    title: "Membresías",
    description:
      "Consulta las opciones disponibles para llevar ViewSyn a tu organización.",
    href: "/membresias",
  },
];

export default function HomeExplore() {
  return (
    <section className="home-explore-section">
      <div className="container">
        <div className="home-explore-heading">
          <span className="section-kicker">
            Explora ViewSyn
          </span>

          <h2>
            Conoce la plataforma
            <span> a tu manera.</span>
          </h2>

          <p>
            Profundiza únicamente en la información que necesitas.
          </p>
        </div>

        <div className="home-explore-grid">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="home-explore-card"
              >
                <span className="home-explore-icon">
                  <Icon size={21} />
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="home-explore-arrow">
                  <ArrowRight size={17} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}