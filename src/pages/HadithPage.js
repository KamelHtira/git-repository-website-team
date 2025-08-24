import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiSearch, FiFilter, FiBook, FiArrowRight } from 'react-icons/fi';

const HadithPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock hadith data
  const hadithData = [
    {
      id: 1,
      arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
      english: "Whoever takes a path in search of knowledge, Allah will make easy for him the path to Paradise.",
      narrator: "Abu Huraira",
      source: "Sahih Muslim",
      category: "Knowledge",
      bookNumber: "2699",
      hadithNumber: "26"
    },
    {
      id: 2,
      arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      english: "Actions are judged by intentions, and every person will be rewarded according to what they intended.",
      narrator: "Umar ibn Al-Khattab",
      source: "Sahih Bukhari",
      category: "Intentions",
      bookNumber: "1",
      hadithNumber: "1"
    },
    {
      id: 3,
      arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      english: "None of you truly believes until he loves for his brother what he loves for himself.",
      narrator: "Anas ibn Malik",
      source: "Sahih Bukhari",
      category: "Brotherhood",
      bookNumber: "13",
      hadithNumber: "7"
    },
    {
      id: 4,
      arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      english: "The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth, and the One above the heavens will have mercy upon you.",
      narrator: "Abdullah ibn Amr",
      source: "Abu Dawud",
      category: "Mercy",
      bookNumber: "4941",
      hadithNumber: "4941"
    },
    {
      id: 5,
      arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
      english: "Allah does not look at your appearance or wealth, but rather He looks at your hearts and actions.",
      narrator: "Abu Huraira",
      source: "Sahih Muslim",
      category: "Character",
      bookNumber: "2564",
      hadithNumber: "34"
    }
  ];

  const categories = ['all', 'Knowledge', 'Intentions', 'Brotherhood', 'Mercy', 'Character'];

  const filteredHadith = hadithData.filter(hadith => {
    const matchesSearch = hadith.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hadith.narrator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hadith.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || hadith.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hadith Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse authentic hadith collections with detailed explanations and sources.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search hadith by text, narrator, or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <FiFilter size={20} className="text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredHadith.length} of {hadithData.length} hadith
          </p>
        </div>

        {/* Hadith List */}
        <div className="space-y-6">
          {filteredHadith.map((hadith) => (
            <Card key={hadith.id} className="hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FiBook size={20} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{hadith.source}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Narrated by {hadith.narrator}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {hadith.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Arabic Text */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-lg font-arabic text-right leading-relaxed text-foreground">
                      {hadith.arabic}
                    </p>
                  </div>
                  
                  {/* English Translation */}
                  <div className="bg-muted/20 rounded-lg p-4">
                    <p className="text-foreground italic leading-relaxed">
                      "{hadith.english}"
                    </p>
                  </div>
                  
                  {/* Source Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Book {hadith.bookNumber}, Hadith {hadith.hadithNumber}</span>
                    <Link to={`/hadith/${hadith.id}`}>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        Read More
                        <FiArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredHadith.length === 0 && (
          <div className="text-center py-12">
            <FiBook size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No hadith found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HadithPage;
