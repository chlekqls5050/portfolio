// context/GsapContext.tsx
'use client'
import { createContext, useContext, useEffect } from "react";
import gsap from "gsap";

const GsapContext = createContext<(() => void) | null>(null);

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
  }, []);

  return <GsapContext.Provider value={null}>{children}</GsapContext.Provider>;
}

export function useGsap() {
  return useContext(GsapContext);
}