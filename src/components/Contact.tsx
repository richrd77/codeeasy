import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const course = formData.course.trim();
    const message = formData.message.trim();
    
    if (!name || !email || !phone || !course) return;
    
    const text = [
      '*New Inquiry from Website*',
      '',
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Course Interest:* ${course}`,
      message ? `*Message:* ${message}` : '',
    ].filter(Boolean).join('\n');
    
    window.open(`https://wa.me/+919686265526?text=${encodeURIComponent(text)}`, '_blank');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Join Us Today</h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Course Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Select a course</option>
                    <optgroup label="For School Students">
                      <option value="Grade 1-10">Grade 1-10</option>
                      <option value="coding for kids">Coding for Kids</option>
                      <option value="Scratch">Scratch </option>
                      <option value="Block code">Block Code</option>
                      <option value="WED">Web </option>
                      <option value="Robotics">Robotics</option>
                      <option value="Progmath">Progmath</option>
                      <option value="Language">Language</option>
                      <option value="Art and craft">Art and Craft</option>
                    </optgroup>
                    <optgroup label="For College & Graduates">
                      <option value="C Programing">C Programming</option>
                      <option value="C++">C++</option>
                      <option value="java">Java</option>
                      <option value="Python">Python</option>
                      <option value="Robotics">Robotics</option>
                      <option value="NLP (Natural Language Processing)">NLP (Natural Language Processing)</option>
                      <option value="Ethical Hacking">Ethical Hacking</option>
                      <option value="Threat Detection">Threat Detection</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your learning goals..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-hero-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <a
                href="tel:+919686265526"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-muted-foreground">+91 96862 65526 / +91 761 965 4360</p>
                </div>
              </a>

              <a
                href="https://wa.me/+919686265526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">+91 9686265526</p>
                </div>
              </a>

              <a
                href="mailto:codeeasytumkur@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-muted-foreground">codeeasytumkur@gmail.com</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Codeeasy+STEM+Education+SLN+Krupa+1st+Floor+Mahalakshminagar+2nd+Stage+2nd+Main+Rd+Batawadi+Tumakuru+Karnataka+572103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-muted-foreground text-sm">SLN Krupa, 1st Floor, Mahalakshminagar 2nd Stage, 2nd Main Rd, Batawadi, Tumakuru, Karnataka 572103</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Codeeasy+STEM+Education+SLN+Krupa+1st+Floor+Mahalakshminagar+2nd+Stage+2nd+Main+Rd+Batawadi+Tumakuru+Karnataka+572103"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-border h-48 hover:border-primary/30 transition-all relative group bg-muted"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground group-hover:text-primary transition-colors">
                <MapPin className="w-10 h-10" />
                <span className="font-semibold text-sm">Open in Google Maps</span>
                <span className="text-xs text-center px-4">SLN Krupa, Mahalakshminagar, Batawadi, Tumakuru 572103</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
