import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Companies from '../components/Companies';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Leadership from '../components/Leadership';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
        <Testimonials />
        <Leadership />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}