"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 5, // Duration of the scroll animation
        smoothWheel: true, // Enable smooth scrolling with the mouse wheel
        syncTouch: false, // Correct touch option
        syncTouchLerp: 0.075, // Touch inertia lerp
        touchInertiaExponent: 1, // Touch inertia strength
        touchMultiplier: 1, // Touch event multiplier
        wheelMultiplier: 1,
        gestureOrientation: "vertical",
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
