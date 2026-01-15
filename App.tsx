import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Scissors, 
  ShieldCheck, 
  TrendingUp, 
  Maximize2, 
  DollarSign, 
  Zap,
  Menu,
  X,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Unlock,
  ShoppingCart,
  Repeat,
  Layers,
  Hammer,
  Feather,
  Droplets,
  RotateCcw,
  Target,
  Users,
  Baby,
  Activity,
  Rocket,
  Globe,
  BarChart3,
  Timer,
  Sparkles
} from 'lucide-react';
import { SavingsChart } from './components/SavingsChart';
import { ClampDemo } from './components/ClampDemo';
import { ComparisonData } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [refillCost, setRefillCost] = useState(30); // Updated to match Bakblade refill pricing
  const [frequency, setFrequency] = useState(2); // Shaves per month

  // Derived calculations for the chart
  const calculateData = (): ComparisonData[] => {
    const data: ComparisonData[] = [];
    // A $30 pack typically contains about 4 full head replacements (approx $7.50/head)
    const competitorBladeCost = refillCost / 4; 
    const universalBladeCost = 2.50; // Standard store blade cost
    const deviceCost = 24.99;
    const competitorDeviceCost = 74.95; // Updated to match Bakblade 3.0 pricing

    let cumulativeProp = competitorDeviceCost;
    let cumulativeUni = deviceCost;

    for (let i = 1; i <= 5; i++) {
      const yearlyShaves = frequency * 12;
      // Assume 1 blade lasts 3 shaves
      const bladesNeeded = Math.ceil(yearlyShaves / 3);
      
      cumulativeProp += bladesNeeded * competitorBladeCost;
      cumulativeUni += bladesNeeded * universalBladeCost;

      data.push({
        year: `Year ${i}`,
        proprietaryCost: Math.round(cumulativeProp),
        universalCost: Math.round(cumulativeUni),
      });
    }
    return data;
  };

  const currentData = calculateData();
  const year5Savings = currentData[4].proprietaryCost - currentData[4].universalCost;

  const navItems = [
    { id: 'hero', label: 'Start' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'specs', label: 'Product Specs' },
    { id: 'market', label: 'Market Gap' },
    { id: 'business', label: 'Invest' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Maximize2 size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">RazorReach<span className="text-blue-500">.</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-slate-800' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 p-2">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        
        {/* HERO SECTION - REDESIGNED */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 -z-10"></div>
          
          <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
            {/* Headlines */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight text-white">
                Use <span className="text-blue-500">YOUR</span> Razor. <br />
                Forever.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                The first universal razor holder that extends to reach your back, legs, and hard-to-reach areas. Stop buying expensive built-in razor heads.
            </p>

            {/* Central Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
                <button 
                  onClick={() => scrollToSection('solution')}
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-3 transform hover:scale-105"
                >
                  See The Mechanism <ChevronRight size={24}/>
                </button>
                <button 
                  onClick={() => scrollToSection('problem')}
                  className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-lg rounded-xl border border-slate-700 transition-all hover:bg-slate-750 transform hover:scale-105"
                >
                  The "Built-In" Trap
                </button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-12 mt-12 border-t border-slate-800/50">
                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-6">Compatible with your favorite brands</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 font-bold text-2xl opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  <span>Gillette</span>
                  <span>Harry's</span>
                  <span>Schick</span>
                  <span>Dollar Shave Club</span>
                </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="problem" className="py-24 bg-slate-950 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The "Built-In" Trap</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Competitors aren't just selling you a tool. They are trapping you in a subscription by welding the razor to the handle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Competitor Card */}
              <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertTriangle size={100} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4">Competitors</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-3 text-slate-300">
                        <Lock className="text-red-500 shrink-0 mt-1" /> 
                        <div>
                            <span className="block font-bold text-white">Locked In</span>
                            <span className="text-sm text-slate-400">Up to $74.95 for a plastic handle that only fits THEIR blades.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                        <DollarSign className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <span className="block font-bold text-white">Expensive Refills</span>
                            <span className="text-sm text-slate-400">$30+ per refill pack. The real cost is hidden in the blades.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                        <X className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <span className="block font-bold text-white">Wasteful</span>
                            <span className="text-sm text-slate-400">Throw away massive proprietary plastic cartridges.</span>
                        </div>
                    </li>
                </ul>
              </div>

              {/* Solution Card */}
              <div className="bg-emerald-900/10 border border-emerald-500/20 p-8 rounded-2xl col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck size={100} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">The Forever Tool (RazorReach)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3 text-slate-300">
                            <Unlock className="text-emerald-500 shrink-0 mt-1" />
                            <div>
                                <span className="block font-bold text-white">One-Time Purchase</span>
                                <span className="text-sm text-slate-400">Buy the tool once ($25). It lasts a lifetime. No subscriptions.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
                            <div>
                                <span className="block font-bold text-white">Universal Mount</span>
                                <span className="text-sm text-slate-400">Securely clamps onto ANY razor handle you own.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
                            <div>
                                <span className="block font-bold text-white">Zero Lock-In</span>
                                <span className="text-sm text-slate-400">Switch razor brands whenever you want.</span>
                            </div>
                        </li>
                    </ul>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-emerald-500/10 flex flex-col justify-center">
                        <p className="text-sm text-emerald-200 mb-2 font-semibold tracking-wider uppercase">The Difference</p>
                        <p className="text-xl text-white font-medium mb-4">
                            "You don't buy a new hammer every time you need a nail. Why buy a new handle every time you need a blade?"
                        </p>
                        <p className="text-slate-400 text-sm italic">
                            — Use the razor you already have in your bathroom.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION & DEMO */}
        <section id="solution" className="py-24 bg-slate-900 px-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <ClampDemo />
                </div>
                <div className="order-1 md:order-2 space-y-8">
                    <h2 className="text-4xl font-bold text-white">The Last Handle You'll Ever Buy</h2>
                    <p className="text-lg text-slate-400">
                        We engineered a permanent solution. The clamp is separated from the razor, meaning the part you buy from us never touches your skin and never dulls.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                <Maximize2 />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Universal Grip System</h4>
                                <p className="text-slate-400">Holds handles 8mm-20mm thick. Works with Gillette, Harry's, and disposables.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                <Zap />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Instant Swap</h4>
                                <p className="text-slate-400">Push the button, drop in your razor, release. Ready in 2 seconds.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                                <Scissors />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Telescoping Pole</h4>
                                <p className="text-slate-400">Extends 18-30 inches to easily reach your back, legs, and other hard-to-reach areas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* TECH SPECS SECTION - REDESIGNED */}
        <section id="specs" className="py-24 bg-slate-950 px-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Product Specifications</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Detailed material breakdown and engineering specifications for manufacturing.
              </p>
            </div>

            {/* Universal Core Details */}
            <div className="mb-16">
                <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-2">
                    <Layers size={24} /> Universal Clamp Assembly (Shared Core)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-blue-400 font-bold mb-1 uppercase">Component 1</div>
                        <h4 className="font-bold text-white mb-2">Button</h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Material: PETG Plastic</li>
                            <li>• Rod: Metal Push-rod</li>
                            <li>• Action: One-handed, tool-free</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-blue-400 font-bold mb-1 uppercase">Component 2</div>
                        <h4 className="font-bold text-white mb-2">Spring</h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Marine-Grade SS</li>
                            <li>• Force: 8-12 lbs</li>
                            <li>• Durability: 10,000+ Cycles</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-blue-400 font-bold mb-1 uppercase">Component 3</div>
                        <h4 className="font-bold text-white mb-2">Housing</h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Sealed PETG Plastic</li>
                            <li>• Water-Resistant</li>
                            <li>• Threaded Connection</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-blue-400 font-bold mb-1 uppercase">Component 4</div>
                        <h4 className="font-bold text-white mb-2">Jaws</h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Pins: Stainless Steel</li>
                            <li>• Range: 8-20mm</li>
                            <li>• Auto-close (Spring)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-blue-400 font-bold mb-1 uppercase">Component 5</div>
                        <h4 className="font-bold text-white mb-2">Pads</h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Medical Silicone</li>
                            <li>• Texture: Crosshatch</li>
                            <li>• Non-slip & Non-marking</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Versions Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Budget */}
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 relative">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-slate-800 rounded-bl-xl rounded-tr-xl text-xs font-bold text-slate-400">BUDGET BUILD</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Standard Poly</h3>
                    <div className="text-3xl font-bold text-slate-400 mb-6">$19.99</div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Feather className="text-slate-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-slate-200">PETG Plastic Pole</span>
                                <span className="text-sm text-slate-500">Lightweight, water-resistant.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Maximize2 className="text-slate-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-slate-200">18-30" Telescoping</span>
                                <span className="text-sm text-slate-500">Standard adjustable extension.</span>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <Users className="text-slate-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-slate-200">Consumer Market</span>
                                <span className="text-sm text-slate-500">Budget-conscious back shaving.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Premium */}
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-900/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600 rounded-bl-xl text-xs font-bold text-white">PREMIUM BUILD</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pro Metal</h3>
                    <div className="text-3xl font-bold text-blue-400 mb-6">$34.99</div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Hammer className="text-blue-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-white">Anodized Aluminum Pole</span>
                                <span className="text-sm text-slate-400">Corrosion-resistant, premium feel.</span>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <Maximize2 className="text-blue-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-white">18-30" Telescoping</span>
                                <span className="text-sm text-slate-400">Smooth glide mechanism.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Activity className="text-blue-500 mt-1" size={20} />
                            <div>
                                <span className="block font-bold text-white">Medical / Accessibility</span>
                                <span className="text-sm text-slate-400">Designed for disability & limited mobility.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Markets */}
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Target size={24} className="text-blue-400"/> Key Target Markets
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 font-bold text-white"><Users className="text-blue-500" size={18} /> Back Shaving</div>
                        <p className="text-sm text-slate-400">Men 18-55 tired of expensive proprietary blade replacements. Solves the "locked-in" cost problem.</p>
                    </div>
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 font-bold text-white"><Baby className="text-pink-400" size={18} /> Pregnancy</div>
                        <p className="text-sm text-slate-400">Third trimester women who cannot reach legs/feet safely. Provides extended reach with safe grip.</p>
                    </div>
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 font-bold text-white"><Activity className="text-green-500" size={18} /> Limited Mobility</div>
                        <p className="text-sm text-slate-400">Elderly, arthritis, post-surgery. A medical-grade accessibility tool for independent care.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* MARKET & DATA - REDESIGNED */}
        <section id="market" className="py-24 bg-slate-950 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The Savings Dashboard</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    See exactly how much the "Razor Subscription Model" costs you over time versus owning a universal tool.
                </p>
            </div>

            {/* Main Interactive Dashboard */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative">
                
                <div className="grid lg:grid-cols-12 gap-10">
                    
                    {/* Controls Side */}
                    <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                             <div className="flex items-center gap-2 mb-4 text-red-400 font-semibold uppercase text-xs tracking-wider">
                                <AlertTriangle size={14} /> The Competitor Variable
                             </div>
                             
                             <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="text-sm font-medium text-slate-300">Blade Refill Cost</label>
                                        <span className="text-white font-bold text-lg">${refillCost}</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="20" 
                                        max="60" 
                                        step="1"
                                        value={refillCost}
                                        onChange={(e) => setRefillCost(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-colors"
                                    />
                                    <p className="text-xs text-slate-500 mt-2">Cost per 4-pack of proprietary blades</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="text-sm font-medium text-slate-300">Shaves Per Month</label>
                                        <span className="text-white font-bold text-lg">{frequency}x</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="10" 
                                        step="1"
                                        value={frequency}
                                        onChange={(e) => setFrequency(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-colors"
                                    />
                                </div>
                             </div>
                        </div>

                        <div className="hidden lg:block bg-gradient-to-br from-blue-900/20 to-slate-900/50 p-6 rounded-2xl border border-blue-500/30 shadow-lg">
                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Sparkles className="text-blue-400" size={20} />
                                Why the difference?
                            </h4>
                            <div className="text-sm text-slate-300 leading-relaxed space-y-4 font-medium">
                            <p>
                                Competitors operate on the <span className="text-red-400 font-bold">"Printer & Ink" model</span>. They sell the handle to hook you, then charge a <span className="text-red-400 font-bold">400% markup</span> on proprietary blades that you can only buy from them.
                            </p>
                            <p>
                                RazorReach breaks the cycle. Buy our tool once, and you are free to use <span className="text-emerald-400 font-bold">50¢ safety razor blades</span> or your favorite <span className="text-emerald-400 font-bold">$3 cartridges</span> from the supermarket.
                            </p>
                            </div>
                        </div>
                    </div>

                    {/* Chart & Result Side */}
                    <div className="lg:col-span-8 flex flex-col">
                        {/* Chart Container - Updated: Removing rigid min-height to allow flex growth if needed, but keeping sensible baseline */}
                        <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 mb-6 flex-1 min-h-[400px]">
                            <SavingsChart data={currentData} />
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                             {/* Competitor Cost Card */}
                             <div className="bg-red-500/5 rounded-xl p-5 border border-red-500/10 flex flex-col justify-between group hover:border-red-500/30 transition-all">
                                <div>
                                    <div className="flex items-center gap-2 text-red-400 mb-2">
                                        <Lock size={16} />
                                        <span className="text-xs font-bold uppercase tracking-wide">Proprietary System</span>
                                    </div>
                                    <p className="text-slate-400 text-xs mb-3">5-year total cost including device + refills</p>
                                </div>
                                <div className="text-3xl font-bold text-red-500 tabular-nums">
                                    ${currentData[4].proprietaryCost}
                                </div>
                             </div>

                             {/* RazorReach Savings Card */}
                             <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/10 flex flex-col justify-between group hover:border-emerald-500/30 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp size={48} className="text-emerald-500" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                                        <Unlock size={16} />
                                        <span className="text-xs font-bold uppercase tracking-wide">RazorReach Savings</span>
                                    </div>
                                    <p className="text-slate-400 text-xs mb-3">Money kept in your pocket over 5 years</p>
                                </div>
                                <div className="text-3xl font-bold text-emerald-500 tabular-nums">
                                    +${year5Savings}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </section>

        {/* BUSINESS / INVEST - REDESIGNED FOR PRODUCT SELECTION */}
        <section id="business" className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-slate-950"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/10 blur-[100px]"></div>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Freedom</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Two models. One mission. Stop paying the razor tax forever.
                    </p>
                </div>

                {/* Investment Tiers */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {/* Standard Tier */}
                    <div className="group relative bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] flex flex-col">
                        <div className="absolute top-4 right-4 bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Essential
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Standard Edition</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-white">$19.99</span>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex gap-3 text-slate-300 text-sm">
                                <Feather className="text-blue-500 shrink-0" size={18} />
                                <span><strong className="text-white">Standard Poly</strong> Handle</span>
                            </div>
                            <div className="flex gap-3 text-slate-300 text-sm">
                                <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                                <span>Universal Razor Clamp</span>
                            </div>
                            <div className="flex gap-3 text-slate-300 text-sm">
                                <ShieldCheck className="text-blue-500 shrink-0" size={18} />
                                <span><strong className="text-white">Universal Warranty</strong></span>
                            </div>
                            <div className="flex gap-3 text-slate-300 text-sm">
                                <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                                <span>Water-Resistant Construction</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                            Pre-Order Standard
                        </button>
                    </div>

                    {/* Premium Tier */}
                    <div className="group relative bg-slate-900 border border-indigo-500/30 rounded-2xl p-8 transition-all hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                            <Sparkles size={10} /> Most Popular
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">Premium Edition</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-indigo-400">$34.99</span>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-1">
                             <div className="flex gap-3 text-slate-300 text-sm">
                                <Hammer className="text-indigo-400 shrink-0" size={18} />
                                <span><strong className="text-white">Anodized Aluminum</strong> Handle</span>
                            </div>
                             <div className="flex gap-3 text-slate-300 text-sm">
                                <CheckCircle2 className="text-indigo-400 shrink-0" size={18} />
                                <span>Universal Razor Clamp</span>
                            </div>
                            <div className="flex gap-3 text-slate-300 text-sm">
                                <ShieldCheck className="text-indigo-400 shrink-0" size={18} />
                                <span><strong className="text-white">Universal Warranty</strong></span>
                            </div>
                             <div className="flex gap-3 text-slate-300 text-sm">
                                <CheckCircle2 className="text-indigo-400 shrink-0" size={18} />
                                <span>Premium Weighted Feel</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 group-hover:scale-[1.02]">
                            Get Premium Edition <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Footer only - Removed Market Intelligence Badge */}
                <div className="max-w-3xl mx-auto">
                    <div className="mt-8 text-center">
                        <p className="text-slate-600 text-sm">
                            © 2024 RazorReach Inc. Patent Pending. 
                            <span className="mx-2">•</span> 
                            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
                            <span className="mx-2">•</span> 
                            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
                        </p>
                    </div>
                </div>

            </div>
        </section>

      </main>
    </div>
  );
}

export default App;