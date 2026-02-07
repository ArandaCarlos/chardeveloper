"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { CALENDAR_URL } from "@/lib/constants";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface BookingModalProps {
    children: React.ReactNode;
}

export function BookingModal({ children }: BookingModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[700px] h-[80vh] p-0 overflow-hidden bg-white border-none rounded-xl">
                <DialogTitle className="sr-only">Agendar Llamada</DialogTitle>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                )}
                <iframe
                    src={CALENDAR_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Agendar Llamada"
                    onLoad={() => setIsLoading(false)}
                    className="w-full h-full"
                />
            </DialogContent>
        </Dialog>
    );
}
