import ongs from "../../assets/ongs.json";
import { motion } from "framer-motion";

export default function Ongs() {
  return (
    <div className="md:col-span-10 md:col-start-2 py-16 px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-[var(--text)]">
        ONGs Parceiras PetUp 🐾
      </h1>

      <p className="max-w-3xl mx-auto text-center text-[var(--text-secondary)] mb-14">
        Conheça as ONGs que fazem a diferença todos os dias.  
        Essas organizações dedicam amor e tempo para salvar, cuidar e encontrar
        novos lares para milhares de animais.  
        Apoie, adote ou compartilhe suas histórias — cada gesto transforma uma vida.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ongs.map((o, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-[var(--secondary-bg)] shadow-lg rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--highlight)] transition"
          >
            <div className="h-56 bg-[var(--bg)] flex justify-center items-center overflow-hidden">
              <img
                src={`/ongs/${o.imagem}`}
                alt={o.nome}
                className="object-contain w-3/4 h-3/4"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[var(--text)]">{o.nome}</h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {getDescricaoOng(o.nome)}
              </p>
              <a
                href={o.site}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-center bg-[var(--highlight)] text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition"
              >
                Visitar site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
function getDescricaoOng(nome: string): string {
  switch (nome) {
    case "ABAN - Associação dos amigos":
      return "Desde 1998, a ABAN acolhe cães e gatos abandonados em São Paulo, oferecendo tratamento, abrigo e muito amor até encontrarem um lar definitivo.";
    case "Bastadotar":
      return "Movimento que nasceu do desejo de reduzir o número de animais nas ruas. Com campanhas e feiras, o BastaDÓTAR já promoveu mais de 3 mil adoções conscientes.";
    case "Confraria":
      return "A Confraria Miados e Latidos atua com resgates e reabilitação de animais em situação de risco, unindo voluntários apaixonados por causas animais.";
    case "Focinhos de Luz":
      return "Com base no Rio de Janeiro, a Focinhos de Luz oferece abrigo, cuidados veterinários e programas de adoção, iluminando o caminho de centenas de peludos.";
    case "Instituto Eu Sou o Bicho":
      return "ONG de Curitiba que atua com resgate, castração e campanhas educativas, acreditando que o respeito pelos animais é o primeiro passo para um mundo melhor.";
    case "Protetores Voluntários de Camboriú":
      return "Grupo formado por cidadãos que se uniram para alimentar, resgatar e cuidar de animais em situação de rua, provando que a compaixão transforma realidades.";
    default:
      return "ONG comprometida com o amor e o bem-estar animal, realizando resgates, adoções e ações comunitárias.";
  }
}
