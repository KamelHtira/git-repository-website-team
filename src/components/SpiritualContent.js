import React, { useState } from 'react';
import { dailyHadith, quranicVerse } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FiBook, FiRefreshCw, FiPlay, FiFileText } from 'react-icons/fi';

const SpiritualContent = () => {
  const [currentHadith, setCurrentHadith] = useState(dailyHadith);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshHadith = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentHadith({
        ...dailyHadith,
        arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
        english: "Whoever takes a path in search of knowledge, Allah will make easy for him the path to Paradise.",
        source: "Sahih Muslim",
        bookNumber: "2699",
        hadithNumber: "26",
        narrator: "Abu Huraira",
        explanation: "This hadith emphasizes the great virtue of seeking knowledge in Islam and the divine assistance provided to those who pursue education."
      });
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <section id="spiritual-content" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Daily Spiritual Content
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enrich your day with wisdom from the Quran and Hadith
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Daily Hadith Card */}
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FiBook size={24} className="text-primary" />
                <CardTitle className="text-2xl">Daily Hadith</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Arabic Text */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-xl md:text-2xl font-arabic text-right leading-relaxed text-foreground">
                  {currentHadith.arabic}
                </p>
              </div>

              {/* English Translation */}
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-lg leading-relaxed text-foreground italic">
                  "{currentHadith.english}"
                </p>
              </div>

              {/* Source Information */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Source Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Source:</span>
                    <p className="text-muted-foreground">{currentHadith.source}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Narrator:</span>
                    <p className="text-muted-foreground">{currentHadith.narrator}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Book:</span>
                    <p className="text-muted-foreground">{currentHadith.bookNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Hadith:</span>
                    <p className="text-muted-foreground">{currentHadith.hadithNumber}</p>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">Explanation</h5>
                <p className="text-muted-foreground leading-relaxed">
                  {currentHadith.explanation}
                </p>
              </div>

              {/* Refresh Button */}
              <Button
                onClick={handleRefreshHadith}
                disabled={isRefreshing}
                variant="secondary"
                className="w-full"
              >
                <FiRefreshCw size={18} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Loading...' : 'Get Next Hadith'}
              </Button>
            </CardContent>
          </Card>

          {/* Quranic Reflection Card */}
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FiBook size={24} className="text-primary" />
                <CardTitle className="text-2xl">Quranic Reflection</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Surah and Verse Info */}
              <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-1">{quranicVerse.surah}</h4>
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  Verse {quranicVerse.verse}
                </Badge>
              </div>

              {/* Arabic Text */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-xl md:text-2xl font-arabic text-right leading-relaxed text-foreground">
                  {quranicVerse.arabic}
                </p>
              </div>

              {/* English Translation */}
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-lg leading-relaxed text-foreground italic">
                  "{quranicVerse.english}"
                </p>
              </div>

              {/* Reflection */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">Reflection</h5>
                <p className="text-muted-foreground leading-relaxed">
                  {quranicVerse.translation}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1">
                  <FiPlay size={18} className="mr-2" />
                  Listen
                </Button>
                <Button variant="outline" className="flex-1">
                  <FiFileText size={18} className="mr-2" />
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12">
          <Badge variant="outline" className="px-6 py-3 text-base">
            May Allah guide us all to the straight path
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SpiritualContent;
