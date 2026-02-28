'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { projects } from '@/data/portfolio';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    return (
        <section id="projects" className="py-24" style={{ background: '#0a1628' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="Projects"
                        title="Featured Work"
                        subtitle="A selection of impactful projects I've built and shipped in production."
                    />
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.id} delay={i * 0.1}>
                            <div
                                className="h-full rounded-2xl p-6 glass flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 group"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))' }}
                                    >
                                        <span className="text-xl">
                                            {i === 0 ? '🤖' : i === 1 ? '📊' : i === 2 ? '🔒' : '🏦'}
                                        </span>
                                    </div>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/30 group-hover:opacity-100"
                                        style={{
                                            color: '#64748b',
                                            borderColor: 'rgba(255,255,255,0.08)',
                                        }}
                                    >
                                        Live <FiExternalLink size={12} />
                                    </a>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#94a3b8' }}>
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="text-xs px-2.5 py-1 rounded-md"
                                            style={{
                                                background: 'rgba(6,182,212,0.08)',
                                                border: '1px solid rgba(6,182,212,0.15)',
                                                color: '#06b6d4',
                                            }}
                                        >
                                            ✓ {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2.5 py-1 rounded-md font-mono"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                color: '#64748b',
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA to more */}
                <AnimatedSection delay={0.4}>
                    <div className="text-center mt-12">
                        <p className="text-sm mb-4" style={{ color: '#64748b' }}>
                            More projects delivered in enterprise environments — let&apos;s connect to learn more
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 hover:bg-white/5 hover:scale-105"
                            style={{ borderColor: 'rgba(6,182,212,0.3)', color: '#06b6d4' }}
                        >
                            Get In Touch →
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
