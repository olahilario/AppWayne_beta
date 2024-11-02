import React, { useEffect, useRef } from 'react';
import styles from './FireFlies.module.css'

const FireFlies = () => {
  const canvasRef = useRef(null);
  const cRef = useRef(null);
  const f = useRef([]);

  const init = (canvas) => {
    const c = canvas.getContext('2d');
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    c.fillStyle = 'rgba(30,30,30,1)';
    c.fillRect(0, 0, w, h);
    return c;
  };

  class Firefly {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.s = Math.random() * 2;
      this.ang = Math.random() * 2 * Math.PI;
      const speedFactor = 0.5
      this.v = (this.s * this.s / 4)*speedFactor
    }

    move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
    }

    show(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      c.fillStyle = "#fddba3";
      c.fill();
    }
  }

  const draw = () => {
    if (f.current.length < 100) {
      for (let j = 0; j < 10; j++) {
        f.current.push(new Firefly());
      }
    }

    for (let i = 0; i < f.current.length; i++) {
      f.current[i].move();
      f.current[i].show(cRef.current);
      if (f.current[i].x < 0 || f.current[i].x > window.innerWidth || f.current[i].y < 0 || f.current[i].y > window.innerHeight) {
        f.current.splice(i, 1);
      }
    }
  };

  const loop = () => {
    if (cRef.current) {
      cRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
      draw();
      requestAnimationFrame(loop);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    cRef.current = init(canvas);
    loop();

    const handleResize = () => {
      cRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      loop();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.firefly} />;
};

export default FireFlies;