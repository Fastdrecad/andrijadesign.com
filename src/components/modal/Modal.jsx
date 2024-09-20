import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './modal.scss';

const scaleAnimation = {
  initial: { scale: 0, x: 0, y: 0 },
  open: {
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    scale: 0,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  }
};

const Modal = ({ modal, projects }) => {
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const { active, index } = modal;

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3'
    });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3'
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3'
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3'
    });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  }, []);

  return (
    <div
      className='modal-content'
      // variants={scaleAnimation}
      // initial={'initial'}
      // animate={active ? 'open' : 'closed'}
    >
      <div className='modal-slider' style={{ top: index * -100 + '%' }}>
        {projects.map((project, index) => (
          <div className='modal' key={index}>
            <img src={project.image} alt={project.title} />
            {/* <motion.div className='cursor' ref={cursor}></motion.div>
          <motion.div className='cursor-label' ref={cursorLabel}>
          View
         </motion.div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
