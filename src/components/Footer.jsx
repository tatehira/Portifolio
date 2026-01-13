import { useTranslation } from 'react-i18next';
import tatehiraLogo from '../assets/tatehira-dev-logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="contact" style={{
            background: 'var(--card-bg)',
            padding: '4rem 1rem',
            textAlign: 'center',
            marginTop: '4rem'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('footer.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                {t('footer.description')}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/nick-tatehira/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ minWidth: '120px' }}>
                    LinkedIn
                </a>
                <a href="https://github.com/tatehira" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ minWidth: '120px' }}>
                    GitHub
                </a>
                <a href="mailto:nickdebian@outlook.com" className="btn" style={{ minWidth: '120px' }}>
                    {t('footer.sendEmail')}
                </a>
            </div>

            <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <p>&copy; {new Date().getFullYear()} Nick Tatehira. {t('footer.rights')}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                    <span>Developed by</span>
                    <strong style={{ color: 'var(--accent-color)' }}>Tatehira Dev</strong>
                    <img src={tatehiraLogo} alt="Tatehira Dev Logo" style={{ height: '20px', width: 'auto' }} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
