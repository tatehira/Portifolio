import { useNavigate } from 'react-router-dom';
import imgDash from '../Imagens/Barbearia/Sistema/1-dashboard.png';
import imgCort from '../Imagens/Barbearia/Sistema/2-RegistroCorte.png';
import imgCli from '../Imagens/Barbearia/Sistema/3-Clientes-Lista.png';
import imgAprov from '../Imagens/Barbearia/Sistema/4-Aprovacoes-gerente-aprova-cortes-dos-barbeiros.png';
import imgServ from '../Imagens/Barbearia/Sistema/5-Servicos.png';
import imgVendas from '../Imagens/Barbearia/Sistema/6-Vendas.png';
import imgProd from '../Imagens/Barbearia/Sistema/7-Produtos.png';
import imgEquipe from '../Imagens/Barbearia/Sistema/8-Equipe.png';
import imgConf from '../Imagens/Barbearia/Sistema/9-Conf.png';
import imgSite from '../Imagens/Barbearia/Sistema/10-Site.png';
import imgLicencaConfig from '../Imagens/Barbearia/Sistema/PainelLicenca/0.1-Configuracao-Licencas.png';
import imgLicencaAtribuida from '../Imagens/Barbearia/Sistema/PainelLicenca/3-LicencaAtribuida.png';

const BarberShop = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
        // Wait for navigation then scroll to projects
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const gallery = [
        {
            src: imgDash,
            title: "Dashboard Administrativo",
            description: "Visão geral completa do negócio com métricas financeiras, agendamentos do dia e desempenho da equipe em tempo real."
        },
        {
            src: imgCort,
            title: "Registro de Cortes e Serviços",
            description: "Interface ágil para lançamento de serviços realizados, integrado automaticamente ao cálculo de comissões e fluxo de caixa."
        },
        {
            src: imgAprov,
            title: "Sistema de Aprovações",
            description: "Fluxo de controle onde gerentes revisam e aprovam os serviços lançados pelos barbeiros antes de entrarem no fechamento financeiro."
        },
        {
            src: imgCli,
            title: "Gestão de Clientes",
            description: "Banco de dados completo dos clientes com histórico de atendimentos, frequência e preferências para ações de fidelização."
        },
        {
            src: imgServ,
            title: "Catálogo de Serviços",
            description: "Gerenciamento flexível de serviços oferecidos, com definição de preços, tempos de duração e comissões específicas."
        },
        {
            src: imgVendas,
            title: "Ponto de Venda e Comandas",
            description: "Módulo de vendas simplificado para produtos e serviços adicionais, com suporte a múltiplas formas de pagamento."
        },
        {
            src: imgProd,
            title: "Controle de Estoque",
            description: "Monitoramento de produtos para venda e consumo interno, com alertas de reposição e histórico de movimentações."
        },
        {
            src: imgEquipe,
            title: "Gestão de Equipe",
            description: "Administração de colaboradores, definição de níveis de acesso (Barbeiro, Gerente, Master) e configurações de comissão."
        },
        {
            src: imgConf,
            title: "Configurações Globais",
            description: "Personalização completa do sistema, incluindo horários de funcionamento, regras de negócio e parametrização financeira."
        },
        {
            src: imgSite,
            title: "CMS Integrado & Landing Page",
            description: "Editor visual para gerenciar o site da barbearia, permitindo atualizar banners, textos e informações de contato sem código."
        },
        {
            src: imgLicencaConfig,
            title: "Gerenciador de Licenças - Configuração",
            description: "Painel administrativo para configuração de planos e licenças do sistema SaaS, permitindo definir limites e recursos por plano."
        },
        {
            src: imgLicencaAtribuida,
            title: "Gerenciador de Licenças - Atribuição",
            description: "Visão detalhada das licenças atribuídas aos clientes, com controle de validade, status de pagamento e renovação automática."
        }
    ];

    return (
        <section style={{
            minHeight: '100vh',
            background: 'var(--bg-color)',
            color: 'var(--text-primary)',
            padding: '2rem'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <button
                    onClick={handleBack}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1rem'
                    }}
                >
                    ← Voltar para Projetos
                </button>

                <h1 className="text-gradient" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
                    Sistema de Barbearia SaaS
                </h1>

                <div style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.5)',
                    color: 'var(--accent-color)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>
                        Nota: Este é um projeto Multi-tenant (SaaS) completo, com painel administrativo, gestão de assinaturas e sistema de agendamento online.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    lineHeight: '1.6'
                }}>
                    Uma plataforma robusta para gestão de barbearias e salões de beleza. O sistema oferece desde o agendamento online pelo cliente até o fechamento de caixa e cálculo automático de comissões complexas, tudo em uma interface moderna e responsiva.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                    {gallery.map((item, index) => (
                        <div key={index} style={{
                            background: 'var(--card-bg)',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}>
                            <div style={{ padding: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{
                                    color: 'var(--accent-color)',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.5rem'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BarberShop;
