import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart3, Zap, Workflow } from "lucide-react";
import { PriceDisplay } from "@/components/price-display";

export function Services() {
    const services = [
        {
            icon: <BarChart3 className="w-10 h-10 text-primary mb-4" />,
            title: "Dashboards & Web Apps",
            description: "Dashboards interactivos y aplicaciones web custom que te dan control total de tu negocio en tiempo real. Deja de depender de excels desactualizados.",
            price: 500,
            delay: 0
        },
        {
            icon: <Zap className="w-10 h-10 text-primary mb-4" />,
            title: "Automatizaciones Inteligentes",
            description: "Eliminá tareas repetitivas conectando tus sistemas. WhatsApp, Email, CRM, Facturación AFIP, todo automatizado para que te enfoques en vender.",
            price: 300,
            delay: 100
        },
        {
            icon: <Workflow className="w-10 h-10 text-primary mb-4" />,
            title: "Integraciones & APIs",
            description: "Conectá Mercado Libre, Shopify, ERPs y bases de datos. Hacé que tus sistemas hablen entre sí para un flujo de datos sin errores manuales.",
            price: 400,
            delay: 200
        }
    ];

    return (
        <Section id="servicios" background="gray">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Soluciones a Medida</h2>
                <p className="text-muted-foreground text-lg">
                    No vendo solo código, construyo sistemas que ahorran tiempo y aumentan la rentabilidad de tu negocio.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-white"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                        <CardHeader>
                            <div className="bg-orange-50 w-fit p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                                {service.icon}
                            </div>
                            <CardTitle className="mb-2">{service.title}</CardTitle>
                            <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-semibold text-primary/80 bg-primary/5 w-fit px-3 py-1 rounded-full">
                                Desde <PriceDisplay amount={service.price} />
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
