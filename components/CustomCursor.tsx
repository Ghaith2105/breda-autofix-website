import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  
  // Use refs for positions to avoid re-renders during animation loop
  const position = useRef({ x: -100, y: -100 });
  const trailerPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop devices with mouse
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;
    
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      
      // Initialize trailer position on first move if it's still off-screen
      if (trailerPosition.current.x === -100) {
          trailerPosition.current = { x: e.clientX, y: e.clientY };
      }
    };
    
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Function to attach listeners to clickable elements
    const addHoverListeners = () => {
        const hoverables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        
        const enter = () => setIsHovering(true);
        const leave = () => setIsHovering(false);

        hoverables.forEach(el => {
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);
        });
        
        // Return cleanup function
        return () => {
             hoverables.forEach(el => {
                el.removeEventListener('mouseenter', enter);
                el.removeEventListener('mouseleave', leave);
            });
        };
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    let cleanupHover = addHoverListeners();
    
    // Watch for DOM changes (like modal opening, content loading) to re-attach listeners
    const observer = new MutationObserver(() => {
        cleanupHover();
        cleanupHover = addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    let animationFrameId: number;
    
    const animate = () => {
      // 1. Main Dot: Instantly follows mouse
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      // 2. Trailer Ring: Smooth LERP movement
      const dx = position.current.x - trailerPosition.current.x;
      const dy = position.current.y - trailerPosition.current.y;
      
      // 0.15 = speed factor (higher = faster catchup)
      trailerPosition.current.x += dx * 0.15;
      trailerPosition.current.y += dy * 0.15;
      
      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${trailerPosition.current.x}px, ${trailerPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        cancelAnimationFrame(animationFrameId);
        cleanupHover();
        observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
            html, body { cursor: none; }
            a, button, input, textarea, select, .cursor-pointer { cursor: none; }
        }
      `}</style>
      
      {/* Main Center Dot - Small and precise, inverse color */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white transition-transform duration-150 ease-out
            ${isClicking ? 'scale-150' : 'scale-100'}
            w-1.5 h-1.5
        `}
      />
      
      {/* Blurred Trailer Circle - Inverse color with blur */}
      <div 
        ref={trailerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full mix-blend-difference bg-white transition-all duration-300 ease-out
            w-12 h-12 blur-[2px]
            ${isClicking ? 'scale-75' : 'scale-100'}
        `}
      />
    </>
  );
};

export default CustomCursor;