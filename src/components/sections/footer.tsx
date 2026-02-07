import { Code2, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { SiTiktok } from "react-icons/si";


export function Footer() {
    return (
        <footer className="bg-white border-t py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-secondary">
                            <Code2 className="h-6 w-6 text-primary" />
                            <span>DevFreelance<span className="text-primary">.ai</span></span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Automatizando el futuro, línea de código a la vez.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link>
                        <Link href="#casos" className="hover:text-primary transition-colors">Casos de Estudio</Link>
                        <Link href="#proceso" className="hover:text-primary transition-colors">Proceso</Link>
                        <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/arandacarlosdamian/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://www.instagram.com/char.developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-all"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@char.developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-all"
                        >
                            <SiTiktok className="w-5 h-5" />
                        </Link>

                    </div>


                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-neutral-400">
                    © {new Date().getFullYear()} chardeveloper.com.ar | Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
