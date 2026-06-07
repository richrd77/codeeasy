import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Microscope, GraduationCap, Code, Blocks, Globe, Bot, Calculator, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gradeImg from '@/assets/course-grade1-10.jpg';
import codingKidsImg from '@/assets/course-coding-kids.jpg';
import scratchImg from '@/assets/course-scratch.jpg';
import blockCodingImg from '@/assets/course-block-coding.jpg';
import webImg from '@/assets/course-web.jpg';
import roboticsImg from '@/assets/course-robotics.jpg';
import progmathImg from '@/assets/course-progmath.jpg';

const stemCourses = [
  { icon: GraduationCap, title: 'Grade 1 to 10', tagline: 'Foundation Learning', description: 'Strong academic foundation with PCMB tuition, competitive exam coaching, and project support for CBSE, ICSE, and State Board students.', topics: ['PCMB Tuition', 'Olympiad Prep', 'NTSE Coaching', 'Project Support'], duration: 'Academic Year', ageGroup: 'Class 1-10', image: gradeImg, color: 'hsl(0, 84%, 60%)', slug: 'grade-1-10' },
  { icon: Code, title: 'Coding for Kids', tagline: 'Build the Future', description: 'Learn programming through fun, interactive courses designed for young minds. From visual coding to real projects.', topics: ['Intro to Programming', 'Logic Building', 'Mini Projects', 'Game Development'], duration: '3-6 months', ageGroup: 'Class 3-8', image: codingKidsImg, color: 'hsl(220, 90%, 56%)', slug: 'coding-for-kids' },
  { icon: Blocks, title: 'Scratch', tagline: 'Visual Programming', description: "Create interactive stories, games, and animations using Scratch — the world's most popular visual programming language for kids.", topics: ['Animations', 'Games', 'Interactive Stories', 'Creative Projects'], duration: '3 months', ageGroup: 'Class 3-7', image: scratchImg, color: 'hsl(45, 100%, 51%)', slug: 'scratch-programming' },
  { icon: Blocks, title: 'Block Coding', tagline: 'Drag, Drop & Code', description: 'Master block-based programming to understand coding concepts without typing complex syntax.', topics: ['Logic Blocks', 'Sequencing', 'Loops & Conditions', 'Problem Solving'], duration: '3 months', ageGroup: 'Class 3-8', image: blockCodingImg, color: 'hsl(142, 71%, 45%)', slug: 'block-coding' },
  { icon: Globe, title: 'Web Development', tagline: 'Create for the Web', description: 'Learn to build websites from scratch using HTML, CSS, and JavaScript with hands-on projects.', topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Live Projects'], duration: '4-6 months', ageGroup: 'Class 6-12', image: webImg, color: 'hsl(220, 90%, 56%)', slug: 'web-development' },
  { icon: Bot, title: 'Robotics', tagline: 'Build & Program Robots', description: 'Hands-on robotics courses where students design, build, and program their own robots.', topics: ['Robot Design', 'Sensors & Motors', 'Arduino', 'Competitions'], duration: '3-6 months', ageGroup: 'Class 5-12', image: roboticsImg, color: 'hsl(0, 84%, 60%)', slug: 'robotics' },
  { icon: Calculator, title: 'ProgMath', tagline: 'Programming + Mathematics', description: 'Combine programming with mathematical concepts to solve real-world problems computationally.', topics: ['Math Algorithms', 'Computational Thinking', 'Data Patterns', 'Problem Solving'], duration: '3-6 months', ageGroup: 'Class 5-12', image: progmathImg, color: 'hsl(45, 100%, 51%)', slug: 'progmath' },
];

const CourseCard = ({ course, index }: { course: typeof stemCourses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  const handleClick = () => { navigate(`/course/${course.slug}`); };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} className="group cursor-pointer" onClick={handleClick}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className="relative h-44 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: course.color }} />
          <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4"><div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" style={{ backgroundColor: course.color }}><course.icon className="w-5 h-5 text-white" /></div></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold font-display mb-1">{course.title}</h3>
          <p className="text-xs font-medium mb-2" style={{ color: course.color }}>{course.tagline}</p>
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">{course.description}</p>
          <div className="flex items-center gap-3 mb-3 text-xs">
            <div className="flex items-center gap-1 text-muted-foreground"><Clock className="w-3.5 h-3.5 text-primary" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1 text-muted-foreground"><Users className="w-3.5 h-3.5 text-primary" /><span>{course.ageGroup}</span></div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">{course.topics.map((t) => (<span key={t} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">{t}</span>))}</div>
          <div className="flex items-center gap-1 font-medium text-sm group-hover:gap-2 transition-all" style={{ color: course.color }}>Enquire Now<ArrowRight className="w-4 h-4" /></div>
        </div>
      </div>
    </motion.div>
  );
};

const StemPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex w-full h-2 pt-[64px]">
        <div className="flex-1" style={{ backgroundColor: 'hsl(0, 84%, 50%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(220, 90%, 56%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(45, 100%, 51%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(142, 71%, 45%)' }} />
      </div>
      <section className="relative pb-12 pt-8 bg-muted">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate('/courses/school')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to School Programs</button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><Microscope className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">STEM Learning</h1><p className="text-muted-foreground">Experience the Aroma of STEM Learning</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Comprehensive STEM programs including academics, coding, robotics, and mathematical programming for young innovators.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Explore Our STEM Courses</h2>
            <p className="text-muted-foreground">Choose from a wide range of STEM programs</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">{stemCourses.map((course, index) => (<CourseCard key={course.title} course={course} index={index} />))}</div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Ready to Explore STEM?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us to learn more about our STEM programs and find the perfect fit.</p>
          <EnrollButton>Contact Us</EnrollButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StemPrograms;
