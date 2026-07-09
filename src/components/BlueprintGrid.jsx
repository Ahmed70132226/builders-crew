import { useEffect, useRef } from 'react';

export default function BlueprintGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Custom technical diagrams/circles
    const circles = [
      { x: 0.15, y: 0.25, r: 80, speed: 0.05 },
      { x: 0.85, y: 0.45, r: 120, speed: -0.03 },
      { x: 0.5, y: 0.75, r: 100, speed: 0.04 },
    ];

    let angle = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;

      // Draw grid coordinates/markers
      ctx.strokeStyle = 'rgba(200, 155, 60, 0.04)';
      ctx.fillStyle = 'rgba(200, 155, 60, 0.2)';
      ctx.font = '9px monospace';

      // Horizontal lines and ruler marks
      for (let y = 0; y < height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        ctx.fillText(`Y: ${y}px`, 15, y - 5);
      }

      // Vertical lines and ruler marks
      for (let x = 0; x < width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        ctx.fillText(`X: ${x}px`, x + 5, 20);
      }

      // Draw mechanical/drafting circles with markers
      angle += 0.005;
      circles.forEach((c) => {
        const cx = c.x * width;
        const cy = c.y * height;
        
        ctx.strokeStyle = 'rgba(200, 155, 60, 0.03)';
        ctx.beginPath();
        ctx.arc(cx, cy, c.r, 0, Math.PI * 2);
        ctx.stroke();

        // Draw crosshair axes
        ctx.beginPath();
        ctx.moveTo(cx - c.r - 20, cy);
        ctx.lineTo(cx + c.r + 20, cy);
        ctx.moveTo(cx, cy - c.r - 20);
        ctx.lineTo(cx, cy + c.r + 20);
        ctx.stroke();

        // Moving coordinate lines
        ctx.strokeStyle = 'rgba(200, 155, 60, 0.08)';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle * c.speed * 200) * c.r,
          cy + Math.sin(angle * c.speed * 200) * c.r
        );
        ctx.stroke();
      });

      // Frame loop
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
}
