import { useEffect, useState } from 'react';

function useModalVisibility() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        setIsModalVisible(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isModalVisible;
}

export default useModalVisibility;
