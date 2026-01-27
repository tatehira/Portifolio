import userPhoto from '../Imagens/EU.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '80px',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                animation: 'float 8s ease-in-out infinite reverse',
                zIndex: 0
            }} />

            <div className="fade-in hero-content" style={{ position: 'relative', zIndex: 1 }}>
                <div className="float" style={{
                    width: '220px',
                    height: '220px',
                    margin: '0 auto 2rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid transparent',
                    background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
                    padding: '4px',
                    boxShadow: '0 0 40px rgba(56, 189, 248, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        background: 'var(--bg-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={userPhoto}
                            alt="Nick Tatehira"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <h2 style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--text-secondary)', 
                    marginBottom: '1rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '3px',
                    fontWeight: '600',
                    animation: 'fadeIn 1s ease-out 0.2s both'
                }}>
                    {t('hero.greeting')}
                </h2>
                <h1 className="text-gradient glow-text" style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    animation: 'fadeIn 1s ease-out 0.4s both'
                }}>
                    Nick Tatehira
                </h1>
                <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
                    color: 'var(--text-secondary)', 
                    marginBottom: '2rem',
                    fontWeight: '500',
                    animation: 'fadeIn 1s ease-out 0.6s both'
                }}>
                    {t('hero.role')}
                </h3>
                <p style={{ 
                    maxWidth: '700px', 
                    margin: '0 auto 3rem', 
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    animation: 'fadeIn 1s ease-out 0.8s both'
                }}>
                    {t('hero.description')}
                </p>
                <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap',
                    animation: 'fadeIn 1s ease-out 1s both'
                }}>
                    <a href="#projects" className="btn">{t('hero.viewProjects')}</a>
                    <a href="#contact" className="btn btn-outline">{t('hero.contactMe')}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
