'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { experiences, companies } from '@/data/portfolio';
import { FiExternalLink, FiBriefcase } from 'react-icons/fi';

const companyColors: Record<string, string> = {
    cimpress: '#06b6d4',
    acc: '#8b5cf6',
};

export default function Experience() {
    return (
        <section id="experience" className="py-24" style={{ background: '#020817' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="Experience"
                        title="Work History"
                        subtitle="6+ years — 2 companies, multiple client engagements in fintech and banking."
                    />
                </AnimatedSection>

                {/* Company pills */}
                <AnimatedSection delay={0.05}>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        {companies.map((c) => (
                            <div
                                key={c.id}
                                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass"
                                style={{ border: `1px solid ${c.color}30` }}
                            >
                                <FiBriefcase size={14} style={{ color: c.color }} />
                                <div>
                                    <span className="text-sm font-semibold text-white">{c.name}</span>
                                    <span
                                        className="ml-2 text-xs"
                                        style={{ color: c.color }}
                                    >
                                        {c.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    <div
                        className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
                        style={{ background: 'linear-gradient(to bottom, #06b6d4, #8b5cf6, transparent)' }}
                    />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => {
                            const color = companyColors[exp.companyId] || '#06b6d4';
                            return (
                                <AnimatedSection key={exp.id} delay={i * 0.08}>
                                    <div className="flex gap-6">
                                        {/* Timeline dot */}
                                        <div className="hidden sm:flex flex-col items-center shrink-0">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10"
                                                style={{
                                                    background: `linear-gradient(135deg, ${color}cc, ${color}66)`,
                                                    boxShadow: `0 0 18px ${color}40`,
                                                    border: `2px solid ${color}50`,
                                                }}
                                            >
                                                {i + 1}
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className="flex-1 rounded-2xl p-6 glass transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                                            style={{ border: `1px solid ${color}15` }}
                                        >
                                            {/* Company badge */}
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                                                <span
                                                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                                                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                                                >
                                                    {exp.company}
                                                </span>
                                                <span
                                                    className="text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                                                    style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b' }}
                                                >
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            {/* Project / role */}
                                            <div className="flex items-center justify-between gap-3 mt-3 mb-4">
                                                <div>
                                                    <h3
                                                        className="text-base font-bold text-white group-hover:transition-colors"
                                                        style={{ transition: 'color 0.2s' }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                                                        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                                                    >
                                                        {exp.project}
                                                    </h3>
                                                    <p className="text-sm mt-0.5" style={{ color: '#64748b' }}>
                                                        Role: <span className="text-slate-400">{exp.role}</span>
                                                    </p>
                                                </div>
                                                {exp.link && (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="shrink-0 flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
                                                        style={{ color: '#64748b', borderColor: 'rgba(255,255,255,0.08)' }}
                                                        aria-label="Visit site"
                                                    >
                                                        Live <FiExternalLink size={11} />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Bullets */}
                                            <ul className="space-y-2 mb-4">
                                                {exp.description.map((point, j) => (
                                                    <li key={j} className="flex gap-2 text-sm" style={{ color: '#94a3b8' }}>
                                                        <span
                                                            className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                                                            style={{ background: color }}
                                                        />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs px-2.5 py-1 rounded-md font-mono"
                                                        style={{
                                                            background: 'rgba(255,255,255,0.04)',
                                                            border: '1px solid rgba(255,255,255,0.07)',
                                                            color: '#64748b',
                                                        }}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
