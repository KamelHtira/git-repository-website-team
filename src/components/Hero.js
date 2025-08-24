import React, { useState, useEffect } from 'react';
import { getHijriDate } from '../utils/islamicUtils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FiSun, FiStar, FiArrowDown, FiUsers, FiHeart, FiBook, FiClock } from 'react-icons/fi';

const Hero = () => {
  const [hijriDate, setHijriDate] = useState(null);

  useEffect(() => {
    setHijriDate(getHijriDate());
  }, []);

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Mosque silhouette - moving slowly */}
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 animate-float">
            <div className="w-full h-full bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl"></div>
          </div>
          
          {/* Geometric patterns - floating with different animations */}
          <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-wave">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg transform rotate-45"></div>
          </div>
          
          <div className="absolute bottom-40 left-40 w-24 h-24 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-full h-full bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/3 w-20 h-20 opacity-10 animate-drift">
            <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-lg transform rotate-12"></div>
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-10 animate-pulse-glow">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg transform rotate-30"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 opacity-15 animate-wave" style={{ animationDelay: '1.5s' }}>
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full"></div>
          </div>
          
          {/* Subtle moving lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Floating particles with different animations */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-primary/20 rounded-full ${
                  i % 3 === 0 ? 'animate-pulse-glow' : 
                  i % 3 === 1 ? 'animate-float' : 'animate-wave'
                }`}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + i * 8}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + i * 0.5}s`,
                  backgroundColor: i % 4 === 0 ? 'hsl(var(--primary) / 0.2)' :
                                i % 4 === 1 ? 'hsl(var(--secondary) / 0.2)' :
                                i % 4 === 2 ? 'hsl(var(--green-500) / 0.2)' :
                                'hsl(var(--blue-500) / 0.2)'
                }}
              ></div>
            ))}
          </div>
          
          {/* Moving circles */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={`circle-${i}`}
                className="absolute border border-primary/10 rounded-full animate-float"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  left: `${10 + i * 25}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${8 + i * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        {/* Main Hero Section */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 text-primary">
            Welcome to Budapest's Premier Islamic Community
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Budapest Mosque
            <span className="block text-primary">Community</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            Connecting hearts, building faith, and serving our community in the heart of Hungary
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Explore Services
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FiUsers size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
            <p className="text-muted-foreground text-sm">
              Connect with fellow Muslims in Budapest and build lasting friendships
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FiClock size={24} className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Prayer Times</h3>
            <p className="text-muted-foreground text-sm">
              Accurate prayer times and spiritual guidance for your daily worship
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FiBook size={24} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
            <p className="text-muted-foreground text-sm">
              Islamic education, Quran classes, and spiritual development programs
            </p>
          </div>
        </div>
        
        {/* Islamic Date Display */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 text-primary">
            Today's Islamic Date
          </Badge>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">
                {hijriDate?.fullDate}
              </p>
              <p className="text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Community Status</p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">500+</p>
                  <p className="text-xs text-muted-foreground">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-500">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 left-10 text-primary/10 animate-float">
        <FiSun size={40} />
      </div>
      <div className="absolute top-20 right-20 text-secondary/10 animate-wave" style={{ animationDelay: '1s' }}>
        <FiStar size={30} />
      </div>
      <div className="absolute bottom-10 left-20 text-primary/10 animate-pulse-glow" style={{ animationDelay: '2s' }}>
        <FiStar size={25} />
      </div>
      <div className="absolute top-1/2 left-5 text-green-500/10 animate-float" style={{ animationDelay: '0.5s' }}>
        <FiHeart size={20} />
      </div>
      <div className="absolute top-1/3 right-10 text-blue-500/10 animate-drift">
        <FiBook size={18} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-500/10 animate-wave" style={{ animationDelay: '1.5s' }}>
        <FiClock size={16} />
      </div>
      <div className="absolute top-3/4 left-10 text-orange-500/10 animate-pulse-glow" style={{ animationDelay: '3s' }}>
        <FiUsers size={14} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiArrowDown className="text-muted-foreground" size={24} />
      </div>
    </div>
  );
};

export default Hero;
