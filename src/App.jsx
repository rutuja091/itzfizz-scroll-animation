import { useEffect, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ScrollVisual from "./components/ScrollVisual/ScrollVisual";
import Footer from "./components/Footer/Footer";

import { runIntroAnimation } from "./animations/introAnimation";
import { runScrollAnimation } from "./animations/scrollAnimation";

function App() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const introAnimation = runIntroAnimation(
      heroRef.current,
      statsRef.current
    );

    const scrollAnimation = runScrollAnimation(
      scrollRef.current
    );

    return () => {
      introAnimation?.kill();
      scrollAnimation?.revert();
    };
  }, []);

  return (
    <>
      <Navbar />

      <Hero sectionRef={heroRef} />

      <Stats sectionRef={statsRef} />

      <ScrollVisual sectionRef={scrollRef} />

      <Footer />
    </>
  );
}

export default App;