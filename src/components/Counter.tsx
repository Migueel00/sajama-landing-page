import { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <button
        onClick={() => setCount(c => c - 1)}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
      >
        -
      </button>
      <span className="text-2xl font-mono font-semibold w-12 text-center">{count}</span>
      <button
        onClick={() => setCount(c => c + 1)}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
      >
        +
      </button>
    </div>
  );
}
