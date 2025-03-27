
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Calendar,
  Play,
  BarChart3,
  BookMarked
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data
const recentCourses = [
  {
    id: 1,
    title: "Electromagnetic Induction",
    subject: "Physics",
    lastViewed: "2 hours ago",
    progress: 65,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Chemical Bonding",
    subject: "Chemistry",
    lastViewed: "Yesterday",
    progress: 42,
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Definite Integrals",
    subject: "Mathematics",
    lastViewed: "3 days ago",
    progress: 78,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
  }
];

const recommendedCourses = [
  {
    id: 4,
    title: "Wave Optics",
    subject: "Physics",
    instructor: "Dr. Patel",
    duration: "2h 45m",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Complex Numbers",
    subject: "Mathematics",
    instructor: "Mrs. Gupta",
    duration: "3h 20m",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Evolution",
    subject: "Biology",
    instructor: "Dr. Kumar",
    duration: "1h 50m",
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Organic Chemistry II",
    subject: "Chemistry",
    instructor: "Prof. Sharma",
    duration: "2h 30m",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop",
  },
];

const upcomingTests = [
  {
    id: 1,
    title: "Physics Weekly Test",
    date: "Oct 15, 2023",
    time: "10:00 AM",
    duration: "1 hour",
    chapters: "Electromagnetism, Current Electricity"
  },
  {
    id: 2,
    title: "Chemistry Mock Exam",
    date: "Oct 18, 2023",
    time: "2:00 PM",
    duration: "3 hours",
    chapters: "Organic Chemistry, Chemical Kinetics"
  }
];

const learningStats = [
  { id: 1, label: "Hours Studied", value: "42", icon: Clock, change: "+12%" },
  { id: 2, label: "Completed Lessons", value: "28", icon: CheckCircle, change: "+5%" },
  { id: 3, label: "Test Score Avg.", value: "82%", icon: Award, change: "+3%" },
  { id: 4, label: "Practice Questions", value: "165", icon: TrendingUp, change: "+24%" }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue your learning journey.</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {learningStats.map((stat) => (
            <Card key={stat.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="p-2 bg-brand-lightPurple rounded-full">
                    <stat.icon className="h-5 w-5 text-brand-purple" />
                  </div>
                </div>
                <div className="mt-2 text-xs font-medium text-green-600">
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Continue Learning */}
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recentCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {course.subject}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>Last viewed: {course.lastViewed}</span>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Link to={`/course/${course.id}`}>
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main content tabs */}
        <Tabs defaultValue="recommended">
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Tests</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommended" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {course.subject}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">By {course.instructor}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <Link to={`/course/${course.id}`} className="text-brand-blue hover:underline">
                        Start
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bookmarked" className="mt-0">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <BookMarked className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <h3 className="text-lg font-medium mb-2">No bookmarked courses yet</h3>
              <p className="text-gray-500 mb-4">
                Save your favorite courses for quick access later
              </p>
              <Link to="/subjects">
                <Button>Browse Subjects</Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingTests.map((test) => (
                <Card key={test.id}>
                  <CardContent className="p-4">
                    <div className="flex">
                      <div className="mr-4 p-3 bg-brand-lightPurple rounded-lg">
                        <Calendar className="h-6 w-6 text-brand-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{test.title}</h3>
                        <div className="text-sm text-gray-500 space-y-1">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Date:</span> {test.date}
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Time:</span> {test.time} ({test.duration})
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Chapters:</span> {test.chapters}
                          </div>
                        </div>
                        <div className="mt-3">
                          <Button variant="outline" size="sm">Set Reminder</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Your Performance</CardTitle>
                <CardDescription>Track your progress across subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">Performance charts</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Complete more lessons and tests to see your performance analytics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
