import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MembershipsSection from "@/components/home/MembershipsSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Membresías | ViewSyn",
  description: "Conoce las opciones disponibles para llevar ViewSyn a tu organización.",
};

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main className="premium-route-main">
        <section className="premium-route-hero compact memberships">
          <div className="container">
            <span className="section-kicker">Membresías</span>
            <h1>Encuentra la forma de trabajar<span> con ViewSyn.</span></h1>
            <p>Elige la opción que mejor se adapte a las necesidades, tamaño y operación de tu organización.</p>
          </div>
        </section>
        <MembershipsSection />
        <section className="premium-plan-note-section">
          <div className="container">
            <div className="premium-plan-note">
              <strong>La contratación se completa de forma guiada.</strong>
              <p>Selecciona una membresía, registra los datos esenciales de tu organización y continúa con el proceso de contratación.</p>
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
