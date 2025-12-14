"use client";

import { Search, Calendar, Video } from "lucide-react";

const steps = [
    {
        title: "Find.",
        desc: "Search hundreds of verified professionals by specialty or location.",
        icon: Search,
    },
    {
        title: "Book.",
        desc: "Choose a time that works. Secure payments, instant confirmation.",
        icon: Calendar,
    },
    {
        title: "Consult.",
        desc: "High-quality video calls. Private, encrypted, and accessible anywhere.",
        icon: Video,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-canvas-subtle border-t border-black/5">
            <div className="max-w-[980px] mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="group">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-ink-display shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-semibold text-ink-display tracking-tight mb-3">
                                {step.title}
                            </h3>
                            <p className="text-ink-body leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
