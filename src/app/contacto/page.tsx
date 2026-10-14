import type { Metadata } from "next";
import { Building2, Mail, MessagesSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ViewSyn",
  description: "Habla con ViewSyn y cuéntanos qué necesita tu organización.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="premium-route-main">
        <section className="premium-route-hero compact">
          <div className="container">
            <span className="section-kicker">Contacto</span>
            <h1>Hablemos de tu operación<span> y de cómo simplificarla.</span></h1>
            <p>Cuéntanos qué necesitas controlar, qué equipos administras y cómo trabaja hoy tu organización.</p>
          </div>
        </section>

        <section className="premium-contact-section">
          <div className="container premium-contact-layout">
            <div className="premium-contact-copy">
              <span className="section-kicker">Cuéntanos sobre tu organización</span>
              <h2>Empecemos por<span> lo que necesitas resolver.</span></h2>
              <p>Con esta información podremos entender mejor tu contexto y preparar el siguiente paso.</p>
              <div className="premium-contact-info">
                <article><span><Building2 size={18} /></span><div><strong>Para organizaciones</strong><p>Cuéntanos el tamaño y necesidades de tu operación.</p></div></article>
                <article><span><MessagesSquare size={18} /></span><div><strong>Atención comercial</strong><p>Revisaremos contigo el alcance adecuado para ViewSyn.</p></div></article>
                <article><span><Mail size={18} /></span><div><strong>Seguimiento claro</strong><p>Recibirás orientación para continuar con el proceso de contratación.</p></div></article>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
