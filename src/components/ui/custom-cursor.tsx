import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
      style={{
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isClicking || isScrolling ? 1.5 : 1})`,
      }}
    >
      {/* Among Us Character Cursor */}
      <div className={`w-full h-full transition-all duration-150 ${isClicking ? 'animate-pulse' : ''} ${isScrolling ? 'animate-spin' : ''}`}>
        <svg viewBox="0 0 32 32" className="w-full h-full">
          {/* Among Us Character Body */}
          <ellipse cx="16" cy="20" rx="10" ry="8" fill="#ff4757" stroke="#2f3542" strokeWidth="1"/>
          {/* Helmet/Visor */}
          <ellipse cx="16" cy="12" rx="8" ry="6" fill="#ff4757" stroke="#2f3542" strokeWidth="1"/>
          {/* Visor Glass */}
          <ellipse cx="16" cy="12" rx="6" ry="4" fill="#70a1ff" opacity="0.8"/>
          {/* Legs */}
          <rect x="11" y="26" width="3" height="4" fill="#ff4757" stroke="#2f3542" strokeWidth="0.5"/>
          <rect x="18" y="26" width="3" height="4" fill="#ff4757" stroke="#2f3542" strokeWidth="0.5"/>
          {/* Highlight */}
          <ellipse cx="14" cy="10" rx="2" ry="1.5" fill="#ffffff" opacity="0.6"/>
        </svg>
      </div>
    </div>
  );
};