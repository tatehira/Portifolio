import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2>{t('about.title')}</h2>
            <div className="grid-container" style={{ alignItems: 'start' }}>
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{t('about.experience')}</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li>
                            <h4 style={{ fontSize: '1.2rem' }}>{t('about.devRole')}</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('about.current')}</span>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                                {t('about.devDesc')}
                            </p>
                        </li>
                        <li>
                            <h4 style={{ fontSize: '1.2rem' }}>{t('about.netRole')}</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('about.netExp')}</span>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                                {t('about.netDesc')}
                            </p>
                        </li>
                    </ul>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{t('about.education')}</h3>
                    <div>
                        <h4 style={{ fontSize: '1.2rem' }}>{t('about.eduTitle')}</h4>
                        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            {t('about.eduDesc')}
                        </p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{t('about.languages')}</h4>
                            <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                                {t('about.langDesc')}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid #334155', paddingTop: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t('about.tccTitle')}</h4>
                        <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                            {t('about.tccName')}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            {t('about.tccDesc')}
                        </p>
                        <a href="/TCC_WENDREW_Final.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                            {t('about.readTcc')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
