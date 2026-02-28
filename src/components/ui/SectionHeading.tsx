interface SectionHeadingProps {
    badge: string;
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
    return (
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}>
                {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
            {subtitle && (
                <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
