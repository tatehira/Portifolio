import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false); // Close menu on mobile when changing language
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={{
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none'
        }}>
            <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: 'var(--accent-color)',
                background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                Nick<span style={{ color: 'var(--text-primary)' }}>Tatehira</span>
            </div>

            <div
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
            >
                {isMenuOpen ? '✕' : '☰'}
            </div>

            <nav>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('header.projects')}</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a></li>
                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                        <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>|</span>
                        <button
                            onClick={() => changeLanguage('pt')}
                            className={i18n.language === 'pt' ? 'lang-btn active' : 'lang-btn'}
                            title="Português"
                        >
                            PT
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'}
                            title="English"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            className={i18n.language === 'es' ? 'lang-btn active' : 'lang-btn'}
                            title="Español"
                        >
                            ES
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
