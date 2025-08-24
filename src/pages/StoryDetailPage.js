import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiArrowLeft, FiFileText, FiCalendar, FiUser, FiShare2, FiHeart, FiBookmark, FiMessageCircle } from 'react-icons/fi';

const StoryDetailPage = () => {
  const { id } = useParams();

  // Mock story data - in a real app, this would be fetched based on the ID
  const storyData = {
    1: {
      id: 1,
      title: "The Power of Patience in Islam",
      content: `
        <p class="lead">Patience, or <em>sabr</em> in Arabic, is one of the most important virtues in Islam. It is mentioned numerous times in the Quran and Hadith, emphasizing its crucial role in a Muslim's spiritual journey.</p>

        <h2>The Quranic Perspective on Patience</h2>
        <p>Allah (SWT) mentions patience in the Quran over 90 times, highlighting its significance. In Surah Al-Baqarah, verse 153, Allah says: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient."</p>

        <p>This verse teaches us that patience is not just about enduring difficulties, but it's an active spiritual practice that brings us closer to Allah. When we face challenges with patience, we are essentially placing our trust in Allah's wisdom and timing.</p>

        <h2>Types of Patience in Islam</h2>
        <p>Islamic scholars have identified three main types of patience:</p>

        <h3>1. Patience in Worship (Sabr fi al-Ta'ah)</h3>
        <p>This involves being patient in performing our religious duties, even when we don't feel like it. It includes being consistent in our prayers, fasting, and other acts of worship. The Prophet Muhammad (SAW) said: "The most beloved deeds to Allah are those that are most consistent, even if they are small."</p>

        <h3>2. Patience in Avoiding Sin (Sabr 'an al-Ma'siyah)</h3>
        <p>This type of patience requires us to resist temptations and avoid sinful actions. It's about having the strength to say "no" to things that go against Islamic teachings, even when they seem appealing or when others are engaging in them.</p>

        <h3>3. Patience in Adversity (Sabr 'ala al-Musibah)</h3>
        <p>This is perhaps the most challenging type of patience - remaining steadfast when facing difficulties, loss, or hardship. The Prophet (SAW) taught us that when we face trials with patience, Allah rewards us immensely.</p>

        <h2>Practical Ways to Develop Patience</h2>
        <p>Developing patience is a lifelong journey. Here are some practical steps we can take:</p>

        <h3>1. Start Small</h3>
        <p>Begin with small acts of patience in daily life. This could be waiting in line without complaining, dealing with traffic calmly, or being patient with family members during disagreements.</p>

        <h3>2. Remember Allah's Promises</h3>
        <p>When facing difficulties, remind yourself of Allah's promise: "Indeed, the patient will be given their reward without account" (Surah Az-Zumar, 39:10). This helps us maintain perspective and hope.</p>

        <h3>3. Practice Gratitude</h3>
        <p>Being grateful for what we have helps us develop patience. When we focus on our blessings rather than our difficulties, we become more patient with life's challenges.</p>

        <h3>4. Seek Support</h3>
        <p>Don't hesitate to seek support from family, friends, or religious leaders when facing difficult situations. The Prophet (SAW) said: "The believer who mixes with people and endures their annoyance is better than the believer who does not mix with people and does not endure their annoyance."</p>

        <h2>The Rewards of Patience</h2>
        <p>Allah promises great rewards for those who practice patience:</p>
        <ul>
          <li>Allah is with the patient (Quran 2:153)</li>
          <li>They will be given their reward without account (Quran 39:10)</li>
          <li>They will be greeted with "Peace" in Paradise (Quran 13:24)</li>
          <li>They will be among the successful (Quran 2:177)</li>
        </ul>

        <h2>Patience in Modern Times</h2>
        <p>In today's fast-paced world, patience has become even more important. We live in an era of instant gratification, where waiting for anything seems unbearable. However, Islamic teachings remind us that true growth and success come through patience and perseverance.</p>

        <p>Whether it's waiting for job opportunities, dealing with health issues, or facing relationship challenges, patience helps us maintain our faith and dignity. It teaches us that every difficulty is temporary and that Allah's plan is always better than our own.</p>

        <h2>Conclusion</h2>
        <p>Patience is not about passive acceptance of difficulties, but about active trust in Allah's wisdom and timing. It's a virtue that strengthens our faith, improves our character, and brings us closer to Allah.</p>

        <p>As we navigate life's challenges, let us remember the words of the Prophet Muhammad (SAW): "How wonderful is the affair of the believer, for his affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it, and that is good for him. If something bad happens to him, he bears it with patience, and that is good for him."</p>

        <p>May Allah grant us the strength to practice patience in all aspects of our lives and make us among those who are patient and grateful.</p>
      `,
      author: "Dr. Aisha Rahman",
      authorBio: "Dr. Aisha Rahman is a renowned Islamic scholar and author with over 20 years of experience in Islamic studies. She holds a PhD in Islamic Theology from Al-Azhar University and has published numerous books and articles on Islamic spirituality and character development.",
      date: "2024-01-15",
      category: "Spirituality",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop",
      tags: ["Patience", "Faith", "Islamic Values", "Spirituality", "Character Development"],
      featured: true,
      relatedStories: [2, 3, 4]
    },
    2: {
      id: 2,
      title: "Building Strong Muslim Families",
      content: `
        <p class="lead">The family is the foundation of Islamic society, and building strong Muslim families is essential for the well-being of our communities and the future of our faith.</p>

        <h2>The Islamic Family Structure</h2>
        <p>Islam provides a comprehensive framework for family life, emphasizing love, respect, and mutual support. The Prophet Muhammad (SAW) said: "The best of you is the one who is best to his family, and I am the best among you to my family."</p>

        <h2>Key Principles for Strong Families</h2>
        <p>Building a strong Muslim family requires conscious effort and adherence to Islamic principles. Here are some key areas to focus on:</p>

        <h3>1. Communication and Understanding</h3>
        <p>Open and honest communication is the foundation of any strong relationship. Family members should feel comfortable expressing their thoughts, feelings, and concerns without fear of judgment.</p>

        <h3>2. Mutual Respect</h3>
        <p>Every family member deserves respect, regardless of age or role. This includes respecting each other's opinions, privacy, and individual needs.</p>

        <h3>3. Shared Values and Goals</h3>
        <p>Having shared Islamic values and family goals helps create unity and purpose. Regular family discussions about faith, morals, and aspirations strengthen the family bond.</p>

        <h2>Practical Steps for Family Strengthening</h2>
        <p>Here are some practical ways to strengthen your Muslim family:</p>

        <h3>1. Regular Family Activities</h3>
        <ul>
          <li>Daily family meals together</li>
          <li>Weekly family outings or activities</li>
          <li>Monthly family meetings to discuss goals and concerns</li>
          <li>Annual family vacations or retreats</li>
        </ul>

        <h3>2. Islamic Education at Home</h3>
        <ul>
          <li>Daily Quran recitation and study</li>
          <li>Learning and discussing Hadith together</li>
          <li>Teaching Islamic manners and etiquette</li>
          <li>Celebrating Islamic holidays and occasions</li>
        </ul>

        <h3>3. Emotional Support</h3>
        <ul>
          <li>Being there for each other during difficult times</li>
          <li>Celebrating each other's successes</li>
          <li>Providing encouragement and motivation</li>
          <li>Practicing forgiveness and understanding</li>
        </ul>

        <h2>Challenges and Solutions</h2>
        <p>Modern families face unique challenges, but Islamic teachings provide guidance for overcoming them:</p>

        <h3>1. Technology and Screen Time</h3>
        <p>Set boundaries for technology use and create tech-free family time. Use technology to strengthen family bonds rather than weaken them.</p>

        <h3>2. Generational Differences</h3>
        <p>Bridge generational gaps through open dialogue and mutual understanding. Respect different perspectives while maintaining Islamic values.</p>

        <h3>3. External Influences</h3>
        <p>Help family members navigate external influences by providing strong Islamic guidance and support at home.</p>

        <h2>Conclusion</h2>
        <p>Building strong Muslim families requires continuous effort, patience, and commitment to Islamic values. By following the guidance of the Quran and Sunnah, we can create loving, supportive family environments that nurture faith and character.</p>
      `,
      author: "Imam Khalid Hassan",
      authorBio: "Imam Khalid Hassan serves as the spiritual leader of the Community Islamic Center and has dedicated his life to serving Muslim families. He holds a Master's degree in Islamic Studies and has over 15 years of experience in family counseling and community leadership.",
      date: "2024-01-12",
      category: "Family",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop",
      tags: ["Family", "Parenting", "Islamic Values", "Community"],
      relatedStories: [1, 5, 6]
    }
  };

  const story = storyData[id];

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="text-center py-12">
            <FiFileText size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Story not found</h3>
            <p className="text-muted-foreground mb-4">
              The story you're looking for doesn't exist.
            </p>
            <Link to="/stories">
              <Button>Back to Stories</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/stories">
            <Button variant="outline" className="flex items-center gap-2">
              <FiArrowLeft size={16} />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{story.category}</Badge>
                <Badge variant="outline">{story.readTime}</Badge>
                {story.featured && (
                  <Badge className="bg-yellow-500 text-white">Featured</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {story.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FiUser size={16} />
                  <span>{story.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>{formatDate(story.date)}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <Card>
              <CardContent className="p-6">
                <article 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-em:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground"
                  dangerouslySetInnerHTML={{ __html: story.content }}
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <FiUser size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{story.author}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.authorBio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full flex items-center gap-2">
                  <FiHeart size={16} />
                  Like Story
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiBookmark size={16} />
                  Save for Later
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiShare2 size={16} />
                  Share Story
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiMessageCircle size={16} />
                  Leave Comment
                </Button>
              </CardContent>
            </Card>

            {/* Story Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Story Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{story.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Read Time:</span>
                  <span className="font-medium">{story.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published:</span>
                  <span className="font-medium">{formatDate(story.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Author:</span>
                  <span className="font-medium">{story.author}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Stories */}
            {story.relatedStories && story.relatedStories.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Stories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {story.relatedStories.map((relatedId) => {
                    const relatedStory = storyData[relatedId];
                    if (!relatedStory) return null;
                    
                    return (
                      <Link key={relatedId} to={`/stories/${relatedId}`}>
                        <div className="group cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                              <img 
                                src={relatedStory.image} 
                                alt={relatedStory.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2">
                                {relatedStory.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {relatedStory.readTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified when we publish new stories like this one.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                  <Button size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;
