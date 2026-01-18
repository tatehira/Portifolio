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
            flexDirection: 'column'
        }}>
            <div className="fade-in hero-content">
                <div style={{
                    width: '200px',
                    height: '200px',
                    margin: '0 auto 1rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid var(--accent-color)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                }}>
                    <img
                        src={userPhoto}
                        alt="Nick Tatehira"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {t('hero.greeting')}
                </h2>
                <h1 className="text-gradient" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    Nick Tatehira
                </h1>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {t('hero.role')}
                </h3>
                <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    {t('hero.description')}
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn">{t('hero.viewProjects')}</a>
                    <a href="#contact" className="btn btn-outline">{t('hero.contactMe')}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
