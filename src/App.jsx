import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import VisitingCardSection from './components/VisitingCardSection';
import OwnerProfile from './components/OwnerProfile';
import Services from './components/Services';
import Catalog from './components/Catalog';
import RequirementForm from './components/RequirementForm';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cardDark-950 text-slate-100 flex flex-col antialiased selection:bg-amber-500 selection:text-cardDark-950">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <VisitingCardSection />
          <OwnerProfile />
          <Services />
          <Catalog />
          <RequirementForm />
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
