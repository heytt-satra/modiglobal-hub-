"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Consultants", href: "/find-doctors" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 top-0 start-0 transition-all duration-300",
                scrolled
                    ? "bg-white/70 backdrop-blur-xl border-b border-black/5"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="max-w-[980px] mx-auto flex items-center justify-between px-6 h-14">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="self-center text-lg font-semibold tracking-tight text-ink-display group-hover:opacity-70 transition-opacity">
                        Modi Global Hub
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[12px] font-medium text-ink-body hover:text-ink-display transition-colors tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/login"
                        className="text-[12px] font-medium text-white bg-ink-display hover:bg-black/90 px-4 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 w-8 h-8 md:hidden text-ink-body hover:bg-black/5 rounded-full transition-colors"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "md:hidden absolute top-14 left-0 w-full bg-white border-b border-black/5 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
                id="mobile-menu"
            >
                <div className="px-6 py-8 space-y-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-2xl font-semibold text-ink-display tracking-tight"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-black/5">
                        <Link
                            href="/login"
                            className="block w-full text-center text-sm font-medium text-white bg-accent hover:bg-blue-600 px-6 py-3 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
