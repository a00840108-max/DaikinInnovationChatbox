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
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/Layout';
import Chatbox from '../components/Chatbox';
import { VineyardImage, MarketingImage } from '../components/InnovationImages';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 bg-gradient-to-br from-white/80 to-white/40 rounded-[3rem] border border-white backdrop-blur-md shadow-sm mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black mb-4 tracking-tighter">
              Daikin Innovation<br/>Portfolio <span className="text-daikin-blue">Argentina</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md mb-8 leading-relaxed font-medium">
              Exploración estratégica de oportunidades, tendencias y frentes de innovación en Argentina.
            </p>
            <button className="px-8 py-4 bg-daikin-blue text-white rounded-2xl font-bold text-sm shadow-lg shadow-daikin-blue/20 hover:scale-105 transition-transform active:scale-95">
              Explorar Frentes
            </button>
          </motion.header>

          {/* Team Members Section */}
          <div className="mb-20">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-4">Equipo de Innovación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Lorena Garza", id: "A01723199" },
                { name: "Carolina Maysen", id: "A01178419" },
                { name: "Marita Donají", id: "A00838930" },
                { name: "Romina Lopez", id: "A00840108" },
                { name: "Paula Guerrero", id: "A00839099" }
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass-morphism rounded-2xl">
                  <div className="w-10 h-10 bg-daikin-blue/10 rounded-full flex items-center justify-center text-daikin-blue font-bold text-xs">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-daikin-dark text-sm">{member.name}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{member.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-extrabold mb-8 tracking-tight">Liderando la <span className="text-daikin-blue">Eficiencia</span> Global</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                Daikin es el líder global en soluciones climáticas, enfocado en eficiencia energética, innovación tecnológica y bienestar inteligente para sectores residenciales, comerciales e industriales. En Argentina, impulsamos la transformación hacia un futuro sustentable.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-display font-black text-daikin-blue mb-2">90+</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Años de Innovación</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-black text-daikin-blue mb-2">150+</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Países</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap />, title: "Energía", color: "bg-amber-500" },
                { icon: <Wind />, title: "Confort", color: "bg-daikin-blue" },
                { icon: <Globe />, title: "Sustentable", color: "bg-emerald-500" },
                { icon: <Award />, title: "Calidad", color: "bg-purple-500" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:scale-105 transition-transform">
                  <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${item.color.split('-')[1]}-500/20`}>
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Fronts */}
      <section className="px-6 py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-display font-extrabold tracking-tight mb-4 text-center leading-tight">
              Frentes <span className="text-daikin-blue">Estratégicos</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto font-medium">
              Análisis verticales profundos sobre sectores clave del mercado argentino donde Daikin está marcando la diferencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Front 1: Vitivinicola */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-morphism h-full rounded-[3rem] overflow-hidden group border-white"
            >
              <div className="h-64 bg-daikin-dark relative overflow-hidden">
                <VineyardImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-daikin-blue text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  <Grape size={14} /> Sector Vitivinícola
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-daikin-blue transition-colors">Eficiencia en la Bodega</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Cómo Daikin puede integrarse al sector vitivinícola mediante soluciones inteligentes, eficiencia energética y control especializado para la producción de vino premium.
                </p>
                <Link to="/frente-vitivinicola" className="inline-flex items-center gap-2 font-display font-extrabold text-daikin-blue group/link">
                  Ver Análisis <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Front 2: Marketing */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-morphism h-full rounded-[3rem] overflow-hidden group border-white"
            >
              <div className="h-64 bg-daikin-blue relative overflow-hidden">
                <MarketingImage className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-daikin-dark text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  <LineChart size={14} /> Marketing & Mid-Market
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-daikin-blue transition-colors">Penetración de Mercado</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                  Análisis del consumidor argentino, percepción de marca, canales de venta y oportunidades para hacer Daikin más accesible al segmento medio sin sacrificar el prestigio.
                </p>
                <Link to="/frente-marketing" className="inline-flex items-center gap-2 font-display font-extrabold text-daikin-blue group/link">
                  Ver Análisis <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbox Section */}
      <section id="chatbox-section" className="px-6 py-32 bg-daikin-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-daikin-blue/5 blur-[120px] -rotate-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="w-16 h-16 bg-daikin-blue rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-daikin-blue/20"
            >
              <MessageSquare size={32} />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">Consulta nuestra <span className="text-daikin-blue italic">Base de Datos</span></h2>
            <p className="text-daikin-light/60 text-lg max-w-2xl font-medium">
              Interactúa con nuestra inteligencia artificial para obtener insights extraídos directamente de nuestro análisis estratégico y base de datos de mercado.
            </p>
          </div>
          <Chatbox />
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
