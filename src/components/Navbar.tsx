import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Briefcase, Code, Brain, Shield, Monitor, Megaphone, Bug, Server, Palette, Globe, Cloud, BookOpen, Cpu, FlaskConical, Languages, Calculator, ClipboardCheck, ChevronDown, ChevronRight, UserCheck, Loader2 } from 'lucide-react';
import codeEasyIcon from '@/assets/codeeasy-icon.jpg';
import codeEasyLogo from '@/assets/codeeasy-logo.png';

const courseDropdownItems = [
  {
    category: 'School Programs (Class 1–12)',
    icon: GraduationCap,
    href: '/courses/school',
    courses: [
      { name: 'STEM Learning', icon: Cpu, href: '/courses/stem' },
      { name: 'STEAM Programs', icon: FlaskConical, href: '/courses/steam' },
      { name: 'Language Courses', icon: Languages, href: '/courses/languages' },
    ],
  },
  {
    category: 'College & Graduate Programs',
    icon: Briefcase,
    href: '/courses/college',
    courses: [
      { name: 'Technical Certifications', icon: Code, href: '/courses/technical' },
      { name: 'Finance & Accounts', icon: Calculator, href: '/courses/finance' },
      { name: 'Exam Counseling', icon: ClipboardCheck, href: '/courses/exam-counseling' },
      { name: 'Personal Development', icon: UserCheck, href: '/courses/personal-development' },
    ],
  },
  {
    category: 'Popular Courses',
    icon: Monitor,
    href: '/#courses',
    courses: [
      { name: 'AI & Machine Learning', icon: Brain, href: '/courses/technical/ai' },
      { name: 'Cybersecurity', icon: Shield, href: '/courses/technical/cyber-security' },
      { name: 'Software Development', icon: Monitor, href: '/courses/technical' },
      { name: 'Digital Marketing', icon: Megaphone, href: '/courses/technical' },
      { name: 'Cloud Computing & DevOps', icon: Cloud, href: '/courses/technical' },
    ],
  },
];

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Courses', href: '/#courses', hasDropdown: true },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Gallery', href: '/testimonials' },
  { name: 'About Us', href: '/#about' },
  { name: 'Contact Us', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset loading state when route changes
  useEffect(() => {
    setIsNavigating(false);
  }, [location.pathname]);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // e.g., "#contact"
      if (location.pathname === '/') {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setIsNavigating(true);
        navigate('/' + hash);
      }
    } else {
      setIsNavigating(true);
      navigate(href);
    }
  }, [navigate, location.pathname]);

  return (
    <>
      {/* Loading bar */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`navbar-transparent ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={codeEasyIcon} alt="Code Easy Icon" className="w-12 h-12 object-contain rounded-full" />
            <img src={codeEasyLogo} alt="Code Easy" className="h-10 object-contain hidden sm:block" />
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <motion.a
                    href={item.href}
                    className={`nav-link flex items-center gap-1 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                  </motion.a>

                  <AnimatePresence>
                    {isCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                      >
                        <div className="bg-popover border border-border rounded-2xl shadow-2xl p-5 w-[600px] grid grid-cols-3 gap-4">
                          {courseDropdownItems.map((section) => {
                            const SectionIcon = section.icon;
                            return (
                              <div key={section.category}>
                                <a href={section.href} onClick={(e) => { handleNavClick(e, section.href); setIsCoursesOpen(false); }} className="flex items-center gap-2 mb-3 group">
                                  <SectionIcon className="w-4 h-4 text-primary" />
                                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">{section.category}</span>
                                </a>
                                <div className="space-y-1">
                                  {section.courses.map((course) => {
                                    const CourseIcon = course.icon;
                                    return (
                                      <a
                                        key={course.name}
                                        href={course.href}
                                        onClick={(e) => { handleNavClick(e, course.href); setIsCoursesOpen(false); }}
                                        className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-accent transition-colors group"
                                      >
                                        <CourseIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{course.name}</span>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
            <motion.button
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="btn-hero-primary py-2 px-6 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-foreground' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-foreground' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background rounded-2xl mt-2 p-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full text-foreground font-medium py-2 hover:text-primary transition-colors"
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileCoursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 space-y-3 pb-2"
                        >
                          {courseDropdownItems.map((section) => (
                            <div key={section.category}>
                              <a href={section.href} className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block" onClick={(e) => handleNavClick(e, section.href)}>{section.category}</a>
                              {section.courses.map((course) => {
                                const CourseIcon = course.icon;
                                return (
                                  <a key={course.name} href={course.href} className="flex items-center gap-2 py-1.5 pl-2 text-sm text-foreground hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, course.href)}>
                                    <CourseIcon className="w-3.5 h-3.5 text-muted-foreground" />
                                    {course.name}
                                  </a>
                                );
                              })}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <button
                className="btn-hero-primary py-3 text-center text-sm w-full"
                onClick={(e) => handleNavClick(e, '/#contact')}
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
