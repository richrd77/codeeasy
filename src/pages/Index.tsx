import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import Courses from "@/components/Courses";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const SPLASH_KEY = "codeeasy_splash_seen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    const seen = sessionStorage.getItem(SPLASH_KEY);
    return !seen;
  });

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    sessionStorage.setItem(SPLASH_KEY, "1");
  }, []);

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <Hero />
      <Highlights />
      <WhyChooseUs />
      <Courses />
      <Reviews />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
