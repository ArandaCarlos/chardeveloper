import { Section } from "@/components/ui/section";
import { Rocket, Wallet, Target, MessageCircle } from "lucide-react";

export function WhyChooseMe() {
    const reasons = [
        {
            icon: <Rocket className="w-8 h-8 text-primary" />,
            title: "Entrega Rápida",
            desc: "Uso IA para desarrollar 5-10x más rápido. MVP en semanas, no meses. Tu tiempo vale oro."
        },
        {
            icon: <Wallet className="w-8 h-8 text-primary" />,
            title: "Precio Transparente",
            desc: "Sin sorpresas. Presupuesto fijo desde el inicio. Sabés exactamente cuánto vas a invertir."
        },
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: "Enfocado en Resultados",
            desc: "No vendo código, vendo soluciones que eliminan problemas reales y mejoran tu negocio."
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-primary" />,
            title: "Comunicación Clara",
            desc: "Updates semanales, acceso al proyecto en vivo y respondo en menos de 24hs."
        }
    ];

    return (
        <Section background="gray">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                        ¿Por qué trabajar conmigo?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Combinó la experiencia técnica tradicional con las herramientas de IA más modernas para ofrecer un servicio que las agencias tradicionales no pueden igualar en velocidad y costo.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className="bg-white w-fit p-3 rounded-xl shadow-sm border border-neutral-100 mb-2">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900">{reason.title}</h3>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
