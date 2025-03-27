
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  TrendingUp, 
  Clock, 
  Bookmark,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredSubjects = [
  {
    id: 1,
    title: "Physics",
    instructor: "Dr. Patel",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop",
    lessons: 42,
    duration: "38 hours",
    level: "Advanced"
  },
  {
    id: 2,
    title: "Chemistry",
    instructor: "Prof. Sharma",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop",
    lessons: 38,
    duration: "32 hours",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Mathematics",
    instructor: "Mrs. Gupta",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    lessons: 45,
    duration: "40 hours",
    level: "Advanced"
  },
  {
    id: 4,
    title: "Biology",
    instructor: "Dr. Verma",
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
    lessons: 36,
    duration: "30 hours",
    level: "Intermediate"
  }
];

const trendingCourses = [
  {
    id: 5,
    title: "Organic Chemistry",
    instructor: "Prof. Reddy",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
    lessons: 20,
    duration: "18 hours",
    level: "Advanced"
  },
  {
    id: 6,
    title: "Calculus",
    instructor: "Dr. Singh",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    lessons: 24,
    duration: "22 hours",
    level: "Advanced"
  },
  {
    id: 7,
    title: "Electromagnetism",
    instructor: "Prof. Joshi",
    thumbnail: "https://images.unsplash.com/photo-1581093196277-9f643840a205?w=800&auto=format&fit=crop",
    lessons: 18,
    duration: "15 hours",
    level: "Intermediate"
  },
  {
    id: 8,
    title: "Human Physiology",
    instructor: "Dr. Kumar",
    thumbnail: "https://images.unsplash.com/photo-1576671414121-aa2d1ce31091?w=800&auto=format&fit=crop",
    lessons: 22,
    duration: "19 hours",
    level: "Intermediate"
  }
];

const mockSubjects = [
  { id: 1, name: "Physics", icon: "📚" },
  { id: 2, name: "Chemistry", icon: "🧪" },
  { id: 3, name: "Mathematics", icon: "📐" },
  { id: 4, name: "Biology", icon: "🧬" },
  { id: 5, name: "English", icon: "📝" },
  { id: 6, name: "Computer Science", icon: "💻" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Better. Score Higher.</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              The ultimate learning platform for 12th grade students preparing for board exams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Subjects
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subject Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Browse by Subject</h2>
          <Link to="/subjects" className="text-brand-blue hover:underline flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {mockSubjects.map((subject) => (
            <Link key={subject.id} to={`/subjects/${subject.id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
                <div className="text-3xl mb-2">{subject.icon}</div>
                <h3 className="font-medium text-gray-800">{subject.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Featured Content */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="featured">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular Content</h2>
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredSubjects.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">What Our Students Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard 
            name="Rahul Singh" 
            school="DPS, New Delhi"
            content="StudyFlix helped me score 95% in my board exams. The video lectures are concise and extremely helpful."
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard 
            name="Priya Patel" 
            school="Ryan International, Mumbai"
            content="The practice tests on StudyFlix were a game-changer. I could identify my weak areas and focus on them."
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard 
            name="Arjun Gupta" 
            school="St. Xavier's, Kolkata"
            content="The teachers explain complex topics in such a simple way. I'm no longer afraid of Physics!"
            avatar="https://randomuser.me/api/portraits/men/67.jpg"
          />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-brand-lightPurple py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to ace your board exams?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of students who are already benefiting from our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              Sign Up Now - It's Free
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
              Take a Demo
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    thumbnail: string;
    lessons: number;
    duration: string;
    level: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary" className="rounded-full">
            <Play className="h-4 w-4 mr-1" /> Watch Now
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-1">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-3">By {course.instructor}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialCardProps {
  name: string;
  school: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, school, content, avatar }: TestimonialCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500 mb-3">{school}</p>
          <p className="text-gray-700">"{content}"</p>
        </div>
      </div>
    </Card>
  );
};

export default HomePage;
