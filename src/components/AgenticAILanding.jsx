import React, { useState, useEffect, useRef } from 'react';
import { Bot, Workflow, Zap, ArrowRight, CheckCircle, Cpu, Network, Settings, Play, Pause, Eye, Brain, Sparkles } from 'lucide-react';

const AgenticAILanding = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  // Removed robotPositions state
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    workflow: useRef(null),
    cta: useRef(null)
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Workflow Intelligence",
      description: "Advanced AI agents powered by deep neural networks that continuously learn from your business patterns. Our proprietary algorithms analyze data points to understand workflow dependencies and automatically optimize processes in real-time."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Quantum Process Orchestration",
      description: "Revolutionary multi-agent architecture enabling seamless coordination between AI agents simultaneously. Our orchestration engine manages complex interdependencies and task prioritization across your enterprise ecosystem."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Autonomous Decision Engine",
      description: "Self-evolving AI agents with advanced reasoning capabilities that make strategic decisions without human oversight. They handle complex scenarios, manage exceptions, and adapt to changing business conditions autonomously."
    }
  ];

  const workflowSteps = [
    { id: 1, title: "INITIALIZE", description: "Deploy neural networks and establish secure agent communication channels with encrypted data pathways", active: false },
    { id: 2, title: "ANALYZE", description: "Process complex data patterns using machine learning algorithms to identify optimization opportunities", active: false },
    { id: 3, title: "EXECUTE", description: "Autonomous task completion with real-time monitoring, exception handling, and adaptive resource management", active: false },
    { id: 4, title: "EVOLVE", description: "Self-improvement algorithms continuously enhance performance through reinforcement learning and predictive modeling", active: false }
  ];

  const [activeSteps, setActiveSteps] = useState(workflowSteps);

  // Removed robotPeekPositions data

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const stepInterval = setInterval(() => {
      setActiveSteps(prev => {
        const newSteps = [...prev];
        const currentActiveIndex = newSteps.findIndex(step => step.active);
        
        if (currentActiveIndex !== -1) {
          newSteps[currentActiveIndex].active = false;
        }
        
        const nextIndex = currentActiveIndex === -1 ? 0 : (currentActiveIndex + 1) % newSteps.length;
        newSteps[nextIndex].active = true;
        
        return newSteps;
      });
    }, 2000);

    return () => clearInterval(stepInterval);
  }, [isAnimating]);

  // Removed single robot peeking animation useEffect

  // Removed PeekingRobot component definition

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 relative overflow-hidden">
      {/* Removed Peeking Robots rendering */}

      {/* Animated Background */}
      <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className="absolute inset-0 bg-gradient-radial from-blue-200/30 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-indigo-200/20 via-transparent to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 animate-spin-slow bg-gradient-conic from-transparent via-blue-200/10 to-transparent"></div>
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Additional cyan particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`cyan-${i}`}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${Math.random() * 3}s` }}
          />
        ))}
      </svg>
      
      <div className="relative z-10 container mx-auto px-6 py-8 pb-20">
        {/* Hero Section */}
        <div 
          ref={sectionRefs.hero}
          id="hero"
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleElements.has('hero') 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl border border-blue-400 opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl animate-spin-slow border-4 border-white/50 bg-gradient-to-br from-blue-500 to-cyan-400">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-wider">
            AGENTIC AI
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="mx-4 font-mono text-sm tracking-widest text-blue-600">SCASYS TECHNOLOGIES</span>
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="text-blue-600 font-semibold">NEURAL WORKFLOW INTELLIGENCE</span> • Advanced AI agents that transcend traditional automation
          </p>
        </div>

        {/* Features Section */}
        <div 
          ref={sectionRefs.features}
          id="features"
          className={`mb-20 transition-all duration-1000 transform ${
            visibleElements.has('features') 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="backdrop-blur-xl rounded-3xl p-10 border border-blue-200/50 shadow-xl bg-white/70">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                      {features[currentFeature].icon}
                    </div>
                    <div className="absolute -inset-1 rounded-full border-2 border-blue-400 opacity-30 animate-ping"></div>
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">
                  {features[currentFeature].title}
                </h3>
                
                <p className="text-lg text-center text-gray-600 leading-relaxed">
                  {features[currentFeature].description}
                </p>
                
                {/* Feature indicators */}
                <div className="flex justify-center mt-8 space-x-4">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentFeature 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div 
          ref={sectionRefs.workflow}
          id="workflow"
          className={`mb-20 transition-all duration-1000 transform ${
            visibleElements.has('workflow') 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="mb-12">
            <h3 className="text-4xl font-bold flex items-center text-gray-800">
              <Cpu className="w-10 h-10 mr-4 text-blue-600" />
              QUANTUM PROCESS MATRIX
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {activeSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-700 ${
                  visibleElements.has('workflow') 
                    ? `animate-slide-up-${index + 1}` 
                    : 'opacity-0'
                }`}
              >
                <div className={`backdrop-blur-xl rounded-2xl p-8 border transition-all duration-700 transform ${
                  step.active 
                    ? 'border-blue-400 shadow-2xl translate-y-[-8px] bg-white/90' 
                    : 'border-gray-200 hover:border-gray-300 hover:translate-y-[-4px] bg-white/60'
                }`}>
                  
                  {step.active && (
                    <div className="absolute -inset-1 rounded-2xl border-2 border-blue-400 opacity-40 animate-pulse"></div>
                  )}
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-700 ${
                      step.active 
                        ? 'text-white shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-400' 
                        : 'text-gray-600 bg-gradient-to-br from-gray-200 to-gray-300'
                    }`}>
                      {step.active ? (
                        <CheckCircle className="w-8 h-8 animate-pulse" />
                      ) : (
                        <span className="font-bold text-xl">{step.id.toString().padStart(2, '0')}</span>
                      )}
                    </div>
                    
                    <h4 className={`text-xl font-bold mb-3 transition-all duration-700 ${
                      step.active ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < activeSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className={`w-8 h-8 transition-all duration-700 ${
                      step.active ? 'text-blue-500 animate-pulse scale-125' : 'text-gray-400'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={sectionRefs.cta}
          id="cta"
          className={`text-center transition-all duration-1000 transform ${
            visibleElements.has('cta') 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="backdrop-blur-xl rounded-3xl p-12 border border-blue-200/50 shadow-xl bg-white/70">
              <div className="absolute -inset-1 rounded-3xl border border-blue-400 opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <h3 className="text-4xl font-bold mb-6 text-gray-800">
                  TRANSFORM YOUR ENTERPRISE
                </h3>
                
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Experience the next evolution of intelligent automation with our cutting-edge AI agent ecosystem.
                </p>
                
                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                  Join industry leaders who have already revolutionized their operations with Scasys Technologies' autonomous workflow intelligence. Our AI agents don't just automate - they think, learn, and evolve to drive unprecedented efficiency gains.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button onClick={()=>{
              const ele=document.getElementById('Contact')
              ele.scrollIntoView({behavior:"smooth"})}} className="group border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Brain className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    REQUEST DEMO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        @keyframes slide-up-1 {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-2 {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-3 {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-4 {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up-1 {
          animation: slide-up-1 0.8s ease-out 0.1s both;
        }
        .animate-slide-up-2 {
          animation: slide-up-2 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-3 {
          animation: slide-up-3 0.8s ease-out 0.3s both;
        }
        .animate-slide-up-4 {
          animation: slide-up-4 0.8s ease-out 0.4s both;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default AgenticAILanding;