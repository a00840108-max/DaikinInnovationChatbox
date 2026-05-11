import Groq from "groq-sdk";

const DAIKIN_KNOWLEDGE_BASE = `
Base de Conocimiento - Daikin Innovation Portfolio Argentina

1. Overview Corporativo de Daikin
Daikin Industries es el lider global en sistemas de climatizacion. Fue fundada en 1924 en Osaka, Japon, y opera en mas de 160 paises con mas de 76,000 empleados. Su modelo esta altamente integrado verticalmente: Daikin disena y fabrica desde refrigerantes y materiales quimicos hasta sistemas residenciales, comerciales e industriales.

Divisiones principales:
- Air Conditioning (90% de los ingresos)
- Chemicals
- Filters
- Oil Hydraulics
- Defense & Health Systems
- Electronics

2. Posicionamiento Estrategico Global
Fortalezas:
- Liderazgo tecnologico
- Integracion vertical
- Alta eficiencia energetica
- Tecnologias propietarias (Inverter, VRV/VRF, Swing Compressor)
- Especializacion pura en climatizacion

Tecnologias clave:
- Inverter: Ajusta velocidad del compresor, reduciendo consumo hasta 28%.
- VRV / VRF: Control independiente de multiples espacios desde un solo sistema.
- Swing Compressor (Exclusivo): Reduce friccion, ruido y vibracion. Vida util > 15 anos.
- Refrigerante R-32: 68% menor impacto ambiental vs R-410A.
- Streamer Discharge: Purificacion de aire oxidando virus y bacterias.

3. Market Overview LATAM y Argentina
- Drivers de crecimiento: Urbanizacion, cambio climatico, nearshoring industrial, data centers, eficiencia energetica.
- Competencia: Carrier (Mid-premium), Trane (Industrial), Midea (Low-cost), LG (Mid-premium), Rheem (Mid-range), York (Comercial).

4. Problemas Estrategicos Identificados
- Sensibilidad al precio inicial: El mercado prioriza accesibilidad inmediata sobre ahorro a largo plazo.
- Valor invisible: Dificil traduccion de beneficios tecnologicos (SEER, Inverter) a beneficios tangibles para el consumidor.
- Dependencia de intermediarios: Instaladores influyen mas que la marca en la decision de compra.
- Servicio postventa: Necesidad de estandarizar la experiencia tecnica.

5. Frentes Estrategicos y Oportunidades
- Frente 1: Canales de Venta y Mercadotecnia (Residencial / Mid-Market) Analizar el mercado HVAC residencial argentino, el comportamiento del consumidor y los canales de compra para identificar oportunidades de posicionamiento, accesibilidad y diferenciacion de Daikin frente a competidores mid-market.
- Frente 2: Sector Vitivinicola / Climate Tech Explorar oportunidades de integracion de soluciones HVAC inteligentes en la industria vitivinicola mediante control termico, humedad, eficiencia energetica y tecnologias adaptadas al impacto del cambio climatico en bodegas y procesos de produccion.

6. Insights del Consumidor Argentino
- Uso tipo ON/OFF (no eficiente).
- Sensibilidad extrema a la factura electrica.
- Factores de decision: 1. Precio, 2. Marca, 3. Diseno, 4. Consumo, 5. Recomendacion del instalador.

7. Oportunidades de Innovacion
- Financiamiento estrategico.
- Comunicacion simplificada: Traducir tecnicismos a ahorro mensual y confort.
- Plataformas digitales: Calculadoras de ahorro y simuladores energeticos.
- HVAC + IA: Mantenimiento predictivo y optimizacion automatica.
- Indoor Air Quality (IAQ): Purificadores y filtros HEPA (Post-pandemia).

8. Productos Clave
- Residencial: Stylish, Perfera, Sensira, Ururu Sarara.
- Comercial/Industrial: Sky Air, VRV, Chillers.
- IAQ: Purificadores MC55W / MCK55W.

9. Diferenciadores Reales
- Tecnologia propietaria y diseno japones.
- Compresor Swing y produccion de refrigerantes propios.
- Durabilidad y eficiencia energetica real comprobable.
- Silencio operativo.

10. Integrantes del equipo
- Lorena Garza A01723199, Carolina Maysen A01178419, Marita Donaji A00838930, Romina Lopez A00840108, Paula Guerrero A00839099
`;

let groq: Groq | null = null;

const getGroqClient = () => {
  if (!groq) {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      throw new Error("GROQ_API_KEY environment variable is missing.");
    }

    groq = new Groq({ apiKey });
  }

  return groq;
};

export async function answerDaikinQuestion(question: string) {
  if (!question || question.trim().length === 0) {
    throw new Error("La pregunta es obligatoria.");
  }

  const completion = await getGroqClient().chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: `
          Eres un consultor experto en innovacion para Daikin Argentina.
          Tu objetivo es analizar la empresa, el mercado y las oportunidades estrategicas basandote estrictamente en la base de datos proporcionada.

          BASE DE DATOS ESTRATEGICA DAIKIN:
          ${DAIKIN_KNOWLEDGE_BASE}

          INSTRUCCIONES DE RESPUESTA:
          1. Responde en espanol de manera profesional, ejecutiva y perspicaz.
          2. Usa la base de datos para respaldar tus respuestas.
          3. Enfocate en tendencias, eficiencia energetica y oportunidades de innovacion (Mid-market, Vitivinicola, CaaS, etc.).
          4. Manten un tono de consultor de alto nivel pero que el mensaje sea corto para el board de directores.
          5. Se conciso y directo en tus recomendaciones.
        `,
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  return completion.choices[0].message.content || "No recibi una respuesta valida del modelo.";
}
