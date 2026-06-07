import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactNavigate } from '@/hooks/useContactNavigate';

interface EnrollButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const EnrollButton = ({ children = 'Enroll Now', className = '', size = 'md' }: EnrollButtonProps) => {
  const goToContact = useContactNavigate();
  
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      onClick={goToContact}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children} <ArrowRight className="w-5 h-5" />
    </motion.button>
  );
};

export default EnrollButton;
