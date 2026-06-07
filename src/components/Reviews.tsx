import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  student_name: string;
  rating: number;
  comment: string;
}

const initialTestimonials: Review[] = [
  {
    student_name: 'Priya Sharma',
    rating: 5,
    comment: 'Code Easy transformed my preparation journey. The mentors were incredibly supportive and the study materials were comprehensive. I cleared PGCET with a top rank!',
  },
  {
    student_name: 'Rahul Kumar',
    rating: 5,
    comment: 'My son has developed a genuine love for coding thanks to Code Easy. The interactive teaching methods keep him engaged and excited about learning.',
  },
  {
    student_name: 'Anjali Reddy',
    rating: 5,
    comment: 'The practical approach to teaching programming made all the difference. I now work as a software developer, and I owe my success to Code Easy.',
  },
  {
    student_name: 'Suresh Gowda',
    rating: 5,
    comment: 'The accounting and taxation courses are well-structured and easy to understand. The faculty explains complex concepts in simple terms.',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 transition-colors ${
            star <= rating
              ? 'fill-primary text-primary'
              : 'fill-muted text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = initialTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">What Our Students Say</h2>
          <p className="section-subtitle mb-8">
            Real stories from our students and parents who experienced the Code Easy difference
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.student_name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.student_name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.student_name}</p>
                  <p className="text-xs text-muted-foreground">Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="testimonial-card"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
            <div className="mb-4">
              <StarRating rating={testimonials[currentIndex].rating} />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonials[currentIndex].comment}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {testimonials[currentIndex].student_name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].student_name}</p>
                <p className="text-sm text-muted-foreground">Student</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary font-display">{testimonials.length}+</p>
            <p className="text-sm text-muted-foreground">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary font-display">4.9</p>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary font-display">98%</p>
            <p className="text-sm text-muted-foreground">Recommend Us</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
