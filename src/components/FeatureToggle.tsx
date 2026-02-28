import { motion } from "framer-motion";
import { useState } from "react";

export const features = [
    "AI Design Search",
    "Moodboard Builder",
    "AI Design Audit",
    "Brand Scanner",
    "Creator Studio",
    "Live Collaboration",
];

interface FeatureToggleProps {
    activeFeature: string;
    onFeatureChange: (feature: string) => void;
}

const FeatureToggle = ({ activeFeature, onFeatureChange }: FeatureToggleProps) => {
    return (
        <div className="relative inline-flex items-center bg-[#F1F3F5] rounded-pill p-1 shadow-sm overflow-hidden md:overflow-visible overflow-x-auto no-scrollbar max-w-full">
            {features.map((feature) => {
                const isActive = activeFeature === feature;
                return (
                    <button
                        key={feature}
                        onClick={() => onFeatureChange(feature)}
                        className={`relative z-10 px-6 py-3.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-pill ${isActive ? "text-white" : "text-[#7D8994] hover:text-[#1A1A1A]"
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activePod"
                                className="absolute inset-0 bg-[#001A2C] rounded-pill -z-10 shadow-[0_4px_12px_rgba(0,26,44,0.25)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {feature}
                    </button>
                );
            })}
        </div>
    );
};

export default FeatureToggle;
