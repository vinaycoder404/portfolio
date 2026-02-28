'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '@/data/portfolio';

const socialLinks = [
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const codeLines = [
    { text: 'const developer = {', color: '#94a3b8' },
    { text: "  name: 'Vinay Pawar',", color: '#06b6d4' },
    { text: "  role: 'Full Stack Developer',", color: '#3b82f6' },
    { text: "  exp: '6+ years',", color: '#8b5cf6' },
    { text: "  stack: ['React', 'Node', 'Next.js'],", color: '#06b6d4' },
    { text: "  open_to_work: true,", color: '#34d399' },
    { text: '};', color: '#94a3b8' },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center dot-bg overflow-hidden"
        >
            {/* Gradient orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
            />
            <div
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', animationDelay: '2s' }}
            />
            <div
                className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-5"
                style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
            />

            <div className="section-container w-full py-24 pt-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Text */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border text-sm font-medium"
                            style={{
                                background: 'rgba(52,211,153,0.1)',
                                borderColor: 'rgba(52,211,153,0.3)',
                                color: '#34d399',
                            }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            Open to New Opportunities
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-3"
                        >
                            Hi, I&apos;m{' '}
                            <span className="gradient-text block">Vinay Pawar</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-xl md:text-2xl font-medium mb-6"
                            style={{ color: '#94a3b8' }}
                        >
                            Full Stack Developer &middot;{' '}
                            <span style={{ color: '#06b6d4' }}>6+ Years Experience</span>
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Specializing in <strong className="text-white">React, Next.js & Node.js</strong>.
                            I build scalable, production-grade applications with AI integration experience across
                            fintech and e-commerce domains.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                            >
                                View My Work →
                            </a>
                            <a
                                href="/vinay_pawar_cv.pdf"
                                download
                                className="px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 hover:bg-white/5"
                                style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#f8fafc' }}
                            >
                                Download CV ↓
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                            className="flex items-center gap-4"
                        >
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-cyan-400"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        color: '#94a3b8',
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                            <div className="h-px w-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-sm transition-colors hover:text-cyan-400"
                                style={{ color: '#94a3b8' }}
                            >
                                {personalInfo.email}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right — Code terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="hidden lg:block"
                    >
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                background: 'rgba(15,23,42,0.8)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Terminal title bar */}
                            <div
                                className="flex items-center gap-2 px-5 py-4"
                                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}
                            >
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-4 text-xs font-mono" style={{ color: '#475569' }}>
                                    portfolio.ts
                                </span>
                            </div>
                            {/* Code lines */}
                            <div className="p-6 font-mono text-sm leading-relaxed">
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.12 }}
                                        style={{ color: line.color }}
                                    >
                                        {line.text}
                                    </motion.div>
                                ))}
                                {/* Blinking cursor */}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block w-2 h-5 mt-2 rounded-sm"
                                    style={{ background: '#06b6d4' }}
                                />
                            </div>

                            {/* Stats strip */}
                            <div
                                className="grid grid-cols-3 gap-0 border-t"
                                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                            >
                                {[
                                    { val: '6+', label: 'Years Exp' },
                                    { val: '10+', label: 'Projects' },
                                    { val: '5+', label: 'Companies' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center py-4 border-r last:border-r-0"
                                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                                    >
                                        <div className="text-2xl font-black gradient-text">{stat.val}</div>
                                        <div className="text-xs mt-1" style={{ color: '#475569' }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-widest uppercase" style={{ color: '#475569' }}>
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FiArrowDown size={16} style={{ color: '#06b6d4' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
