import React, { useState, useEffect } from 'react';
import { getPrayerTimes, getPrayerCountdown } from '../utils/islamicUtils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FiSun, FiClock, FiMapPin, FiMoon } from 'react-icons/fi';

const PrayerTimesWidget = () => {
  const [prayerData, setPrayerData] = useState(null);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const updatePrayerData = () => {
      const data = getPrayerTimes();
      setPrayerData(data);
      
      const updateCountdown = () => {
        const countdownData = getPrayerCountdown(data.nextPrayerTime);
        setCountdown(countdownData);
      };
      
      updateCountdown();
      const interval = setInterval(updateCountdown, 60000);
      
      return () => clearInterval(interval);
    };

    updatePrayerData();
  }, []);

  if (!prayerData) return null;

  const { times, nextPrayer, nextPrayerTime, location } = prayerData;

  const getPrayerIcon = (prayerName) => {
    switch (prayerName) {
      case 'Fajr':
      case 'Sunrise':
        return <FiSun size={20} className="text-primary" />;
      case 'Dhuhr':
      case 'Asr':
        return <FiClock size={20} className="text-primary" />;
      case 'Maghrib':
      case 'Isha':
        return <FiMoon size={20} className="text-primary" />;
      default:
        return <FiClock size={20} className="text-primary" />;
    }
  };

  return (
    <section id="prayer-times" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prayer Times
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <FiMapPin size={18} />
            <span className="text-lg">{location}</span>
          </div>
        </div>

        {/* Next Prayer Highlight */}
        <div className="mb-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Next Prayer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4">{nextPrayer}</div>
              <div className="text-2xl md:text-3xl mb-6">{nextPrayerTime}</div>
              
              {countdown && (
                <div className="bg-primary-foreground/20 rounded-lg p-4">
                  <p className="text-sm mb-3">Time until {nextPrayer}</p>
                  <div className="flex justify-center gap-4 text-2xl font-bold">
                    <div className="text-center">
                      <div className="bg-primary-foreground/30 rounded px-3 py-2">
                        {countdown.hours.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm mt-1">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary-foreground/30 rounded px-3 py-2">
                        {countdown.minutes.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm mt-1">Minutes</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.entries(times).map(([prayer, time]) => (
            <Card
              key={prayer}
              className={`hover:shadow-md transition-all duration-200 ${
                prayer === nextPrayer 
                  ? 'ring-2 ring-primary bg-primary text-primary-foreground' 
                  : ''
              }`}
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {getPrayerIcon(prayer)}
                </div>
                <CardTitle className={`text-lg ${prayer === nextPrayer ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {prayer}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className={`text-xl font-bold ${prayer === nextPrayer ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  {time}
                </div>
                {prayer === nextPrayer && (
                  <Badge variant="secondary" className="mt-2 bg-primary-foreground text-primary">
                    Next
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prayer Reminders */}
        <div className="text-center">
          <Card className="bg-card border">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Prayer Reminders
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  Make Wudu
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Face Qiblah
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Be Mindful
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimesWidget;
