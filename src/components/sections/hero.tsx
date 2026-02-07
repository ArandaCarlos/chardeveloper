"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-orange-50/30">

            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute top-40 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex gap-2 mb-6">
                            <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-wider">
                                Disponible para nuevos proyectos
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance mb-6">
                            Desarrollo soluciones web que <span className="text-primary bg-orange-50 px-2 rounded-lg">automatizan</span> tu negocio
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 cursor-text">
                            Web Apps · Automatizaciones · Integraciones · IA. <br />
                            Desarrollo rápido con tecnología de última generación para eliminar el trabajo manual.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button size="lg" className="text-base font-semibold group">
                                Agendar Llamada Gratis
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-base">
                                Ver Casos de Estudio
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>Entrega en 1-4 semanas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>Potenciado con IA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>+15 Proyectos</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual - Placeholder for modern dev illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="top-0 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-square md:aspect-[4/3] group">
                            {/* Simulated Code Editor or Dashboard UI */}
                            <div className="absolute inset-0 bg-slate-900 p-4 font-mono text-sm leading-relaxed overflow-hidden">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2 opacity-90">
                                    <div className="text-blue-400">import <span className="text-white">OpennAI</span> from <span className="text-green-400">'openai'</span>;</div>
                                    <div className="text-purple-400">const <span className="text-yellow-300">automateWorkflow</span> = <span className="text-blue-400">async</span> () ={">"} {"{"}</div>
                                    <div className="pl-4 text-gray-400">// Conectando CRM con WhatsApp</div>
                                    <div className="pl-4 text-blue-400">const <span className="text-white">leads</span> = <span className="text-blue-400">await</span> crm.<span className="text-yellow-300">getNewLeads</span>();</div>
                                    <div className="pl-4 text-purple-400">for <span className="text-white">(const lead of leads)</span> {"{"}</div>
                                    <div className="pl-8 text-blue-400">await <span className="text-yellow-300">generateResponse</span>(lead);</div>
                                    <div className="pl-8 text-green-400">console.log("Lead contactado: " + lead.id);</div>
                                    <div className="pl-4 text-purple-400">{"}"}</div>
                                    <div className="text-purple-400">{"}"}</div>
                                </div>

                                {/* Floating Cards Overlays for effect */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute bottom-6 right-6 bg-white rounded-lg p-3 shadow-xl flex items-center gap-3 w-48 z-10"
                                >
                                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Estado</div>
                                        <div className="text-sm font-bold text-gray-800">Automatizado</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
