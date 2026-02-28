'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
                    }`}
            >
                <div className="section-container">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold gradient-border p-px">
                                <div className="w-full h-full rounded-lg bg-primary flex items-center justify-center gradient-text text-base font-black">
                                    VP
                                </div>
                            </div>
                            <span className="hidden sm:block text-white font-semibold text-sm">
                                Vinay Pawar
                            </span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${activeSection === link.href.slice(1)
                                            ? 'text-cyan-400 bg-cyan-400/10'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/vinay_pawar_cv.pdf"
                                download
                                className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                            >
                                Resume ↓
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-slate-400 hover:text-white p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 glass pt-20"
                    >
                        <div className="flex flex-col items-center gap-4 pt-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-semibold text-slate-300 hover:text-cyan-400 transition-colors py-2"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="/vinay_pawar_cv.pdf"
                                download
                                onClick={() => setMobileOpen(false)}
                                className="mt-4 px-8 py-3 rounded-xl text-lg font-bold text-white"
                                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
