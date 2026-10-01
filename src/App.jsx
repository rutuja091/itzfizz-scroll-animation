import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ScrollVisual from "./components/ScrollVisual/ScrollVisual";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Stats />
      <ScrollVisual />

      <main
        style={{
          minHeight: "100vh",
          background: "#0a0a0a",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        ITZFIZZ
      </main>
    </>
  );
}

export default App;