import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Esencial", description: "Para organizaciones que quieren centralizar activos, personal y asignaciones.", featured: false, features: ["Empleados y áreas", "Gestión de activos", "Asignaciones", "Mantenimiento", "Usuarios y roles"] },
  { name: "Profesional", description: "Para equipos que requieren mayor visibilidad operativa y seguimiento.", featured: true, features: ["Todo lo incluido en Esencial", "Agentes ViewSyn", "Actividad y productividad", "Alertas", "Reportes"] },
  { name: "Corporativa", description: "Para organizaciones con mayores necesidades de administración y control.", featured: false, features: ["Todo lo incluido en Profesional", "Administración avanzada", "Seguridad por organización", "Roles y permisos", "Mayor alcance operativo"] },
];

export default function MembershipsSection() {
  return (
    <section className="premium-memberships-section" id="membresias">
      <div className="container">
        <div className="premium-memberships-heading">
          <div>
            <span className="section-kicker">Membresías</span>
            <h2>Elige cómo quieres<span> trabajar con ViewSyn.</span></h2>
          </div>
          <p>Selecciona la opción que mejor se adapte al tamaño, necesidades y operación de tu organización.</p>
        </div>

        <div className="premium-memberships-grid">
          {plans.map((plan) => (
            <article className={`premium-plan-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="premium-plan-badge"><Sparkles size={12} />Recomendado</span>}
              <div className="premium-plan-head">
                <span>Membresía</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <div className="premium-plan-price">
                <strong>Precio por definir</strong>
                <span>Modalidad mensual o anual</span>
              </div>
              <div className="premium-plan-features">
                {plan.features.map((feature) => <div key={feature}><span><Check size={13} /></span>{feature}</div>)}
              </div>
              <Link href={`/comprar?plan=${plan.name.toLowerCase()}`} className={`premium-plan-button ${plan.featured ? "primary" : ""}`}>
                Elegir membresía <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        <div className="premium-memberships-help">
          <span>¿Necesitas ayuda para elegir?</span>
          <Link href="/contacto">Hablar con ventas <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
