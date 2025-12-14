"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Consultants", href: "/find-doctors" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "relative flex items-center justify-between px-6 py-3 transition-all duration-300",
                    "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl",
                    isOpen ? "rounded-[2rem] w-full max-w-md flex-col" : "rounded-full w-auto min-w-[320px] md:min-w-[600px]"
                )}
            >
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <span className="self-center text-sm font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                            Modi Global Hub
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 mx-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block shrink-0">
                        <Link
                            href="/login"
                            className="text-xs font-bold text-black bg-white hover:bg-gray-200 px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-8 h-8 md:hidden text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="w-full overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col gap-4 pt-6 pb-4 w-full text-center">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/login"
                                    className="text-sm font-bold text-black bg-white hover:bg-gray-200 px-6 py-2.5 rounded-full transition-all mt-2 mx-auto w-fit"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign In
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
