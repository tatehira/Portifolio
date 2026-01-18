import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2>{t('about.title')}</h2>
            <div style={{
                background: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '1rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    textAlign: 'justify'
                }}>
                    {t('about.bio')}
                </p>
            </div>
        </section>
    );
};

export default About;
