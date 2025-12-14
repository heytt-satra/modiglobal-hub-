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
        color: "bg-blue-500",
        href: "/category/medical",
        colSpan: "md:col-span-2",
    },
    {
        title: "Legal Advice",
        desc: "Verified advocates.",
        icon: Scale,
        color: "bg-indigo-500",
        href: "/category/legal",
        colSpan: "md:col-span-1",
    },
    {
        title: "Accounting",
        desc: "Tax & finance.",
        icon: Calculator,
        color: "bg-emerald-500",
        href: "/category/accounting",
        colSpan: "md:col-span-1",
    },
    {
        title: "All Categories",
        desc: "Explore 30+ service types available.",
        icon: ArrowUpRight,
        color: "bg-slate-500",
        href: "/all-services",
        colSpan: "md:col-span-2",
    },
];

export function Categories() {
    return (
        <section className="py-24 bg-white relative z-10">
            <div className="max-w-[980px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-ink-display">
                        Browse by category.
                    </h2>
                    <p className="text-xl text-ink-subtle mt-2">
                        Find the right professional for your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className={cn("block h-full", service.colSpan)}
                        >
                            <Spotlight className="h-full rounded-[2rem] p-8 transition-shadow hover:shadow-2xl hover:shadow-black/5">
                                <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                                    <div>
                                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm", service.color)}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-ink-display tracking-tight mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-ink-body font-medium leading-relaxed max-w-[80%]">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <ArrowUpRight className="w-5 h-5 text-ink-display" />
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
