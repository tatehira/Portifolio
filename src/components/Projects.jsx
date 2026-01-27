import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('experience');

    const experiences = [
        {
            company: "LBRIT",
            role: "Desenvolvedor",
            description: "Software de gerenciamento completo para agricultura e pecuária",
            link: "https://lbrit.com.br/agrix-gestao-agro/#modulos-pecuaria",
            tags: ["Pecuária", "Sistema Corporativo", "Desenvolvimento", "Enterprise"]
        },
        {
            company: "Teleturbo Telecomunicações",
            role: "Analista de Redes",
            description: "Analista de redes focado em documentação FTTH e gerenciamento de ONT. Intensa atuação com suporte técnico envolvendo configuração de portas de roteador, NAT, e resolução de problemas de conectividade.",
            tags: ["Redes", "FTTH", "ONT", "Suporte", "NAT"]
        }
    ];

    const completedProjects = [
        {
            title: "Gestão de Dívidas",
            description: t('projects.debtDesc', "Sistema para gestão de dívidas pessoais e controle financeiro."),
            role: "Co-Author / Developer",
            externalLink: "https://dividas.neonproject.cloud/",
            tags: ["Finanças Pessoais", "Controle de Parcelas", "Parceria"]
        }
    ];

    const inProgressProjects = [
        {
            title: "Sistema de Gestão de Ouro",
            description: "Sistema completo para gerenciamento de compra, venda e estoque de ouro. (Em desenvolvimento)",
            role: "Full Stack Developer",
            internalLink: "/gold-management",
            tags: ["Gestão", "Financeiro", "Estoque", "SaaS"]
        },
        {
            title: "Sistema de Barbearia",
            description: "Sistema de gestão inteligente para barbearias com automação de comissões, fidelidade de clientes e CMS integrado para criação de landing pages.",
            role: "Full Stack Developer",
            externalLink: "https://barber.neonproject.cloud/",
            tags: ["Gestão", "Automação", "CMS", "SaaS"]
        }
    ];

    const education = [
        {
            institution: "Engenharia de Computação",
            degree: "Pós-graduação",
            description: "Especialização focada em linguagem de baixo nível, tratamento de bytes e arquitetura de software.",
            tags: ["Baixo Nível", "Arquitetura", "Bytes", "Engenharia"]
        },
        {
            institution: "Cyber Segurança",
            degree: "Graduação",
            description: "Graduado com foco em segurança da informação, testes de intrusão e defesa cibernética.",
            tags: ["Segurança", "InfoSec", "Redes"]
        },
        {
            institution: "TCC: Análise de Executáveis",
            degree: "Trabalho de Conclusão",
            description: "\"Análise de Executáveis para Iniciantes: Uma Introdução à Engenharia Reversa\". Um estudo aprofundado sobre técnicas de engenharia reversa.",
            link: "/TCC_WENDREW_Final.pdf",
            tags: ["Engenharia Reversa", "Assembly", "Malware Analysis"]
        }
    ];

    const cardStyle = {
        background: 'var(--card-bg)',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        boxShadow: 'var(--shadow-md)'
    };

    const tagStyle = {
        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(139, 92, 246, 0.15))',
        color: 'var(--accent-color)',
        padding: '0.4rem 1rem',
        borderRadius: '1rem',
        fontSize: '0.85rem',
        fontWeight: '500',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        transition: 'all 0.3s ease'
    };

    const tabButtonStyle = (isActive) => ({
        padding: '0.875rem 2rem',
        borderRadius: '2rem',
        background: isActive 
            ? 'linear-gradient(135deg, #0ea5e9, #38bdf8)' 
            : 'transparent',
        color: isActive ? '#ffffff' : 'var(--text-secondary)',
        border: isActive ? 'none' : '1px solid var(--border-color)',
        cursor: 'pointer',
        fontWeight: '700',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontSize: '1rem',
        boxShadow: isActive ? '0 4px 15px rgba(56, 189, 248, 0.3)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        textShadow: isActive ? '0 1px 2px rgba(0, 0, 0, 0.2)' : 'none'
    });

    const handleCardClick = (link, isInternal = false) => {
        if (!link) return;
        if (isInternal) {
            navigate(link);
        } else {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
        e.currentTarget.style.borderColor = 'var(--accent-color)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(56, 189, 248, 0.25)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index}
                                className="card-hover"
                                style={{
                                    ...cardStyle,
                                    cursor: exp.link ? 'pointer' : 'default',
                                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                                }}
                                onClick={() => handleCardClick(exp.link)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div style={{ 
                                    padding: '2.5rem',
                                    position: 'relative',
                                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)'
                                }}>
                                    <div style={{ 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '4px',
                                        height: '100%',
                                        background: 'linear-gradient(180deg, var(--accent-color), var(--accent-secondary))',
                                        borderRadius: '0 4px 4px 0'
                                    }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem', paddingLeft: '1rem' }}>
                                        <h3 style={{ fontSize: '1.75rem', marginBottom: 0, fontWeight: '700' }}>{exp.company}</h3>
                                        {exp.link && (
                                            <span style={{ 
                                                color: 'var(--accent-color)',
                                                fontSize: '1.5rem',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                🔗
                                            </span>
                                        )}
                                    </div>
                                    <p style={{ 
                                        color: 'var(--accent-color)', 
                                        fontSize: '1.1rem', 
                                        marginBottom: '1rem', 
                                        fontWeight: '600',
                                        paddingLeft: '1rem'
                                    }}>
                                        {exp.role}
                                    </p>
                                    <p style={{ 
                                        color: 'var(--text-secondary)', 
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.7',
                                        paddingLeft: '1rem'
                                    }}>
                                        {exp.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingLeft: '1rem' }}>
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} style={tagStyle}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'projects':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                borderBottom: '1px solid var(--border-color)',
                                paddingBottom: '0.5rem'
                            }}>
                                Projetos Concluídos
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {completedProjects.map((project, index) => (
                                    <div key={index}
                                        className="card-hover"
                                        style={{
                                            ...cardStyle,
                                            cursor: (project.externalLink || project.internalLink) ? 'pointer' : 'default',
                                            animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                                        }}
                                        onClick={() => {
                                            if (project.internalLink) handleCardClick(project.internalLink, true);
                                            else handleCardClick(project.externalLink);
                                        }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div style={{ 
                                            padding: '2.5rem', 
                                            flex: 1,
                                            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)'
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                                <h3 style={{ fontSize: '1.75rem', marginBottom: 0, fontWeight: '700' }}>{project.title}</h3>
                                                {(project.externalLink || project.internalLink) && (
                                                    <span style={{ 
                                                        color: 'var(--accent-color)', 
                                                        fontSize: '1.5rem',
                                                        transition: 'transform 0.3s ease'
                                                    }}>
                                                        🔗
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ color: 'var(--accent-color)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
                                                {project.role}
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                                {project.description}
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} style={tagStyle}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div style={{
                                            padding: '1.5rem 2.5rem',
                                            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            borderTop: '1px solid var(--border-color)'
                                        }}>
                                            <span style={{
                                                color: 'var(--accent-color)',
                                                fontSize: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontWeight: '600',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                {t('projects.viewProject')} <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                borderBottom: '1px solid var(--border-color)',
                                paddingBottom: '0.5rem'
                            }}>
                                Em Desenvolvimento
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {inProgressProjects.map((project, index) => (
                                    <div key={index}
                                        className="card-hover"
                                        style={{
                                            ...cardStyle,
                                            cursor: (project.externalLink || project.internalLink) ? 'pointer' : 'default',
                                            animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                                            position: 'relative'
                                        }}
                                        onClick={() => {
                                            if (project.internalLink) handleCardClick(project.internalLink, true);
                                            else handleCardClick(project.externalLink);
                                        }}
                                        onMouseEnter={(e) => {
                                            handleMouseEnter(e);
                                            if (project.externalLink || project.internalLink) {
                                                const arrow = e.currentTarget.querySelector('.arrow-icon');
                                                if (arrow) arrow.style.transform = 'translateX(5px)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            handleMouseLeave(e);
                                            const arrow = e.currentTarget.querySelector('.arrow-icon');
                                            if (arrow) arrow.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <div style={{ 
                                            padding: '2.5rem', 
                                            flex: 1,
                                            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)'
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                                <h3 style={{ fontSize: '1.75rem', marginBottom: 0, fontWeight: '700' }}>{project.title}</h3>
                                                {(project.externalLink || project.internalLink) && (
                                                    <span style={{ 
                                                        color: 'var(--accent-color)', 
                                                        fontSize: '1.5rem',
                                                        transition: 'transform 0.3s ease'
                                                    }}>
                                                        🔗
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ color: 'var(--accent-color)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
                                                {project.role}
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                                {project.description}
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} style={tagStyle}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        {(project.externalLink || project.internalLink) && (
                                            <div style={{
                                                padding: '1.5rem 2.5rem',
                                                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                borderTop: '1px solid var(--border-color)'
                                            }}>
                                                <span style={{
                                                    color: 'var(--accent-color)',
                                                    fontSize: '1rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    fontWeight: '600'
                                                }}>
                                                    {t('projects.viewProject')} <span className="arrow-icon" style={{ transition: 'transform 0.3s ease' }}>→</span>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'education':
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {education.map((edu, index) => (
                            <div key={index}
                                className="card-hover"
                                style={{
                                    ...cardStyle,
                                    cursor: edu.link ? 'pointer' : 'default',
                                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                                }}
                                onClick={() => handleCardClick(edu.link)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div style={{ 
                                    padding: '2.5rem', 
                                    flex: 1,
                                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                                        <h3 style={{ fontSize: '1.75rem', marginBottom: 0, fontWeight: '700' }}>{edu.institution}</h3>
                                        {edu.link && (
                                            <span style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>
                                                📄
                                            </span>
                                        )}
                                    </div>
                                    <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600' }}>
                                        {edu.degree}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                        {edu.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {edu.tags.map((tag, i) => (
                                            <span key={i} style={tagStyle}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                {edu.link && (
                                    <div style={{
                                        padding: '1.5rem 2.5rem',
                                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        borderTop: '1px solid var(--border-color)'
                                    }}>
                                        <span style={{
                                            color: 'var(--accent-color)',
                                            fontSize: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontWeight: '600'
                                        }}>
                                            Ler PDF <span>→</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="projects" style={{ padding: '5rem 1rem', position: 'relative' }}>
            <h2 className="text-gradient" style={{ 
                textAlign: 'center', 
                marginBottom: '3rem',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}>
                Portfólio & Carreira
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '3rem',
                flexWrap: 'wrap'
            }}>
                <button
                    onClick={() => setActiveTab('experience')}
                    style={tabButtonStyle(activeTab === 'experience')}
                >
                    Experiência
                </button>
                <button
                    onClick={() => setActiveTab('projects')}
                    style={tabButtonStyle(activeTab === 'projects')}
                >
                    Projetos
                </button>
                <button
                    onClick={() => setActiveTab('education')}
                    style={tabButtonStyle(activeTab === 'education')}
                >
                    Formação
                </button>
            </div>

            {renderContent()}
        </section>
    );
};

export default Projects;
