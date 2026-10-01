import gsap from "gsap";

export function runIntroAnimation(heroSection, statsSection) {
  if (!heroSection) return null;

  const heroEyebrow = heroSection.querySelector(".heroEyebrow");
  const heroTitle = heroSection.querySelectorAll(".heroTitle span");
  const heroDescription = heroSection.querySelector(".heroDescription");
  const heroBottom = heroSection.querySelector(".heroBottom");

  const statCards = statsSection
    ? statsSection.querySelectorAll(".statCard")
    : [];

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  if (heroEyebrow) {
    timeline.fromTo(
      heroEyebrow,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }
    );
  }

  if (heroTitle.length) {
    timeline.fromTo(
      heroTitle,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
      },
      "-=0.3"
    );
  }

  if (heroDescription) {
    timeline.fromTo(
      heroDescription,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.4"
    );
  }

  if (heroBottom) {
    timeline.fromTo(
      heroBottom,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.3"
    );
  }

  if (statCards.length) {
    timeline.fromTo(
      statCards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
      },
      "-=0.2"
    );
  }

  return timeline;
}