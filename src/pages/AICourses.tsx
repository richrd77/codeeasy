import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import courseRoboticsImg from '@/assets/course-robotics.jpg';
import courseNlpImg from '@/assets/course-nlp.jpg';

const courses = [
  {
    title: 'Robotics',
    description: 'Build and program robots with hands-on training in sensors, actuators, and embedded systems.',
    image: courseRoboticsImg,
    duration: '3 months',
    audience: 'IT Students',
  },
  {
    title: 'NLP (Natural Language Processing)',
    description: 'Learn to build AI systems that understand and generate human language — chatbots, sentiment analysis, and more.',
    image: courseNlpImg,
    duration: '3 months',
    audience: 'IT Students',
  },
];

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.15 }} className="group cursor-pointer" onClick={() => window.location.href = '/#contact'}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col">
        <div className="h-52 overflow-hidden"><img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold font-display mb-2">{course.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{course.description}</p>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4 text-primary" /><span>{course.audience}</span></div>
          </div>
          <EnrollButton size="sm">Enroll Now</EnrollButton>
        </div>
      </div>
    </motion.div>
  );
};

const AICourses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <a href="/courses/technical" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to Technical Programs</a>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><Brain className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">AI Programs</h1><p className="text-muted-foreground">Explore the Future of Technology</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Hands-on AI training in Robotics and Natural Language Processing.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our AI Courses</h2>
            <p className="text-muted-foreground">Choose your specialization in Artificial Intelligence</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">{courses.map((course, i) => (<CourseCard key={course.title} course={course} index={i} />))}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AICourses;
