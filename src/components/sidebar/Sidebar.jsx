import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useSidebar } from '../../context/useSidebar';
import useModalVisibility from '../../hooks/useModalVisibility';
import Links from './links/Links';
import Navigation from './navigation/Navigation';
import ToggleButton from './toggleButton/ToggleButton';
import './sidebar.scss';

const variants = {
  open: {
    clipPath: 'circle(1400px at 60px 60px)',
    transition: {
      type: 'spring',
      stiffness: 30
    }
  },
  closed: {
    clipPath: 'circle(35px at 60px 70px)',
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 500,
      damping: 50
    }
  },
  exiting: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isModalVisible = useModalVisibility();

  return (
    <>
      {isModalVisible &&
        ReactDOM.createPortal(
          <motion.div
            animate={isSidebarOpen ? 'open' : 'closed'}
            className='header-button-container'
          >
            {isSidebarOpen && (
              <div className='background' onClick={toggleSidebar}></div>
            )}
            <motion.div className='bg' variants={variants}>
              <div className='nav-inner'>
                <div className='nav-row'>
                  <Navigation />
                </div>
                <Links />
              </div>
            </motion.div>
            <ToggleButton isModalVisible={isModalVisible} />
          </motion.div>,

          document.querySelector('.modal-container')
        )}
    </>
  );
};

export default Sidebar;
