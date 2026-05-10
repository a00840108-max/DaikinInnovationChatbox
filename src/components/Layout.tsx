/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ChevronRight, 
  Grape, 
  LineChart, 
  MessageSquare, 
  Zap, 
  Wind, 
  BarChart3,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DaikinLogo } from './InnovationImages';

// Layout Component
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-mesh selection:bg-daikin-blue/20">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <DaikinLogo className="h-6 w-auto" />
          <span className="font-display font-bold tracking-tight text-xl text-daikin-blue uppercase border-l-2 border-gray-200 pl-3 ml-1">
            ARGENTINA
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <Link to="/" className="text-daikin-blue border-b-2 border-daikin-blue pb-1">Innovación</Link>
          <Link to="/frente-vitivinicola" className="hover:text-daikin-blue transition-colors">Sector Vitivinícola</Link>
          <Link to="/frente-marketing" className="hover:text-daikin-blue transition-colors">Marketing & Mid-Market</Link>
          <a href="/#chatbox-section" className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-all active:scale-95">
            Chatbox
          </a>
        </div>
      </div>
    </nav>
    <main className="pt-20">
      {children}
    </main>
    <footer className="py-12 px-8 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400">
          <DaikinLogo className="h-4" grayscale />
          <span className="font-display font-bold text-xs uppercase tracking-tight">Argentina Innovation Hub</span>
        </div>
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
          Daikin Industries Argentina © 2026
        </p>
      </div>
    </footer>
    {/* Bottom Status Bar */}
    <div className="h-8 bg-gray-50 flex items-center px-8 text-[10px] text-gray-400 justify-between fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100">
      <div>© 2026 Daikin Industries - Argentina Innovation Hub</div>
      <div className="flex gap-6 italic">
        <span>Sincronizado: {new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })} ART</span>
        <span className="text-daikin-blue font-bold">Documento Confidencial</span>
      </div>
    </div>
  </div>
);

export { PageLayout };
