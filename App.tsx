
import React, { useState } from 'react';
import { Zap, Shield, CheckCircle, Check, Globe, LayoutDashboard, Target, TrendingUp, Sparkles, Star, Rocket, Clock } from 'lucide-react';
import Workbench from './components/Workbench';
import LeadForm from './components/LeadForm';

const Navigation: React.FC = () => {
  const [lang, setLang] = useState('EN');
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-electricPurple rotate-45 flex items-center justify-center">
            <span className="text-white font-header -rotate-45 text-xs">VS</span>
          </div>
          <span className="font-header text-xl tracking-tighter">VIBESTYLE</span>
        </div>
        <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <a href="#workbench" className="hover:text-electricPurple transition-colors">Visualizer</a>
          <a href="#strategy" className="hover:text-electricPurple transition-colors">Strategy</a>
          <a href="#pricing" className="hover:text-electricPurple transition-colors">Pricing</a>
          <a href="#lead-gen" className="hover:text-electricPurple transition-colors">Access</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
            className="text-[10px] font-black border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-zinc-800 transition-colors"
          >
            <Globe className="w-3 h-3 text-electricPurple" /> {lang}
          </button>
          <button 
            onClick={() => document.getElementById('lead-gen')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-electricPurple text-white px-6 py-2.5 rounded-xl font-bold shadow-brutalist hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-xs uppercase tracking-widest"
          >
            BOOK DEMO
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
  <section className="pt-40 pb-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="max-w-4xl text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-electricPurple/10 border border-electricPurple/30 rounded-full mb-8 mx-auto md:mx-0">
          <Zap className="w-3 h-3 text-electricPurple fill-current" />
          <span className="text-[10px] font-black text-electricPurple uppercase tracking-widest">The Future of Bronx Luxury</span>
        </div>
        <h1 className="font-header text-6xl md:text-8xl leading-[0.9] mb-8">
          STOP GUESSING. <br /> <span className="text-electricPurple">START VISUALIZING.</span>
        </h1>
        <p className="text-neonMagenta font-header text-2xl md:text-3xl mb-8 uppercase tracking-tight">
          VibeStyle by Valentine St. Martin
        </p>
        <p className="text-zinc-400 text-xl max-w-2xl mb-12 leading-relaxed font-light mx-auto md:mx-0">
          VibeStyle transforms your salon into a destination where clients discover their best selves. 
          The elite <span className="text-white font-semibold underline decoration-electricPurple decoration-2 underline-offset-4 font-body">Closing Tool</span> for the modern NYC artist.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button 
            onClick={() => document.getElementById('workbench')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-white text-black px-10 py-5 rounded-xl font-header flex items-center gap-3 hover:bg-neonMagenta hover:text-white transition-all shadow-brutalist hover:translate-y-1"
          >
            THE WORKBENCH <LayoutDashboard className="w-5 h-5" />
          </button>
          <button 
            onClick={() => document.getElementById('lead-gen')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-4 px-10 py-5 border-2 border-zinc-800 rounded-xl bg-obsidian/50 hover:border-zinc-500 transition-all font-bold text-sm"
          >
            SECURE ACCESS
          </button>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:40px_40px] opacity-40 [mask-image:linear-gradient(to_left,white,transparent)] -z-10"></div>
  </section>
);

const StrategySection: React.FC = () => (
  <section id="strategy" className="py-32 bg-zinc-950 border-y-2 border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-header text-4xl md:text-5xl mb-8 leading-tight">THE <span className="text-neonMagenta">MISUNDERSTANDING GAP</span> IS COSTING YOU THOUSANDS.</h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed italic">
            "I wanted icy platinum, but I didn't mean *that* white." — The sentence that kills margins. 
            VibeStyle bridges the gap between client imagination and stylist execution with 99% accuracy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Upsell with Confidence", desc: "Turn $150 root touches into $600 full transformations by showing the finished vibe first." },
              { icon: Shield, title: "Reduce Client Regret", desc: "Eliminate post-service 'surprise' and drastically lower redo requests through visual locking." },
              { icon: Sparkles, title: "Modernize Brand", desc: "Position your studio as the Bronx leader in luxury tech integration." },
              { icon: TrendingUp, title: "Streamline Consultations", desc: "Cut consultation time by 60% while increasing agreement quality." }
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl group hover:border-electricPurple transition-all">
                <pillar.icon className="w-8 h-8 text-electricPurple mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-header text-sm mb-2 text-white uppercase tracking-wider">{pillar.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-electricPurple/20 blur-3xl rounded-full"></div>
          <div className="relative p-1 bg-gradient-to-br from-electricPurple via-neonMagenta to-neonGreen rounded-3xl">
             <div className="bg-obsidian p-10 rounded-[22px] space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                  <h3 className="font-header text-xl tracking-tighter">THE 4 PILLARS OF EXCELLENCE</h3>
                  <div className="w-3 h-3 bg-neonGreen rounded-full shadow-[0_0_10px_#39FF14]"></div>
                </div>
                <div className="space-y-6">
                  {['Upsell with Confidence', 'Reduce Client Regret', 'Modernize Brand', 'Streamline Consultations'].map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-header text-xs text-electricPurple">
                        0{i+1}
                      </div>
                      <span className="font-bold text-sm tracking-widest text-zinc-300 uppercase">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] leading-relaxed">
                    VibeStyle transforms your salon into a destination where clients discover their best selves.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => (
  <section id="pricing" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-header text-4xl md:text-5xl mb-4 tracking-tighter uppercase">STUDIO TIERS</h2>
        <p className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-black">Investment for the Bronx Elite</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {/* Solo Artist */}
        <div className="bg-zinc-900 border-2 border-zinc-800 p-10 rounded-3xl hover:border-zinc-700 transition-all flex flex-col">
          <div className="mb-8">
            <h3 className="font-header text-2xl mb-2">SOLO ARTIST</h3>
            <div className="flex items-baseline gap-1">
              <span className="font-header text-4xl text-white">$79</span>
              <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">/ Month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-zinc-400 font-bold uppercase tracking-wider"><Check className="w-4 h-4 text-electricPurple" /> 500 Credits</li>
            <li className="flex items-center gap-3 text-sm text-zinc-400 font-bold uppercase tracking-wider"><Check className="w-4 h-4 text-electricPurple" /> $49 Setup Fee</li>
            <li className="flex items-center gap-3 text-sm text-zinc-400 font-bold uppercase tracking-wider"><Check className="w-4 h-4 text-electricPurple" /> Custom Branding</li>
            <li className="flex items-center gap-3 text-sm text-zinc-400 font-bold uppercase tracking-wider"><Check className="w-4 h-4 text-electricPurple" /> Bilingual Support</li>
          </ul>
          <button className="w-full py-4 border-2 border-zinc-800 rounded-xl font-header text-sm hover:bg-zinc-800 transition-all uppercase tracking-widest">Select Tier</button>
        </div>

        {/* Studio Collective */}
        <div className="bg-zinc-900 border-2 border-electricPurple p-10 rounded-3xl shadow-brutalist relative flex flex-col scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electricPurple text-white px-6 py-1 font-header text-[10px] tracking-widest uppercase">MOST FEATURED</div>
          <div className="mb-8">
            <h3 className="font-header text-2xl mb-2">STUDIO COLLECTIVE</h3>
            <div className="flex items-baseline gap-1">
              <span className="font-header text-4xl text-white">$150</span>
              <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">/ Month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-white font-black uppercase tracking-wider"><Check className="w-4 h-4 text-neonGreen" /> 1,250 Credits</li>
            <li className="flex items-center gap-3 text-sm text-white font-black uppercase tracking-wider"><Check className="w-4 h-4 text-neonGreen" /> $99 Setup Fee</li>
            <li className="flex items-center gap-3 text-sm text-white font-black uppercase tracking-wider"><Check className="w-4 h-4 text-neonGreen" /> Unlimited Accounts</li>
            <li className="flex items-center gap-3 text-sm text-white font-black uppercase tracking-wider"><Check className="w-4 h-4 text-neonGreen" /> Priority Onboarding</li>
            <li className="flex items-center gap-3 text-sm text-white font-black uppercase tracking-wider"><Check className="w-4 h-4 text-neonGreen" /> Custom QR Code Kiosk</li>
          </ul>
          <button className="w-full py-4 bg-electricPurple text-white rounded-xl font-header text-sm shadow-lg hover:brightness-110 transition-all uppercase tracking-widest">Claim Access</button>
        </div>
      </div>

      <div className="text-center mb-12">
        <h4 className="font-header text-xl mb-8 uppercase tracking-tighter">SPEED PACKS</h4>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-2xl flex items-center gap-4 hover:border-neonMagenta transition-colors group">
            <Clock className="w-5 h-5 text-neonMagenta group-hover:animate-pulse" />
            <div className="text-left">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Weekend Rush</p>
              <p className="font-header text-lg">$25</p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-2xl flex items-center gap-4 hover:border-neonGreen transition-colors group">
            <Star className="w-5 h-5 text-neonGreen group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Holiday Boost</p>
              <p className="font-header text-lg">$65</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-electricPurple selection:text-white">
      <Navigation />
      <main>
        <Hero />
        
        <div className="py-12 bg-obsidian text-center">
          <h2 className="font-header text-4xl mb-4 tracking-tighter">THE VISUALIZER WORKBENCH</h2>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto mb-12 uppercase tracking-[0.3em] font-black">9 Precise Hairstyles • 6 High-Ticket Colors</p>
        </div>
        <Workbench />

        <StrategySection />

        <Pricing />

        <section id="lead-gen" className="py-32 px-6 bg-obsidian relative overflow-hidden border-t border-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neonMagenta/10 border border-neonMagenta/30 rounded-full mb-6">
                <Rocket className="w-3 h-3 text-neonMagenta" />
                <span className="text-[10px] font-black text-neonMagenta uppercase tracking-widest">Invitation Only</span>
              </div>
              <h2 className="font-header text-5xl mb-8 leading-tight">JOIN THE <span className="text-electricPurple">ELITE.</span></h2>
              <p className="text-zinc-400 text-xl mb-10 leading-relaxed font-light">
                Secure your studio access to the VibeStyle Closing Engine. Bridge the expectation gap, maximize ticket value, and modernize your consultation workflow instantly.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-header text-3xl text-electricPurple mb-2">94%</h4>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Agreement Rate</p>
                </div>
                <div>
                  <h4 className="font-header text-3xl text-neonGreen mb-2">2.4x</h4>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Ticket Value Spike</p>
                </div>
              </div>
            </div>
            <LeadForm />
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-electricPurple/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
      </main>

      <footer className="bg-obsidian border-t border-zinc-800 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-electricPurple rotate-45 flex items-center justify-center">
                <span className="text-white font-header -rotate-45 text-sm">VS</span>
              </div>
              <span className="font-header text-3xl tracking-tighter">VIBESTYLE</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Visualizing the soul of Bronx Luxury. The closing engine designed for elite hair professionals who dominate their craft.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-electricPurple cursor-pointer transition-colors"><Globe className="w-4 h-4" /></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h5 className="font-black text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-6">Software</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-bold">
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Visualizer</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">AI Analysis</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Archiving</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-6">Business</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-bold">
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Studio Tiers</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Consulting</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Partner Hub</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-6">Legal</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-bold">
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Privacy</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">Terms</a></li>
                <li><a href="#" className="hover:text-electricPurple transition-colors uppercase">B2B Standards</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-black tracking-[0.2em] uppercase">© 2026 VIBESTYLE CLOSING ENGINE. CREATED BY VALENTINE ST. MARTIN.</p>
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
            <div className="w-2 h-2 bg-neonGreen rounded-full animate-pulse shadow-[0_0_10px_#39FF14]"></div>
            <span className="text-[10px] font-black tracking-widest text-neonGreen uppercase">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
