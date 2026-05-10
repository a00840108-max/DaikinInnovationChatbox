import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Smartphone, 
  MapPin, 
  ArrowLeft,
  Search,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/Layout';

const Marketing = () => {
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
                <Target size={14} /> Marketing & Mid-Market
              </div>
              <h1 className="text-5xl font-display font-black text-daikin-dark mb-8 leading-tight tracking-tighter">
                Estrategia <span className="text-daikin-blue">Mid-Market</span> Argentina
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                El mercado argentino demanda un balance perfecto entre prestigio, durabilidad y financiamiento. Nuestra misión es democratizar la "Experiencia Daikin" sin erosionar el valor de marca premium, atacando el segmento medio-alto con soluciones escalables.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center gap-8">
                <div className="w-20 h-20 bg-daikin-blue rounded-3xl flex items-center justify-center text-white shadow-xl shadow-daikin-blue/20">
                  <Users size={32} />
                </div>
                <div>
                   <h4 className="font-display font-bold text-xl mb-1">Target Persona</h4>
                   <p className="text-sm text-gray-500">Dueños de hogar (35-50 años) que valoran la inversión a largo plazo y la eficiencia vs. costo inicial.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <Search />,
                title: "Percepción de Marca",
                data: "85%",
                label: "Awareness en segmento Premium",
                desc: "Daikin es percibida como la opción 'aspiracional'. El reto es el salto del deseo a la compra."
              },
              {
                icon: <ShoppingBag />,
                title: "Canales Digitales",
                data: "+120%",
                label: "Crecimiento de consultas Web",
                desc: "El journey del cliente inicia 100% en digital, exigiendo comparativas claras de ahorro energético."
              },
              {
                icon: <MapPin />,
                title: "Capilaridad Regional",
                data: "24",
                label: "Provincias con oportunidad",
                desc: "Necesidad de fortalecer la red de instaladores certificados en GBA y el interior."
              }
            ].map((insight, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="text-daikin-blue">{insight.icon}</div>
                  <div className="text-xs font-black text-gray-300 uppercase tracking-widest">{insight.title}</div>
                </div>
                <div className="text-5xl font-display font-black text-daikin-dark mb-2 group-hover:text-daikin-blue transition-colors">
                  {insight.data}
                </div>
                <p className="text-xs font-bold text-gray-400 mb-6 uppercase">{insight.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{insight.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="glass-morphism p-12 rounded-[3.5rem]">
               <h3 className="text-3xl font-display font-bold mb-8">Customer Journey 2.0</h3>
               <div className="space-y-12">
                 <div className="relative pl-12 border-l-2 border-daikin-blue/20">
                   <div className="absolute left-[-9px] top-0 w-4 h-4 bg-daikin-blue rounded-full border-4 border-white" />
                   <h5 className="font-bold text-daikin-blue mb-1 uppercase text-xs tracking-tighter">Fase 1: Educación</h5>
                   <p className="text-gray-600 text-sm">Contenido sobre impacto en facturas de luz y confort térmico real vs marcas masivas.</p>
                 </div>
                 <div className="relative pl-12 border-l-2 border-daikin-blue/20">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-daikin-blue rounded-full border-4 border-white" />
                   <h5 className="font-bold text-daikin-blue mb-1 uppercase text-xs tracking-tighter">Fase 2: Validación</h5>
                   <p className="text-gray-600 text-sm">Calculadoras de ahorro energético y reviews de proyectos reales en Argentina.</p>
                 </div>
                 <div className="relative pl-12">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-daikin-blue rounded-full border-4 border-white" />
                   <h5 className="font-bold text-daikin-blue mb-1 uppercase text-xs tracking-tighter">Fase 3: Conversión</h5>
                   <p className="text-gray-600 text-sm">Financiamiento estratégico y red de instaladores Daikin Pro.</p>
                 </div>
               </div>
            </div>
            <div className="bg-daikin-dark p-12 rounded-[3.5rem] text-white flex flex-col justify-center">
               <h3 className="text-3xl font-display font-black mb-6 leading-tight italic text-daikin-light">Insight Estratégico</h3>
               <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                 "En Argentina, el aire acondicionado ya no es un lujo, es una herramienta de productividad. El Mid-Market no busca lo barato, busca lo que no tenga que cambiar en 10 años."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-daikin-blue rounded-full flex items-center justify-center font-bold">DA</div>
                 <div>
                   <p className="font-bold text-sm">Daikin Strategy Team</p>
                   <p className="text-xs text-gray-500 italic">Análisis Q2 2026</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Marketing;
