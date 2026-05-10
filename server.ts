import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  app.use(express.json());

  // API Routes
  const DAIKIN_KNOWLEDGE_BASE = `
Base de Conocimiento — Daikin Innovation Portfolio Argentina

1. Overview Corporativo de Daikin
Daikin Industries es el líder global en sistemas de climatización. Fue fundada en 1924 en Osaka, Japón, y opera en más de 160 países con más de 76,000 empleados. Su modelo está altamente integrado verticalmente: Daikin diseña y fabrica desde refrigerantes y materiales químicos hasta sistemas residenciales, comerciales e industriales.

Divisiones principales:
- Air Conditioning (90% de los ingresos)
- Chemicals
- Filters
- Oil Hydraulics
- Defense & Health Systems
- Electronics

2. Posicionamiento Estratégico Global
Fortalezas:
- Liderazgo tecnológico
- Integración vertical
- Alta eficiencia energética
- Tecnologías propietarias (Inverter, VRV/VRF, Swing Compressor)
- Especialización pura en climatización

Tecnologías clave:
- Inverter: Ajusta velocidad del compresor, reduciendo consumo hasta 28%.
- VRV / VRF: Control independiente de múltiples espacios desde un solo sistema.
- Swing Compressor (Exclusivo): Reduce fricción, ruido y vibración. Vida útil > 15 años.
- Refrigerante R-32: 68% menor impacto ambiental vs R-410A.
- Streamer Discharge: Purificación de aire oxidando virus y bacterias.

3. Market Overview LATAM y Argentina
- Drivers de crecimiento: Urbanización, cambio climático, nearshoring industrial, data centers, eficiencia energética.
- Competencia: Carrier (Mid-premium), Trane (Industrial), Midea (Low-cost), LG (Mid-premium), Rheem (Mid-range), York (Comercial).

4. Problemas Estratégicos Identificados
- Sensibilidad al precio inicial: El mercado prioriza accesibilidad inmediata sobre ahorro a largo plazo.
- Valor invisible: Difícil traducción de beneficios tecnológicos (SEER, Inverter) a beneficios tangibles para el consumidor.
- Dependencia de intermediarios: Instaladores influyen más que la marca en la decisión de compra.
- Servicio postventa: Necesidad de estandarizar la experiencia técnica.

5. Frentes Estratégicos y Oportunidades
- Frente 1: Canales de Venta y Mercadotecnia (Residencial / Mid-Market) Analizar el mercado HVAC residencial argentino, el comportamiento del consumidor y los canales de compra para identificar oportunidades de posicionamiento, accesibilidad y diferenciación de Daikin frente a competidores mid-market.
- Frente 2: Sector Vitivinícola / Climate Tech Explorar oportunidades de integración de soluciones HVAC inteligentes en la industria vitivinícola mediante control térmico, humedad, eficiencia energética y tecnologías adaptadas al impacto del cambio climático en bodegas y procesos de producción.

6. Insights del Consumidor Argentino
- Uso tipo ON/OFF (no eficiente).
- Sensibilidad extrema a la factura eléctrica.
- Factores de decisión: 1. Precio, 2. Marca, 3. Diseño, 4. Consumo, 5. Recomendación del instalador.

7. Oportunidades de Innovación
- Financiamiento estratégico.
- Comunicación simplificada: Traducir tecnicismos a ahorro mensual y confort.
- Plataformas digitales: Calculadoras de ahorro y simuladores energéticos.
- HVAC + IA: Mantenimiento predictivo y optimización automática.
- Indoor Air Quality (IAQ): Purificadores y filtros HEPA (Post-pandemia).

8. Productos Clave
- Residencial: Stylish, Perfera, Sensira, Ururu Sarara.
- Comercial/Industrial: Sky Air, VRV, Chillers.
- IAQ: Purificadores MC55W / MCK55W.

9. Diferenciadores Reales
- Tecnología propietaria y diseño japonés.
- Compresor Swing y producción de refrigerantes propios.
- Durabilidad y eficiencia energética real comprobable.
- Silencio operativo.

10. Integrantes del equipo
- Lorena Garza  A01723199, Carolina Maysen  A01178419, Marita donají  A00838930, Romina Lopez  A00840108, Paula Guerrero  A00839099
`;

  app.post("/api/chat", async (req, res) => {
    try {
      const { question } = req.body;

      if (!question || question.trim().length === 0) {
        return res.status(400).json({ error: "La pregunta es obligatoria." });
      }

      const groqClient = getGroqClient();
      const completion = await groqClient.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `
              Eres un consultor experto en innovación para Daikin Argentina. 
              Tu objetivo es analizar la empresa, el mercado y las oportunidades estratégicas basándote estrictamente en la base de datos proporcionada.
              
              BASE DE DATOS ESTRATÉGICA DAIKIN:
              ${DAIKIN_KNOWLEDGE_BASE}
              
              INSTRUCCIONES DE RESPUESTA:
              1. Responde en español de manera profesional, ejecutiva y perspicaz.
              2. Usa la base de datos para respaldar tus respuestas.
              3. Enfócate en tendencias, eficiencia energética y oportunidades de innovación (Mid-market, Vitivinícola, CaaS, etc.).
              4. Mantén un tono de consultor de alto nivel pero resumido para el board de directores.
              5. Sé conciso y directo en tus recomendaciones.
            `
          },
          {
            role: "user",
            content: question
          }
        ]
      });

      res.json({
        answer: completion.choices[0].message.content,
        sources: []
      });
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Error al generar la respuesta.";
      res.status(500).json({ error: errorMessage });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
