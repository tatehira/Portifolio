import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" style={{ position: 'relative' }}>
            <h2 className="text-gradient" style={{ 
                marginBottom: '3rem',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}>
                {t('about.title')}
            </h2>
            <div className="card-hover glass" style={{
                padding: '3rem',
                borderRadius: '1.5rem',
                maxWidth: '1000px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative gradient overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--accent-color), var(--accent-secondary))',
                    borderRadius: '1.5rem 1.5rem 0 0'
                }} />
                
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    lineHeight: '1.9',
                    textAlign: 'justify',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {t('about.bio')}
                </p>
            </div>
        </section>
    );
};

export default About;
