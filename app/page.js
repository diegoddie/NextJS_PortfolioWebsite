import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200 dark:bg-[#121212]">
      <Navbar />
      <div className="container mt-14 md:mt-24 mx-auto px-6 md:px-8 py-4">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
