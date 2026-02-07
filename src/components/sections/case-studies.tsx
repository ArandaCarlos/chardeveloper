import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function CaseStudies() {
    const cases = [
        {
            title: "Web con Turnos Online para Centro de Estética",
            category: "Web App",
            problem: "Turnos desordenados por WhatsApp",
            solution: "Web con reservas automáticas",
            result: "Agenda organizada y menos gestión manual",
            image: "/estetica.png",
            color: "bg-blue-100 text-blue-800",
            hasModal: true,
            detailedTitle: "Web con Turnos Online para Centro de Estética",
            detailedProblem: "El centro gestionaba los turnos por WhatsApp, lo que generaba desorden, demoras en las respuestas y pérdida de reservas.",
            detailedSolution: "Desarrollo de una página web con sistema de turnos y calendario, permitiendo a los clientes reservar de forma automática según disponibilidad.",
            detailedResult: "Turnos organizados en un solo lugar, menos mensajes manuales y una experiencia más clara para clientes y administradores."
        },
        {
            title: "Chatbot WhatsApp (IA + n8n)",
            category: "Chatbot AI",
            problem: "Gestión manual de mensajes, demora en respuestas, pérdida de leads.",
            solution: "Bot en n8n que califica, responde y agenda reuniones. Visualización en Chatwoot.",
            result: "Atención 24/7, agenda llena, 0 pérdida de leads.",
            image: "/chatbot-n8n.png",
            color: "bg-green-100 text-green-800",
            hasModal: true,
            detailedTitle: "Chatbot WhatsApp Inteligente con n8n y Meta API",
            detailedProblem: "El cliente perdía oportunidades de venta por no poder responder consultas fuera de horario laboral o demorar en la atención. Necesitaba filtrar curiosos de clientes reales y centralizar la comunicación.",
            detailedSolution: "Se implementó un flujo automatizado en **n8n** conectando la **API oficial de Meta (WhatsApp)**.\n\n• **IA (OpenAI)** para entender la intención del usuario y responder consultas frecuentes.\n• **Chatwoot** como inbox centralizado para derivar a humanos si es necesario.\n• **Cal.com** para agendar reuniones automáticamente solo con leads calificados.",
            detailedResult: "Sistema totalmente autónomo que atiende, califica y agenda.\n\nEl equipo de ventas pasó de responder preguntas repetitivas a recibir directamente reuniones confirmadas en su calendario."
        },
        {
            title: "Fitbox (E-commerce)",
            category: "E-commerce a Medida",
            problem: "La tienda necesitaba un e-commerce para vender productos personalizados",
            solution: "Desarrollo de e-commerce con WooCommerce y funcionalidades custom.",
            result: "Tienda online con una experiencia de compra flexible y preparada para escalar.",
            image: "/fitbox.png",
            color: "bg-yellow-100 text-yellow-800",
            hasModal: true,
            detailedTitle: "E-commerce a Medida con WooCommerce y Funcionalidades Custom",
            detailedProblem: "El negocio necesitaba vender productos de forma flexible, permitiendo que los clientes armen su propia Fitbox, algo que no se podía resolver con un e-commerce estándar ni con plantillas prearmadas.\n\nAdemás, requería una tienda escalable, fácil de administrar y con una experiencia de compra clara para el usuario.",
            detailedSolution: "Desarrollo completo de un e-commerce con WooCommerce, incorporando secciones y flujos de compra personalizados, como la funcionalidad “Armá tu propia Fitbox”, donde el cliente puede construir su carrito de manera dinámica.\n\nSe implementaron:\n• Lógica de compra custom dentro de WooCommerce\n• Secciones a medida para mejorar la experiencia de usuario\n• Estructura preparada para escalar productos y ventas",
            detailedResult: "E-commerce en producción, funcional y listo para escalar, con una experiencia de compra más intuitiva y flexible que una tienda estándar.\n\n🛒 Los clientes pueden armar su pedido de forma personalizada, mejorando la usabilidad y el proceso de compra."
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
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((project, index) => (
                    <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                        {/* Image Placeholder Area */}
                        <div className="aspect-video w-full bg-neutral-200 relative overflow-hidden">
                            {project.hasModal ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-neutral-800/10 group-hover:bg-neutral-800/0 transition-colors" />
                                    <div className="flex items-center justify-center h-full text-neutral-400 font-mono text-xs">
                                        [Screenshot: {project.title}]
                                    </div>
                                </>
                            )}
                        </div>

                        <CardContent className="p-6 flex flex-col flex-1">
                            <div className="mb-4">
                                <Badge className={project.color} variant="secondary">{project.category}</Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                            <div className="space-y-2 text-sm text-neutral-600 mb-6 flex-1">
                                <p><span className="font-semibold text-neutral-900">Problema:</span> {project.problem}</p>
                                <p><span className="font-semibold text-neutral-900">Solución:</span> {project.solution}</p>
                                <p><span className="font-semibold text-green-600">Resultado:</span> {project.result}</p>
                            </div>

                            {project.hasModal ? (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="flex items-center text-primary font-medium text-sm gap-1 cursor-pointer hover:underline">
                                            Ver detalles <ArrowUpRight className="w-3 h-3" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-white">

                                        <div className="relative w-full aspect-video bg-neutral-100">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-6 md:p-10 space-y-8">
                                            <div>
                                                <Badge className="mb-4 bg-primary text-white hover:bg-primary/90">Caso — Fitbox (E-commerce a medida)</Badge>
                                                <div className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-8 bg-blue-600 rounded-full mt-1 shrink-0" />
                                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                        {project.detailedTitle}
                                                    </h2>
                                                </div>
                                                <p className="mt-2 text-muted-foreground ml-4">
                                                    Claro, profesional y deja explícito que no es una tienda genérica.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-lg font-bold flex items-center gap-2 mb-3 text-red-600">
                                                            ❌ Problema
                                                        </h3>
                                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                            {project.detailedProblem}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-lg font-bold flex items-center gap-2 mb-3 text-blue-600">
                                                            🛠️ Solución
                                                        </h3>
                                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                            {project.detailedSolution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                                <h3 className="text-lg font-bold flex items-center gap-2 mb-3 text-green-700">
                                                    ✅ Resultado
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                                    {project.detailedResult}
                                                </p>
                                            </div>

                                            <div className="text-center pt-4 border-t border-gray-100">
                                                <p className="text-lg font-medium text-gray-900">
                                                    Este tipo de desarrollo se podría aplicar a tu proyecto.
                                                </p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <div className="flex items-center text-primary font-medium text-sm gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                    Ver detalles <ArrowUpRight className="w-3 h-3" />
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
