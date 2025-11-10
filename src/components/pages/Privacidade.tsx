import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo-side-green.png";

export default function Privacidade() {
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
            Política de Privacidade
          </h1>
          <p className="mt-4 text-lg text-[var(--text)] opacity-70">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
        <div className="prose prose-lg max-w-none text-[var(--text)]">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">1. Introdução</h2>
              <p className="text-[var(--text)] opacity-80">
                No PetUp, levamos sua privacidade a sério. Esta política descreve como coletamos, 
                usamos e protegemos suas informações pessoais.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">2. Informações que Coletamos</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--text)]">Informações Pessoais:</h3>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Nome completo e dados de contato</li>
                  <li>Endereço de email e telefone</li>
                  <li>Endereço residencial (para processo de adoção)</li>
                  <li>Documentos de identificação quando necessário</li>
                </ul>
                <h3 className="text-xl font-semibold text-[var(--text)]">Informações de Uso:</h3>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Dados de navegação e interação com a plataforma</li>
                  <li>Preferências de animais para adoção</li>
                  <li>Histórico de adoções e interesses</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">3. Como Usamos suas Informações</h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Facilitar processos de adoção responsável</li>
                  <li>Comunicar sobre status de adoções</li>
                  <li>Enviar atualizações sobre animais de interesse</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">4. Compartilhamento de Dados</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Seus dados podem ser compartilhados com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>ONGs parceiras para processos de adoção</li>
                  <li>Prestadores de serviços essenciais (hospedagem, email)</li>
                  <li>Autoridades competentes quando exigido por lei</li>
                  <li>Parceiros de pagamento (apenas quando houver transações)</li>
                </ul>
                <p className="text-[var(--text)] opacity-80">
                  <strong>Nunca</strong> vendemos seus dados pessoais para terceiros.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">5. Segurança das Informações</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Implementamos medidas robustas de segurança:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controle de acesso restrito</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares dos dados</li>
                  <li>Protocolos SSL/TLS para transmissão segura</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">6. Segurança de Pagamento</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Para doações ou pagamentos de taxas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Utilizamos processadores de pagamento certificados</li>
                  <li>Não armazenamos dados completos de cartão de crédito</li>
                  <li>Todas as transações são criptografadas</li>
                  <li>Conformidade com PCI DSS para segurança de pagamentos</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-[var(--text)] opacity-80">
                Usamos cookies para melhorar sua experiência, lembrar preferências e analisar 
                tráfego. Você pode controlar as configurações de cookies através do seu navegador.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">8. Seus Direitos</h2>
              <div className="space-y-4">
                <p className="text-[var(--text)] opacity-80">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text)] opacity-80">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar consentimentos a qualquer momento</li>
                  <li>Receber explicações sobre o uso de seus dados</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">9. Retenção de Dados</h2>
              <p className="text-[var(--text)] opacity-80">
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                descritas ou para atender a requisitos legais.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">10. Alterações nesta Política</h2>
              <p className="text-[var(--text)] opacity-80">
                Podemos atualizar esta política periodicamente. Notificaremos os usuários sobre 
                alterações significativas através de email ou notificações na plataforma.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">11. Contato</h2>
              <p className="text-[var(--text)] opacity-80">
                Para questões sobre privacidade ou exercer seus direitos, entre em contato:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-[var(--text)] opacity-80">
                  <strong>Email:</strong> 
                  <span className="text-[var(--highlight)] ml-2">petup@gmail.com</span>
                </p>
                <p className="text-[var(--text)] opacity-80">
                  <strong>Telefone:</strong> 
                  <span className="text-[var(--highlight)] ml-2">(14) 99616-0391</span>
                </p>
              </div>
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