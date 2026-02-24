import React, { useRef, useEffect } from 'react';

// BackgroundNetwork component with fixed JSX and top-left animation
const BackgroundNetwork = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const lines = svgRef.current.querySelectorAll('line');
      const dots = svgRef.current.querySelectorAll('circle');
      const text = svgRef.current.querySelector('text');

      const initialOffsetX = -300;
      const initialOffsetY = -300;

      lines.forEach(line => {
        line.style.opacity = '0';
        line.setAttribute('transform', `translate(${initialOffsetX}, ${initialOffsetY})`);
      });
      dots.forEach(dot => {
        dot.style.opacity = '0';
        dot.setAttribute('transform', `translate(${initialOffsetX}, ${initialOffsetY})`);
      });
      if (text) {
        text.style.opacity = '0';
        text.setAttribute('transform', 'translate(0, 0)');
      }

      const animateElements = (elements, delayStep = 50) => {
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.style.transition =
              'opacity 1s ease-out, transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            el.style.opacity = '1';
            el.setAttribute('transform', 'translate(0, 0)');
          }, index * delayStep);
        });
      };

      animateElements([...lines, ...dots], 20);

      if (text) {
        setTimeout(() => {
          text.style.transition = 'opacity 0.8s ease-out';
          text.style.opacity = '0.9';
        }, 2200);
      }
    }
  }, []);

  const createSegment = (startPoint, endPoint, numPoints, maxConnections) => {
    const segmentPoints = [];
    segmentPoints.push(startPoint);

    for (let i = 0; i < numPoints; i++) {
      const t = (i + 1) / (numPoints + 1);
      const x = startPoint.cx + t * (endPoint.cx - startPoint.cx);
      const y = startPoint.cy + t * (endPoint.cy - startPoint.cy);

      segmentPoints.push({
        cx: x + (Math.random() - 0.5) * 10,
        cy: y + (Math.random() - 0.5) * 10,
        r: 1 + Math.random() * 1.5,
      });
    }
    segmentPoints.push(endPoint);

    return segmentPoints;
  };

  const wPoints = [
    { id: 'p1', cx: 0, cy: -100, r: 4 },
    { id: 'p2', cx: 50, cy: 50, r: 4 },
    { id: 'p3', cx: 100, cy: -50, r: 4 },
    { id: 'p4', cx: 150, cy: 50, r: 4 },
    { id: 'p5', cx: 200, cy: -100, r: 4 },
  ];

  const allPoints = [
    ...createSegment(wPoints[0], wPoints[1], 20, 5),
    ...createSegment(wPoints[1], wPoints[2], 20, 5),
    ...createSegment(wPoints[2], wPoints[3], 20, 5),
    ...createSegment(wPoints[3], wPoints[4], 20, 5),
    ...createSegment({ cx: 10, cy: -80 }, { cx: 40, cy: 30 }, 10, 3),
    ...createSegment({ cx: 60, cy: 30 }, { cx: 90, cy: -30 }, 10, 3),
    ...createSegment({ cx: 110, cy: -30 }, { cx: 140, cy: 30 }, 10, 3),
    ...createSegment({ cx: 160, cy: 30 }, { cx: 190, cy: -80 }, 10, 3),
  ];

  const uniquePoints = Array.from(new Set(allPoints.map(p => `${p.cx},${p.cy}`))).map(str => {
    const [cx, cy] = str.split(',').map(Number);
    const original = allPoints.find(p => p.cx === cx && p.cy === cy);
    return original || { cx, cy, r: 2 };
  });

  const lines = [];
  const maxConnectionDistance = 35;

  for (let i = 0; i < uniquePoints.length; i++) {
    for (let j = i + 1; j < uniquePoints.length; j++) {
      const p1 = uniquePoints[i];
      const p2 = uniquePoints[j];
      const dist = Math.sqrt(Math.pow(p1.cx - p2.cx, 2) + Math.pow(p1.cy - p2.cy, 2));

      if (dist < maxConnectionDistance) {
        lines.push({
          x1: p1.cx,
          y1: p1.cy,
          x2: p2.cx,
          y2: p2.cy,
          opacity: 0.6 - (dist / maxConnectionDistance) * 0.4,
        });
      }
    }
  }

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 z-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="networkGradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(960 540) rotate(90) scale(1080 1920)"
        >
          <stop stopColor="#2D3748" />
          <stop offset="1" stopColor="#1A202C" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowText">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#networkGradient)" />

      {/* W group */}
      <g
        stroke="#E0F2F7"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        transform="translate(610, 330) scale(1)"
      >
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#E0F2F7"
            strokeWidth="0.5"
            opacity={line.opacity}
          />
        ))}
        {uniquePoints.map((point, i) => (
          <circle
            key={`dot-${i}`}
            cx={point.cx}
            cy={point.cy}
            r={point.r || 2}
            fill="#C8F0FF"
            filter="url(#glow)"
            opacity={0.8 + Math.random() * 0.2}
          />
        ))}
      </g>

      {/* Text group */}
      <g transform="translate(800, 330)">
        <text
          x="0"
          y="0"
          fontFamily="Arial, sans-serif"
          fontSize="68"
          fill="#C8F2FF"
          textAnchor="start"
          filter="url(#glowText)"
          opacity="0.9"
        >
          eblanceHub.Com
        </text>
      </g>
    </svg>
  );
};

// ParticleNetwork with 40% lower density
const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const maxParticles = 60; // reduced 40%

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      particles.push({
        x: -20,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.3 + 0.1,
        vy: Math.random() * 0.5 - 0.25,
        radius: Math.random() * 1.5 + 0.5,
      });
    };

    resizeCanvas();
    for (let i = 0; i < maxParticles; i++) {
      createParticle();
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x > canvas.width + 20) {
          p1.x = -20;
          p1.y = Math.random() * canvas.height;
        } else if (p1.x < -20) {
          p1.x = canvas.width + 20;
        }

        if (p1.y < 0 || p1.y > canvas.height) {
          p1.vy *= -0.8;
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (dist < 72) {
            // reduced from 120 → 72
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-1 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

// Combined component
const BackgroundNetworkWithAnimation = () => {
  return (
    <>
      <BackgroundNetwork />
      <ParticleNetwork />
    </>
  );
};

export default BackgroundNetworkWithAnimation;
