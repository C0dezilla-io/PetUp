import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import OngsScroller from "../OngsScroller";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import mascote1 from "../../assets/logo/mascote.gif";
import mascote2 from "../../assets/logo/mascote2.gif";

export default function Home() {
  const [showBalloon, setShowBalloon] = useState(true);
  const [mascoteSrc, setMascoteSrc] = useState(mascote1);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBalloon(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMascoteSrc((prev) => (prev === mascote1 ? mascote2 : mascote1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      id: 1,
      person: "Marcos Limao",
      q: "Como funciona para adotar um pet?",
      a: "Você escolhe o animal de estimação, preenche o formulário de adoção, combina com a ONG ou responsável uma visita para conhecer o animal e assina os termos de cuidado. Pronto, novo amigo!",
    },
    {
      id: 2,
      person: "Fernando Camelo",
      q: "Preciso pagar taxa para adotar?",
      a: "Algumas ONGs pedem uma taxa simbólica que ajuda a cobrir vacinas e castração, outras trabalham apenas com doações. As informações aparecem no perfil do pet/ONG.",
    },
    {
      id: 3,
      person: "Pedro Pastos",
      q: "Posso devolver o animal se não der certo?",
      a: "Sim! Muitas ONGs têm políticas de retorno e oferecem suporte antes que você tome essa decisão. Comunicar a ONG é sempre o primeiro passo.",
    },
    {
      id: 4,
      person: "Erick Snow",
      q: "Como doar diretamente a uma ONG?",
      a: "Cada ONG parceira tem detalhes no perfil com opções de doação (PIX, conta bancária, campanhas). Também é possível apoiar comprando via lojas parceiras.",
    },
    {
      id: 5,
      person: "Carla Oliveira",
      q: "Como sei que a ONG é confiável?",
      a: "Priorizamos ONGs com histórico, transparência, fotos e depoimentos. No perfil há contatos e links para redes sociais para você checar.",
    },
  ];

  return (
    <main className="relative overflow-hidden md:col-span-10 md:col-start-2 space-y-12">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <FaPaw
            key={i}
            className="absolute text-[var(--highlight)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${22 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>
      <div className="hidden md:flex fixed bottom-10 right-[-0.4rem] z-50 flex-col items-end gap-3">
        {showBalloon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="relative bg-white text-gray-800 text-sm sm:text-base font-medium px-5 py-3 rounded-2xl shadow-lg border border-gray-200 max-w-[260px]"
          >
            <p>
              🐾 Venha adotar meus irmãos na página de{" "}
              <Link to="/pets" className="text-[#0CB39C] font-semibold hover:underline">
                Pets
              </Link>
              !
            </p>
            <div className="absolute -bottom-3 right-12 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </motion.div>
        )}

        <motion.img
          src={mascoteSrc}
          alt="Mascote PetUp"
          className="w-28 h-28 drop-shadow-xl hover:scale-110 transition-transform cursor-pointer"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
      <header>
        <Carousel />
      </header>
      <section className="mt-8 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[var(--secondary-bg)]/80 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Encontre amor, ajude vidas — tudo em um só lugar
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--text)] opacity-85">
            PetUp conecta quem ama animais a ONGs, adoções responsáveis, produtos de qualidade e campanhas de apoio.
            Seja para adotar, doar ou comprar com propósito — aqui você faz a diferença.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/pets"
              className="px-5 py-3 rounded-lg bg-[var(--highlight)] text-white font-medium shadow-sm hover:opacity-90 transition"
            >
              Ver animais para adoção
            </Link>
            <Link
              to="/ongs"
              className="px-5 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--secondary-bg)] transition"
            >
              Conhecer ONGs parceiras
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text)]">Nossa missão</h2>
            <p className="mt-3 text-[var(--text)] opacity-80">
            No PetUp acreditamos que todo animal merece um lar amoroso e suporte contínuo. Reunimos ONGs, adotantes,
              lojas e doadores em uma plataforma confiável para acelerar adoções, facilitar resgates e gerar renda
              direcionada a quem cuida dos animais todos os dias.
            </p>
            <ul className="mt-6 space-y-3">
              {[1, 2, 3].map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[var(--highlight)] text-white font-bold">
                    {n}
                  </span>
                  <div>
                    <strong className="block text-[var(--text)]">
                      {n === 1 ? "Adoção responsável" : n === 2 ? "ONGs em destaque" : "Compras com propósito"}
                    </strong>
                    <span className="text-sm text-[var(--text)] opacity-75">
                      {n === 1 &&
                        "Perfis completos, filtros por porte/idade e suporte pós-adoção."}
                      {n === 2 && "Visibilidade e transparência para projetos que salvam vidas."}
                      {n === 3 && "Renda revertida a abrigos parceiros em produtos selecionados."}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--secondary-bg)] p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[var(--text)]">Como funciona</h3>
            <ol className="mt-4 space-y-4 text-[var(--text)] opacity-85 list-decimal list-inside">
              <li>
                <strong>Encontre:</strong> pesquise por animais disponíveis, ONGs ou produtos usando filtros intuitivos.
              </li>
              <li>
                <strong>Conecte:</strong> entre em contato com a ONG ou responsável, agende visitas ou converse por chat.
              </li>
              <li>
                <strong>Apoie:</strong> adote, doe ou compre — todo gesto ajuda a transformar a vida de um animal.
              </li>
            </ol>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-white/5">
                <p className="text-sm font-medium">Adoções concluídas</p>
                <p className="mt-1 text-2xl font-bold">+1.200</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <p className="text-sm font-medium">ONGs cadastradas</p>
                <p className="mt-1 text-2xl font-bold">84</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text)] mb-4">
          “Salve o Ralph” — uma história que precisa ser ouvida
        </h2>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
          <iframe 
            src="https://www.youtube.com/embed/AjdMtLF0Z6w"
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full">
          </iframe>
        </div>
      </section>
      <section className="container mx-auto px-6 mt-12">
        <div className="max-w-4xl mx-auto bg-[var(--secondary-bg)] p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-extrabold text-[var(--text)] mb-4">Perguntas frequentes</h3>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.id}
                onToggle={(e) => setOpenId(e.currentTarget.open ? f.id : null)}
                className="group bg-[var(--secondary-bg)]/30 p-0 rounded-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none p-4">
                  <div>
                    <div className="text-sm text-[var(--text)] opacity-80">{f.person}</div>
                    <div className="mt-1 font-semibold text-[var(--text)]">{f.q}</div>
                  </div>
                  <span className="ml-4 text-[var(--highlight)] transition-transform duration-200" style={{ transform: openId === f.id ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </summary>

                <div className="overflow-hidden px-4">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={openId === f.id ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ transformOrigin: "top" }}
                    className="mt-3 text-sm text-[var(--text)] opacity-85"
                  >
                    {f.a}
                  </motion.div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6">
        <h3 className="text-xl font-bold text-[var(--text)]">ONGs Parceiras</h3>
        <p className="mt-2 text-[var(--text)] opacity-75">
          Conheça organizações sérias que resgatam, cuidam e reabilitam animais. Apoie o trabalho delas! ❤️
        </p>
        <div className="mt-6">
          <OngsScroller />
        </div>
      </section>
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-[var(--secondary-bg)] p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--text)]">Quer ajudar agora?</h3>
          <p className="mt-3 text-[var(--text)] opacity-80">
            Doe, compartilhe perfis ou compre produtos que ajudam abrigos.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/doar" className="px-6 py-3 rounded-lg bg-[var(--highlight)] text-white font-medium">
              Doar
            </Link>
            <Link to="https://www.instagram.com" className="px-6 py-3 rounded-lg border border-[var(--border)]">
              Compartilhar
            </Link>
          </div>
        </div>
      </section>
      <footer className="container mx-auto px-6 pb-12 text-center">
        <p className="text-sm text-[var(--text)] opacity-70">
          © {new Date().getFullYear()} PetUp - Juntos por um mundo mais humano.
        </p>
      </footer>
    </main>
  );
}
