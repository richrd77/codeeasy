import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useContactNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to contact
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/#contact');
    }
  }, [navigate, location.pathname]);

  return goToContact;
};
