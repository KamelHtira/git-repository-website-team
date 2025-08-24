import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiSearch, FiMapPin, FiClock, FiSun, FiMoon, FiNavigation } from 'react-icons/fi';

const PrayerTimesPage = () => {
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock location search results
  const mockLocations = [
    { id: 1, name: 'New York, NY, USA', country: 'United States', timezone: 'America/New_York' },
    { id: 2, name: 'London, UK', country: 'United Kingdom', timezone: 'Europe/London' },
    { id: 3, name: 'Dubai, UAE', country: 'United Arab Emirates', timezone: 'Asia/Dubai' },
    { id: 4, name: 'Istanbul, Turkey', country: 'Turkey', timezone: 'Europe/Istanbul' },
    { id: 5, name: 'Cairo, Egypt', country: 'Egypt', timezone: 'Africa/Cairo' }
  ];

  // Mock prayer times data
  const mockPrayerTimes = {
    location: 'New York, NY, USA',
    date: '2024-01-15',
    times: {
      Fajr: '05:45',
      Sunrise: '07:15',
      Dhuhr: '12:15',
      Asr: '15:30',
      Maghrib: '17:45',
      Isha: '19:15'
    },
    nextPrayer: 'Asr',
    nextPrayerTime: '15:30',
    qiblaDirection: '58° NE'
  };

  const handleLocationSearch = (searchTerm) => {
    setLocation(searchTerm);
    if (searchTerm.length > 2) {
      const filtered = mockLocations.filter(loc => 
        loc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleLocationSelect = (selectedLoc) => {
    setSelectedLocation(selectedLoc);
    setLocation(selectedLoc.name);
    setSearchResults([]);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setPrayerTimes(mockPrayerTimes);
      setIsLoading(false);
    }, 1000);
  };

  const getPrayerIcon = (prayerName) => {
    switch (prayerName) {
      case 'Fajr':
      case 'Sunrise':
        return <FiSun size={20} className="text-orange-500" />;
      case 'Dhuhr':
      case 'Asr':
        return <FiClock size={20} className="text-blue-500" />;
      case 'Maghrib':
      case 'Isha':
        return <FiMoon size={20} className="text-purple-500" />;
      default:
        return <FiClock size={20} className="text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prayer Times
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find accurate prayer times for your location with detailed prayer guides and Qibla direction.
          </p>
        </div>

        {/* Location Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search for your city or location..."
              value={location}
              onChange={(e) => handleLocationSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleLocationSelect(result)}
                  className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center gap-3"
                >
                  <FiMapPin size={16} className="text-muted-foreground" />
                  <div>
                    <div className="text-foreground font-medium">{result.name}</div>
                    <div className="text-sm text-muted-foreground">{result.country}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Prayer Times Display */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading prayer times...</p>
          </div>
        )}

        {prayerTimes && !isLoading && (
          <div className="space-y-8">
            {/* Location Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiMapPin size={24} className="text-primary" />
                    <div>
                      <CardTitle className="text-xl">{prayerTimes.location}</CardTitle>
                      <p className="text-muted-foreground">
                        {new Date(prayerTimes.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiNavigation size={20} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Qibla: {prayerTimes.qiblaDirection}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Next Prayer Highlight */}
            <Card className="bg-primary text-primary-foreground border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Next Prayer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-4">{prayerTimes.nextPrayer}</div>
                <div className="text-2xl md:text-3xl mb-6">{prayerTimes.nextPrayerTime}</div>
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  Time until next prayer
                </Badge>
              </CardContent>
            </Card>

            {/* Prayer Times Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(prayerTimes.times).map(([prayer, time]) => (
                <Card
                  key={prayer}
                  className={`hover:shadow-md transition-all duration-200 ${
                    prayer === prayerTimes.nextPrayer 
                      ? 'ring-2 ring-primary bg-primary text-primary-foreground' 
                      : ''
                  }`}
                >
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      {getPrayerIcon(prayer)}
                    </div>
                    <CardTitle className={`text-lg ${prayer === prayerTimes.nextPrayer ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {prayer}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <div className={`text-xl font-bold ${prayer === prayerTimes.nextPrayer ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                      {time}
                    </div>
                    {prayer === prayerTimes.nextPrayer && (
                      <Badge variant="secondary" className="mt-2 bg-primary-foreground text-primary">
                        Next
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Prayer Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Prayer Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Before Prayer</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Perform Wudu (ablution)</li>
                      <li>• Find a clean place to pray</li>
                      <li>• Face the Qibla direction</li>
                      <li>• Make your intention (niyyah)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">During Prayer</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Focus on your connection with Allah</li>
                      <li>• Recite with proper pronunciation</li>
                      <li>• Maintain proper posture</li>
                      <li>• Complete all required movements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Location Selected */}
        {!prayerTimes && !isLoading && (
          <div className="text-center py-12">
            <FiMapPin size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Select a location</h3>
            <p className="text-muted-foreground">
              Search for your city or location above to view prayer times.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTimesPage;
