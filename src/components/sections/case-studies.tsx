import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CaseStudies() {
    const cases = [
        {
            title: "Dashboard Ventas en Tiempo Real",
            category: "Dashboard",
            problem: "Dueño de ecommerce no sabía estado de ventas hasta fin del día",
            solution: "Dashboard Next.js conectado a Mercado Libre API",
            result: "Visualización en vivo desde celular, +30% decisiones más rápidas",
            image: "/placeholder-dashboard.jpg", // Placeholder
            color: "bg-blue-100 text-blue-800"
        },
        {
            title: "Automatización Facturación AFIP",
            category: "Automatización",
            problem: "15 horas/semana facturando manualmente",
            solution: "Flujo n8n que genera facturas desde Google Sheets",
            result: "100% automático, ahorro $80.000/mes en tiempo",
            image: "/placeholder-automation.jpg", // Placeholder
            color: "bg-green-100 text-green-800"
        },
        {
            title: "Integración WhatsApp + CRM",
            category: "Integración",
            problem: "Perdían 40% leads por respuesta lenta",
            solution: "Bot WhatsApp + automatización CRM",
            result: "Tiempo de respuesta de 24hs → 2 minutos",
            image: "/placeholder-whatsapp.jpg", // Placeholder
            color: "bg-orange-100 text-orange-800"
        }
    ];

    return (
        <Section id="casos" background="white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Proyectos Recientes</h2>
                    <p className="text-muted-foreground text-lg">
                        Resultados reales para problemas reales. Así es como ayudo a mis clientes a escalar.
                    </p>
                </div>
                <Button variant="outline" className="hidden md:flex">
                    Ver todos los proyectos <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((project, index) => (
                    <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                        {/* Image Placeholder Area */}
                        <div className="aspect-video w-full bg-neutral-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-neutral-800/10 group-hover:bg-neutral-800/0 transition-colors" />
                            <div className="flex items-center justify-center h-full text-neutral-400 font-mono text-xs">
                                [Screenshot: {project.title}]
                            </div>
                        </div>

                        <CardContent className="p-6">
                            <div className="mb-4">
                                <Badge className={project.color} variant="secondary">{project.category}</Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                            <div className="space-y-2 text-sm text-neutral-600 mb-6">
                                <p><span className="font-semibold text-neutral-900">Problema:</span> {project.problem}</p>
                                <p><span className="font-semibold text-neutral-900">Solución:</span> {project.solution}</p>
                                <p><span className="font-semibold text-green-600">Resultado:</span> {project.result}</p>
                            </div>

                            <div className="flex items-center text-primary font-medium text-sm gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                Ver detalles <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8 md:hidden">
                <Button variant="outline" className="w-full">
                    Ver todos los proyectos <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </Section>
    );
}
