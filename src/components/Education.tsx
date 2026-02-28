'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
    return (
        <section id="education" className="py-24" style={{ background: '#020817' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="Education"
                        title="Academic Background"
                    />
                </AnimatedSection>

                <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
                    {education.map((edu, i) => (
                        <AnimatedSection key={edu.degree} delay={i * 0.15}>
                            <div
                                className="p-6 rounded-2xl glass flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))' }}
                                >
                                    {edu.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base leading-snug mb-1 group-hover:text-purple-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm font-medium mb-1" style={{ color: '#8b5cf6' }}>
                                        {edu.institution}
                                    </p>
                                    <p className="text-xs" style={{ color: '#64748b' }}>
                                        {edu.university}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <span
                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                        style={{
                                            background: 'rgba(139,92,246,0.1)',
                                            border: '1px solid rgba(139,92,246,0.2)',
                                            color: '#a78bfa',
                                        }}
                                    >
                                        Graduated {edu.year}
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
