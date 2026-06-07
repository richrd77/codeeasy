import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Cpu, Rocket, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import codeEasyIcon from '@/assets/codeeasy-icon.jpg';
import codeEasyLogo from '@/assets/codeeasy-logo.png';

const floatingIcons = [
  { Icon: Code, color: 'text-blue-400', x: -120, y: -80, delay: 0.3 },
  { Icon: Cpu, color: 'text-green-400', x: 130, y: -60, delay: 0.5 },
  { Icon: Rocket, color: 'text-orange-400', x: -100, y: 70, delay: 0.7 },
  { Icon: Sparkles, color: 'text-yellow-400', x: 110, y: 80, delay: 0.4 },
  { Icon: BookOpen, color: 'text-purple-400', x: 0, y: -110, delay: 0.6 },
  { Icon: Lightbulb, color: 'text-pink-400', x: -140, y: 0, delay: 0.8 },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3200),
      setTimeout(() => onComplete(), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, #1a1a2e 50%, #16213e 100%)' }}
        >
          {/* Animated particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/20"
              style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Rotating ring */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-dashed border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-white/5"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 0px rgba(255,255,255,0.2)', '0 0 40px rgba(255,255,255,0.4)', '0 0 0px rgba(255,255,255,0.2)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-2xl overflow-hidden"
              >
                <img src={codeEasyIcon} alt="Code Easy" className="w-full h-full object-cover" />
              </motion.div>

              {/* Floating icons around logo */}
              {phase >= 1 && floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  animate={{ scale: 1, x, y, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 12, delay }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon className={`w-7 h-7 ${color} drop-shadow-lg`} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Logo text */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <img src={codeEasyLogo} alt="Code Easy" className="h-12 object-contain brightness-0 invert" />
              </motion.div>
            )}

            {/* Tagline */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <p className="text-white/80 text-lg font-medium tracking-wide">
                  Learn • Code • Create • Innovate
                </p>
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/60"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
