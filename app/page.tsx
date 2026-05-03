import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Companies from '../components/Companies';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Main page component for the ProLaunch Group website.
 * Composes all section components into a complete landing page.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <WhyUs />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
