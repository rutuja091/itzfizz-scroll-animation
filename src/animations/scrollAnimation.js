import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runScrollAnimation(section) {
  if (!section) return null;

  const context = gsap.context(() => {
    const car = section.querySelector(".scrollCar");
    const circle = section.querySelector(".visualCircle");
    const glow = section.querySelector(".visualGlow");

    if (!car) return;

    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 901px)", () => {
      gsap.fromTo(
        car,
        {
          x: -180,
          scale: 0.75,
          rotate: -4,
        },
        {
          x: 180,
          scale: 1.15,
          rotate: 4,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      if (circle) {
        gsap.fromTo(
          circle,
          {
            scale: 0.7,
            rotation: 0,
          },
          {
            scale: 1.15,
            rotation: 180,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      }

      if (glow) {
        gsap.fromTo(
          glow,
          {
            scale: 0.7,
            opacity: 0.4,
          },
          {
            scale: 1.3,
            opacity: 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      }
    });

    // Mobile
    mm.add("(max-width: 900px)", () => {
      gsap.fromTo(
        car,
        {
          x: -70,
          scale: 0.8,
          rotate: -2,
        },
        {
          x: 70,
          scale: 1.05,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      if (circle) {
        gsap.fromTo(
          circle,
          {
            scale: 0.8,
            rotation: 0,
          },
          {
            scale: 1.05,
            rotation: 120,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      }

      if (glow) {
        gsap.fromTo(
          glow,
          {
            scale: 0.8,
            opacity: 0.35,
          },
          {
            scale: 1.15,
            opacity: 0.7,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          }
        );
      }
    });
  }, section);

  return context;
}