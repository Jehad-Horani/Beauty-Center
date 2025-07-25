"use client";

import Particles from "react-tsparticles";
import { useCallback, useRef } from "react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleRef = useRef(null);
  if (!particleRef.current) {
    particleRef.current = (
      <Particles
        id="nail-particles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
        
          particles: {
            number: {
              value: 100,
              density: { enable: true, area: 1000 },
            },
            shape: {
              type: "circle",  // هنا غيرنا من image إلى circle
            },
            opacity: {
              value: 0.2,
              random: { enable: true, minimumValue: 0.1 },
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.4,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: { enable: true, minimumValue: 2 },
              anim: {
                enable: true,
                speed: 2,
                size_min: 2,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              bounce: false,
            },
        
          },
        }}
      />
    );
  }

  return particleRef.current;
}
