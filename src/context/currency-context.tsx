"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Currency = "USD" | "ARS";

interface CurrencyContextType {
    currency: Currency;
    toggleCurrency: () => void;
    rate: number; // Dolar Blue sell rate
    isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrency] = useState<Currency>("USD");
    const [rate, setRate] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRate() {
            try {
                const response = await fetch("https://dolarapi.com/v1/dolares/blue");
                const data = await response.json();
                // data.venta is the sell rate
                setRate(data.venta);
            } catch (error) {
                console.error("Failed to fetch dollar rate:", error);
                // Fallback or error handling could go here. 
                // For now, we might leave rate as 0 or a default fallback if desired.
            } finally {
                setIsLoading(false);
            }
        }

        fetchRate();
    }, []);

    const toggleCurrency = () => {
        setCurrency((prev) => (prev === "USD" ? "ARS" : "USD"));
    };

    return (
        <CurrencyContext.Provider value={{ currency, toggleCurrency, rate, isLoading }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
