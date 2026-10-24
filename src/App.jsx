import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import OwnerProfile from './components/OwnerProfile';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Estimator from './components/Estimator';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-steel-50 text-steel-900 flex flex-col antialiased selection:bg-brand-blue selection:text-white">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <OwnerProfile />
          <Services />
          <Catalog />
          <Estimator />
          <WhyChooseUs />
          <Process />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Fixed Mobile Bottom Action Bar */}
        <MobileActionBar />
      </div>
    </LanguageProvider>
  );
}
