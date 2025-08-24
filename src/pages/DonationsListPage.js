import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiSearch, FiFilter, FiHeart, FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi';

const DonationsListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock donations data
  const donationsData = [
    {
      id: 1,
      title: "Ramadan Food Drive",
      organization: "Islamic Relief USA",
      description: "Help provide food packages to families in need during the holy month of Ramadan. Each package contains essential food items for a family of four.",
      category: "Food",
      location: "New York, NY",
      goal: 50000,
      raised: 35000,
      donors: 245,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      urgency: "High",
      endDate: "2024-04-15"
    },
    {
      id: 2,
      title: "Mosque Construction Project",
      organization: "Community Islamic Center",
      description: "Support the construction of a new mosque and community center that will serve over 500 families in the local area.",
      category: "Infrastructure",
      location: "Chicago, IL",
      goal: 200000,
      raised: 125000,
      donors: 189,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop",
      urgency: "Medium",
      endDate: "2024-12-31"
    },
    {
      id: 3,
      title: "Orphan Education Fund",
      organization: "Muslim Children's Foundation",
      description: "Provide education, healthcare, and basic needs for orphaned children in developing countries. Help give them a brighter future.",
      category: "Education",
      location: "International",
      goal: 75000,
      raised: 52000,
      donors: 312,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      urgency: "High",
      endDate: "2024-06-30"
    },
    {
      id: 4,
      title: "Medical Clinic for Refugees",
      organization: "Humanitarian Aid Network",
      description: "Establish a medical clinic to provide healthcare services to refugee families who have fled conflict zones.",
      category: "Healthcare",
      location: "Syria",
      goal: 100000,
      raised: 78000,
      donors: 156,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      urgency: "Critical",
      endDate: "2024-03-31"
    },
    {
      id: 5,
      title: "Islamic School Scholarship Fund",
      organization: "Islamic Education Trust",
      description: "Provide scholarships for students to attend Islamic schools and receive quality education with Islamic values.",
      category: "Education",
      location: "Los Angeles, CA",
      goal: 30000,
      raised: 18000,
      donors: 98,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      urgency: "Medium",
      endDate: "2024-08-15"
    },
    {
      id: 6,
      title: "Clean Water Project",
      organization: "Water for Life",
      description: "Install water wells and purification systems in rural communities to provide clean drinking water.",
      category: "Infrastructure",
      location: "Somalia",
      goal: 45000,
      raised: 32000,
      donors: 203,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      urgency: "High",
      endDate: "2024-05-20"
    }
  ];

  const categories = ['all', 'Food', 'Education', 'Healthcare', 'Infrastructure', 'Emergency'];

  const filteredDonations = donationsData.filter(donation => {
    const matchesSearch = donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || donation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-black';
      default: return 'bg-green-500 text-white';
    }
  };

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Donations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Support charitable causes and contribute to community development projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search donations by title, organization, or description..."
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
            Showing {filteredDonations.length} of {donationsData.length} donation campaigns
          </p>
        </div>

        {/* Donations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonations.map((donation) => (
            <Card key={donation.id} className="hover:shadow-md transition-all duration-200 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-muted">
                <img 
                  src={donation.image} 
                  alt={donation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getUrgencyColor(donation.urgency)}>
                    {donation.urgency}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-lg line-clamp-2">{donation.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiUsers size={16} />
                    <span>{donation.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiMapPin size={16} />
                    <span>{donation.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {donation.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{Math.round(calculateProgress(donation.raised, donation.goal))}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(donation.raised, donation.goal)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">${donation.raised.toLocaleString()}</span>
                    <span className="text-muted-foreground">${donation.goal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{donation.donors} donors</span>
                  <span>Ends {new Date(donation.endDate).toLocaleDateString()}</span>
                </div>

                {/* Action Button */}
                <Link to={`/donations/${donation.id}`}>
                  <Button className="w-full flex items-center gap-2">
                    <FiHeart size={16} />
                    Learn More
                    <FiArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDonations.length === 0 && (
          <div className="text-center py-12">
            <FiHeart size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No donations found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationsListPage;
