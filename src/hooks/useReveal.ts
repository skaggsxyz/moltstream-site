"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const el = ref.current;
    if (el) {
      const revealElements = el.querySelectorAll(".reveal");
      revealElements.forEach((element) => observer.observe(element));

      return () => {
        revealElements.forEach((element) => observer.unobserve(element));
      };
    }
  }, []);

  return ref;
}
