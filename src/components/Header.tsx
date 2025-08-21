import logo from './../assets/logo/logo-side-green.png';
import { MoonFill } from 'react-bootstrap-icons';



function Header() {
    return (
        <>
            <header className="grid grid-cols-12 shadow-lg">
                <nav className="grid grid-cols-12 col-span-12 col-start-1 md:col-span-10 md:col-start-2 align-center">
                    <div className="navbar-brand col-span-3 md:col-span-2">
                        <img src={logo} alt="Logo PetUp" className="w-full" />
                    </div>
                    <div className="navbar-nav flex justify-end items-center col-span-9 md:col-span-10 gap-2">
                        <button className="h-fit w-fit p-2 hover:text-purple-700 transition-colors cursor-pointer duration-300">
                            <MoonFill className="h-5 w-5" />
                        </button>
                        <button className="btn btn-link active">
                            <p>Início</p>
                        </button>
                        <button className="btn btn-link">
                            <p>Pets</p>
                        </button>
                        <button className="btn btn-link">
                            <p>ONGs</p>
                        </button>
                        <button className="btn btn-link">
                            <p>Doar Pet</p>
                        </button>
                        <button className="btn btn-link">
                            <p>Meu Perfil</p>
                        </button>
                        <button className="btn btn-outline">
                            <p>Entrar</p>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;