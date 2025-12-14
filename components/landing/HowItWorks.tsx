"use client";

import { Search, Calendar, Video, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Find.",
        desc: "Search hundreds of verified professionals by specialty or location.",
        icon: Search,
        color: "text-blue-400",
        glow: "shadow-[0_0_30px_-5px_rgba(96,165,250,0.6)]",
    },
    {
        title: "Book.",
        desc: "Choose a time that works. Secure payments, instant confirmation.",
        icon: Calendar,
        color: "text-purple-400",
        glow: "shadow-[0_0_30px_-5px_rgba(192,132,252,0.6)]",
    },
    {
        title: "Consult.",
        desc: "High-quality video calls. Private, encrypted, and accessible anywhere.",
        icon: Video,
        color: "text-emerald-400",
        glow: "shadow-[0_0_30px_-5px_rgba(52,211,153,0.6)]",
    },
];

export function HowItWorks() {
    return (
        <section className="py-32 bg-canvas-default relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                        How it works.
                    </h2>
                    <p className="text-xl text-gray-400">
                        A seamless journey from search to solution.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Laser Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Glowing Orb Container */}
                                <div className={`w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 ${step.glow}`}>
                                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current ${step.color}`} />
                                    <step.icon className={`w-10 h-10 ${step.color}`} />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-canvas-subtle border border-white/10 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                                    {step.desc}
                                </p>

                                {/* Mobile Connector */}
                                {i < steps.length - 1 && (
                                    <div className="md:hidden absolute -bottom-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500/30 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
