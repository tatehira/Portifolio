import Header from '../components/Header';
import Footer from '../components/Footer';
import html2canvas from 'html2canvas';

const SimulationNetwork = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const resultsRef = React.useRef(null);
    const [activeSimulation, setActiveSimulation] = useState('financing');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Financing States
    const [vehicleType, setVehicleType] = useState('carro');
    const [assetValue, setAssetValue] = useState('');
    const [entryValue, setEntryValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [isYearlyRate, setIsYearlyRate] = useState(false);
    const [condition, setCondition] = useState('novo');
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Helpers
    const formatBRL = (val) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
    };

    const parseCurrency = (val) => {
        if (!val) return 0;
        return parseFloat(val.toString().replace(/[^\d]/g, '')) / 100 || 0;
    };

    const handleCurrencyInput = (e, setter) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value === '') {
            setter('');
            return;
        }
        const numericValue = parseInt(value) / 100;
        setter(new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(numericValue));
    };

    const fetchBCBRate = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.25471/dados/ultimos/1?formato=json');
            const data = await res.json();
            if (data && data.length) {
                let rate = parseFloat(data[0].valor);
                // Realismo: Novo ~1.8, Usado ~3.0
                rate = condition === 'novo' ? rate * 0.9 : rate * 1.5;
                
                if (isYearlyRate) {
                    const yearly = (Math.pow(1 + (rate / 100), 12) - 1) * 100;
                    setInterestRate(yearly.toFixed(2));
                } else {
                    setInterestRate(rate.toFixed(2));
                }
            }
        } catch (error) {
            console.error('BCB Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const calculatePrice = (principal, monthlyRate, months) => {
        if (monthlyRate === 0) return principal / months;
        return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    };

    const handleSimulate = () => {
        const val = parseCurrency(assetValue);
        const entry = parseCurrency(entryValue);
        const principal = val - entry;

        if (principal <= 0) {
            alert(t('simulations.financing.errorEntry', 'A entrada não pode ser maior ou igual ao valor do bem.'));
            return;
        }

        let rateInput = parseFloat(interestRate) / 100;
        if (isNaN(rateInput)) {
            alert(t('simulations.financing.errorRate', 'Por favor, insira uma taxa válida.'));
            return;
        }

        let monthlyRate = rateInput;
        if (isYearlyRate) {
            monthlyRate = Math.pow(1 + rateInput, 1 / 12) - 1;
        }

        const maxMonths = vehicleType === 'carro' ? 60 : 48;
        const steps = [12, 24, 36, 48, 60].filter(m => m <= maxMonths);

        const simulationResults = steps.map(m => ({
            months: m,
            installment: calculatePrice(principal, monthlyRate, m)
        }));

        setResults({
            principal,
            monthlyRate: monthlyRate * 100,
            simulations: simulationResults,
            date: new Date().toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-US')
        });
    };

    const handleExportImage = async () => {
        if (!resultsRef.current) return;
        
        try {
            const canvas = await html2canvas(resultsRef.current, {
                backgroundColor: '#0a0e1a',
                scale: 2,
                logging: false,
                useCORS: true
            });
            
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = `simulacao-tatehira-${new Date().getTime()}.png`;
            link.click();
        } catch (error) {
            console.error('Export error:', error);
            alert('Erro ao gerar imagem para exportação.');
        }
    };

    const containerStyle = {
        minHeight: '100vh',
        background: 'var(--bg-color)',
        color: 'var(--text-primary)',
        paddingTop: '80px'
    };

    const cardStyle = {
        background: 'rgba(26, 31, 46, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: isMobile ? '1.5rem' : '2.5rem',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '800px',
        margin: isMobile ? '1rem auto' : '2rem auto'
    };

    const inputStyle = {
        width: '100%',
        background: 'rgba(10, 14, 26, 0.8)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: isMobile ? '1rem' : '0.8rem 1rem',
        color: 'var(--text-primary)',
        fontSize: isMobile ? '1.1rem' : '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        appearance: 'none',
        WebkitAppearance: 'none'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginBottom: '0.5rem',
        fontWeight: '600'
    };

    return (
        <div style={containerStyle}>
            <Header />
            <main style={{ padding: '2rem 1rem' }}>
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.5rem' }}>
                        {t('simulations.title', 'Rede de Simulações')}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        {t('simulations.subtitle', 'Ferramentas de precisão para suas decisões financeiras.')}
                    </p>
                </header>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <button 
                        className="btn"
                        style={{ 
                            background: activeSimulation === 'financing' ? 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))' : 'transparent',
                            border: activeSimulation === 'financing' ? 'none' : '1px solid var(--border-color)',
                            opacity: activeSimulation === 'financing' ? 1 : 0.7
                        }}
                        onClick={() => setActiveSimulation('financing')}
                    >
                        {t('simulations.financing.tab', 'Financiamento Veicular')}
                    </button>
                    <button 
                        className="btn-outline"
                        style={{ opacity: 0.5, cursor: 'not-allowed' }}
                        disabled
                    >
                        {t('simulations.comingSoon', 'Em Breve...')}
                    </button>
                </div>

                {activeSimulation === 'financing' && (
                    <div style={cardStyle} className="fade-in">
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>{t('simulations.financing.type', 'Tipo de Veículo')}</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', background: 'rgba(0,0,0,0.2)', padding: '4px', borderRadius: '12px' }}>
                                    <button 
                                        onClick={() => setVehicleType('carro')}
                                        style={{ 
                                            background: vehicleType === 'carro' ? 'var(--accent-color)' : 'transparent',
                                            border: 'none', borderRadius: '8px', padding: '0.5rem', color: '#fff', cursor: 'pointer', fontWeight: '700'
                                        }}
                                    >
                                        {t('simulations.financing.car', 'Carro')}
                                    </button>
                                    <button 
                                        onClick={() => setVehicleType('moto')}
                                        style={{ 
                                            background: vehicleType === 'moto' ? 'var(--accent-color)' : 'transparent',
                                            border: 'none', borderRadius: '8px', padding: '0.5rem', color: '#fff', cursor: 'pointer', fontWeight: '700'
                                        }}
                                    >
                                        {t('simulations.financing.moto', 'Moto')}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>{t('simulations.financing.condition', 'Condição')}</label>
                                <select 
                                    style={inputStyle}
                                    value={condition}
                                    onChange={(e) => setCondition(e.target.value)}
                                >
                                    <option value="novo">{t('simulations.financing.new', 'Novo')}</option>
                                    <option value="usado">{t('simulations.financing.used', 'Usado')}</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>{t('simulations.financing.value', 'Valor do Bem')}</label>
                                <input 
                                    style={inputStyle}
                                    type="text"
                                    value={assetValue}
                                    onChange={(e) => handleCurrencyInput(e, setAssetValue)}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>{t('simulations.financing.entry', 'Entrada')}</label>
                                <input 
                                    style={inputStyle}
                                    type="text"
                                    value={entryValue}
                                    onChange={(e) => handleCurrencyInput(e, setEntryValue)}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <label style={{ ...labelStyle, marginBottom: 0 }}>
                                    {t('simulations.financing.rate', 'Taxa de Juros')} ({isYearlyRate ? '% a.a.' : '% a.m.'})
                                </label>
                                <button 
                                    onClick={fetchBCBRate}
                                    disabled={isLoading}
                                    style={{ 
                                        background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '20px', 
                                        padding: '4px 12px', fontSize: '0.7rem', color: 'var(--accent-color)', cursor: 'pointer', fontWeight: '700',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {isLoading ? t('simulations.loading', 'Buscando...') : t('simulations.financing.fetchBCB', 'Buscar no BCB')}
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input 
                                    style={{ ...inputStyle, flex: 3 }}
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    placeholder="0,00"
                                />
                                <button 
                                    onClick={() => setIsYearlyRate(!isYearlyRate)}
                                    style={{ 
                                        flex: 2, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', 
                                        borderRadius: '12px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600'
                                    }}
                                >
                                    {isYearlyRate ? '% ao Ano' : '% ao Mês'}
                                </button>
                            </div>
                        </div>

                        <button 
                            className="btn"
                            style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
                            onClick={handleSimulate}
                        >
                            {t('simulations.financing.simulate', 'Simular Agora')}
                        </button>

                        {results && (
                            <div className="slide-in-up" ref={resultsRef} style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', background: '#0a0e1a', borderRadius: '16px', padding: isMobile ? '1rem' : '1.5rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1rem', color: 'var(--accent-color)', marginBottom: '0.2rem' }}>Tatehira Sistemas</h3>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{results.date}</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div style={{ textAlign: 'center', flex: 1 }}>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {t('simulations.financing.financed', 'Valor Financiado')}
                                        </div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--accent-color)' }}>
                                            {formatBRL(results.principal)}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center', flex: 1 }}>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {t('simulations.financing.monthlyRateLabel', 'Juros Mensais')}
                                        </div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--accent-secondary)' }}>
                                            {results.monthlyRate.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                                    {results.simulations.map((s, idx) => (
                                        <div 
                                            key={idx} 
                                            style={{ 
                                                background: 'rgba(56, 189, 248, 0.05)', borderRadius: '16px', padding: '1rem', 
                                                textAlign: 'center', border: '1px solid rgba(56, 189, 248, 0.1)' 
                                            }}
                                        >
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                                                {s.months} {t('simulations.financing.months', 'meses')}
                                            </div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>
                                                {formatBRL(s.installment)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <button 
                                    className="btn-outline"
                                    style={{ width: '100%', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    onClick={handleExportImage}
                                >
                                    <span>📸</span> {t('simulations.financing.shareImage', 'Compartilhar como Imagem')}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SimulationNetwork;
