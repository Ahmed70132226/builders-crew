import { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-[#C89B3C]/10"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full Background) */}
      <img 
        src={afterImage} 
        alt="After transformation" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute right-4 bottom-4 bg-[#C89B3C] text-black text-xs font-semibold px-3 py-1.5 uppercase tracking-widest rounded shadow-lg pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before transformation" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
        <div className="absolute left-4 bottom-4 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-widest rounded shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Interactive Divider Bar */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#C89B3C] cursor-ew-resize shadow-[0_0_10px_rgba(200,155,60,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border-2 border-[#C89B3C] rounded-full flex items-center justify-between px-2.5 shadow-xl">
          <span className="text-[#C89B3C] font-extrabold text-xs">&lt;</span>
          <span className="text-[#C89B3C] font-extrabold text-xs">&gt;</span>
        </div>
      </div>
    </div>
  );
}
