import Link from "next/link";

const footerLinks = {
    Services: ["Medical", "Legal", "Accounting", "Consulting"],
    Company: ["About Us", "Careers", "Press", "Partners"],
    Support: ["Help Center", "Safety Center", "Community Guidelines"],
    Legal: ["Cookies", "Privacy", "Terms", "Law Enforcement"],
};

export function Footer() {
    return (
        <footer className="bg-canvas-subtle pt-24 pb-12">
            <div className="max-w-[980px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-[12px] font-semibold text-ink-display uppercase tracking-wider mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-[12px] text-ink-body hover:text-ink-display hover:underline transition-colors block"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <span className="text-[12px] text-ink-subtle">
                            © {new Date().getFullYear()} Modi Global Hub.
                        </span>
                        <div className="flex gap-4">
                            <Link href="#" className="text-[12px] text-ink-subtle hover:text-ink-body">Privacy Policy</Link>
                            <Link href="#" className="text-[12px] text-ink-subtle hover:text-ink-body">Terms of Use</Link>
                        </div>
                    </div>
                    <span className="text-[12px] text-ink-subtle">
                        Ahmedabad, Gujarat, India
                    </span>
                </div>
            </div>
        </footer>
    );
}
