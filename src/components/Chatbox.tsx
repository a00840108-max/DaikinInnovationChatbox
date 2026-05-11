import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const chatEndpoint = `${API_BASE_URL}/api/chat`;

const Chatbox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy tu asistente de innovación Daikin. ¿En qué puedo ayudarte?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userMsg }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Error en la comunicación con el servidor.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "No recibí una respuesta válida del servidor.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, hubo un error al conectar con el servidor.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
      <div className="p-6 flex items-center justify-between border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Bot size={20} />
          </div>

          <div>
            <h3 className="text-black font-bold leading-tight">
              Asistente AI de Estrategia
            </h3>

            <p className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Online • Director Advisor
            </p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50">
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div
              key={`${message.role}-${index}`}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-white border border-gray-100 rounded-tl-none text-gray-700"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Bot size={14} />
              </div>

              <div className="flex gap-1.5 px-4 py-3 bg-white border border-gray-100 rounded-2xl rounded-tl-none">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Pregunta sobre innovación, tendencias o estrategias Daikin..."
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:bg-white transition-all text-sm text-gray-900 group-hover:border-blue-600/30"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-50 disabled:bg-gray-300 shadow-lg shadow-black/5"
          >
            <Send size={18} />
          </button>
        </div>

        <p className="text-[10px] text-gray-400 mt-4 text-center font-medium uppercase tracking-[0.1em]">
          Impulsado por Groq Llama 3 • Base de Datos Argentina
        </p>
      </div>
    </div>
  );
};

export default Chatbox;
