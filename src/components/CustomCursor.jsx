import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Custom cursor only for desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.15 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Dynamic classes based on hover targets
    const addHoverClass = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        document.body.classList.add('cursor-hovering');
      } else if (
        target.tagName === 'IMG' ||
        target.closest('.hover-zoom-container')
      ) {
        document.body.classList.add('cursor-hovering-image');
      }
    };

    const removeHoverClass = () => {
      document.body.classList.remove('cursor-hovering', 'cursor-hovering-image');
    };

    document.addEventListener('mouseover', addHoverClass);
    document.addEventListener('mouseout', removeHoverClass);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', addHoverClass);
      document.removeEventListener('mouseout', removeHoverClass);
      document.body.classList.remove('cursor-hovering', 'cursor-hovering-image');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
}
