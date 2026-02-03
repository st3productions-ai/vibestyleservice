
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Building2, Users, Mail, Phone, User, ShieldCheck } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { LeadData } from '../types';

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<LeadData>({
    Name: '',
    Phone: '',
    Email: '',
    BusinessName: '',
    EmployeeSize: '1-3'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.Name || !formData.Email || !formData.BusinessName) return;
    
    setStatus('loading');
    
    // Final check to ensure no empty strings bypass validation
    const success = await submitLead({
      Name: formData.Name,
      Phone: formData.Phone,
      Email: formData.Email,
      BusinessName: formData.BusinessName,
      EmployeeSize: formData.EmployeeSize
    });
    
    if (success) {
      setStatus('success');
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-zinc-900 border-2 border-neonGreen p-12 rounded-3xl text-center shadow-[0_0_50px_rgba(57,255,20,0.2)] animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-neonGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-neonGreen" />
        </div>
        <h3 className="font-header text-3xl mb-4 text-white uppercase tracking-tighter">DATA SYNCHRONIZED</h3>
        <p className="text-zinc-400 font-medium max-w-sm mx-auto">
          The VibeStyle engine has confirmed capture for <strong>{formData.BusinessName}</strong>. 
          Lead data has been forced into the master sheet.
        </p>
        <button 
          onClick={() => {
            setFormData({ Name: '', Phone: '', Email: '', BusinessName: '', EmployeeSize: '1-3' });
            setStatus('idle');
          }}
          className="mt-10 text-[10px] font-black text-neonGreen uppercase tracking-[0.4em] hover:opacity-70 transition-opacity flex items-center justify-center gap-2 mx-auto"
        >
          SYNC NEW STUDIO
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-8 md:p-12 rounded-3xl shadow-brutalist relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-electricPurple/5 blur-[60px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="mb-10 flex justify-between items-start">
          <div className="text-left">
            <h3 className="font-header text-4xl mb-2 uppercase tracking-tighter text-white">STUDIO DEMO</h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-black border-l-2 border-electricPurple pl-4">Sync Engine v8.0 Active</p>
          </div>
          <ShieldCheck className="w-8 h-8 text-zinc-800" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-left">
            <label htmlFor="Name" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1 block">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
              <input 
                id="Name"
                name="Name"
                required
                className="w-full bg-obsidian border-2 border-zinc-800 focus:border-electricPurple p-4 pl-12 rounded-xl text-sm outline-none transition-all text-white placeholder:text-zinc-800"
                placeholder="VALENTINE ST. MARTIN"
                value={formData.Name}
                onChange={e => setFormData({...formData, Name: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-1">
              <label htmlFor="Phone" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input 
                  id="Phone"
                  name="Phone"
                  required
                  type="tel"
                  className="w-full bg-obsidian border-2 border-zinc-800 focus:border-electricPurple p-4 pl-12 rounded-xl text-sm outline-none transition-all text-white placeholder:text-zinc-800"
                  placeholder="+1 (718) 000-0000"
                  value={formData.Phone}
                  onChange={e => setFormData({...formData, Phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1 text-left">
              <label htmlFor="Email" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input 
                  id="Email"
                  name="Email"
                  required
                  type="email"
                  className="w-full bg-obsidian border-2 border-zinc-800 focus:border-electricPurple p-4 pl-12 rounded-xl text-sm outline-none transition-all text-white placeholder:text-zinc-800"
                  placeholder="DIRECTOR@STUDIO.COM"
                  value={formData.Email}
                  onChange={e => setFormData({...formData, Email: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-1">
              <label htmlFor="BusinessName" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Salon Business Name</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input 
                  id="BusinessName"
                  name="BusinessName"
                  required
                  className="w-full bg-obsidian border-2 border-zinc-800 focus:border-electricPurple p-4 pl-12 rounded-xl text-sm outline-none transition-all text-white placeholder:text-zinc-800"
                  placeholder="BRONX LUXE HAIR STUDIO"
                  value={formData.BusinessName}
                  onChange={e => setFormData({...formData, BusinessName: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="EmployeeSize" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Studio Size</label>
              <div className="relative group/select">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <select 
                  id="EmployeeSize"
                  name="EmployeeSize"
                  className="w-full bg-obsidian border-2 border-electricPurple p-4 pl-12 rounded-xl text-sm outline-none transition-all text-white appearance-none cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.1)] focus:shadow-[0_0_30px_rgba(138,43,226,0.4)]"
                  value={formData.EmployeeSize}
                  onChange={e => setFormData({...formData, EmployeeSize: e.target.value})}
                >
                  <option value="1-3">1-3 STYLISTS</option>
                  <option value="4-10">4-10 STYLISTS</option>
                  <option value="11-25">11-25 STYLISTS</option>
                  <option value="25+">25+ ENTERPRISE</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-electricPurple"></div>
                </div>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-electricPurple py-6 rounded-xl font-header text-xl shadow-brutalist hover:translate-y-1 hover:shadow-none active:translate-y-1.5 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 relative group overflow-hidden"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <span className="relative z-10 flex items-center gap-3 tracking-tighter">FORCE SYNC DEMO <Send className="w-5 h-5" /></span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-1.5 h-1.5 rounded-full bg-neonGreen animate-pulse"></div>
            <p className="text-[9px] text-zinc-700 uppercase tracking-[0.4em] font-black">
              B2B REDUNDANT SYNC ACTIVE
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
