import { personalInfo } from '@/data/portfolio';
import { FiMail, FiLinkedin, FiHeart } from 'react-icons/fi';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            className="py-10 border-t"
            style={{ background: '#020817', borderColor: 'rgba(255,255,255,0.05)' }}
        >
            <div className="section-container">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black gradient-text"
                            style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))' }}
                        >
                            VP
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">{personalInfo.name}</p>
                            <p className="text-xs" style={{ color: '#475569' }}>Full Stack Developer</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs flex items-center gap-1.5" style={{ color: '#475569' }}>
                        Made with <FiHeart size={12} style={{ color: '#ef4444' }} /> · © {year} Vinay Pawar
                    </p>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:text-cyan-400 hover:scale-110"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                color: '#64748b',
                            }}
                            aria-label="Email"
                        >
                            <FiMail size={15} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:text-blue-400 hover:scale-110"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                color: '#64748b',
                            }}
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
