import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../config';

export const useNavigationLinks = () => {
  return useMemo(() => navLinks, []);
};

export const useHandleLinkClick = (onClose) => {
  const navigate = useNavigate();

  return useCallback(
    (event, item) => {
      event.preventDefault();
      if (item === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          navigate('/');
          window.scrollTo(0, 0);
        }
      }
      if (onClose) onClose();
    },
    [navigate, onClose]
  );
};
