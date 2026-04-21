import { lazy, Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"

// Lazy load components for better performance
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Certifications = lazy(() => import("./components/Certifications"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Blog = lazy(() => import("./components/Blog"));

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
        <Skills />
      </Suspense>
      <Portfolio />
      <Suspense fallback={<div className="w-full h-screen" />}>
        <Services />
      </Suspense>
      <Experience />
      <Suspense fallback={<div className="w-full h-screen" />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<div className="w-full h-screen" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="w-full h-screen" />}>
        <Blog />
      </Suspense>
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
