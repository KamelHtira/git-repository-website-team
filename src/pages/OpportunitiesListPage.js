import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiSearch, FiFilter, FiUsers, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const OpportunitiesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock opportunities data
  const opportunitiesData = [
    {
      id: 1,
      title: "Food Bank Volunteer",
      organization: "Islamic Relief USA",
      description: "Help sort and distribute food packages to families in need. Perfect for those who want to make a direct impact in their community.",
      category: "Food",
      location: "New York, NY",
      commitment: "4 hours/week",
      duration: "Ongoing",
      volunteers: 12,
      needed: 20,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      urgency: "High"
    },
    {
      id: 2,
      title: "Islamic School Teacher Assistant",
      organization: "Community Islamic Center",
      description: "Assist teachers in Islamic studies classes for children. Help with lesson preparation, classroom management, and student support.",
      category: "Education",
      location: "Chicago, IL",
      commitment: "6 hours/week",
      duration: "Academic Year",
      volunteers: 8,
      needed: 15,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      urgency: "Medium"
    },
    {
      id: 3,
      title: "Youth Mentor",
      organization: "Muslim Youth Association",
      description: "Mentor young Muslims in their personal and spiritual development. Provide guidance, support, and positive role modeling.",
      category: "Youth",
      location: "Los Angeles, CA",
      commitment: "3 hours/week",
      duration: "6 months",
      volunteers: 5,
      needed: 10,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      urgency: "High"
    },
    {
      id: 4,
      title: "Elderly Care Companion",
      organization: "Islamic Senior Services",
      description: "Provide companionship and assistance to elderly members of the community. Help with daily activities and social interaction.",
      category: "Healthcare",
      location: "Houston, TX",
      commitment: "2 hours/week",
      duration: "Ongoing",
      volunteers: 3,
      needed: 8,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      urgency: "Medium"
    },
    {
      id: 5,
      title: "Event Coordinator",
      organization: "Islamic Community Center",
      description: "Help organize and coordinate community events, fundraisers, and social gatherings. Perfect for those with organizational skills.",
      category: "Events",
      location: "Miami, FL",
      commitment: "5 hours/week",
      duration: "3 months",
      volunteers: 6,
      needed: 12,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop",
      urgency: "Low"
    },
    {
      id: 6,
      title: "Translation Services",
      organization: "Refugee Support Network",
      description: "Provide translation services for Arabic-speaking refugees and immigrants. Help bridge language barriers in healthcare and legal settings.",
      category: "Translation",
      location: "Detroit, MI",
      commitment: "Flexible",
      duration: "Ongoing",
      volunteers: 4,
      needed: 15,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      urgency: "High"
    }
  ];

  const categories = ['all', 'Food', 'Education', 'Youth', 'Healthcare', 'Events', 'Translation'];

  const filteredOpportunities = opportunitiesData.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || opportunity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High': return 'bg-red-500 text-white';
      case 'Medium': return 'bg-orange-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const calculateProgress = (volunteers, needed) => {
    return Math.min((volunteers / needed) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Volunteer Opportunities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find volunteer opportunities and contribute your skills to the community.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search opportunities by title, organization, or description..."
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
            Showing {filteredOpportunities.length} of {opportunitiesData.length} opportunities
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="hover:shadow-md transition-all duration-200 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-muted">
                <img 
                  src={opportunity.image} 
                  alt={opportunity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getUrgencyColor(opportunity.urgency)}>
                    {opportunity.urgency}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-lg line-clamp-2">{opportunity.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiUsers size={16} />
                    <span>{opportunity.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiMapPin size={16} />
                    <span>{opportunity.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {opportunity.description}
                </p>

                {/* Commitment Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FiClock size={14} />
                    <span>{opportunity.commitment}</span>
                  </div>
                  <span className="text-muted-foreground">{opportunity.duration}</span>
                </div>

                {/* Volunteer Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Volunteers</span>
                    <span className="font-medium">{opportunity.volunteers}/{opportunity.needed}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(opportunity.volunteers, opportunity.needed)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/opportunities/${opportunity.id}`}>
                  <Button className="w-full flex items-center gap-2">
                    <FiUsers size={16} />
                    Learn More
                    <FiArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <FiUsers size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpportunitiesListPage;
