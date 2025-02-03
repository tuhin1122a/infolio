"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.03, // 🔥 LOWER VALUE = SLOWER SCROLLING (Default is 0.1)
        multiplier: 0.5, // 🔥 LOWER MULTIPLIER = SLOWER SCROLLING
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
