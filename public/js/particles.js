(function () {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  // Theme colors
  const colors = ["#00FFC3", "#FF4B91", "#00E5FF", "#FFB700"]; // teal, pink, blue, gold
  const parts = [];
  const count = Math.floor((w * h) / 45000); // scaled for smoothness

  for (let i = 0; i < count; i++) {
    parts.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  function loop() {
    ctx.clearRect(0, 0, w, h);

    // Draw particles
    for (const p of parts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Connect nearby particles
    for (let i = 0; i < parts.length; i++) {
      for (let j = i + 1; j < parts.length; j++) {
        const a = parts[i], b = parts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 130) {
          ctx.beginPath();
          ctx.strokeStyle = a.color;
          ctx.globalAlpha = 0.15 - d / 130 * 0.15;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.globalAlpha = 1; // reset
        }
      }
    }

    requestAnimationFrame(loop);
  }

  loop();
})();
