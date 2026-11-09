import React, { useEffect, useRef } from 'react';

export default function CyberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Node particle system
    let particles = [];
    let staticStars = [];

    const colors = ['#22d3ee', '#a855f7', '#d946ef', '#38bdf8'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.glow = Math.random() * 8 + 4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from boundaries
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Subtle push away
            this.x -= forceDirectionX * force * 2.5;
            this.y -= forceDirectionY * force * 2.5;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.3;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.alphaChange = (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1);
      }

      update() {
        this.alpha += this.alphaChange;
        if (this.alpha <= 0.1 || this.alpha >= 0.9) {
          this.alphaChange = -this.alphaChange;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, this.alpha)})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    function initParticles() {
      particles = [];
      staticStars = [];
      // Adjust density for device screen size
      const count = Math.min(Math.floor((width * height) / 16000), 85);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
      for (let i = 0; i < 110; i++) {
        staticStars.push(new Star());
      }
    }

    initParticles();

    // Connecting lines between close nodes
    function connectLines() {
      const maxDistance = 120;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            // Gradient connection line between node colors
            const gradient = ctx.createLinearGradient(
              particles[a].x,
              particles[a].y,
              particles[b].x,
              particles[b].y
            );
            gradient.addColorStop(0, particles[a].color);
            gradient.addColorStop(1, particles[b].color);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.85;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Render twinkling stars
      for (let i = 0; i < staticStars.length; i++) {
        staticStars[i].update();
        staticStars[i].draw();
      }

      // Render connected lines
      connectLines();

      // Render particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

