import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';
import logoText from '@/assets/logo-text.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Code Easy Logo" className="w-12 h-12 object-contain" />
              <img src={logoText} alt="CodeEasy" className="h-8 object-contain" />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering minds through quality education. From coding for kids to competitive exam preparation, we make learning easy and effective.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-background/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">Courses</a></li>
              <li><a href="/#reviews" className="text-background/70 hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="/#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#contact" className="text-background/70 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Our Courses</h3>
            <ul className="space-y-3">
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">STEM Learning</a></li>
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">Technical Training</a></li>
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">Entrance Coaching</a></li>
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">Finance & Commerce</a></li>
              <li><a href="/#courses" className="text-background/70 hover:text-primary transition-colors">Language Courses</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Codeeasy+STEM+Education+SLN+Krupa+1st+Floor+Mahalakshminagar+2nd+Stage+2nd+Main+Rd+Batawadi+Tumakuru+Karnataka+572103" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">SLN Krupa, 1st Floor, Mahalakshminagar 2nd Stage, 2nd Main Rd, Batawadi, Tumakuru, Karnataka 572103</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919686265526 /+91 761 965 4360" className="text-background/70 hover:text-primary transition-colors">+91 96862 65526 / +91 761 965 4360</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:codeeasytumkur@gmail.com" className="text-background/70 hover:text-primary transition-colors">codeeasytumkur@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <p className="text-background/60 text-sm text-center">
            © {currentYear} Code Easy. All rights reserved. | Made with ❤️ in Tumkur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
