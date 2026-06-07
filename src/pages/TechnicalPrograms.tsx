import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Brain, Shield, Monitor, Megaphone, Bug, Server, Palette, Globe, Cloud, ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import { useContactNavigate } from '@/hooks/useContactNavigate';
import EnrollButton from '@/components/EnrollButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import courseTechnicalImg from '@/assets/course-technical-training.jpg';
import courseSoftwareDevImg from '@/assets/course-software-dev.jpg';
import courseCyberImg from '@/assets/course-cybersecurity.jpg';
import courseAiImg from '@/assets/course-ai.jpg';
import courseDigitalMarketingImg from '@/assets/course-digital-marketing.jpg';
import courseSoftwareTestingImg from '@/assets/course-software-testing.jpg';
import courseItSupportImg from '@/assets/course-it-support.jpg';
import courseUxUiImg from '@/assets/course-ux-ui-design.jpg';
import courseWebDevCmsImg from '@/assets/course-web-dev-cms.jpg';
import courseCloudDevopsImg from '@/assets/course-cloud-devops.jpg';

const technicalCourses = [
  { title: 'Software Development & Engineering', description: 'Build robust software solutions with modern development practices, design patterns, and full-stack engineering principles.', image: courseSoftwareDevImg, duration: '5 months', audience: 'Graduates', topics: ['Full Stack', 'Design Patterns', 'Agile'], icon: Monitor, slug: 'software-development' },
  { title: 'Cybersecurity', description: 'Protect digital assets with ethical hacking techniques, threat detection, and advanced security protocols.', image: courseCyberImg, duration: '4 months', audience: 'IT Students', topics: ['Ethical Hacking', 'Threat Detection', 'Network Security'], icon: Shield, slug: 'cybersecurity' },
  { title: 'Artificial Intelligence & Machine Learning', description: 'Dive into AI/ML with hands-on training in deep learning, NLP, robotics, and data science.', image: courseAiImg, duration: '5 months', audience: 'IT Students', topics: ['Deep Learning', 'NLP', 'Data Science'], icon: Brain, slug: 'ai-machine-learning' },
  { title: 'Digital Marketing & E-Commerce', description: 'Master SEO, social media marketing, e-commerce strategy, and analytics to drive business growth online.', image: courseDigitalMarketingImg, duration: '3 months', audience: 'All Students', topics: ['SEO', 'Social Media', 'E-Commerce'], icon: Megaphone, slug: 'digital-marketing' },
  { title: 'Software Testing & Quality Assurance', description: 'Learn manual and automated testing, quality assurance methodologies, and bug tracking tools.', image: courseSoftwareTestingImg, duration: '3 months', audience: 'IT Students', topics: ['Manual Testing', 'Automation', 'QA'], icon: Bug, slug: 'software-testing' },
  { title: 'IT Support & Systems Administration', description: 'Gain skills in network management, system troubleshooting, and IT infrastructure administration.', image: courseItSupportImg, duration: '4 months', audience: 'Graduates', topics: ['Networking', 'System Admin', 'Troubleshooting'], icon: Server, slug: 'it-support' },
  { title: 'UX/UI Design & Product Design', description: 'Create user-centered designs with wireframing, prototyping, and modern design tools like Figma.', image: courseUxUiImg, duration: '3 months', audience: 'All Students', topics: ['Figma', 'Wireframing', 'Prototyping'], icon: Palette, slug: 'ux-ui-design' },
  { title: 'Web Development & CMS', description: 'Build responsive websites and manage content with popular CMS platforms like WordPress and Shopify.', image: courseWebDevCmsImg, duration: '4 months', audience: 'All Students', topics: ['HTML/CSS', 'WordPress', 'Responsive Design'], icon: Globe, slug: 'web-development-cms' },
  { title: 'Cloud Computing & DevOps', description: 'Master cloud platforms, CI/CD pipelines, containerization, and infrastructure automation.', image: courseCloudDevopsImg, duration: '5 months', audience: 'IT Students', topics: ['AWS', 'Docker', 'CI/CD'], icon: Cloud, slug: 'cloud-computing-devops' },
];

const CourseCard = ({ course, index }: { course: typeof technicalCourses[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComp = course.icon;
  const navigate = useNavigate();

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group cursor-pointer" onClick={() => navigate(`/course/${course.slug}`)}>
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full">
        <div className="h-48 overflow-hidden"><img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <IconComp className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold font-display">{course.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /><span>{course.duration}</span></div>
            <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4 text-primary" /><span>{course.audience}</span></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">{course.topics.map((topic) => (<span key={topic} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">{topic}</span>))}</div>
          <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">Enroll Now<ArrowRight className="w-4 h-4" /></div>
        </div>
      </div>
    </motion.div>
  );
};

const TechnicalPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-24 pb-12 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={courseTechnicalImg} alt="" className="w-full h-full object-cover" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={() => navigate('/courses/college')} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"><ArrowLeft className="w-4 h-4" />Back to College Programs</button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"><Code className="w-8 h-8 text-primary-foreground" /></div>
            <div><h1 className="text-3xl md:text-4xl font-bold font-display">Technical Certification Programs</h1><p className="text-muted-foreground">Master In-Demand Tech Skills</p></div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl">Industry-ready certification programs in software development, AI, cybersecurity, cloud computing, and more.</p>
        </div>
      </section>
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Certification Courses</h2>
            <p className="text-muted-foreground">Choose the certification that fits your career goals</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{technicalCourses.map((course, index) => (<CourseCard key={course.title} course={course} index={index} />))}</div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Ready to Get Certified?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us to learn more and enroll in our certification programs.</p>
          <EnrollButton>Enroll Now</EnrollButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TechnicalPrograms;
