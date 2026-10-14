import type { Metadata } from "next";
import { Suspense } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Contratar ViewSyn",
  description:
    "Prepara los datos de tu organización para contratar ViewSyn.",
};

function CheckoutLoading() {
  return (
    <section className="premium-checkout-loading">
      <div className="container">
        <p>Preparando contratación...</p>
      </div>
    </section>
  );
}

export default function BuyPage() {
  return (
    <>
      <Navbar />

      <main className="premium-route-main">
        <Suspense fallback={<CheckoutLoading />}>
          <CheckoutClient />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}