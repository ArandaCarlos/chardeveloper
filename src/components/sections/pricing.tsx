import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$150.000",
            description: "Perfecto para validar una idea o automatizar procesos simples.",
            features: [
                "Dashboard simple o Landing Page",
                "Automatización básica",
                "Hasta 2 semanas desarrollo",
                "2 rondas de ajustes",
                "Deploy + hosting 3 meses",
                "Documentación básica"
            ],
            cta: "Agendar Llamada",
            popular: false
        },
        {
            name: "Business",
            price: "$350.000",
            description: "Ideal para negocios que necesitan sistemas robustos y escalables.",
            features: [
                "Web App Completa",
                "Múltiples automatizaciones",
                "Integraciones complejas",
                "Hasta 4 semanas desarrollo",
                "Iteraciones ilimitadas durante desarrollo",
                "Deploy + hosting 6 meses",
                "Capacitación 1-on-1 team"
            ],
            cta: "Agendar Llamada",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Para startups o empresas que necesitan un partner tecnológico continuo.",
            features: [
                "MVP de Startup",
                "Sistema complejo a medida",
                "Proyecto ongoing / Retainer",
                "Timeline flexible",
                "Equipo dedicado",
                "Soporte prioritario 24/7",
                "Mantenimiento incluido"
            ],
            cta: "Contactar",
            popular: false
        }
    ];

    return (
        <Section id="pricing" background="white">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Planes Simples y Transparentes</h2>
                <p className="text-muted-foreground text-lg">
                    Sin costos ocultos ni "mantenimiento" sorpresa. Pagás por la solución una vez.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className={`flex flex-col relative ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-neutral-200'}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <Badge className="bg-gradient-to-r from-orange-400 to-primary px-3 py-1 flex gap-1">
                                    <Zap className="w-3 h-3 fill-white" /> Más Popular
                                </Badge>
                            </div>
                        )}

                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-neutral-900">{plan.name}</CardTitle>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-black text-secondary">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-neutral-500 font-medium">/proyecto</span>}
                            </div>
                            <CardDescription className="text-base">{plan.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter>
                            <Button
                                variant={plan.popular ? "default" : "outline"}
                                className={`w-full ${plan.popular ? 'shadow-lg shadow-orange-200' : ''}`}
                                size="lg"
                            >
                                {plan.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
