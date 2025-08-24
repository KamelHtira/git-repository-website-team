import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  FiBook, 
  FiClock, 
  FiSun, 
  FiInfo,
  FiArrowRight 
} from 'react-icons/fi';

const IslamicGuide = () => {
  const guideSections = [
    {
      icon: FiBook,
      title: 'Hadith Collection',
      description: 'Browse and search through authentic hadith collections with detailed explanations and sources.',
      link: '/hadith',
      color: 'text-primary'
    },
    {
      icon: FiClock,
      title: 'Prayer Times',
      description: 'Find accurate prayer times for your location with detailed prayer guides and Qibla direction.',
      link: '/prayer-times',
      color: 'text-green-500'
    },
    {
      icon: FiSun,
      title: 'Fasting Tips',
      description: 'Learn about fasting in Islam, including Ramadan tips, health guidelines, and spiritual benefits.',
      link: '/fasting-tips',
      color: 'text-orange-500'
    },
    {
      icon: FiInfo,
      title: 'Islam 101',
      description: 'Essential knowledge about Islam, including the five pillars, basic beliefs, and common practices.',
      link: '/islam-101',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Islamic Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources to help you learn and grow in your Islamic knowledge and practice in Budapest.
          </p>
        </div>

        {/* Guide Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guideSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link key={index} to={section.link}>
                <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent size={24} className={section.color} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={`${section.color} border-current`}>
                        Learn More
                      </Badge>
                      <div className={`${section.color} group-hover:translate-x-1 transition-transform duration-200`}>
                        <FiArrowRight size={18} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Daily Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Morning and evening supplications</li>
                <li>• Daily Quran recitation</li>
                <li>• Regular prayer reminders</li>
                <li>• Islamic etiquette guidelines</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Learning Resources</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Islamic scholars and lectures</li>
                <li>• Recommended books and articles</li>
                <li>• Online courses and workshops</li>
                <li>• Community study groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicGuide;
