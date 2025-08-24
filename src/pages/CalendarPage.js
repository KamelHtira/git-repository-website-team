import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiFilter } from 'react-icons/fi';

const CalendarPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock events data
  const eventsData = [
    {
      id: 1,
      title: "Friday Prayer",
      description: "Weekly Friday prayer service with khutbah",
      date: "2024-03-22",
      time: "1:30 PM",
      location: "Main Prayer Hall",
      category: "Prayer",
      attendees: 150,
      type: "recurring"
    },
    {
      id: 2,
      title: "Islamic Studies Class",
      description: "Weekly Islamic studies class for adults",
      date: "2024-03-23",
      time: "7:00 PM",
      location: "Classroom 2",
      category: "Education",
      attendees: 25,
      type: "recurring"
    },
    {
      id: 3,
      title: "Ramadan Iftar",
      description: "Community iftar dinner during Ramadan",
      date: "2024-03-25",
      time: "7:30 PM",
      location: "Community Hall",
      category: "Community",
      attendees: 200,
      type: "special"
    },
    {
      id: 4,
      title: "Youth Group Meeting",
      description: "Weekly youth group activities and discussions",
      date: "2024-03-24",
      time: "6:00 PM",
      location: "Youth Center",
      category: "Youth",
      attendees: 40,
      type: "recurring"
    },
    {
      id: 5,
      title: "Quran Recitation Circle",
      description: "Weekly Quran recitation and memorization circle",
      date: "2024-03-26",
      time: "8:00 PM",
      location: "Library",
      category: "Spiritual",
      attendees: 30,
      type: "recurring"
    },
    {
      id: 6,
      title: "Eid al-Fitr Celebration",
      description: "Community celebration for Eid al-Fitr",
      date: "2024-04-10",
      time: "10:00 AM",
      location: "Main Hall",
      category: "Holiday",
      attendees: 500,
      type: "special"
    }
  ];

  const categories = ['all', 'Prayer', 'Education', 'Community', 'Youth', 'Spiritual', 'Holiday'];

  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Prayer': return 'bg-blue-500 text-white';
      case 'Education': return 'bg-green-500 text-white';
      case 'Community': return 'bg-purple-500 text-white';
      case 'Youth': return 'bg-orange-500 text-white';
      case 'Spiritual': return 'bg-indigo-500 text-white';
      case 'Holiday': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'special': return 'bg-yellow-500 text-black';
      case 'recurring': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  // Simple calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return filteredEvents.filter(event => event.date === dateStr);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth);
    const firstDay = getFirstDayOfMonth(selectedMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 text-muted-foreground"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
      const dayEvents = getEventsForDate(currentDate);
      const isToday = new Date().toDateString() === currentDate.toDateString();

      days.push(
        <div 
          key={day} 
          className={`p-2 border border-border min-h-[80px] ${
            isToday ? 'bg-primary/10 border-primary' : ''
          }`}
        >
          <div className="text-sm font-medium mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div 
                key={event.id} 
                className="text-xs p-1 rounded bg-primary/20 text-primary truncate"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mosque Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with Islamic dates, holidays, and local community events.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <FiFilter size={20} className="text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Events' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Calendar</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1))}
                    >
                      Previous
                    </Button>
                    <span className="text-lg font-semibold">
                      {monthNames[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {/* Day headers */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {/* Calendar days */}
                  {renderCalendar()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEvents
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .slice(0, 5)
                    .map(event => (
                    <div key={event.id} className="border-l-4 border-primary pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <div className="flex gap-1">
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={12} />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock size={12} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin size={12} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiUsers size={12} />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Event Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(category).replace('text-white', '').replace('text-black', '')}`}></div>
                        <span className="text-sm">{category}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {filteredEvents.filter(event => event.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <FiCalendar size={16} className="mr-2" />
                  Add to Calendar
                </Button>
                <Button variant="outline" className="w-full">
                  <FiUsers size={16} className="mr-2" />
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
