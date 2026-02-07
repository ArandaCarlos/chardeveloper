import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    background?: "white" | "gray" | "dark" | "gradient";
}

export function Section({ id, className, children, background = "white" }: SectionProps) {
    const backgrounds = {
        white: "bg-white",
        gray: "bg-neutral-50/50",
        dark: "bg-secondary text-white",
        gradient: "bg-gradient-to-br from-white to-orange-50",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                backgrounds[background],
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
