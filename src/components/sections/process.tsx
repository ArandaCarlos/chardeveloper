import { Section } from "@/components/ui/section";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            desc: "Entiendo tu problema, objetivos y necesidades específicas. 30 min gratis.",
            icon: <MessageSquare className="w-6 h-6" />
        },
        {
            number: "02",
            title: "Propuesta",
            desc: "Te envío un scope completo, timeline realista y precio transparente en 48hs.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            number: "03",
            title: "Desarrollo",
            desc: "Iteraciones semanales. Podés ver el progreso en vivo mientras construyo.",
            icon: <Code className="w-6 h-6" />
        },
        {
            number: "04",
            title: "Deploy",
            desc: "Subo a producción, configuro todo y te enseño a usar tu nuevo sistema.",
            icon: <Rocket className="w-6 h-6" />
        }
    ];

    return (
        <Section id="proceso" background="dark" className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cómo Trabajamos</h2>
                <p className="text-blue-200 text-lg">
                    Un proceso simple y transparente, sin tecnicismos innecesarios ni demoras sorpresa.
                </p>
            </div>

            <div className="relative grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 group">
                        <div className="mb-6 relative h-20 flex items-end">
                            {/* Number Background */}
                            <span className="text-8xl font-black text-white/5 absolute -top-10 left-0 select-none transition-transform group-hover:scale-110 duration-500 ease-out z-0">
                                {step.number}
                            </span>

                            {/* Icon */}
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary backdrop-blur-sm border border-white/10 relative z-10 ml-4 group-hover:-translate-y-2 transition-transform duration-300">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                        <p className="text-blue-100/80 leading-relaxed text-sm relative z-10">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
