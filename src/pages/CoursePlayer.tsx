
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Download,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Share2,
  CheckCircle,
  LockKeyhole
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock course data
const courseMockData = {
  id: 1,
  title: "Electromagnetic Induction",
  description: "Learn the principles of electromagnetic induction and its applications in 12th grade Physics.",
  instructor: "Dr. Patel",
  subject: "Physics",
  duration: "38 minutes",
  progress: 65,
  videoUrl: "https://example.com/video.mp4", // This would be a real video URL in production
  chapters: [
    {
      id: 1,
      title: "Introduction to Electromagnetic Induction",
      duration: "08:22",
      isCompleted: true,
      isLocked: false
    },
    {
      id: 2,
      title: "Faraday's Law of Induction",
      duration: "12:15",
      isCompleted: true,
      isLocked: false
    },
    {
      id: 3,
      title: "Lenz's Law",
      duration: "10:45",
      isCompleted: false,
      isLocked: false,
      isCurrent: true
    },
    {
      id: 4,
      title: "Self Induction and Mutual Induction",
      duration: "14:30",
      isCompleted: false,
      isLocked: true
    },
    {
      id: 5,
      title: "AC Generator and Transformer",
      duration: "11:55",
      isCompleted: false,
      isLocked: true
    }
  ],
  resources: [
    { id: 1, title: "Lecture Notes PDF", type: "pdf", size: "2.4 MB" },
    { id: 2, title: "Practice Problems", type: "pdf", size: "1.8 MB" },
    { id: 3, title: "Formulas Cheat Sheet", type: "pdf", size: "0.9 MB" }
  ],
  relatedCourses: [
    { id: 101, title: "Magnetic Effects of Current", duration: "42 min" },
    { id: 102, title: "Alternating Current", duration: "35 min" },
    { id: 103, title: "Electromagnetic Waves", duration: "28 min" }
  ],
  comments: [
    {
      id: 1,
      user: "Aditya",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      content: "The explanation of Lenz's law was very clear. Thanks!",
      time: "2 days ago",
      likes: 12
    },
    {
      id: 2,
      user: "Neha",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      content: "Could you explain the application part in more detail? I'm still confused.",
      time: "1 day ago",
      likes: 5
    }
  ]
};

const CoursePlayer = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  
  // In a real app, you would fetch the course data based on courseId
  const course = courseMockData;
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control the video playback
  };
  
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, this would save to the user's bookmarks
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would post the comment to an API
    console.log("Submitted comment:", comment);
    setComment("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Course title and info */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-1">
            <span>Subject: {course.subject}</span>
            <span>•</span>
            <span>Instructor: {course.instructor}</span>
            <span>•</span>
            <span>Duration: {course.duration}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video player and tabs */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-6 relative">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play className="h-16 w-16 mx-auto mb-2 opacity-80" />
                  <p>Video Player Placeholder</p>
                  <p className="text-sm opacity-70 mt-2">In a real app, this would be a video player</p>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="bg-gray-900 text-white p-3">
                <div className="mb-2">
                  <Progress value={course.progress} className="h-1" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <SkipBack className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-white hover:bg-white/10"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <SkipForward className="h-5 w-5" />
                    </Button>
                    <span className="text-sm">12:34 / {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Volume2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video action buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button 
                variant="outline" 
                size="sm" 
                className={isBookmarked ? "text-brand-blue" : ""}
                onClick={toggleBookmark}
              >
                <Bookmark className="h-4 w-4 mr-1" />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
            
            {/* Content tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">About this lesson</h3>
                  <p className="mb-4">{course.description}</p>
                  <p>
                    In this lesson, we will explore the fundamental principles of electromagnetic induction, 
                    which is a crucial topic for 12th grade Physics students. You will learn about Faraday's 
                    experiments, Lenz's law, and various practical applications of electromagnetic induction.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">What you'll learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understand the concept of magnetic flux and its change</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Learn Faraday's law of electromagnetic induction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Apply Lenz's law to determine the direction of induced current</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solve numerical problems based on electromagnetic induction</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Related lessons</h3>
                  <ul className="space-y-2">
                    {course.relatedCourses.map((relatedCourse) => (
                      <li key={relatedCourse.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span>{relatedCourse.title}</span>
                        <span className="text-sm text-gray-500">{relatedCourse.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <h3 className="text-xl font-semibold mb-4">Course Resources</h3>
                <div className="space-y-3">
                  {course.resources.map((resource) => (
                    <div 
                      key={resource.id}
                      className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <div className="bg-brand-lightPurple p-2 rounded mr-3">
                          <Download className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-gray-500">{resource.type.toUpperCase()} • {resource.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="discussion">
                <h3 className="text-xl font-semibold mb-4">Discussion</h3>
                
                {/* Comment form */}
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <div className="border rounded-lg overflow-hidden mb-2">
                    <textarea
                      rows={3}
                      placeholder="Add a comment or ask a question..."
                      className="w-full p-3 outline-none"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="bg-gray-50 p-2 flex justify-end">
                      <Button type="submit" disabled={!comment.trim()}>
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </form>
                
                {/* Comments list */}
                <div className="space-y-4">
                  {course.comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                      <div className="flex space-x-3">
                        <img 
                          src={comment.avatar} 
                          alt={comment.user} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium mr-2">{comment.user}</h4>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-gray-700 mb-2">{comment.content}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <button className="flex items-center hover:text-gray-700">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{comment.likes}</span>
                            </button>
                            <button className="ml-4 hover:text-gray-700">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Course chapters sidebar */}
          <div>
            <div className="bg-white border rounded-lg overflow-hidden sticky top-20">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Course Content</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>{course.chapters.length} lessons</span>
                  <span className="mx-2">•</span>
                  <span>{course.duration} total</span>
                </div>
              </div>
              
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                {course.chapters.map((chapter) => (
                  <div 
                    key={chapter.id}
                    className={`p-4 border-b hover:bg-gray-50 flex items-center space-x-3 ${
                      chapter.isCurrent ? 'bg-brand-lightPurple' : ''
                    }`}
                  >
                    <div className={`flex-shrink-0 ${chapter.isCompleted ? 'text-green-500' : 'text-gray-400'}`}>
                      {chapter.isCompleted ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : chapter.isLocked ? (
                        <LockKeyhole className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium truncate ${chapter.isLocked ? 'text-gray-400' : ''}`}>
                        {chapter.title}
                      </h4>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{chapter.duration}</span>
                        {chapter.isCurrent && <span className="text-brand-blue">Current</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-gray-50">
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CoursePlayer;
