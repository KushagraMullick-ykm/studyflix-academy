import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Users, Star, Filter, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock subject data
const subjectsMockData = [
  {
    id: 1,
    title: "Physics",
    description: "Complete 12th grade CBSE Physics curriculum",
    instructor: "Dr. Patel",
    students: 5820,
    rating: 4.8,
    totalLessons: 42,
    totalHours: 38,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop",
    tags: ["CBSE", "NEET", "JEE"]
  },
  {
    id: 2,
    title: "Chemistry",
    description: "Master organic, inorganic and physical chemistry",
    instructor: "Prof. Sharma",
    students: 4920,
    rating: 4.6,
    totalLessons: 38,
    totalHours: 32,
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop",
    tags: ["CBSE", "NEET", "JEE"]
  },
  {
    id: 3,
    title: "Biology",
    description: "Comprehensive biology for medical aspirants",
    instructor: "Dr. Verma",
    students: 3850,
    rating: 4.7,
    totalLessons: 36,
    totalHours: 30,
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
    tags: ["CBSE", "NEET"]
  },
  {
    id: 4,
    title: "Mathematics",
    description: "From algebra to calculus - complete math curriculum",
    instructor: "Mrs. Gupta",
    students: 6240,
    rating: 4.9,
    totalLessons: 45,
    totalHours: 40,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    tags: ["CBSE", "JEE"]
  },
  {
    id: 5,
    title: "English Literature",
    description: "Analysis of poems, prose and drama for 12th grade",
    instructor: "Mr. Bhattacharya",
    students: 2980,
    rating: 4.5,
    totalLessons: 30,
    totalHours: 25,
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    tags: ["CBSE", "ISC"]
  },
  {
    id: 6,
    title: "Computer Science",
    description: "Programming fundamentals with Python and C++",
    instructor: "Prof. Reddy",
    students: 3450,
    rating: 4.7,
    totalLessons: 32,
    totalHours: 28,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    tags: ["CBSE", "ISC"]
  }
];

const SubjectList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter subjects based on search term
  const filteredSubjects = subjectsMockData.filter(
    (subject) =>
      subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Explore Our Subjects</h1>
            <p className="text-gray-600">
              Comprehensive courses designed specifically for 12th grade board exams. 
              Choose from a variety of subjects taught by experienced educators.
            </p>
          </div>
          
          {/* Search and filter */}
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search subjects, topics, or instructors..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="sm:w-auto w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Subjects</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="commerce">Commerce</TabsTrigger>
                <TabsTrigger value="humanities">Humanities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
              
              {filteredSubjects.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No subjects found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </TabsContent>
            
            {/* Other tabs would have filtered content in a real app */}
            <TabsContent value="science" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects
                  .filter(subject => ["Physics", "Chemistry", "Biology", "Mathematics"].includes(subject.title))
                  .map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="commerce" className="mt-0">
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Commerce subjects coming soon!</h3>
                <p className="text-gray-500">We're working on adding Accountancy, Business Studies, and Economics.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="humanities" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects
                  .filter(subject => ["English Literature"].includes(subject.title))
                  .map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-brand-lightPurple rounded-lg p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Can't find what you're looking for?</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            We're constantly adding new subjects and courses. Let us know what you want to learn next.
          </p>
          <Button className="bg-brand-blue hover:bg-brand-darkBlue">Request a Subject</Button>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

interface SubjectCardProps {
  subject: {
    id: number;
    title: string;
    description: string;
    instructor: string;
    students: number;
    rating: number;
    totalLessons: number;
    totalHours: number;
    thumbnail: string;
    tags: string[];
  };
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={subject.thumbnail} 
        alt={subject.title}
        className="w-full h-40 object-cover"
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{subject.title}</CardTitle>
          <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm">
            <Star className="h-4 w-4 mr-1 fill-yellow-500 text-yellow-500" />
            {subject.rating}
          </div>
        </div>
        <CardDescription>{subject.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-sm text-gray-500">Instructor: {subject.instructor}</div>
        <div className="flex justify-between mt-2 text-sm">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{subject.totalLessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{subject.students.toLocaleString()} students</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          {subject.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/subjects/${subject.id}`} className="w-full">
          <Button className="w-full">View Subject</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SubjectList;
