import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import OngsScroller from "../OngsScroller";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

export default function Home() {
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
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[var(--highlight)] text-white font-medium shadow-sm hover:opacity-90 transition"
            >
              Ver animais para adoção
            </Link>
            <Link
              to="/ongs"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium bg-transparent hover:bg-[var(--secondary-bg)] transition"
            >
              Conhecer ONGs parceiras
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Adoção responsável",
              desc: "Perfis completos, filtros por porte/idade e suporte pós-adoção.",
              color: "from-[#0CB39C] to-[#00BFA6]",
            },
            {
              title: "ONGs em destaque",
              desc: "Visibilidade e transparência para projetos que salvam vidas.",
              color: "from-[#FFD166] to-[#F6AE2D]",
            },
            {
              title: "Compras com propósito",
              desc: "Produtos com parte da renda revertida a abrigos parceiros.",
              color: "from-[#EF476F] to-[#F78DA7]",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`p-6 rounded-xl text-white bg-gradient-to-br ${card.color} shadow-md hover:shadow-xl cursor-default`}
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm opacity-90">{card.desc}</p>
            </motion.div>
          ))}
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
              {[1, 2, 3].map((n, i) => {
                const data = [
                  {
                    t: "Adoção responsável",
                    d: "Perfis completos, filtros por porte/idade e suporte pós-adoção.",
                  },
                  {
                    t: "ONGs em destaque",
                    d: "Visibilidade e transparência para projetos que salvam vidas.",
                  },
                  {
                    t: "Compras com propósito",
                    d: "Produtos pensados no bem-estar, com parte da renda revertida a abrigos parceiros.",
                  },
                ][i];
                return (
                  <li key={n} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[var(--highlight)] text-white font-bold">
                      {n}
                    </span>
                    <div>
                      <strong className="block text-[var(--text)]">{data.t}</strong>
                      <span className="text-sm text-[var(--text)] opacity-75">{data.d}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/loja" className="inline-block px-5 py-2 bg-[var(--highlight)] text-white rounded-lg">
                Visitar a loja
              </Link>
              <Link to="/doar" className="inline-block px-5 py-2 border border-[var(--border)] rounded-lg">
                Fazer uma doação
              </Link>
            </div>
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
        <p className="max-w-3xl mx-auto text-[var(--text)] opacity-80 mb-8">
          O curta-metragem produzido pela Humane Society International mostra Ralph, um coelho usado como cobaia em
          testes de cosméticos. Com uma abordagem sensível e comovente, o filme nos convida a refletir sobre a
          responsabilidade humana e a importância de apoiar alternativas livres de crueldade.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
          <iframe
            src="https://www.youtube.com/embed/AjdMtLF0Z6w?si=kG-qaobVmEI2f-G3"
            title="Salve o Ralph — Curta da Humane Society International"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <p className="mt-4 text-[var(--text)] opacity-80 max-w-2xl mx-auto">
          A PetUp apoia causas que lutam contra o sofrimento animal e incentiva o consumo consciente. Compartilhe esta
          mensagem e ajude a dar voz a quem não pode falar.
        </p>
      </section>
      <section className="container mx-auto px-6">
        <h3 className="text-xl font-bold text-[var(--text)]">ONGs Parceiras</h3>
        <p className="mt-2 text-[var(--text)] opacity-75">
          Conheça organizações sérias que resgatam, cuidam e reabilitam animais — apoie o trabalho delas.
        </p>
        <div className="mt-6">
          <OngsScroller />
        </div>
      </section>
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-[var(--secondary-bg)] p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--text)]">Quer ajudar agora?</h3>
          <p className="mt-3 text-[var(--text)] opacity-80">
            Doe uma quantia, compartilhe um perfil ou adquira produtos com parte da renda destinada a abrigos.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/doar" className="px-6 py-3 rounded-lg bg-[var(--highlight)] text-white font-medium">
              Doar
            </Link>
            <Link to="/https://www.instagram.com" className="px-6 py-3 rounded-lg border border-[var(--border)]">
              Compartilhar
            </Link>
          </div>
        </div>
      </section>
      <footer className="container mx-auto px-6 pb-12 text-center">
        <p className="text-sm text-[var(--text)] opacity-70">
          © {new Date().getFullYear()} PetUp — Juntos por um mundo mais humano para os animais.
        </p>
      </footer>
    </main>
  );
}
