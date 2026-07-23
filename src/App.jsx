import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Coordinator from "./components/Coordinator";
import Footer from "./components/Footer";

/**
 * App — assembles the single-page portfolio. Sections use anchor ids
 * (#hero, #mission, #team, #contact) that the navbar smooth-scrolls to.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Mission />
        <Team />
        <Coordinator />
      </main>
      <Footer />
    </div>
  );
}
