import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Code, IndianRupee, GraduationCap, UserCheck, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import courseTechnicalImg from '@/assets/course-technical-training.jpg';
import courseFinanceImg from '@/assets/course-finance-detail.jpg';
import courseCompetitiveImg from '@/assets/course-competitive-exam.jpg';
import coursePersonalDevImg from '@/assets/course-personal-dev.jpg';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const collegeCategories = [
  {
    icon: Code,
    title: 'Technical Certification Programs',
    tagline: 'Master In-Demand Tech Skills',
    description: 'Industry-ready certification programs in software development, AI, cybersecurity, cloud computing, and more.',
    courses: ['Software Dev', 'Cybersecurity', 'AI & ML', 'Cloud & DevOps'],
    duration: '3-6 months',
    audience: 'College & Graduates',
    link: '/courses/technical',
    image: courseTechnicalImg,
  },
  {
    icon: IndianRupee,
    title: 'Finance',
    tagline: 'Master Financial Skills',
    description: 'Comprehensive finance training covering taxation, accounting, economics, and business statistics.',
    courses: ['Income Tax', 'GST', 'Accounts', 'Economics', 'Business', 'Statistics'],
    duration: '3-6 months',
    audience: 'Commerce Graduates',
    link: '/courses/finance',
    image: courseFinanceImg,
  },
  {
    icon: GraduationCap,
    title: 'Competitive Exam',
    tagline: 'Crack Entrance Exams',
    description: 'Expert guidance and structured preparation for PGCET MBA and PGCET MCA entrance exams.',
    courses: ['PGCET MBA', 'PGCET MCA'],
    duration: '3-6 months',
    audience: 'Graduates',
    link: '/courses/exam-counseling',
    image: courseCompetitiveImg,
  },
  {
    icon: UserCheck,
    title: 'Personal Development Programs',
    tagline: 'Unlock Your Full Potential',
    description: 'Build essential soft skills including communication, leadership, public speaking, and personality development.',
    courses: ['Communication', 'Leadership', 'Public Speaking', 'Personality Dev'],
    duration: '2-4 months',
    audience: 'All Students',
    link: '/courses/personal-development',
    image: coursePersonalDevImg,
  },
];

const CategoryCard = ({ category, index }: { category: typeof collegeCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group cursor-pointer" onClick={() => navigate(category.link)}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className="h-48 overflow-hidden"><img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg mb-4 -mt-12 relative z-10 border-4 border-card"><category.icon className="w-7 h-7 text-primary-foreground" /></div>
          <h3 className="text-xl font-bold font-display mb-1">{category.title}</h3>
          <p className="text-primary text-sm font-medium mb-3">{category.tagline}</p>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{category.description}</p>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /><span>{category.duration}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4 text-primary" /><span>{category.audience}</span></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">{category.courses.map((course) => (<span key={course} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">{course}</span>))}</div>
          <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">Explore<ArrowRight className="w-4 h-4" /></div>
        </div>
      </div>
    </motion.div>
  );
};

const CollegePrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to Home</button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><Briefcase className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">College & Graduate Programs</h1><p className="text-muted-foreground">Job-Focused Training With Placement Assistance</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Industry-ready courses designed to help you land your dream job with comprehensive placement support and hands-on training.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Choose Your Career Path</h2>
            <p className="text-muted-foreground">Explore our specialized programs with placement assistance</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">{collegeCategories.map((category, index) => (<CategoryCard key={category.title} category={category} index={index} />))}</div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Ready to Start Your Career?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us to learn more about our programs and start your journey towards a successful career.</p>
          <EnrollButton>Contact Us</EnrollButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CollegePrograms;
