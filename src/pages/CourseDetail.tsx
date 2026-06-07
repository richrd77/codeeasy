import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseBySlug } from '@/data/courseData';
import { useContactNavigate } from '@/hooks/useContactNavigate';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const goToContact = useContactNavigate();
  const course = getCourseBySlug(slug || '');
  const modulesRef = useRef(null);
  const modulesInView = useInView(modulesRef, { once: true });

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-display mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">Go Home</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={() => navigate(course.backLink)} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />{course.backLabel}
          </button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{course.audience}</span>
              <span className="px-3 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground text-xs font-semibold flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-3">{course.title}</h1>
            <p className="text-primary font-medium text-lg mb-4">{course.tagline}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mb-8">{course.description}</p>
            <motion.button
              onClick={goToContact}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:bg-primary/90 shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Course Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">{course.overview}</p>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-xl font-bold font-display mb-5 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" /> What You'll Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {course.whatYouLearn.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-muted"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-muted" ref={modulesRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={modulesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 flex items-center gap-2">
                <BookOpen className="w-7 h-7 text-primary" /> Course Modules
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {course.modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-bold font-display">{mod.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {mod.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Enroll now and take the first step towards mastering {course.title}. Our expert instructors are ready to guide you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={goToContact}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:bg-primary/90 shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </motion.button>
              <button
                onClick={() => navigate(course.backLink)}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Browse More Courses
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
