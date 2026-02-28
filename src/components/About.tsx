'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { personalInfo } from '@/data/portfolio';

const highlights = [
    { icon: '🚀', label: '6+ Years of Experience', desc: 'Full-stack JavaScript development' },
    { icon: '🤖', label: 'AI / LLM Integration', desc: 'Reduced manual work by 60–70%' },
    { icon: '🏦', label: 'Fintech & Banking', desc: 'Axis Bank, Angel Broking, IndusInd' },
    { icon: '👥', label: 'Team Leadership', desc: 'Led teams of 3–4 developers' },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative" style={{ background: '#020817' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="About Me"
                        title="Passionate Engineer. Problem Solver."
                        subtitle="Building high-impact products with modern web technologies."
                    />
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Bio */}
                    <AnimatedSection direction="left">
                        <div className="space-y-5">
                            <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
                                Hi! I&apos;m <span className="text-white font-semibold">Vinay Pawar</span>, a Full Stack Developer
                                based in Mumbai with <span className="text-cyan-400 font-semibold">6+ years</span> of experience
                                building scalable, production-ready web applications.
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                                I specialize in the JavaScript ecosystem — <strong className="text-slate-300">React, Next.js,
                                    and Node.js</strong> — and have delivered enterprise solutions for the banking and fintech sectors.
                                Most recently at <strong className="text-slate-300">Cimpress / National Pens</strong>, I led
                                development of an AI-powered Artwork Review system, integrating LLMs to transform internal
                                workflows and drastically reduce manual effort.
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                                I&apos;ve built everything from secure API gateways for Axis Bank, to developer portals for
                                IndusInd&apos;s Open Banking platform, to trading API platforms for Angel Broking (Angel One).
                            </p>

                            <div className="flex flex-wrap gap-3 pt-4">
                                <a
                                    href="#contact"
                                    className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                                    style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                                >
                                    Hire Me
                                </a>
                                <a
                                    href="/vinay_pawar_cv.pdf"
                                    download
                                    className="px-5 py-2.5 rounded-lg font-semibold text-sm border transition-all duration-300 hover:bg-white/5"
                                    style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#f8fafc' }}
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right — Highlights */}
                    <AnimatedSection direction="right" delay={0.1}>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, i) => (
                                <AnimatedSection key={item.label} delay={0.1 + i * 0.08}>
                                    <div
                                        className="p-5 rounded-xl glass transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-default"
                                        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                    >
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                                            {item.label}
                                        </h3>
                                        <p className="text-xs" style={{ color: '#64748b' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
