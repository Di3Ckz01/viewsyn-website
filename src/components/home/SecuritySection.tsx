import { Building2, KeyRound, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Información separada por organización",
    description: "Cada empresa trabaja únicamente con la información correspondiente a su propia organización.",
  },
  {
    icon: Users,
    title: "Usuarios y roles",
    description: "Administra quién puede acceder y qué funciones puede utilizar dentro de la organización.",
  },
  {
    icon: KeyRound,
    title: "Permisos de acceso",
    description: "Define alcances según las responsabilidades de cada usuario.",
  },
];

export default function SecuritySection() {
  return (
    <section className="premium-security-section">
      <div className="container">
        <div className="premium-security-heading">
          <span className="section-kicker">Seguridad por organización</span>
          <h2>La información de cada empresa<span> permanece en su lugar.</span></h2>
          <p>
            ViewSyn organiza el acceso mediante organizaciones, usuarios, roles y permisos
            para mantener separado el contexto de cada empresa.
          </p>
        </div>

        <div className="premium-security-layout">
          <div className="premium-security-diagram">
            <div className="premium-security-diagram-head">
              <div><span>Organización activa</span><strong>Empresa</strong></div>
              <span className="premium-security-safe"><ShieldCheck size={14} />Protegido</span>
            </div>

            <div className="premium-security-root">
              <Building2 size={19} />
              <div><strong>Organización</strong><span>Espacio de trabajo independiente</span></div>
            </div>

            <div className="premium-security-tree-line" />

            <div className="premium-security-nodes">
              <article><Users size={17} /><strong>Usuarios</strong><span>Accesos controlados</span></article>
              <article><ShieldCheck size={17} /><strong>Roles</strong><span>Funciones asignadas</span></article>
              <article><KeyRound size={17} /><strong>Permisos</strong><span>Alcance definido</span></article>
            </div>
          </div>

          <div className="premium-security-items">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span><Icon size={18} /></span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
