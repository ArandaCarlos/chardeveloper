import { Section } from "@/components/ui/section";

export function TechStack() {
    const techs = [
        "Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "n8n", "Python", "OpenAI", "Claude AI"
    ];

    return (
        <Section background="white" className="border-b">
            <div className="text-center mb-10">
                <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                    Stack moderno que uso para desarrollar 5-10x más rápido
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder text for logos - normally would be SVG images */}
                {techs.map((tech) => (
                    <div key={tech} className="text-xl md:text-2xl font-bold text-neutral-400 hover:text-neutral-800 transition-colors cursor-default">
                        {tech}
                    </div>
                ))}
            </div>
        </Section>
    );
}
