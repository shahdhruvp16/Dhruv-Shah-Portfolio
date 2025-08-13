import { useEffect, useRef, useState } from 'react';

export default function MazePage() {
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('Ready');
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const mazeRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function initMaze() {
      let size = Math.min(window.innerWidth * 0.9, 500);
      canvas.width = size;
      canvas.height = size;

      const cols = 15;
      const rows = cols;
      const cellSize = Math.floor(size / cols);

      function generateMaze() {
        const grid = [];
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            grid.push({ x, y, walls: [true, true, true, true], visited: false });
          }
        }
        function index(x, y) {
          if (x < 0 || y < 0 || x >= cols || y >= rows) return -1;
          return x + y * cols;
        }

        const stack = [];
        let current = grid[0];
        current.visited = true;
        let visitedCount = 1;

        while (visitedCount < grid.length) {
          const { x, y } = current;
          const neighbors = [];
          const top = index(x, y - 1);
          const right = index(x + 1, y);
          const bottom = index(x, y + 1);
          const left = index(x - 1, y);

          if (top !== -1 && !grid[top].visited) neighbors.push(grid[top]);
          if (right !== -1 && !grid[right].visited) neighbors.push(grid[right]);
          if (bottom !== -1 && !grid[bottom].visited) neighbors.push(grid[bottom]);
          if (left !== -1 && !grid[left].visited) neighbors.push(grid[left]);

          if (neighbors.length > 0) {
            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            if (next.x === x && next.y === y - 1) {
              current.walls[0] = false;
              next.walls[2] = false;
            }
            if (next.x === x + 1 && next.y === y) {
              current.walls[1] = false;
              next.walls[3] = false;
            }
            if (next.x === x && next.y === y + 1) {
              current.walls[2] = false;
              next.walls[0] = false;
            }
            if (next.x === x - 1 && next.y === y) {
              current.walls[3] = false;
              next.walls[1] = false;
            }
            stack.push(current);
            current = next;
            current.visited = true;
            visitedCount++;
          } else {
            current = stack.pop();
          }
        }
        return { grid, cols, rows, cellSize };
      }

      function drawMaze(ms) {
        ctx.fillStyle = '#0a0f1a';
        ctx.fillRect(0, 0, size, size);
        ctx.strokeStyle = '#00ffe0';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#00ffe0';
        ctx.lineWidth = 2;

        ms.grid.forEach(cell => {
          const x = cell.x * cellSize;
          const y = cell.y * cellSize;
          if (cell.walls[0]) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + cellSize, y); ctx.stroke(); }
          if (cell.walls[1]) { ctx.beginPath(); ctx.moveTo(x + cellSize, y); ctx.lineTo(x + cellSize, y + cellSize); ctx.stroke(); }
          if (cell.walls[2]) { ctx.beginPath(); ctx.moveTo(x + cellSize, y + cellSize); ctx.lineTo(x, y + cellSize); ctx.stroke(); }
          if (cell.walls[3]) { ctx.beginPath(); ctx.moveTo(x, y + cellSize); ctx.lineTo(x, y); ctx.stroke(); }
        });
      }

      function drawPlayer(p) {
        drawMaze(mazeRef.current);
        ctx.fillStyle = '#00ffb3';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ffb3';
        ctx.beginPath();
        ctx.arc(
          p.x * cellSize + cellSize / 2,
          p.y * cellSize + cellSize / 2,
          cellSize / 3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.fillStyle = '#ff4b4b';
        ctx.shadowColor = '#ff4b4b';
        ctx.shadowBlur = 8;
        ctx.fillRect(
          mazeRef.current.goal.x * cellSize + cellSize * 0.25,
          mazeRef.current.goal.y * cellSize + cellSize * 0.25,
          cellSize * 0.5,
          cellSize * 0.5
        );
      }

      function canMove(from, toX, toY) {
        const { grid, cols } = mazeRef.current;
        if (toX < 0 || toY < 0 || toX >= cols || toY >= cols) return false;
        const idx = from.x + from.y * cols;
        const cell = grid[idx];
        if (toX === from.x && toY === from.y - 1 && !cell.walls[0]) return true;
        if (toX === from.x + 1 && toY === from.y && !cell.walls[1]) return true;
        if (toX === from.x && toY === from.y + 1 && !cell.walls[2]) return true;
        if (toX === from.x - 1 && toY === from.y && !cell.walls[3]) return true;
        return false;
      }

      function handleDrag(e) {
        if (!isDragging.current) return;
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);
        const p = mazeRef.current.player;
        if (canMove(p, x, y)) {
          mazeRef.current.player = { x, y };
          drawPlayer(mazeRef.current.player);
          if (x === mazeRef.current.goal.x && y === mazeRef.current.goal.y) {
            setStatus('Completed');
            clearInterval(timerRef.current);
          }
        }
      }

      function startMaze() {
        const ms = generateMaze();
        mazeRef.current = { ...ms, player: { x: 0, y: 0 }, goal: { x: ms.cols - 1, y: ms.rows - 1 } };
        drawPlayer(mazeRef.current.player);
        setStatus('Playing');
        setTime(0);
        timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
      }

      canvas.addEventListener('mousedown', () => (isDragging.current = true));
      canvas.addEventListener('mouseup', () => (isDragging.current = false));
      canvas.addEventListener('mousemove', handleDrag);

      startMaze();

      return () => {
        clearInterval(timerRef.current);
        canvas.removeEventListener('mousedown', () => (isDragging.current = true));
        canvas.removeEventListener('mouseup', () => (isDragging.current = false));
        canvas.removeEventListener('mousemove', handleDrag);
      };
    }

    initMaze();

    window.addEventListener('resize', initMaze);
    return () => window.removeEventListener('resize', initMaze);
  }, []);

  return (
    <div className="text-white text-center pt-10 px-4">
      <h1 className="text-xl sm:text-2xl font-bold">
        🌀 The Maze Challenge — Drag Your Way Out!
      </h1>
      <div className="mt-3 text-sm sm:text-base">
        Status: <span className="font-semibold">{status}</span> | Timer: {time}s
      </div>
      <div className="mt-4 flex justify-center">
        <canvas
          ref={canvasRef}
          style={{
            borderRadius: 12,
            cursor: 'grab',
            background: 'rgba(255,255,255,0.05)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            maxWidth: '100%',
            height: 'auto'
          }}
        ></canvas>
      </div>
    </div>
  );
}
