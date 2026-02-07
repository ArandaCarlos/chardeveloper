import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden text-center text-white">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl opacity-30 translate-y-1/4 -translate-x-1/4" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    ¿Listo para automatizar tu negocio?
                </h2>
                <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                    Agendá una llamada de 30 minutos sin compromiso. Hablamos de tu proyecto, analizamos la viabilidad y te doy un plan de acción concreto.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <BookingModal>
                        <Button size="lg" className="text-base font-semibold shadow-xl shadow-primary/20">
                            <Calendar className="mr-2 w-5 h-5" /> Agendar Llamada Gratis
                        </Button>
                    </BookingModal>
                    <Button asChild size="lg" variant="outline" className="text-base bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                        <Link href="#contacto">
                            <Mail className="mr-2 w-5 h-5" /> Enviar Email
                        </Link>
                    </Button>
                </div>

                <p className="mt-6 text-sm text-blue-200/60">
                    Respuesta asegurada en menos de 24 horas.
                </p>
            </div>
        </section>
    );
}
