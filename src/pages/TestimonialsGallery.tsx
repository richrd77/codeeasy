import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, X, ChevronLeft, ChevronRight, Camera, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Code Easy transformed my preparation journey. The mentors were incredibly supportive and the study materials were comprehensive. I cleared PGCET with a top rank!',
  },
  {
    name: 'Rahul Kumar',
    rating: 5,
    comment: 'My son has developed a genuine love for coding thanks to Code Easy. The interactive teaching methods keep him engaged and excited about learning.',
  },
  {
    name: 'Anjali Reddy',
    rating: 5,
    comment: 'The practical approach to teaching programming made all the difference. I now work as a software developer, and I owe my success to Code Easy.',
  },
  {
    name: 'Suresh Gowda',
    rating: 5,
    comment: 'The accounting and taxation courses are well-structured and easy to understand. The faculty explains complex concepts in simple terms.',
  },
  {
    name: 'Meera Patel',
    rating: 5,
    comment: 'The STEM programs are fantastic! My daughter now participates in robotics competitions and has won multiple prizes. Thank you Code Easy!',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    comment: 'I enrolled my kids in the summer coding camp and they absolutely loved it. The curriculum is well-designed and age-appropriate.',
  },
];

const galleryImages = [
  { src: gallery1, caption: 'STEM Education Session' },
  { src: gallery2, caption: 'Interactive Classroom Learning' },
  { src: gallery3, caption: 'Code Easy Center' },
  { src: gallery4, caption: 'Student Workshop' },
  { src: gallery5, caption: 'Creative Arts & Crafts' },
  { src: gallery6, caption: 'Technical Training Session' },
  { src: gallery7, caption: 'STEM Lab Activities' },
  { src: gallery8, caption: 'Computer Lab Session' },
  { src: gallery9, caption: 'Group Learning Activity' },
  { src: gallery10, caption: 'STEM Education Workshop' },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground/30'
        }`}
      />
    ))}
  </div>
);

const TestimonialsGallery = () => {
  const testimonialsRef = useRef(null);
  const galleryRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Testimonials & <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            See what our students say and explore moments from our vibrant learning environment
          </motion.p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-1 rounded-full bg-[hsl(0,84%,60%)]" />
            <div className="w-12 h-1 rounded-full bg-[hsl(217,91%,60%)]" />
            <div className="w-12 h-1 rounded-full bg-[hsl(48,96%,53%)]" />
            <div className="w-12 h-1 rounded-full bg-[hsl(142,71%,45%)]" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="section-title">What Our Students Say</h2>
            </div>
            <p className="section-subtitle">Real stories from our students and parents</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/15" />
                <div className="mb-3">
                  <StarRating rating={t.rating} />
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{t.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Student</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-muted/50" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="section-title">Our Gallery</h2>
            </div>
            <p className="section-subtitle">Glimpses of learning, fun, and growth at Code Easy</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
            <X className="w-8 h-8" />
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white hover:text-primary transition-colors">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={nextImage} className="absolute right-4 text-white hover:text-primary transition-colors">
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{galleryImages[lightboxIndex].caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TestimonialsGallery;
