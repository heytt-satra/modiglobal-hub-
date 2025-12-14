"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden">
            <div className="max-w-[980px] mx-auto px-6 relative z-10 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] font-medium text-ink-body uppercase tracking-wider">
                        Verified Professionals Online
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink-display mb-8 text-balance"
                >
                    Expert guidance. <br />
                    <span className="text-ink-subtle">On demand.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-ink-body mb-12 max-w-2xl mx-auto leading-relaxed font-normal tracking-tight text-balance"
                >
                    Connect with trusted doctors, lawyers, and consultants. Private, secure, and instant.
                </motion.p>

                {/* Magic Search */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="max-w-2xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white p-2 rounded-2xl shadow-2xl ring-1 ring-black/5 flex items-center gap-2 transition-transform active:scale-[0.99]">
                        <div className="flex-1 flex items-center px-4 gap-3 border-r border-black/5">
                            <Search className="w-5 h-5 text-ink-subtle" />
                            <input
                                type="text"
                                placeholder="Find a cardiologist, lawyer, etc."
                                className="w-full h-12 bg-transparent border-none text-lg text-ink-display placeholder:text-ink-subtle focus:ring-0 focus:outline-none"
                            />
                        </div>
                        <div className="hidden sm:flex items-center px-4 gap-3 w-1/3">
                            <MapPin className="w-5 h-5 text-ink-subtle" />
                            <input
                                type="text"
                                placeholder="Anywhere"
                                className="w-full h-12 bg-transparent border-none text-base text-ink-display placeholder:text-ink-subtle focus:ring-0 focus:outline-none"
                            />
                        </div>
                        <button className="h-12 w-12 bg-ink-display text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors shrink-0">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* Aurora Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent animate-[spin_120s_linear_infinite]" />
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-50/30 via-transparent to-transparent blur-3xl" />
            </div>
        </section>
    );
}
