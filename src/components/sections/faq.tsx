"use client";

import { Section } from "@/components/ui/section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
    const faqs = [
        {
            question: "¿Cuánto tarda un proyecto típico?",
            answer: "Depende de la complejidad. Un dashboard o automatización simple suele tomar 1-2 semanas. Una web app completa entre 3-4 semanas. Para MVPs de startups suelo estimar 6-8 semanas. Siempre defino el timeline exacto antes de empezar."
        },
        {
            question: "¿Qué incluye el precio?",
            answer: "Todo lo necesario para que tu sistema funcione: diseño, desarrollo, testing, deploy, hosting inicial y capacitación. No hay costos ocultos. Si necesitas mantenimiento posterior, podemos acordar un fee mensual opcional, pero el sistema es tuyo."
        },
        {
            question: "¿Cómo funciona el proceso?",
            answer: "Empezamos con una llamada de 30 min para entender tu necesidad. En 48hs te envío una propuesta detallada. Si aceptás, arranco el desarrollo con updates semanales. Al finalizar, hago el deploy y te doy una capacitación completa."
        },
        {
            question: "¿Usás IA para desarrollar?",
            answer: "Sí, utilizo herramientas como Claude, ChatGPT y Cursor IDE como co-pilotos. Esto me permite escribir código más robusto y desarrollar entre 5 y 10 veces más rápido que un desarrollador tradicional, lo que se traduce en menores costos y tiempos de entrega para vos."
        },
        {
            question: "¿Das soporte después del proyecto?",
            answer: "Sí, todos los paquetes incluyen un periodo de garantía de 1 a 3 meses donde arreglo cualquier bug sin costo. Después de ese periodo, ofrezco planes de mantenimiento si preferís que yo me encargue de las actualizaciones."
        },
        {
            question: "¿Trabajás con clientes internacionales?",
            answer: "Sí, trabajo regularmente con clientes de toda Latinoamérica, España y Estados Unidos. Puedo facturar en USD o EUR sin problemas."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="faq" background="gray">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-secondary">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-lg text-neutral-800">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-neutral-400 transition-transform duration-300",
                                        openIndex === index ? "rotate-180 text-primary" : ""
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-neutral-600 leading-relaxed border-t border-dashed border-neutral-100 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
