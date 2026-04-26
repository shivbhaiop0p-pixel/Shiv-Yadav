/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroCarousel onSlideChange={setActiveSlideIndex} />
        <AboutMeSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
