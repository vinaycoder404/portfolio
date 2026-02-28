'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { skills } from '@/data/portfolio';

const categoryColors: Record<string, string> = {
    Frontend: 'rgba(6,182,212,0.15)',
    Backend: 'rgba(59,130,246,0.15)',
    Database: 'rgba(139,92,246,0.15)',
    DevOps: 'rgba(16,185,129,0.15)',
    Tools: 'rgba(245,158,11,0.15)',
    AI: 'rgba(236,72,153,0.15)',
};

const categoryBorder: Record<string, string> = {
    Frontend: 'rgba(6,182,212,0.3)',
    Backend: 'rgba(59,130,246,0.3)',
    Database: 'rgba(139,92,246,0.3)',
    DevOps: 'rgba(16,185,129,0.3)',
    Tools: 'rgba(245,158,11,0.3)',
    AI: 'rgba(236,72,153,0.3)',
};

const categoryText: Record<string, string> = {
    Frontend: '#06b6d4',
    Backend: '#3b82f6',
    Database: '#8b5cf6',
    DevOps: '#10b981',
    Tools: '#f59e0b',
    AI: '#ec4899',
};

export default function Skills() {
    return (
        <section id="skills" className="py-24" style={{ background: '#0a1628' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="Skills"
                        title="Tech Stack & Expertise"
                        subtitle="Technologies I've worked with across 6+ years of building production applications."
                    />
                </AnimatedSection>

                {/* Proficient */}
                <AnimatedSection delay={0.1}>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                                style={{ color: '#06b6d4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                                Proficient
                            </span>
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.proficient.map((skill, i) => (
                                <AnimatedSection key={skill.name} delay={0.05 + i * 0.03}>
                                    <span
                                        className="skill-tag px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                                        style={{
                                            background: categoryColors[skill.category] || 'rgba(255,255,255,0.05)',
                                            border: `1px solid ${categoryBorder[skill.category] || 'rgba(255,255,255,0.1)'}`,
                                            color: categoryText[skill.category] || '#94a3b8',
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Familiar */}
                <AnimatedSection delay={0.2}>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                                style={{ color: '#8b5cf6', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                                Familiar
                            </span>
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.familiar.map((skill, i) => (
                                <AnimatedSection key={skill.name} delay={0.05 + i * 0.06}>
                                    <span
                                        className="skill-tag px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                                        style={{
                                            background: categoryColors[skill.category] || 'rgba(255,255,255,0.05)',
                                            border: `1px solid ${categoryBorder[skill.category] || 'rgba(255,255,255,0.1)'}`,
                                            color: categoryText[skill.category] || '#94a3b8',
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Soft Skills */}
                <AnimatedSection delay={0.3}>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                                style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                                Soft Skills
                            </span>
                            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.soft.map((skill) => (
                                <span
                                    key={skill}
                                    className="skill-tag px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                                    style={{
                                        background: 'rgba(245,158,11,0.1)',
                                        border: '1px solid rgba(245,158,11,0.25)',
                                        color: '#f59e0b',
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
