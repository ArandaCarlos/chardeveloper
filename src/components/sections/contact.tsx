"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setIsSuccess(true);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contacto" background="white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Hablemos de tu Proyecto</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Completá el formulario o escribime directamente. Te respondo en menos de 24 horas.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                    <Card className="border-none shadow-xl bg-white">
                        <CardContent className="p-6 md:p-8">
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-gray-500 max-w-md">
                                        Gracias por contactarme. Revisaré tu consulta y te responderé lo antes posible.
                                    </p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8">
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nombre</Label>
                                            <Input id="name" name="name" placeholder="Tu nombre" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service">Me interesa...</Label>
                                        <Select name="service" defaultValue="web-app">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccioná una opción" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white">
                                                <SelectItem value="web-app">Web App / Dashboard</SelectItem>
                                                <SelectItem value="automation">Automatización</SelectItem>
                                                <SelectItem value="integration">Integración / API</SelectItem>
                                                <SelectItem value="other">Otro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensaje</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Contame un poco sobre tu proyecto o necesidad..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            "Enviando..."
                                        ) : (
                                            <>
                                                Enviar Mensaje <Send className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
