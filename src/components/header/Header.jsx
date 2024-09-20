import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { heroImg } from '../../utils';
import { GlobeIcon, Location } from '../common/Icon';
import './header.scss';

const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const firstP = useRef(null);
  const secondP = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!slider.current) {
      console.warn('Slider element not found!');
      return;
    }

    const animationId = requestAnimationFrame(animation);

    const scrollTriggerInstance = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.05,
        onUpdate: (e) => (direction = e.direction * -1)
      },
      x: '-=300px'
    });

    function animation() {
      if (!firstP.current || !secondP.current) {
        return;
      }
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstP.current, { xPercent: xPercent });
      gsap.set(secondP.current, { xPercent: xPercent });
      xPercent += 0.05 * direction;
      requestAnimationFrame(animation);
    }

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      scrollTriggerInstance.scrollTrigger.kill();
      gsap.killTweensOf([slider.current, firstP.current, secondP.current]);
    };
  }, []);

  return (
    <div className='section home-header' ref={ref}>
      {/* personal image */}
      <motion.div
        className='overlay personal-image no-select once-in'
        style={{ y: backgroundY }}
      >
        <img src={heroImg} alt='personal-image' />
      </motion.div>
      <div className='cv-container'>
        <a
          className='cv-button'
          href='/resume.pdf'
          rel='noopener noreferrer'
          target='_blank'
        >
          CV
        </a>
      </div>
      {/* hanger */}
      <div className='overlay get-height once-in once-in-secondary'>
        <div className='hanger'>
          <p>
            <span>Located</span>
            <span>in</span>
            <span>Serbia</span>
          </p>
          <Location />
          <div className='digital-ball'>
            <div className='overlay'></div>
            <div className='globe'>
              <GlobeIcon />
            </div>
          </div>
        </div>
      </div>

      {/* title  */}
      <div className='wrapper'>
        <div className='text-container'>
          <div className='row-content'>
            <div className='flexCol'>
              <div className='headerAboveH4'>
                <div className='arrow'>
                  <FaArrowRight />
                </div>
              </div>
              {/* <h1>Hi, my name is</h1> */}
              <h1>Andrija Mićunović</h1>
              <span>Full Stack Developer</span>
              <h3>I build things for the web.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* big name animation */}
      <div className='big-name'>
        <div className='name-h1' ref={slider}>
          <h1 ref={firstP}>Andrija Mićunović — Andrija Mićunović —</h1>
          <h1 ref={secondP}>Andrija Mićunović — Andrija Mićunović —</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
