import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiSearch, FiFilter, FiFileText, FiCalendar, FiUser, FiArrowRight, FiBookOpen } from 'react-icons/fi';

const StoriesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock stories data
  const stories = [
    {
      id: 1,
      title: "The Power of Patience in Islam",
      excerpt: "Exploring the virtue of patience (sabr) and its significance in Islamic teachings. How patience helps us navigate life's challenges and strengthens our faith.",
      author: "Dr. Aisha Rahman",
      date: "2024-01-15",
      category: "Spirituality",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop",
      tags: ["Patience", "Faith", "Islamic Values"],
      featured: true
    },
    {
      id: 2,
      title: "Building Strong Muslim Families",
      excerpt: "Practical advice and Islamic guidance for creating loving, supportive family environments that nurture faith and character in children.",
      author: "Imam Khalid Hassan",
      date: "2024-01-12",
      category: "Family",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop",
      tags: ["Family", "Parenting", "Islamic Values"]
    },
    {
      id: 3,
      title: "The Science Behind Islamic Fasting",
      excerpt: "A comprehensive look at the health benefits of fasting from both Islamic and scientific perspectives, including recent research findings.",
      author: "Dr. Fatima Al-Zahra",
      date: "2024-01-10",
      category: "Health",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      tags: ["Fasting", "Health", "Science"]
    },
    {
      id: 4,
      title: "Islamic Architecture: Beauty and Function",
      excerpt: "Discover the principles of Islamic architecture and how they reflect spiritual values while creating spaces of beauty and community.",
      author: "Architect Omar Khan",
      date: "2024-01-08",
      category: "Culture",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop",
      tags: ["Architecture", "Culture", "Islamic Art"]
    },
    {
      id: 5,
      title: "The Role of Women in Islamic History",
      excerpt: "Celebrating the contributions of remarkable Muslim women throughout history who shaped Islamic scholarship, leadership, and society.",
      author: "Dr. Mariam Ahmed",
      date: "2024-01-05",
      category: "History",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop",
      tags: ["Women", "History", "Islamic Scholars"]
    },
    {
      id: 6,
      title: "Modern Challenges for Muslim Youth",
      excerpt: "Addressing the unique challenges faced by Muslim youth in contemporary society and providing guidance for maintaining faith and identity.",
      author: "Youth Counselor Sarah Ali",
      date: "2024-01-03",
      category: "Youth",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      tags: ["Youth", "Identity", "Modern Challenges"]
    },
    {
      id: 7,
      title: "The Art of Islamic Calligraphy",
      excerpt: "Exploring the rich tradition of Islamic calligraphy, its spiritual significance, and how it continues to inspire artists today.",
      author: "Calligrapher Ahmed Hassan",
      date: "2024-01-01",
      category: "Art",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop",
      tags: ["Calligraphy", "Art", "Islamic Tradition"]
    },
    {
      id: 8,
      title: "Community Service in Islam",
      excerpt: "Understanding the importance of serving others in Islamic tradition and practical ways to contribute to community welfare.",
      author: "Community Leader Yusuf Patel",
      date: "2023-12-28",
      category: "Community",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop",
      tags: ["Community Service", "Charity", "Social Responsibility"]
    }
  ];

  const categories = ['All', 'Spirituality', 'Family', 'Health', 'Culture', 'History', 'Youth', 'Art', 'Community'];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const featuredStory = stories.find(story => story.featured);
  const regularStories = filteredStories.filter(story => !story.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stories & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover inspiring stories, insightful articles, and valuable knowledge from our Budapest Islamic community.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search stories, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                <FiFilter size={14} />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        {featuredStory && !searchTerm && selectedCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FiBookOpen size={24} />
              Featured Story
            </h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredStory.image} 
                    alt={featuredStory.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{featuredStory.category}</Badge>
                    <Badge variant="outline">{featuredStory.readTime}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {featuredStory.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredStory.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <FiUser size={14} />
                      <span>{featuredStory.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      <span>{formatDate(featuredStory.date)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredStory.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/stories/${featuredStory.id}`}>
                    <Button className="flex items-center gap-2">
                      Read Full Story
                      <FiArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Stories Grid */}
        <div className="space-y-6">
          {regularStories.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Stories'}
                <span className="text-muted-foreground text-lg font-normal ml-2">
                  ({regularStories.length} {regularStories.length === 1 ? 'story' : 'stories'})
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularStories.map((story) => (
                  <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-muted">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {story.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {story.readTime}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {story.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {story.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <FiUser size={14} />
                          <span>{story.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          <span>{formatDate(story.date)}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {story.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {story.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{story.tags.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <Link to={`/stories/${story.id}`}>
                        <Button variant="outline" className="w-full flex items-center gap-2">
                          <FiFileText size={16} />
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <FiFileText size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No stories found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or category filter.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Get notified when we publish new stories and articles about Islamic topics.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoriesListPage;
