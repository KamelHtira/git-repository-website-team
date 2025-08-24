import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PrayerTimesWidget from './PrayerTimesWidget';
import SpiritualContent from './SpiritualContent';
import QuickNavigation from './QuickNavigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground theme-transition">
      {/* Header with Theme Toggle */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Prayer Times Widget */}
      <PrayerTimesWidget />
      
      {/* Spiritual Content */}
      <SpiritualContent />
      
      {/* Quick Navigation */}
      <QuickNavigation />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Community Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Islamic Community Platform</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                A welcoming digital space for Muslims to connect, learn, and grow together in faith. 
                We provide prayer times, Islamic knowledge, and community resources to support your spiritual journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors duration-200">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors duration-200">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors duration-200">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors duration-200">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">About Us</a></li>
                <li><a href="#prayer-times" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Prayer Times</a></li>
                <li><a href="#spiritual-content" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Daily Content</a></li>
                <li><a href="#navigation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Resources</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-secondary">📍</span>
                  <span className="text-primary-foreground/80">123 Islamic Center Dr, City, State</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">📞</span>
                  <span className="text-primary-foreground/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">✉️</span>
                  <span className="text-primary-foreground/80">info@islamiccommunity.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="text-secondary">❤️</span>
                <span className="text-primary-foreground/80">
                  Made with love for the Muslim community
                </span>
              </div>
              <div className="text-primary-foreground/60 text-sm">
                © 2024 Islamic Community Platform. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
