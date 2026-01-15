import React, { useState } from 'react';
import { ArrowDown, GripHorizontal, MousePointerClick, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

export const ClampDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRazor, setHasRazor] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  const toggleClamp = () => setIsOpen(!isOpen);
  const toggleRazor = () => {
    if (!hasRazor) {
        setIsOpen(true);
        setTimeout(() => setHasRazor(true), 200);
    } else {
        setHasRazor(false);
    }
  };

  const toggleExtension = () => setIsExtended(!isExtended);

  // Constants for positioning (using Rem-like values for relative consistency or Tailwind classes)
  // Base height of pole is h-48 (12rem). Extended will be h-[26rem].
  // Delta is ~14rem.

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl max-w-md mx-auto w-full">
      <div className="flex justify-between w-full items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <GripHorizontal className="text-blue-400" />
            Interactive Mechanism
        </h3>
      </div>

      {/* Mechanism Visualization - Increased height to accommodate extension */}
      <div className="relative w-72 h-[550px] bg-slate-900 rounded-xl border border-slate-600 overflow-hidden shadow-inner transition-all duration-500">
        
        {/* Grid Background for technical feel */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
        </div>

        {/* Height Indicators (Ruler) */}
        <div className="absolute left-4 top-8 bottom-0 w-8 pointer-events-none">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700"></div>

            {/* Dynamic Top Indicator */}
            <div 
                className="absolute left-0 flex items-center gap-2 transition-all duration-1000 ease-in-out"
                style={{ bottom: isExtended ? '26rem' : '12rem' }}
            >
                <div className="w-2 h-px bg-slate-400"></div>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                    {isExtended ? '30"' : '18"'}
                </span>
            </div>

            {/* Bottom Indicator */}
            <div className="absolute bottom-0 left-0 flex items-center gap-2">
                 <div className="w-2 h-px bg-slate-400"></div>
                 <span className="text-xs font-mono text-slate-400">0mm</span>
            </div>
        </div>


        {/* The Pole (Bar) */}
        <div 
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 bg-slate-700 rounded-t-sm z-10 flex flex-col items-center transition-all duration-1000 ease-in-out`}
            style={{ height: isExtended ? '26rem' : '12rem' }}
        >
            {/* Telescoping detail - Inner Segment */}
            <div className="w-6 h-full bg-slate-600 border-l border-r border-slate-800 relative overflow-hidden">
                {/* Visual texture for telescoping */}
                <div className={`absolute w-full h-px bg-slate-900 shadow-sm transition-all duration-1000 ${isExtended ? 'top-[45%]' : 'top-[5%]'}`}></div>
                <div className={`absolute w-full h-full bg-slate-500/10 transition-all duration-1000 ${isExtended ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </div>

        {/* Head / Clamp Housing */}
        <div 
            className={`absolute left-1/2 -translate-x-1/2 w-32 h-32 bg-slate-800 rounded-2xl border-2 border-slate-600 z-10 shadow-xl flex items-center justify-center transition-all duration-1000 ease-in-out`}
            style={{ bottom: isExtended ? '23rem' : '9rem' }}
        >
            {/* Housing detail */}
            <div className="absolute top-2 text-[10px] text-slate-500 font-mono tracking-widest">CLAMP-LOCK™</div>
            
            {/* Center Channel Background */}
            <div className="w-12 h-full bg-slate-900/50 border-x border-slate-700/50"></div>
        </div>

        {/* Quick Release Button (Attached to Housing) */}
        <button 
            onClick={toggleClamp}
            className={`absolute left-1/2 ml-10 w-6 h-6 rounded-full z-40 transition-all duration-1000 shadow-md border border-slate-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95`}
            style={{ 
                bottom: isExtended ? '28rem' : '14rem', // Positioned on the upper right face of housing
                backgroundColor: isOpen ? '#2563eb' : '#3b82f6'
            }}
            title="Quick Release Button"
        >
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
        </button>

        {/* Left Jaw */}
        <div 
            className={`absolute right-1/2 w-8 h-20 bg-gradient-to-r from-slate-300 to-slate-400 border-r-4 border-red-500 rounded-l-md transition-all duration-1000 z-30 shadow-md flex items-center justify-end`}
            style={{ 
                bottom: isExtended ? '24rem' : '10rem',
                marginRight: isOpen ? '2.5rem' : '0.75rem' // using rem for consistency
            }}
        >
             <div className="w-1 h-12 bg-slate-400/50 mr-1 rounded-full"></div>
        </div>

        {/* Right Jaw */}
        <div 
            className={`absolute left-1/2 w-8 h-20 bg-gradient-to-l from-slate-300 to-slate-400 border-l-4 border-red-500 rounded-r-md transition-all duration-1000 z-30 shadow-md flex items-center justify-start`}
            style={{ 
                bottom: isExtended ? '24rem' : '10rem',
                marginLeft: isOpen ? '2.5rem' : '0.75rem'
            }}
        >
            <div className="w-1 h-12 bg-slate-400/50 ml-1 rounded-full"></div>
        </div>

        {/* The Razor (User's Razor) */}
        <div 
            className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 flex flex-col items-center ease-in-out`}
            style={{ 
                bottom: hasRazor 
                    ? (isExtended ? '19rem' : '5rem') 
                    : (isExtended ? '40rem' : '26rem'),
                opacity: hasRazor ? 1 : 0
            }}
        >
            {/* Razor Head */}
            <div className="w-20 h-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-md shadow-lg relative flex items-center justify-center mb-[-2px] z-50">
                 <div className="w-16 h-1 bg-white/50 rounded-full mb-1"></div>
                 <div className="w-16 h-1 bg-white/50 rounded-full mb-1"></div>
                 <div className="w-16 h-1 bg-white/50 rounded-full"></div>
            </div>
            
            {/* Razor Neck */}
            <div className="w-6 h-4 bg-gray-300 z-40"></div>

            {/* Razor Handle */}
            <div className="w-5 h-48 bg-orange-500 rounded-b-full shadow-md border-x border-orange-600 flex flex-col items-center justify-center relative">
                <span className="text-[10px] text-black/50 font-bold -rotate-90 whitespace-nowrap tracking-wider">YOUR BRAND</span>
                {/* Grip texture */}
                <div className="absolute bottom-4 w-full h-8 bg-black/10 flex flex-col gap-1 p-1">
                    <div className="w-full h-0.5 bg-black/20"></div>
                    <div className="w-full h-0.5 bg-black/20"></div>
                    <div className="w-full h-0.5 bg-black/20"></div>
                </div>
            </div>
        </div>

      </div>

      <div className="flex gap-4 mt-8 w-full justify-center">
        <button 
            onClick={toggleClamp}
            className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg border border-slate-600"
        >
            <MousePointerClick size={18} />
            {isOpen ? 'Release' : 'Open'}
        </button>
        
        <button 
            onClick={toggleRazor}
            className={`flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg border ${
                hasRazor 
                ? 'bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30' 
                : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500'
            }`}
        >
            {hasRazor ? (
                <>
                    <RotateCcw size={18} /> Eject
                </>
            ) : (
                <>
                    <ArrowDown size={18} /> Insert
                </>
            )}
        </button>

        <button 
            onClick={toggleExtension}
            className={`flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg border bg-slate-700 hover:bg-slate-600 text-white border-slate-600`}
        >
            {isExtended ? (
                <>
                    <Minimize2 size={18} /> Retract
                </>
            ) : (
                <>
                    <Maximize2 size={18} /> Extend
                </>
            )}
        </button>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-700/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Fits 8-20mm handles
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-700/50">
            <Maximize2 size={12} />
            18-30" Extension
        </div>
      </div>
    </div>
  );
};