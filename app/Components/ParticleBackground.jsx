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
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          particles: {
            number: {
              value: 70,
              density: { enable: true, area: 1000 },
            },
            shape: {
              type: "image",
              image: [
                {
                  src: "/nail.png", // تأكد من أن الصورة في مجلد public
                  width: 30,
                  height: 30,
                },
              ],
            },
            opacity: {
              value: 0.8,
              random: { enable: true, minimumValue: 0.5 },
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.4,
                sync: false,
              },
            },
            size: {
              value: 22,
              random: { enable: true, minimumValue: 12 },
              anim: {
                enable: true,
                speed: 2,
                size_min: 12,
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
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff88",
              opacity: 0.2,
              width: 1,
              triangles: { enable: false },
            },
          },
        }}
      />
    );
  }

  return particleRef.current;
}
