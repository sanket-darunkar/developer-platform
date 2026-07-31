import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default Home;