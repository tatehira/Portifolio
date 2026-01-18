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
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        border: '1px solid transparent',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    };

    const tagStyle = {
        background: 'rgba(56, 189, 248, 0.1)',
        color: 'var(--accent-color)',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        fontSize: '0.8rem'
    };

    const tabButtonStyle = (isActive) => ({
        padding: '0.75rem 1.5rem',
        borderRadius: '2rem',
        background: isActive ? 'var(--accent-color)' : 'transparent',
        color: isActive ? '#fff' : 'var(--text-secondary)',
        border: isActive ? 'none' : '1px solid var(--border-color)',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        fontSize: '1rem'
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
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.borderColor = 'var(--accent-color)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'transparent';
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index}
                                style={{
                                    ...cardStyle,
                                    cursor: exp.link ? 'pointer' : 'default',
                                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                                }}
                                onClick={() => handleCardClick(exp.link)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{exp.company}</h3>
                                        {exp.link && (
                                            <span style={{ color: 'var(--accent-color)' }}>
                                                🔗
                                            </span>
                                        )}
                                    </div>
                                    <p style={{ color: 'var(--accent-color)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
                                        {exp.role}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                        {exp.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
                                        style={{
                                            ...cardStyle,
                                            cursor: (project.externalLink || project.internalLink) ? 'pointer' : 'default',
                                            transition: 'transform 0.3s ease, border-color 0.3s ease'
                                        }}
                                        onClick={() => {
                                            if (project.internalLink) handleCardClick(project.internalLink, true);
                                            else handleCardClick(project.externalLink);
                                        }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div style={{ padding: '2rem', flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                                <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{project.title}</h3>
                                                {(project.externalLink || project.internalLink) && (
                                                    <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>
                                                        🔗
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>
                                                {project.role}
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                                {project.description}
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} style={tagStyle}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div style={{
                                            padding: '1rem 2rem',
                                            background: 'rgba(0,0,0,0.2)',
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}>
                                            <span style={{
                                                color: 'var(--text-primary)',
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                {t('projects.viewProject')} <span>→</span>
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
                                        style={{ ...cardStyle, transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div style={{ padding: '2rem', flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                                <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{project.title}</h3>
                                            </div>
                                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>
                                                {project.role}
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                                {project.description}
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} style={tagStyle}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
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
                                style={{
                                    ...cardStyle,
                                    cursor: edu.link ? 'pointer' : 'default',
                                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                                }}
                                onClick={() => handleCardClick(edu.link)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{edu.institution}</h3>
                                        {edu.link && (
                                            <span style={{ color: 'var(--accent-color)' }}>
                                                📄
                                            </span>
                                        )}
                                    </div>
                                    <p style={{ color: 'var(--accent-color)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
                                        {edu.degree}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                        {edu.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {edu.tags.map((tag, i) => (
                                            <span key={i} style={tagStyle}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                {edu.link && (
                                    <div style={{
                                        padding: '1rem 2rem',
                                        background: 'rgba(0,0,0,0.2)',
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <span style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
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
        <section id="projects" style={{ padding: '4rem 1rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Portfólio & Carreira</h2>

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
