import Hero from "../components/Hero";
import Solution from "../components/Solution";
import Testimonial from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Solution />
      <Testimonial />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}
