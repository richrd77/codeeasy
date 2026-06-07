import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IndianRupee, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import courseFinanceImg from '@/assets/course-finance-detail.jpg';
import courseIncomeTaxImg from '@/assets/course-income-tax.jpg';
import courseGstImg from '@/assets/course-gst.jpg';
import courseAccountsImg from '@/assets/course-accounts.jpg';
import courseBusinessEconImg from '@/assets/course-business-economics.jpg';
import courseStatisticsImg from '@/assets/course-statistics.jpg';

const financeCourses = [
  { title: 'Income Tax', description: 'Learn income tax filing, tax planning, deductions, and compliance for individuals and businesses.', image: courseIncomeTaxImg, duration: '2 months', audience: 'Commerce Students', slug: 'income-tax' },
  { title: 'GST', description: 'Master Goods & Services Tax — registration, returns, invoicing, and compliance procedures.', image: courseGstImg, duration: '2 months', audience: 'Commerce Students', slug: 'gst' },
  { title: 'Accounts', description: 'Comprehensive accounting training covering bookkeeping, financial statements, and Tally.', image: courseAccountsImg, duration: '3 months', audience: 'All Students', slug: 'accounts' },
  { title: 'Economics', description: 'Understand micro and macroeconomics, market structures, and economic policies for business.', image: courseBusinessEconImg, duration: '2 months', audience: 'Commerce Graduates', slug: 'economics' },
  { title: 'Business', description: 'Business fundamentals, management principles, and entrepreneurial skills for modern commerce.', image: courseBusinessEconImg, duration: '2 months', audience: 'All Students', slug: 'business' },
  { title: 'Statistics', description: 'Data analysis, probability, statistical inference, and applications in business decision-making.', image: courseStatisticsImg, duration: '2 months', audience: 'All Students', slug: 'statistics' },
];

const CourseCard = ({ course, index }: { course: typeof financeCourses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group cursor-pointer" onClick={() => navigate(`/course/${course.slug}`)}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className="h-48 overflow-hidden"><img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6">
          <h3 className="text-xl font-bold font-display mb-2">{course.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4 text-primary" /><span>{course.audience}</span></div>
          </div>
          <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">Enquire Now<ArrowRight className="w-4 h-4" /></div>
        </div>
      </div>
    </motion.div>
  );
};

const FinancePrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={courseFinanceImg} alt="" className="w-full h-full object-cover" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={() => navigate('/courses/college')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to College Programs</button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><IndianRupee className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">Finance Programs</h1><p className="text-muted-foreground">Master Financial Skills for a Strong Career</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Comprehensive finance training covering taxation, accounting, and business economics.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Finance Courses</h2>
            <p className="text-muted-foreground">Choose the course that fits your career goals</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">{financeCourses.map((course, index) => (<CourseCard key={course.title} course={course} index={index} />))}</div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Ready to Master Finance?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us to learn more and enroll in our finance programs.</p>
          <EnrollButton>Contact Us</EnrollButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FinancePrograms;
