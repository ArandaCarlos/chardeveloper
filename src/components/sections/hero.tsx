"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/booking-modal";
import Link from "next/link";
import Image from "next/image";

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
                            Desarrollo soluciones con IA que <span className="text-primary px-2 py-1 rounded-lg">automatizan</span> tu negocio
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 cursor-text">
                            Web Apps · Automatizaciones · Integraciones · IA. <br />
                            Desarrollo rápido con tecnología de última generación para eliminar el trabajo manual.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <BookingModal>
                                <Button size="lg" className="text-base font-semibold group">
                                    Agendar Llamada Gratis
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </BookingModal>
                            <Button size="lg" variant="outline" className="text-base" asChild>
                                <Link href="#casos">Ver Casos de Estudio</Link>
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

                    {/* Image/Visual - YouTube Video Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="top-0 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-square md:aspect-[4/3] group">
                            <video
                                src="/presentacion.mp4"
                                autoPlay
                                controls
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
