import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck, MessageCircle, Mic, Users, Brain, Target, Sparkles, ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import coursePersonalDevImg from '@/assets/course-personal-dev.jpg';
import coursePersonalityImg from '@/assets/course-personality.jpg';

const personalCourses = [
  { title: 'Communication Skills', description: 'Master verbal and non-verbal communication, active listening, and professional etiquette for career success.', icon: MessageCircle, duration: '2 months', audience: 'All Students', topics: ['Verbal Communication', 'Active Listening', 'Email Writing', 'Presentation Skills', 'Body Language'], slug: 'communication-skills' },
  { title: 'Public Speaking & Presentation', description: 'Overcome stage fear and learn to deliver impactful speeches, presentations, and pitches with confidence.', icon: Mic, duration: '2 months', audience: 'All Students', topics: ['Speech Delivery', 'Stage Presence', 'Storytelling', 'Audience Engagement', 'Impromptu Speaking'], slug: 'public-speaking' },
  { title: 'Leadership & Team Management', description: 'Develop leadership qualities, team management skills, and learn to inspire and motivate others effectively.', icon: Users, duration: '3 months', audience: 'Graduates', topics: ['Team Building', 'Decision Making', 'Conflict Resolution', 'Delegation', 'Motivational Skills'], slug: 'leadership' },
  { title: 'Personality Development', description: 'Build a strong personality with grooming, self-confidence, emotional intelligence, and interpersonal skills.', icon: Sparkles, duration: '2 months', audience: 'All Students', topics: ['Self-Confidence', 'Grooming', 'Emotional Intelligence', 'Stress Management', 'Positive Attitude'], slug: 'personality-development' },
  { title: 'Critical Thinking & Problem Solving', description: 'Sharpen your analytical thinking, logical reasoning, and creative problem-solving abilities.', icon: Brain, duration: '2 months', audience: 'All Students', topics: ['Analytical Thinking', 'Logical Reasoning', 'Creative Solutions', 'Case Studies', 'Brainstorming'], slug: 'critical-thinking' },
  { title: 'Goal Setting & Career Planning', description: 'Learn to set SMART goals, plan your career path, and build strategies for long-term professional growth.', icon: Target, duration: '1 month', audience: 'All Students', topics: ['SMART Goals', 'Career Mapping', 'Resume Building', 'Interview Prep', 'Networking'], slug: 'goal-setting' },
];

const CourseCard = ({ course, index }: { course: typeof personalCourses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComp = course.icon;
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/course/${course.slug}`)}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <IconComp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">{course.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                <span>{course.audience}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
          <div className="space-y-2 mb-5">
            {course.topics.map((topic) => (
              <div key={topic} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-foreground">{topic}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
            View Details <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PersonalDevelopment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={coursePersonalDevImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={() => navigate('/courses/college')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />Back to College Programs
          </button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <UserCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-display">Personal Development Programs</h1>
              <p className="text-muted-foreground">Unlock Your Full Potential</p>
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build essential life skills including communication, leadership, public speaking, and personality development to excel in your career and personal life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Programs</h2>
            <p className="text-muted-foreground">Choose the program that fits your growth goals</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {personalCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Ready to Transform Yourself?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us to learn more and enroll in our personal development programs.</p>
          <EnrollButton>Enroll Now</EnrollButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PersonalDevelopment;
