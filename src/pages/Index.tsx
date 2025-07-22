import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WritingsSection from '@/components/WritingsSection';
import JourneySection from '@/components/JourneySection';
import RecommendationsSection from '@/components/RecommendationsSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WritingsSection />
      <JourneySection />
      <RecommendationsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;