import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Agrix - Pecuária",
            description: t('projects.agrixDesc'),
            role: t('about.devRole'),
            link: "https://lbrit.com.br/agrix-gestao-agro/#modulos-pecuaria",
            tags: ["Gestão Agropecuária", "Regras de Negócio", "Enterprise"]
        },
        {
            title: "Gestão de Dívidas",
            description: t('projects.debtDesc'),
            role: "Co-Author / Developer",
            link: "https://dividas.neonproject.cloud/",
            tags: ["Finanças Pessoais", "Controle de Parcelas", "Parceria"]
        }
    ];

    return (
        <section id="projects">
            <h2>{t('projects.title')}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        border: '1px solid transparent',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{project.title}</h3>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>
                                    🔗
                                </a>
                            </div>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>
                                {project.role}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        color: 'var(--accent-color)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '1rem',
                                        fontSize: '0.8rem'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div style={{
                            padding: '1rem 2rem',
                            background: 'rgba(0,0,0,0.2)',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                {t('projects.viewProject')} <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
