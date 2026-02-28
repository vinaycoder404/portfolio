'use client';

import { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { personalInfo } from '@/data/portfolio';
import { FiMail, FiPhone, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactInfo = [
    {
        icon: FiMail,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        color: '#06b6d4',
    },
    {
        icon: FiPhone,
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
        color: '#3b82f6',
    },
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'vinay-pawar-5a4ab1192',
        href: personalInfo.linkedin,
        color: '#8b5cf6',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Mumbai, India',
        href: '#',
        color: '#10b981',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    };

    return (
        <section id="contact" className="py-24" style={{ background: '#0a1628' }}>
            <div className="section-container">
                <AnimatedSection>
                    <SectionHeading
                        badge="Contact"
                        title="Let's Work Together"
                        subtitle="I'm currently open to new opportunities. Whether you have a role, a project, or just want to say hi — reach out!"
                    />
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {/* Left — Info */}
                    <AnimatedSection direction="left">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
                                style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}>
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400 mr-1" />
                                Available for new opportunities
                            </div>

                            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl glass transition-all duration-300 hover:scale-105 group"
                                    style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                                        style={{ background: `${color}18`, border: `1px solid ${color}33` }}
                                    >
                                        <Icon size={18} style={{ color }} />
                                    </div>
                                    <div>
                                        <p className="text-xs mb-0.5" style={{ color: '#64748b' }}>{label}</p>
                                        <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                            {value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right — Form */}
                    <AnimatedSection direction="right" delay={0.1}>
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 rounded-2xl glass space-y-4"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

                            <div>
                                <label className="block text-xs font-medium mb-1.5" style={{ color: '#94a3b8' }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-1.5" style={{ color: '#94a3b8' }}>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-1 focus:ring-cyan-500"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-1.5" style={{ color: '#94a3b8' }}>
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Hi Vinay, I'd like to discuss..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none resize-none transition-all focus:ring-1 focus:ring-cyan-500"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
                            >
                                <FiSend size={16} />
                                Send Message
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
