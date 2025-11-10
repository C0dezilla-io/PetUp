import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo-side-green.png";

export default function Termos() {
  return (
    <div className="min-h-screen bg-[var(--bg)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[var(--secondary-bg)] p-10 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Logo PetUp" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--text)]">
            Termos de Uso
          </h1>
          <p className="mt-4 text-lg text-[var(--text)] opacity-70">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
        <div className="prose prose-lg max-w-none text-[var(--text)]">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">1. Aceitação dos Termos</h2>
              <p className="text-[var(--text)] opacity-80 mb-4">
                Ao acessar e usar o PetUp, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">2. Uso da Plataforma</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  O PetUp é uma plataforma dedicada à adoção responsável de animais. Você concorda em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Usar a plataforma apenas para fins legítimos de adoção</li>
                  <li>Respeitar todos os animais e usuários da plataforma</li>
                  <li>Não usar a plataforma para atividades comerciais não autorizadas</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">3. Cadastro e Conta</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Para utilizar todas as funcionalidades do PetUp, é necessário criar uma conta:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Você deve ter pelo menos 18 anos para criar uma conta</li>
                  <li>É responsável pela veracidade das informações fornecidas</li>
                  <li>Deve manter a confidencialidade de sua senha</li>
                  <li>É responsável por todas as atividades realizadas em sua conta</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">4. Processo de Adoção</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  O PetUp facilita o processo de adoção, porém:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Não somos responsáveis pela decisão final de adoção</li>
                  <li>As ONGs parceiras são responsáveis pela avaliação dos adotantes</li>
                  <li>Reservamo-nos o direito de recusar adoções quando necessário</li>
                  <li>O processo pode incluir visitas domiciliares e entrevistas</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">5. Uso de Imagens e Conteúdo</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Em relação ao conteúdo publicado na plataforma:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>As imagens dos animais são de responsabilidade das ONGs parceiras</li>
                  <li>Você concede ao PetUp licença para usar as fotos enviadas</li>
                  <li>Não é permitido usar imagens de terceiros sem autorização</li>
                  <li>Conteúdo ofensivo ou inadequado será removido</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">6. Segurança dos Animais</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Comprometemo-nos com o bem-estar animal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Promovemos apenas adoções responsáveis</li>
                  <li>Exigimos compromisso com cuidados veterinários</li>
                  <li>Denunciamos maus-tratos às autoridades competentes</li>
                  <li>Monitoramos adoções para garantir o bem-estar contínuo</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">7. Propriedade Intelectual</h2>
              <p className="text-[var(--text)] opacity-80">
                Todo o conteúdo do PetUp, incluindo logo, design, textos e software, é propriedade 
                exclusiva da plataforma e protegido por leis de direitos autorais.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">8. Limitação de Responsabilidade</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  O PetUp atua como intermediário entre adotantes e ONGs:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Não nos responsabilizamos por condutas dos usuários</li>
                  <li>Não garantimos a disponibilidade contínua da plataforma</li>
                  <li>Não somos responsáveis por danos diretos ou indiretos</li>
                  <li>As ONGs são responsáveis pela veracidade das informações dos animais</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">9. Modificações nos Termos</h2>
              <p className="text-[var(--text)] opacity-80">
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. 
                Alterações significativas serão notificadas aos usuários.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">10. Contato</h2>
              <p className="text-[var(--text)] opacity-80">
                Para questões sobre estes Termos de Uso, entre em contato através do email: 
                <span className="text-[var(--highlight)] ml-1">petup@gmail.com</span>
              </p>
            </section>
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[var(--highlight)] hover:opacity-90 transition-opacity duration-200"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}