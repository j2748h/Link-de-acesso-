import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Download, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  RefreshCw
} from 'lucide-react';
// @ts-expect-error - dynamic generated asset bypass for ts-compiler
import ebookCover from './assets/images/ebook_cover_1780833079797.png';

type DownloadStep = 'idle' | 'preparing' | 'completed';

export default function App() {
  const [downloadStep, setDownloadStep] = useState<DownloadStep>('idle');
  const [progress, setProgress] = useState(0);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: number; color: string; size: string }>>([]);

  // Generate festive confetti on purchase success
  useEffect(() => {
    const colors = ['bg-emerald-400', 'bg-amber-400', 'bg-blue-400', 'bg-rose-400', 'bg-violet-400'];
    const sizes = ['w-2 h-2', 'w-3 h-3', 'w-1.5 h-3', 'w-2 h-4'];
    const particles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
    }));
    setConfetti(particles);
  }, []);

  // Simulates securely packaging the digital ebook download
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (downloadStep === 'preparing') {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 10) + 6;
          if (next >= 100) {
            clearInterval(interval);
            setDownloadStep('completed');
            triggerLocalDownload();
            return 100;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [downloadStep]);

  const handleStartDownload = () => {
    setProgress(0);
    setDownloadStep('preparing');
  };

  const triggerLocalDownload = () => {
    // Redireciona o usuário diretamente para a pasta segura no Google Drive com o PDF completo
    window.location.href = "https://drive.google.com/drive/folders/1w8cHs8Jf5SY-q5ned5UQ9rao5hv5Fv-I";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800 relative overflow-hidden pb-20">
      
      {/* Background radial visual energy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial from-emerald-50/50 via-sky-50/20 to-transparent pointer-events-none -z-10" />
      
      {/* Dynamic Rain of Joy confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: -50, opacity: 1, rotate: 0 }}
            animate={{ 
              y: '105vh', 
              opacity: [1, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              delay: c.delay,
              ease: "linear",
              repeat: Infinity
            }}
            className={`absolute ${c.color} ${c.size} opacity-75 rounded-sm`}
            style={{ left: c.left }}
          />
        ))}
      </div>

      {/* Static Success Elegant Top Banner */}
      <div id="success_banner" className="bg-[#10B981] text-white py-3 px-4 text-center text-xs md:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 animate-pulse text-amber-300 shrink-0" />
        <span>SUA COMPRA FOI PROCESSADA COM SUCESSO! APROVEITE SEU MATERIAL.</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 md:mt-16 relative z-10">
        
        {/* Main Title Headings */}
        <header id="welcome_section" className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center bg-emerald-50 rounded-full p-4 mb-5 border border-emerald-100 shadow-xs"
          >
            <CheckCircle className="w-12 h-12 text-emerald-500 fill-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight"
          >
            Obrigado pela sua Compra!
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mt-3"
          >
            Seu pagamento foi confirmado com êxito. Clique no botão abaixo para acessar seu e-book instantaneamente.
          </motion.p>
        </header>

        {/* Elegant Centered Single Download Box card */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          id="pegar_ebook_main_card"
          className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-md max-w-2xl mx-auto flex flex-col items-center text-center relative group"
        >
          {/* Ebook visual mock */}
          <div className="relative w-full max-w-[210px] mb-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.03]">
            <img 
              src={ebookCover} 
              alt="Ebook Alimentação Inteligente" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <h2 className="text-slate-900 font-bold font-display text-2xl leading-tight">
            Alimentação Inteligente: Como Eu Perdi 158 kg em 9 Meses
          </h2>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mt-1">
            Método de Reeducação Alimentar &bull; Emagrecimento Saudável
          </p>

          <p className="text-slate-500 text-sm mt-4 max-w-md">
            Clique abaixo para acessar o seu e-book oficial com o método completo que transformou vidas de forma prática e barata.
          </p>

          {/* THE ONLY PEGAR E-BOOK BUTTON */}
          <div className="w-full mt-8 max-w-md">
            <button 
              id="pegar_ebook_main_btn"
              onClick={handleStartDownload}
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base md:text-lg py-4.5 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Pegar E-book (.PDF)</span>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
            <span>Tamanho: 14.2 MB</span>
            <span>&bull;</span>
            <span>Formato: PDF Pronto</span>
          </div>
        </motion.div>

        {/* Confidence trust section */}
        <section id="trust_section" className="mt-12 bg-white/50 border border-slate-100/80 rounded-2xl p-6 shadow-2xs max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mb-1.5" />
              <span className="text-slate-800 font-bold text-xs">Compra 100% Segura</span>
              <span className="text-slate-400 text-[10px] mt-0.5">Criptografia de Ponta</span>
            </div>

            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0">
              <RefreshCw className="w-5 h-5 text-emerald-500 mb-1.5 animate-spin-slow" />
              <span className="text-slate-800 font-bold text-xs">Acesso Vitalício</span>
              <span className="text-slate-400 text-[10px] mt-0.5">Sempre Atualizado</span>
            </div>

            <div className="flex flex-col items-center">
              <Globe className="w-5 h-5 text-emerald-500 mb-1.5" />
              <span className="text-slate-800 font-bold text-xs">Download Imediato</span>
              <span className="text-slate-400 text-[10px] mt-0.5">Sem tempo de espera</span>
            </div>

          </div>
        </section>

      </div>

      {/* Simulated Secure Downloading Progress Modal */}
      <AnimatePresence>
        {downloadStep === 'preparing' && (
          <motion.div 
            id="download_modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center"
            >
              {/* Spinner animation custom class */}
              <div className="relative w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
                <Download className="w-6 h-6 text-emerald-500 animate-bounce" />
              </div>

              <h3 className="text-slate-900 font-bold font-display text-lg">
                Preparando Acesso Seguro...
              </h3>
              <p className="text-slate-400 text-xs mt-1">Conectando você de forma segura à pasta do Google Drive.</p>

              {/* Progress bar line */}
              <div className="mt-5 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-emerald-500 h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span>SSL PROTEGIDO</span>
                <span className="text-emerald-600 font-mono text-xs">{progress}%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom float confirmation toast when final download triggers */}
      <AnimatePresence>
        {downloadStep === 'completed' && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white rounded-2xl px-5 py-4 shadow-xl border border-slate-800 flex items-center gap-3.5 max-w-sm w-[90%]"
          >
            <div className="p-2 bg-emerald-500 text-white rounded-full shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <h5 className="font-bold text-xs text-white">Redirecionando!</h5>
              <p className="text-slate-400 text-[10px] mt-0.5 truncate">Enviando você ao Google Drive...</p>
            </div>
            <a 
              href="https://drive.google.com/drive/folders/1w8cHs8Jf5SY-q5ned5UQ9rao5hv5Fv-I"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setDownloadStep('idle');
                setProgress(0);
              }}
              className="text-white hover:text-emerald-400 text-[10px] font-extrabold uppercase bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-all shrink-0"
            >
              Ir Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
