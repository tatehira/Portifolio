import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgDash from '../Imagens/Sistema-Ouro/1-dash.png';
import imgCompra from '../Imagens/Sistema-Ouro/2-Compra.png';
import imgVenda from '../Imagens/Sistema-Ouro/3-venda.png';
import imgEstoque from '../Imagens/Sistema-Ouro/4-Estoque.png';
import imgEntradaSaida from '../Imagens/Sistema-Ouro/5-entrada-saida.png';
import imgConfig from '../Imagens/Sistema-Ouro/6-Configuracoes.png';

const GoldManagement = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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
            title: "Dashboard Principal",
            description: "Visão geral estratégica com indicadores financeiros, status do caixa e atalhos rápidos para as principais operações diárias."
        },
        {
            src: imgCompra,
            title: "Módulo de Compra",
            description: "Interface otimizada para aquisição de ouro, incluindo cálculo automático de valores baseados na cotação e registro de dados do fornecedor."
        },
        {
            src: imgVenda,
            title: "Módulo de Venda",
            description: "Sistema de processamento de vendas com controle de estoque em tempo real e geração de comprovantes."
        },
        {
            src: imgEstoque,
            title: "Controle de Estoque",
            description: "Monitoramento detalhado do inventário físico, permitindo auditoria e rastreabilidade de cada grama de ouro."
        },
        {
            src: imgEntradaSaida,
            title: "Entradas e Saídas",
            description: "Registro financeiro de todas as movimentações, garantindo transparência no fluxo de caixa e histórico de transações."
        },
        {
            src: imgConfig,
            title: "Configurações Globais",
            description: "Painel administrativo para ajustes de parâmetros do sistema, usuários e personalização de regras de negócio."
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
                    Sistema de Gestão de Ouro
                </h1>

                <div style={{
                    background: 'rgba(234, 179, 8, 0.1)',
                    border: '1px solid rgba(234, 179, 8, 0.5)',
                    color: '#eab308',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>
                        Nota: Este software é um sistema privado desenvolvido sob demanda. Os dados apresentados nas imagens abaixo são inteiramente fictícios e para fins meramente demonstrativos.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    lineHeight: '1.6'
                }}>
                    Uma solução Enterprise completa desenvolvida para automatizar e assegurar as operações de compra, venda e gestão de estoque de ouro. O sistema oferece controle financeiro rigoroso, relatórios detalhados e uma interface intuitiva para operações diárias críticas.
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

export default GoldManagement;
