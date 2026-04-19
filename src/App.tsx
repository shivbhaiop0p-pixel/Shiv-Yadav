/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import PromotionalSection from './components/PromotionalSection';
import CreatorsSection from './components/CreatorsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroCarousel onSlideChange={setActiveSlideIndex} />
        <PromotionalSection activeSlideIndex={activeSlideIndex} />
        <CreatorsSection activeSlideIndex={activeSlideIndex} />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
