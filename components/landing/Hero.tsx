"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Globe } from "@/components/landing/Globe";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center">
            {/* 3D Globe Background */}
            <Globe />

            {/* Dark Overlay Gradient to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas-default via-black/40 to-transparent z-0" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-canvas-default z-0" />

            <div className="max-w-[980px] mx-auto px-6 relative z-10 w-full pt-20">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                    </span>
                    <span className="text-[11px] font-medium text-ink-display uppercase tracking-wider">
                        Live Global Network
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-8 text-balance drop-shadow-2xl"
                >
                    The Hub <br />
                    <span className="text-gray-300">Awakens.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-normal tracking-tight"
                >
                    A new dimension of professional guidance. <br />
                    Explore the world's experts in real-time 3D.
                </motion.p>

                {/* Magic Search Dark Mode */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="max-w-2xl relative group"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative bg-black/80 backdrop-blur-xl p-2 rounded-2xl shadow-2xl ring-1 ring-white/10 flex items-center gap-2 transition-transform active:scale-[0.99]">
                        <div className="flex-1 flex items-center px-4 gap-3 border-r border-white/10">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search the globe..."
                                className="w-full h-12 bg-transparent border-none text-lg text-white placeholder:text-gray-500 focus:ring-0 focus:outline-none"
                            />
                        </div>
                        <button className="h-12 w-12 bg-white text-black rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
