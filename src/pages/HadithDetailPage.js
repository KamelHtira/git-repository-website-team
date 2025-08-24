import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiArrowLeft, FiBook, FiShare2, FiHeart } from 'react-icons/fi';

const HadithDetailPage = () => {
  const { id } = useParams();

  // Mock hadith data - in a real app, this would be fetched based on the ID
  const hadithData = {
    1: {
      id: 1,
      arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
      english: "Whoever takes a path in search of knowledge, Allah will make easy for him the path to Paradise.",
      narrator: "Abu Huraira",
      source: "Sahih Muslim",
      category: "Knowledge",
      bookNumber: "2699",
      hadithNumber: "26",
      explanation: "This hadith emphasizes the great virtue of seeking knowledge in Islam. It teaches us that when a person sincerely seeks knowledge for the sake of Allah, Allah will make their path to Paradise easier. This includes both religious and worldly knowledge that benefits humanity.",
      lessons: [
        "The importance of seeking knowledge in Islam",
        "Allah's assistance to those who seek knowledge sincerely",
        "Knowledge as a means to Paradise",
        "The broad scope of beneficial knowledge"
      ],
      relatedTopics: ["Education", "Learning", "Islamic Scholarship", "Academic Pursuits"],
      authenticity: "Sahih (Authentic)",
      grade: "Grade: Sahih",
      chainOfNarrators: "Abu Huraira → Prophet Muhammad (ﷺ)"
    },
    2: {
      id: 2,
      arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      english: "Actions are judged by intentions, and every person will be rewarded according to what they intended.",
      narrator: "Umar ibn Al-Khattab",
      source: "Sahih Bukhari",
      category: "Intentions",
      bookNumber: "1",
      hadithNumber: "1",
      explanation: "This is one of the most fundamental hadith in Islam, often called the 'Mother of Hadith'. It teaches us that the value of our actions depends entirely on our intentions. A good action with a bad intention becomes worthless, while even a small action with a pure intention can be highly rewarded.",
      lessons: [
        "The centrality of intention in Islamic practice",
        "Actions are judged by their underlying motives",
        "The importance of sincerity in worship",
        "Every action can become worship with proper intention"
      ],
      relatedTopics: ["Intentions", "Sincerity", "Worship", "Islamic Ethics"],
      authenticity: "Sahih (Authentic)",
      grade: "Grade: Sahih",
      chainOfNarrators: "Umar ibn Al-Khattab → Prophet Muhammad (ﷺ)"
    }
  };

  const hadith = hadithData[id];

  if (!hadith) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="text-center py-12">
            <FiBook size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Hadith not found</h3>
            <p className="text-muted-foreground mb-4">
              The hadith you're looking for doesn't exist.
            </p>
            <Link to="/hadith">
              <Button>Back to Hadith Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/hadith">
            <Button variant="outline" className="flex items-center gap-2">
              <FiArrowLeft size={16} />
              Back to Hadith Collection
            </Button>
          </Link>
        </div>

        {/* Hadith Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {hadith.source}
              </h1>
              <p className="text-lg text-muted-foreground">
                Narrated by {hadith.narrator}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {hadith.category}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                {hadith.authenticity}
              </Badge>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Book {hadith.bookNumber}, Hadith {hadith.hadithNumber} • {hadith.grade}
          </div>
        </div>

        {/* Hadith Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Arabic Text */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Arabic Text</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-2xl font-arabic text-right leading-relaxed text-foreground">
                    {hadith.arabic}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* English Translation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">English Translation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-6">
                  <p className="text-lg text-foreground italic leading-relaxed">
                    "{hadith.english}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Explanation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {hadith.explanation}
                </p>
              </CardContent>
            </Card>

            {/* Key Lessons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {hadith.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Source Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Source Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Collection:</span>
                  <p className="text-foreground">{hadith.source}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Narrator:</span>
                  <p className="text-foreground">{hadith.narrator}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Chain:</span>
                  <p className="text-foreground text-sm">{hadith.chainOfNarrators}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Reference:</span>
                  <p className="text-foreground">Book {hadith.bookNumber}, Hadith {hadith.hadithNumber}</p>
                </div>
              </CardContent>
            </Card>

            {/* Related Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hadith.relatedTopics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full flex items-center gap-2">
                  <FiHeart size={16} />
                  Save to Favorites
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiShare2 size={16} />
                  Share Hadith
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadithDetailPage;
