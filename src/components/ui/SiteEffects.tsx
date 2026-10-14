"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const goToTop = () => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);

        const target =
          document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    goToTop();

    const frame =
      window.requestAnimationFrame(goToTop);

    const timeout =
      window.setTimeout(goToTop, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}