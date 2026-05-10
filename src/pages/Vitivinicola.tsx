import React from 'react';
import { motion } from 'motion/react';
import { 
  Grape, 
  Thermometer, 
  Droplets, 
  Leaf, 
  TrendingDown, 
  ShieldCheck,
  LineChart,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/Layout';

const Vitivinicola = () => {
  return (
    <PageLayout>
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-daikin-blue font-bold mb-8 hover:underline">
            <ArrowLeft size={18} /> Volver al Inicio
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-daikin-blue/10 text-daikin-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Grape size={14} /> Sector Vitivinícola
              </div>
              <h1 className="text-5xl font-display font-black text-daikin-dark mb-8 leading-tight tracking-tighter">
                Innovación en el Control de <span className="text-daikin-blue">Microclimas</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                La industria del vino en Argentina enfrenta retos sin precedentes: el cambio climático está desplazando las fronteras de cultivo y aumentando la variabilidad térmica. Daikin propone un ecosistema de climatización que garantiza la estabilidad necesaria para la producción de alta gama.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-8 bg-daikin-dark rounded-[2rem] text-white">
                <p className="text-daikin-light font-bold text-xs uppercase tracking-widest mb-2">Impacto Energético</p>
                <p className="text-3xl font-display font-bold mb-4">-30%</p>
                <p className="text-xs text-gray-400">Reducción en costos operativos mediante VRV Systems.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <p className="text-daikin-blue font-bold text-xs uppercase tracking-widest mb-2">Control Preciso</p>
                <p className="text-3xl font-display font-bold mb-4">0.1°C</p>
                <p className="text-xs text-gray-500">Precisión en el control de temperatura de fermentación.</p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Thermometer />,
                title: "Cambio Climático",
                desc: "Adaptación de bodegas ante veranos más intensos y noches menos frescas en regiones como Mendoza y San Juan.",
                color: "text-orange-500"
              },
              {
                icon: <Leaf />,
                title: "Sustentabilidad",
                desc: "Reducción de huella de carbono alineada con las exigencias de mercados de exportación internacionales.",
                color: "text-emerald-500"
              },
              {
                icon: <LineChart />,
                title: "Eficiencia VRV",
                desc: "Implementación de tecnologías de caudal de refrigerante variable para multi-etapas de producción.",
                color: "text-daikin-blue"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 glass-morphism rounded-[2.5rem] border-white"
              >
                <div className={`${item.color} mb-6`}>{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-daikin-dark rounded-[3.5rem] p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-daikin-blue/10 blur-[80px]" />
             <div className="max-w-3xl relative z-10">
               <h2 className="text-4xl font-display font-extrabold mb-8 italic">Escenarios Futuros 2030</h2>
               <div className="space-y-8">
                 <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-daikin-blue transition-colors">1</div>
                   <div>
                     <h4 className="text-xl font-bold mb-2">Bodegas Inteligentes (IoT)</h4>
                     <p className="text-gray-400 text-sm">Integración total de sensores Daikin con sistemas de gestión de procesos para automatización de clima basada en datos de cosecha real.</p>
                   </div>
                 </div>
                 <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-daikin-blue transition-colors">2</div>
                   <div>
                     <h4 className="text-xl font-bold mb-2">Descarbonización el Sector</h4>
                     <p className="text-gray-400 text-sm">Transición hacia bombas de calor industriales eliminando el uso de combustibles fósiles en el calentamiento de agua para limpieza.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Vitivinicola;
