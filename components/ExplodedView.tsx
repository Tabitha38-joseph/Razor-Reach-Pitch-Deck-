import React from 'react';

export const ExplodedView: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl border border-slate-700 p-8 shadow-2xl overflow-hidden relative">
      <div className="absolute top-4 right-4 text-xs font-mono text-blue-400 border border-blue-400 px-2 py-1 rounded opacity-50">
        FIG 1.0 - EXPLODED ASSEMBLY
      </div>
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px]">
        <svg viewBox="0 0 400 600" className="w-full max-w-md drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#60a5fa" />
            </marker>
          </defs>

          {/* ----- COMPONENTS ----- */}

          {/* 1. BUTTON */}
          <g transform="translate(200, 50)">
            <rect x="-30" y="0" width="60" height="20" rx="5" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
            <rect x="-10" y="20" width="20" height="30" fill="#334155" stroke="#60a5fa" strokeWidth="1" />
            {/* Label Line */}
            <path d="M 40 10 L 100 10" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
            <text x="105" y="14" fill="#94a3b8" fontSize="10" fontFamily="monospace">PUSH BUTTON (PETG/Metal Shaft)</text>
          </g>

          {/* 2. SPRING */}
          <g transform="translate(200, 110)">
            <path d="M -15 0 L 15 5 L -15 10 L 15 15 L -15 20 L 15 25 L -15 30 L 0 35" fill="none" stroke="#f472b6" strokeWidth="2" />
            {/* Label Line */}
            <path d="M 20 15 L 100 15" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
            <text x="105" y="19" fill="#94a3b8" fontSize="10" fontFamily="monospace">SS SPRING (Marine Grade 8-12lb)</text>
          </g>

          {/* 3. HOUSING */}
          <g transform="translate(200, 160)">
            <rect x="-50" y="0" width="100" height="80" rx="4" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
            <rect x="-40" y="10" width="80" height="60" rx="2" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            {/* Label Line */}
            <path d="M -55 40 L -110 40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
            <text x="-190" y="44" fill="#94a3b8" fontSize="10" fontFamily="monospace">MAIN HOUSING (Sealed PETG)</text>
          </g>

          {/* 4. JAWS (Left & Right) */}
          <g transform="translate(200, 260)">
             {/* Left Jaw */}
             <path d="M -60 0 L -20 0 L -20 80 L -60 60 Z" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
             {/* Right Jaw */}
             <path d="M 60 0 L 20 0 L 20 80 L 60 60 Z" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
             
             {/* Pivot Pins */}
             <circle cx="-40" cy="10" r="3" fill="#cbd5e1" />
             <circle cx="40" cy="10" r="3" fill="#cbd5e1" />

             {/* Label Line */}
             <path d="M 65 30 L 100 30" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
             <text x="105" y="34" fill="#94a3b8" fontSize="10" fontFamily="monospace">JAW MECHANISM (SS Pins)</text>
          </g>

          {/* 5. GRIP PADS */}
          <g transform="translate(200, 290)">
            <rect x="-18" y="0" width="8" height="40" fill="#ef4444" opacity="0.8" />
            <rect x="10" y="0" width="8" height="40" fill="#ef4444" opacity="0.8" />
            
            {/* Texture Lines */}
            <path d="M -18 10 L -10 10 M -18 20 L -10 20 M -18 30 L -10 30" stroke="black" strokeWidth="0.5" opacity="0.5" />
            <path d="M 10 10 L 18 10 M 10 20 L 18 20 M 10 30 L 18 30" stroke="black" strokeWidth="0.5" opacity="0.5" />

            {/* Label Line */}
            <path d="M -20 20 L -110 20" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
            <text x="-185" y="24" fill="#94a3b8" fontSize="10" fontFamily="monospace">SILICONE PADS (Crosshatch)</text>
          </g>

          {/* 6. POLE CONNECTION */}
          <g transform="translate(200, 400)">
            <rect x="-15" y="0" width="30" height="100" fill="#334155" stroke="#60a5fa" strokeWidth="1" />
            {/* Telescoping Inner */}
            <rect x="-10" y="100" width="20" height="60" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" />
            
            <text x="0" y="180" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">TELESCOPING POLE (18-30")</text>
          </g>

          {/* Vertical Center Line */}
          <path d="M 200 40 L 200 400" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />

        </svg>
      </div>
    </div>
  );
};
