import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiArrowLeft, FiUsers, FiMapPin, FiClock, FiMail, FiPhone, FiGlobe, FiShare2, FiCalendar } from 'react-icons/fi';

const OpportunityDetailPage = () => {
  const { id } = useParams();

  // Mock opportunity data - in a real app, this would be fetched based on the ID
  const opportunityData = {
    1: {
      id: 1,
      title: "Food Bank Volunteer",
      organization: "Islamic Relief USA",
      description: "Help sort and distribute food packages to families in need. Perfect for those who want to make a direct impact in their community.",
      longDescription: "As a Food Bank Volunteer, you will play a crucial role in our mission to provide food assistance to families in need. This position involves sorting donated food items, assembling food packages, and assisting with distribution to community members. You'll work directly with our team to ensure that families receive nutritious and culturally appropriate food items.",
      category: "Food",
      location: "New York, NY",
      commitment: "4 hours/week",
      duration: "Ongoing",
      volunteers: 12,
      needed: 20,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      urgency: "High",
      requirements: [
        "Must be 16 years or older",
        "Ability to lift up to 20 pounds",
        "Good communication skills",
        "Reliable and punctual",
        "Compassionate and patient"
      ],
      responsibilities: [
        "Sort and organize donated food items",
        "Assemble food packages for families",
        "Assist with food distribution",
        "Maintain cleanliness of work area",
        "Provide friendly customer service"
      ],
      benefits: [
        "Make a direct impact in your community",
        "Gain valuable volunteer experience",
        "Meet like-minded individuals",
        "Flexible scheduling options",
        "Training and support provided"
      ],
      contactInfo: {
        email: "volunteer@islamicrelief.org",
        phone: "+1 (555) 123-4567",
        website: "https://www.islamicrelief.org/volunteer",
        address: "123 Charity Street, New York, NY 10001"
      },
      schedule: {
        days: ["Monday", "Wednesday", "Friday", "Saturday"],
        times: ["9:00 AM - 1:00 PM", "2:00 PM - 6:00 PM"],
        flexibility: "Flexible scheduling available"
      },
      training: "Orientation and training provided on first day"
    },
    2: {
      id: 2,
      title: "Islamic School Teacher Assistant",
      organization: "Community Islamic Center",
      description: "Assist teachers in Islamic studies classes for children. Help with lesson preparation, classroom management, and student support.",
      longDescription: "Join our educational team as a Teacher Assistant for our Islamic studies program. You'll work alongside experienced teachers to provide support in classroom management, lesson preparation, and student assistance. This role is perfect for those interested in Islamic education and working with children.",
      category: "Education",
      location: "Chicago, IL",
      commitment: "6 hours/week",
      duration: "Academic Year",
      volunteers: 8,
      needed: 15,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=800&h=400&fit=crop",
      urgency: "Medium",
      requirements: [
        "Must be 18 years or older",
        "Basic knowledge of Islamic studies",
        "Experience working with children preferred",
        "Patient and nurturing personality",
        "Background check required"
      ],
      responsibilities: [
        "Assist teachers with lesson preparation",
        "Help maintain classroom discipline",
        "Provide one-on-one student support",
        "Assist with grading and record keeping",
        "Participate in parent-teacher meetings"
      ],
      benefits: [
        "Gain teaching experience",
        "Learn from experienced educators",
        "Contribute to Islamic education",
        "Build relationships with students",
        "Professional development opportunities"
      ],
      contactInfo: {
        email: "education@communityislamiccenter.org",
        phone: "+1 (555) 987-6543",
        website: "https://www.communityislamiccenter.org/volunteer",
        address: "456 Mosque Avenue, Chicago, IL 60601"
      },
      schedule: {
        days: ["Saturday", "Sunday"],
        times: ["9:00 AM - 12:00 PM"],
        flexibility: "Fixed schedule during school year"
      },
      training: "Comprehensive training program provided"
    }
  };

  const opportunity = opportunityData[id];

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="text-center py-12">
            <FiUsers size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Opportunity not found</h3>
            <p className="text-muted-foreground mb-4">
              The volunteer opportunity you're looking for doesn't exist.
            </p>
            <Link to="/opportunities">
              <Button>Back to Opportunities</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/opportunities">
            <Button variant="outline" className="flex items-center gap-2">
              <FiArrowLeft size={16} />
              Back to Opportunities
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
                    {opportunity.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    by {opportunity.organization}
                  </p>
                </div>
                <Badge className={getUrgencyColor(opportunity.urgency)}>
                  {opportunity.urgency}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock size={16} />
                  <span>{opportunity.commitment}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>{opportunity.duration}</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
              <img 
                src={opportunity.image} 
                alt={opportunity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Volunteer Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Volunteer Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{Math.round(calculateProgress(opportunity.volunteers, opportunity.needed))}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(opportunity.volunteers, opportunity.needed)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>{opportunity.volunteers} volunteers</span>
                    <span className="text-muted-foreground">{opportunity.needed} needed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About This Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {opportunity.description}
                </p>
                <p className="text-foreground leading-relaxed">
                  {opportunity.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Available Days:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.schedule.days.map((day, index) => (
                        <Badge key={index} variant="outline">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Time Slots:</h4>
                    <div className="space-y-1">
                      {opportunity.schedule.times.map((time, index) => (
                        <div key={index} className="text-muted-foreground">{time}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Flexibility:</h4>
                    <p className="text-muted-foreground">{opportunity.schedule.flexibility}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{opportunity.training}</p>
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
                    <a href={`mailto:${opportunity.contactInfo.email}`} className="text-primary hover:underline">
                      {opportunity.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiPhone size={16} className="text-muted-foreground" />
                    <a href={`tel:${opportunity.contactInfo.phone}`} className="text-primary hover:underline">
                      {opportunity.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiGlobe size={16} className="text-muted-foreground" />
                    <a href={opportunity.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground">
                    {opportunity.contactInfo.address}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Join */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How to Join</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Contact the Organization</h4>
                      <p className="text-sm text-muted-foreground">Reach out via email or phone to express your interest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Complete Application</h4>
                      <p className="text-sm text-muted-foreground">Fill out the volunteer application form</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Attend Orientation</h4>
                      <p className="text-sm text-muted-foreground">Participate in the training and orientation session</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Start Volunteering</h4>
                      <p className="text-sm text-muted-foreground">Begin your volunteer work with the organization</p>
                    </div>
                  </div>
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
                  <FiMail size={16} />
                  Contact Organization
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FiShare2 size={16} />
                  Share Opportunity
                </Button>
              </CardContent>
            </Card>

            {/* Opportunity Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Opportunity Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{opportunity.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{opportunity.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Commitment:</span>
                  <span className="font-medium">{opportunity.commitment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{opportunity.duration}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetailPage;
