import logo from "./../assets/logo/logo-side-green.png";
import { MoonStarsFill, SunFill, XLg, List } from "react-bootstrap-icons";
import { useState } from "react";
import "./../css/header.css";

type HeaderProps = {
    curpage: string;
};

function Header({ curpage }: HeaderProps) {
    const [isNavSupportedShown, setIsNavSupportedShown] = useState(false);
    const [isOnDarkMode, setIsOnDarkMode] = useState(true);

    const showNavbarSupported = () => {
        setIsNavSupportedShown(true);
    };

    const hideNavbarSupported = () => {
        setIsNavSupportedShown(false);
    };

    const toggleDark = () => {
        let root: HTMLElement = document.querySelector('#root')!;

        if (isOnDarkMode) {
            root.classList.remove('dark');
            setIsOnDarkMode(false);
        } else {
            root.classList.add('dark');
            setIsOnDarkMode(true);
        }
    }

    return (
        <header className="bg-[var(--bg)] grid grid-cols-12 shadow-lg sticky top-0 z-30">
            <nav className="grid grid-cols-12 col-span-12 col-start-1 md:col-span-10 md:col-start-2 align-center">
                <a href="#" className="navbar-brand col-span-3 md:col-span-2 py-2">
                    <img src={logo} alt="Logo PetUp" className="w-full" />
                </a>
                <div className="navbar-nav flex justify-end items-center col-span-9 md:col-span-10 gap-2">
                    <button onClick={toggleDark} className="h-fit w-fit p-2 hover:text-[var(--highlight)] transition-colors cursor-pointer duration-300">
                        {isOnDarkMode ? <MoonStarsFill className="h-4 w-4" /> : <SunFill className="h-4 w-4" />}

                    </button>
                    <button
                        onClick={showNavbarSupported}
                        className="mr-2 md:hidden cursor-pointer"
                        aria-label="Abrir menu"
                    >
                        <List className="h-7 w-7" />
                    </button>

                    <div
                        onClick={hideNavbarSupported}
                        className={`dimmer fixed bg-black z-50 opacity-70 top-0 right-0 bottom-0 left-0 md:hidden ${isNavSupportedShown ? "" : "hidden"
                            }`}
                    ></div>
                    <ul
                        className={`navbar-supported bg-[var(--bg)] flex flex-col z-60 px-24 py-10 gap-2 items-center fixed top-0 left-0 h-full duration-400 transition-transform border border-[var(--highlight)] md:border-none md:translate-0 md:flex-row md:static md:p-0
                                ${isNavSupportedShown
                                ? "translate-x-0"
                                : "translate-x-[-100%]"
                            }`}
                    >
                        <li
                            className={!isNavSupportedShown ? "hidden" : ""}
                        >
                            <button
                                onClick={hideNavbarSupported}
                                className="close-nav-supported-btn absolute top-2 right-2 cursor-pointer md:hidden"
                                aria-label="Fechar menu"
                            >
                                <XLg className="h-5 w-5" />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`btn btn-link ${curpage == "home" ? "active" : ""
                                    }`}
                            >
                                <p className="text-sm">Início</p>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`btn btn-link ${curpage == "pets" ? "active" : ""
                                    }`}
                            >
                                <p className="text-sm">Pets</p>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`btn btn-link ${curpage == "ongs" ? "active" : ""
                                    }`}
                            >
                                <p className="text-sm">ONGs</p>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`btn btn-link ${curpage == "doar" ? "active" : ""
                                    }`}
                            >
                                <p className="text-sm">Doar Pet</p>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`btn btn-link ${curpage == "perfil" ? "active" : ""
                                    }`}
                            >
                                <p className="text-sm">Meu Perfil</p>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-outline">
                                <p className="text-sm">Entrar</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
