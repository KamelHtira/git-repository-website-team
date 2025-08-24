import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  FiBook, 
  FiHeart, 
  FiClock, 
  FiCalendar, 
  FiUsers, 
  FiFileText,
  FiArrowRight 
} from 'react-icons/fi';

const QuickNavigation = () => {
  const navigationItems = [
    {
      icon: FiBook,
      title: 'Islamic Guide',
      subtitle: 'Learn & Grow',
      description: 'Access comprehensive Islamic knowledge, rulings, and educational resources',
      color: 'text-primary',
      link: '/islamic-guide'
    },
    {
      icon: FiHeart,
      title: 'Donations',
      subtitle: 'Give Back',
      description: 'Support charitable causes and contribute to community development',
      color: 'text-red-500',
      link: '/donations'
    },
    {
      icon: FiClock,
      title: 'Prayer Times',
      subtitle: 'Prayer Schedule',
      description: 'Get accurate prayer times for your location with notifications',
      color: 'text-green-500',
      link: '/prayer-times'
    },
    {
      icon: FiCalendar,
      title: 'Calendar',
      subtitle: 'Community Events',
      description: 'Stay updated with Islamic events, classes, and community activities',
      color: 'text-blue-500',
      link: '/calendar'
    },
    {
      icon: FiUsers,
      title: 'Opportunities',
      subtitle: 'Volunteer',
      description: 'Find volunteer opportunities and ways to serve the community',
      color: 'text-purple-500',
      link: '/opportunities'
    },
    {
      icon: FiFileText,
      title: 'Stories',
      subtitle: 'Inspiring Stories',
      description: 'Read inspiring stories from the Muslim community worldwide',
      color: 'text-orange-500',
      link: '/stories'
    }
  ];

  return (
    <section id="navigation" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Navigation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all platform features and services with ease
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link key={index} to={item.link}>
                <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent size={24} className={item.color} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Badge variant="outline" className={`${item.color} border-current`}>
                      {item.subtitle}
                    </Badge>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        Click to explore
                      </span>
                      <div className={`${item.color} group-hover:translate-x-1 transition-transform duration-200`}>
                        <FiArrowRight size={18} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join Budapest Mosque Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Connect with fellow Muslims in Budapest, access Islamic resources, and grow together in faith. 
                Your spiritual journey in Hungary starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Join BMC
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;
