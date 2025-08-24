import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FiSun, FiClock, FiHeart, FiBook, FiStar } from 'react-icons/fi';

const FastingTipsPage = () => {
  const fastingTips = [
    {
      icon: FiSun,
      title: "Suhur (Pre-Dawn Meal)",
      tips: [
        "Eat a balanced meal with complex carbohydrates",
        "Include protein-rich foods like eggs or yogurt",
        "Drink plenty of water",
        "Avoid salty foods that cause thirst",
        "Eat slowly and mindfully"
      ],
      color: "text-orange-500"
    },
    {
      icon: FiClock,
      title: "During the Day",
      tips: [
        "Stay hydrated when possible",
        "Avoid strenuous physical activity",
        "Take short naps if needed",
        "Engage in spiritual activities",
        "Avoid negative thoughts and speech"
      ],
      color: "text-blue-500"
    },
    {
      icon: FiHeart,
      title: "Iftar (Breaking Fast)",
      tips: [
        "Break fast with dates and water",
        "Start with light foods",
        "Avoid overeating",
        "Include fruits and vegetables",
        "Wait before eating heavy meals"
      ],
      color: "text-green-500"
    },
    {
      icon: FiBook,
      title: "Spiritual Benefits",
      tips: [
        "Increased self-discipline",
        "Greater empathy for the poor",
        "Enhanced spiritual connection",
        "Improved patience and gratitude",
        "Strengthened community bonds"
      ],
      color: "text-purple-500"
    }
  ];

  const healthGuidelines = [
    {
      title: "Who Should Not Fast",
      items: [
        "Pregnant or nursing women",
        "People with chronic illnesses",
        "Elderly with health conditions",
        "Children under puberty",
        "Travelers (with conditions)"
      ]
    },
    {
      title: "Health Precautions",
      items: [
        "Consult your doctor if you have health issues",
        "Monitor blood sugar if diabetic",
        "Stay hydrated during non-fasting hours",
        "Avoid excessive caffeine",
        "Get adequate sleep"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fasting Tips
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn about fasting in Islam, including Ramadan tips, health guidelines, and spiritual benefits.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <FiStar size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Virtue of Fasting
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Fasting in Islam is not just about abstaining from food and drink. It's a comprehensive spiritual practice 
                that teaches self-discipline, empathy, and gratitude. During Ramadan and other fasting periods, Muslims 
                strive to purify their souls and strengthen their connection with Allah.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fasting Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {fastingTips.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center`}>
                      <IconComponent size={24} className={section.color} />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${section.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Health Guidelines */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {healthGuidelines.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          {/* Types of Fasting */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Types of Fasting in Islam</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Obligatory Fasting</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Ramadan:</strong> The holy month of fasting</li>
                    <li>• <strong>Qada:</strong> Making up missed fasts</li>
                    <li>• <strong>Kaffarah:</strong> Expiation fasts</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Recommended Fasting</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Mondays and Thursdays:</strong> Weekly recommended fasts</li>
                    <li>• <strong>White Days:</strong> 13th, 14th, 15th of each month</li>
                    <li>• <strong>Ashura:</strong> 10th day of Muharram</li>
                    <li>• <strong>Arafah:</strong> 9th day of Dhul Hijjah</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Etiquette and Manners */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Fasting Etiquette and Manners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Do's</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maintain good character and behavior</li>
                    <li>• Increase acts of worship and charity</li>
                    <li>• Read and study the Quran</li>
                    <li>• Attend Taraweeh prayers</li>
                    <li>• Show kindness and patience</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Don'ts</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Avoid lying, backbiting, and gossip</li>
                    <li>• Don't waste time on useless activities</li>
                    <li>• Avoid excessive sleeping</li>
                    <li>• Don't overeat during Iftar</li>
                    <li>• Avoid negative speech and actions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Benefits of Fasting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-primary">Physical Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Detoxification of the body</li>
                    <li>• Improved metabolism</li>
                    <li>• Better digestive health</li>
                    <li>• Weight management</li>
                    <li>• Enhanced immune system</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-primary">Mental Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Increased mental clarity</li>
                    <li>• Better focus and concentration</li>
                    <li>• Reduced stress and anxiety</li>
                    <li>• Improved self-control</li>
                    <li>• Enhanced willpower</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-primary">Spiritual Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Closer connection to Allah</li>
                    <li>• Increased gratitude</li>
                    <li>• Better understanding of others</li>
                    <li>• Enhanced empathy</li>
                    <li>• Purification of the soul</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FastingTipsPage;
