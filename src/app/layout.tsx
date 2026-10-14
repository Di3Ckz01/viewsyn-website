import type { Metadata } from "next";
import "./globals.css";

import SiteEffects from "@/components/ui/SiteEffects";

export const metadata: Metadata = {
  title: "ViewSyn | Control de activos y operación",
  description:
    "ViewSyn centraliza la gestión de activos, empleados, asignaciones, agentes, actividad y alertas.",
};

const themeScript = `
(function () {
  try {
    const savedTheme = localStorage.getItem("ViewSyn-theme");
    const theme = savedTheme || "dark";

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body suppressHydrationWarning>
        {children}

        <SiteEffects />
      </body>
    </html>
  );
}