"use client";

import Link from "next/link";
import { Stethoscope, Scale, Calculator, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

const services = [
    {
        title: "Medical",
        desc: "Instant video consultations with top specialists.",
        icon: Stethoscope,
        color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
        href: "/category/medical",
        colSpan: "md:col-span-2",
    },
    {
        title: "Legal Advice",
        desc: "Verified advocates.",
        icon: Scale,
        color: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
        href: "/category/legal",
        colSpan: "md:col-span-1",
    },
    {
        title: "Accounting",
        desc: "Tax & finance.",
        icon: Calculator,
        color: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
        href: "/category/accounting",
        colSpan: "md:col-span-1",
    },
    {
        title: "All Categories",
        desc: "Explore 30+ service types available.",
        icon: ArrowUpRight,
        color: "bg-zinc-800 text-zinc-400 border-zinc-700",
        href: "/all-services",
        colSpan: "md:col-span-2",
    },
];

export function Categories() {
    return (
        <section className="py-32 relative z-10 bg-canvas-default">
            <div className="max-w-[980px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white">
                        Explore the Hub.
                    </h2>
                    <p className="text-xl text-gray-300 mt-2">
                        Interconnected services for a digital world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className={cn("block h-full group", service.colSpan)}
                        >
                            <Spotlight className="h-full rounded-[2rem] p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                                    <div>
                                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 shadow-none", service.color)}>
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 font-medium leading-relaxed max-w-[90%]">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                            <ArrowUpRight className="w-6 h-6 text-black" />
                                        </div>
                                    </div>
                                </div>
                            </Spotlight>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
