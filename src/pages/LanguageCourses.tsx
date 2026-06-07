import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Languages, ArrowLeft, ArrowRight, Clock, Users, BookOpen, CheckCircle2 } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const languageCourses = [
  { name: 'Kannada', tagline: 'Master the Local Language', description: 'Comprehensive Kannada language course covering reading, writing, speaking, and comprehension skills.', features: ['Speaking & Pronunciation', 'Reading & Writing', 'Grammar & Vocabulary', 'Literature & Poetry', 'Exam Preparation'], duration: '3-6 months', levels: 'Basic to Advanced', ageGroup: 'Class 1-12', color: 'from-yellow-500 to-red-500', slug: 'kannada' },
  { name: 'English', tagline: 'The Global Language', description: 'Build strong English communication skills with focus on grammar, vocabulary, spoken English, and academic writing.', features: ['Spoken English', 'Grammar & Vocabulary', 'Creative Writing', 'Reading Comprehension', 'Public Speaking'], duration: '3-6 months', levels: 'Basic to Advanced', ageGroup: 'Class 1-12', color: 'from-purple-500 to-blue-500', slug: 'english' },
  { name: 'Hindi', tagline: 'The National Language', description: 'Expert-led Hindi courses designed to improve fluency, grammar, and literary appreciation.', features: ['Conversational Hindi', 'Hindi Grammar', 'Essay & Letter Writing', 'Hindi Literature', 'CBSE/ICSE Exam Prep'], duration: '3-6 months', levels: 'Basic to Advanced', ageGroup: 'Class 1-12', color: 'from-blue-500 to-green-500', slug: 'hindi' },
];

const LanguageCard = ({ course, index }: { course: typeof languageCourses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.15 }} className="group cursor-pointer" onClick={() => navigate(`/course/${course.slug}`)}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className={`h-3 bg-gradient-to-r ${course.color}`} />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center shadow-lg`}><BookOpen className="w-6 h-6 text-white" /></div>
            <div><h3 className="text-2xl font-bold font-display">{course.name}</h3><p className="text-primary text-sm font-medium">{course.tagline}</p></div>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.description}</p>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4 text-primary" /><span>{course.ageGroup}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Languages className="w-4 h-4 text-primary" /><span>{course.levels}</span></div>
          </div>
          <div className="space-y-2 mb-6">
            <h4 className="font-semibold text-sm">What You'll Learn:</h4>
            {course.features.map((feature) => (<div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span>{feature}</span></div>))}
          </div>
          <EnrollButton className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90`}>Enroll Now</EnrollButton>
        </div>
      </div>
    </motion.div>
  );
};

const LanguageCourses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate('/courses/stem')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to STEM Learning</button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><Languages className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">Language Courses</h1><p className="text-muted-foreground">Master Multiple Languages</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Comprehensive language courses designed to help students excel with expert instructors and proven teaching methods.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Choose Your Language</h2>
            <p className="text-muted-foreground">Expert-led courses for academic success and fluency</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{languageCourses.map((course, index) => (<LanguageCard key={course.name} course={course} index={index} />))}</div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-center mb-8">Why Learn With Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-4"><div className="text-3xl font-bold text-primary mb-2">10+</div><div className="text-muted-foreground text-sm">Years Experience</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-primary mb-2">500+</div><div className="text-muted-foreground text-sm">Students Taught</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-primary mb-2">95%</div><div className="text-muted-foreground text-sm">Pass Rate</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-primary mb-2">3</div><div className="text-muted-foreground text-sm">Languages Offered</div></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LanguageCourses;
