import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiArrowLeft, FiHeart, FiMapPin, FiUsers, FiCalendar, FiMail, FiPhone, FiGlobe, FiShare2 } from 'react-icons/fi';

const DonationDetailPage = () => {
  const { id } = useParams();

  // Mock donation data - in a real app, this would be fetched based on the ID
  const donationData = {
    1: {
      id: 1,
      title: "Ramadan Food Drive",
      organization: "Islamic Relief USA",
      description: "Help provide food packages to families in need during the holy month of Ramadan. Each package contains essential food items for a family of four, including rice, lentils, cooking oil, dates, and other nutritious staples. This initiative aims to ensure that no family goes hungry during this blessed month.",
      longDescription: "Our Ramadan Food Drive is a comprehensive initiative that addresses food insecurity in our community. We work with local food banks, grocery stores, and volunteers to assemble and distribute food packages to families who are struggling to make ends meet. Each package is carefully curated to provide balanced nutrition and includes items that are culturally appropriate for Muslim families.",
      category: "Food",
      location: "New York, NY",
      goal: 50000,
      raised: 35000,
      donors: 245,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      urgency: "High",
      endDate: "2024-04-15",
      contactInfo: {
        email: "ramadan@islamicrelief.org",
        phone: "+1 (555) 123-4567",
        website: "https://www.islamicrelief.org",
        address: "123 Charity Street, New York, NY 10001"
      },
      updates: [
        {
          date: "2024-03-15",
          title: "Campaign Launch",
          content: "We've officially launched our Ramadan Food Drive campaign. Thank you to all our early supporters!"
        },
        {
          date: "2024-03-10",
          title: "Partnership Announced",
          content: "We're excited to announce our partnership with local grocery stores to provide fresh produce."
        },
        {
          date: "2024-03-05",
          title: "Volunteer Registration Open",
          content: "Volunteer registration is now open for food package assembly and distribution."
        }
      ],
      impact: {
        familiesHelped: 150,
        packagesDistributed: 600,
        volunteersInvolved: 45,
        communitiesServed: 8
      }
    },
    2: {
      id: 2,
      title: "Mosque Construction Project",
      organization: "Community Islamic Center",
      description: "Support the construction of a new mosque and community center that will serve over 500 families in the local area.",
      longDescription: "This project will create a modern, accessible mosque and community center that will serve as a hub for Islamic education, social services, and community gatherings. The facility will include prayer halls, classrooms, a library, meeting rooms, and recreational spaces for children and families.",
      category: "Infrastructure",
      location: "Chicago, IL",
      goal: 200000,
      raised: 125000,
      donors: 189,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop",
      urgency: "Medium",
      endDate: "2024-12-31",
      contactInfo: {
        email: "info@communityislamiccenter.org",
        phone: "+1 (555) 987-6543",
        website: "https://www.communityislamiccenter.org",
        address: "456 Mosque Avenue, Chicago, IL 60601"
      },
      updates: [
        {
          date: "2024-03-12",
          title: "Foundation Complete",
          content: "The foundation has been completed and we're ready to begin the main construction phase."
        },
        {
          date: "2024-03-01",
          title: "Building Permit Approved",
          content: "We've received approval for our building permit and can now proceed with construction."
        }
      ],
      impact: {
        familiesServed: 500,
        prayerCapacity: 300,
        classrooms: 8,
        parkingSpaces: 100
      }
    }
  };

  const donation = donationData[id];

  if (!donation) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="text-center py-12">
            <FiHeart size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Donation not found</h3>
            <p className="text-muted-foreground mb-4">
              The donation campaign you're looking for doesn't exist.
            </p>
            <Link to="/donations">
              <Button>Back to Donations</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/donations">
            <Button variant="outline" className="flex items-center gap-2">
              <FiArrowLeft size={16} />
              Back to Donations
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {donation.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    by {donation.organization}
                  </p>
                </div>
                <Badge className={getUrgencyColor(donation.urgency)}>
                  {donation.urgency}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  <span>{donation.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers size={16} />
                  <span>{donation.donors} donors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>Ends {new Date(donation.endDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
              <img 
                src={donation.image} 
                alt={donation.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Campaign Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{Math.round(calculateProgress(donation.raised, donation.goal))}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(donation.raised, donation.goal)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>${donation.raised.toLocaleString()}</span>
                    <span className="text-muted-foreground">${donation.goal.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About This Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {donation.description}
                </p>
                <p className="text-foreground leading-relaxed">
                  {donation.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Expected Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(donation.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Campaign Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donation.updates.map((update, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{update.title}</h4>
                      <p className="text-muted-foreground text-sm">{update.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FiMail size={16} className="text-muted-foreground" />
                    <a href={`mailto:${donation.contactInfo.email}`} className="text-primary hover:underline">
                      {donation.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiPhone size={16} className="text-muted-foreground" />
                    <a href={`tel:${donation.contactInfo.phone}`} className="text-primary hover:underline">
                      {donation.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiGlobe size={16} className="text-muted-foreground" />
                    <a href={donation.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground">
                    {donation.contactInfo.address}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full flex items-center gap-2">
                  <FiHeart size={16} />
                  Contact Organization
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiShare2 size={16} />
                  Share Campaign
                </Button>
              </CardContent>
            </Card>

            {/* Campaign Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{donation.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{donation.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">End Date:</span>
                  <span className="font-medium">{new Date(donation.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Donors:</span>
                  <span className="font-medium">{donation.donors}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailPage;
