import { useTranslation } from 'react-i18next';
import tatehiraLogo from '../assets/tatehira-dev-logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="contact" style={{
            background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--card-bg) 100%)',
            padding: '5rem 1rem',
            textAlign: 'center',
            marginTop: '4rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                borderRadius: '2px'
            }} />

            <h2 className="text-gradient" style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {t('footer.title')}
            </h2>
            <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '3rem', 
                maxWidth: '700px', 
                margin: '0 auto 3rem',
                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                lineHeight: '1.8',
                position: 'relative',
                zIndex: 1
            }}>
                {t('footer.description')}
            </p>

            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1.5rem', 
                marginBottom: '4rem', 
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 1
            }}>
                <a 
                    href="https://www.linkedin.com/in/nick-tatehira/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ minWidth: '140px' }}
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/tatehira" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ minWidth: '140px' }}
                >
                    GitHub
                </a>
                <a 
                    href="mailto:nickdebian@outlook.com" 
                    className="btn" 
                    style={{ minWidth: '140px' }}
                >
                    {t('footer.sendEmail')}
                </a>
            </div>

            <div style={{ 
                borderTop: '1px solid var(--border-color)', 
                paddingTop: '2.5rem', 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1
            }}>
                <p style={{ margin: 0 }}>
                    &copy; {new Date().getFullYear()} Nick Tatehira. {t('footer.rights')}
                </p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    opacity: 0.9,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '1rem',
                    background: 'rgba(56, 189, 248, 0.05)',
                    border: '1px solid var(--border-color)'
                }}>
                    <span>Developed by</span>
                    <strong style={{ 
                        color: 'var(--accent-color)',
                        fontWeight: '600'
                    }}>
                        Tatehira Dev
                    </strong>
                    <img 
                        src={tatehiraLogo} 
                        alt="Tatehira Dev Logo" 
                        style={{ 
                            height: '24px', 
                            width: 'auto',
                            filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))'
                        }} 
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
