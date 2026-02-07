"use client";

import { useCurrency } from "@/context/currency-context";
import { Skeleton } from "@/components/ui/skeleton";

interface PriceDisplayProps {
    amount: number;
    prefix?: string;
    suffix?: string;
    className?: string; // To allow custom styling if needed
}

export function PriceDisplay({ amount, prefix = "", suffix = "", className = "" }: PriceDisplayProps) {
    const { currency, rate, isLoading } = useCurrency();

    if (isLoading && currency === "ARS") {
        return <Skeleton className="h-6 w-20 inline-block align-middle" />;
    }

    let displayedAmount = "";
    let displayedPrefix = prefix;

    if (currency === "USD") {
        displayedAmount = amount.toLocaleString("en-US");
        // Ensure $ sign if prefix is mostly used for it, or rely on passed prefix
        if (!prefix.includes("$")) {
            displayedPrefix = "$" + prefix;
        }
    } else {
        // ARS
        const valueInArs = amount * rate;
        displayedAmount = valueInArs.toLocaleString("es-AR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
        displayedPrefix = "AR$ ";
    }

    return (
        <span className={className}>
            {displayedPrefix}{displayedAmount}{suffix}
        </span>
    );
}
