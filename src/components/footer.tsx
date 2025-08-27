import logo from "./../assets/logo/logo-side-white.png";
import googleSafe from "../assets/logo/logo-google-seguro.png"
import { 
    Facebook, 
    Instagram, 
    TwitterX, 
    Envelope, 
    Whatsapp, 
    GeoAlt,
    HeartFill
} from "react-bootstrap-icons";
import "./../css/footer.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex items-center justify-center md-screen bg-foreground text-background mt-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-10 md:col-start-2">
                    <div className="py-12 px-4 md:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1 md:col-span-1">
                                <div className="mb-4">
                                    <img src={logo} alt="Logo PetUp" className="w-32" />
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Trazendo mais amor para o mundo criando novos laços e amizades.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Início
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Pets
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            ONGs Parceiras
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Doar um Pet
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1">
                                <h4 className="text-lg font-semibold mb-4 text-white">Suporte</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Como Funciona?
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Política de Privacidade
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            Termos de Uso
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            FAQ
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1">
                                <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2"
                                        onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')}
                                        style={{ cursor: 'pointer'}}
                                        >
                                        <Envelope className="h-4 w-4 text-gray-300" />
                                        <span className="text-sm text-gray-300">petup@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2"
                                        onClick={() => window.open('https://wa.me/5514996160391?text=PetUp%C2%A9.%20Seu%20melhor%20amigo%20est%C3%A1%20aqui!%20Fique%20a%20vontade%20para%20nos%20enviar%20uma%20mensagem.%20Atendimento%2024%2F7!', '_blank')}
                                        style={{ cursor: 'pointer'}}
                                        >
                                        <Whatsapp className="h-4 w-4 text-gray-300" />
                                        <span className="text-sm text-gray-300">(14) 99616-0391</span>
                                    </div>
                                    <div className="flex items-center gap-2"
                                        onClick={() => window.open('https://www.google.com/maps/place/Petup/@13.2867023,158.8728081,3z/data=!3m1!4b1!4m6!3m5!1s0x548441700b1dc56f:0x5b05d522bc00886d!8m2!3d51.2072!4d-121.9883!16s%2Fg%2F11t79k9mpr?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                                        style={{ cursor: 'pointer'}}
                                        >
                                        <GeoAlt className="h-4 w-4 text-gray-300" />
                                        <span className="text-sm text-gray-300">Marilia, SP</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h5 className="text-sm font-semibold mb-3 text-white">Acompanhe nossas redes sociais:</h5>
                                    <div className="flex gap-3">
                                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                                            onClick={() => window.open('https://www.facebook.com', '_blank')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <Facebook className="h-4 w-4" />
                                        </button>
                                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                                            onClick={() => window.open('https://www.instagram.com', '_blank')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <Instagram className="h-4 w-4" />
                                        </button>
                                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                                            onClick={() => window.open('https://twitter.com', '_blank')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <TwitterX className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mx-4 md:mx-0"></div>
                    <div className="py-6 px-4 md:px-0">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-300">
                                    &copy; {currentYear} PetUp. Todos os direitos reservados.
                                </span>
                                <HeartFill className="h-3 w-3 text-red-500" />
                            </div>
                            <div className="flex items-center gap-2">
                            <img src={googleSafe} alt="Google Safe" className="w-30 cursor-pointer"
                                onClick={() => {const storeUrl = "https://petup.com.br";
                                const googleSafeUrl = `https://transparencyreport.google.com/safe-browsing/search?hl=pt_BR&url=${encodeURIComponent(storeUrl)}`;
                                window.open(googleSafeUrl, '_blank');
                                }}
                                style={{ cursor: 'pointer' }}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};