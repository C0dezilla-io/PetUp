import logo from "./../assets/logo/logo-side-green.png";
import { MoonStarsFill, SunFill, XLg, List } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./../css/header.css";

function Header() {
  const [isNavSupportedShown, setIsNavSupportedShown] = useState(false);
  const [isOnDarkMode, setIsOnDarkMode] = useState(true);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [curpage, setCurpage] = useState(useLocation().pathname);

  const showNavbarSupported = () => {
    setIsNavSupportedShown(true);
  };

  const hideNavbarSupported = () => {
    setIsNavSupportedShown(false);
  };

  const toggleDark = () => {
    const root: HTMLElement = document.querySelector("#root")!;

    if (isOnDarkMode) {
      root.classList.remove("dark");
      setIsOnDarkMode(false);
    } else {
      root.classList.add("dark");
      setIsOnDarkMode(true);
    }
  };

  const handleRedirect = (path: string) => {
    navigate(path);
    setCurpage(path);
    setIsNavSupportedShown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tipo_usuario");
    handleRedirect("/");
  };

  return (
    <header className="bg-[var(--bg)] grid grid-cols-12 shadow-lg sticky top-0 z-30">
      <nav className="grid grid-cols-12 col-span-12 col-start-1 md:col-span-10 md:col-start-2 align-center">
        <a
          href="#"
          className="navbar-brand col-span-2 md:col-span-1 m-1.5 sm:m-2 md:m-0 md:my-3"
        >
          <img src={logo} alt="Logo PetUp" className="w-full" />
        </a>
        <div className="navbar-nav flex justify-end items-center col-span-10 md:col-span-11 gap-2">
          <button
            onClick={toggleDark}
            className="h-fit w-fit p-2 hover:text-[var(--highlight)] transition-colors cursor-pointer duration-300"
          >
            {isOnDarkMode ? (
              <MoonStarsFill className="h-4 w-4" />
            ) : (
              <SunFill className="h-4 w-4" />
            )}
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
            className={`dimmer fixed bg-black z-50 opacity-70 top-0 right-0 bottom-0 left-0 md:hidden ${
              isNavSupportedShown ? "" : "hidden"
            }`}
          ></div>
          <ul
            className={`navbar-supported bg-[var(--bg)] flex flex-col z-60 px-24 py-10 gap-2 items-center fixed top-0 left-0 h-full duration-400 transition-transform border border-[var(--highlight)] md:border-none md:translate-0 md:flex-row md:static md:p-0
              ${isNavSupportedShown ? "translate-x-0" : "translate-x-[-100%]"}`}
          >
            <li className={!isNavSupportedShown ? "hidden" : ""}>
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
                onClick={() => handleRedirect("/")}
                className={`btn btn-link ${curpage == "/" ? "active" : ""}`}
              >
                <p className="text-sm">Início</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect("/pets/")}
                className={`btn btn-link ${
                  curpage == "/pets/" ? "active" : ""
                }`}
              >
                <p className="text-sm">Pets</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect("/ongs/")}
                className={`btn btn-link ${
                  curpage == "/ongs/" ? "active" : ""
                }`}
              >
                <p className="text-sm">ONGs</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect("/doar/")}
                className={`btn btn-link ${
                  curpage == "/doar/" ? "active" : ""
                }`}
              >
                <p className="text-sm">Doar Pet</p>
              </button>
            </li>
            {token ? (
              <>
                <li>
                  <button
                    onClick={() => handleRedirect("/perfil/")}
                    className={`btn btn-link ${
                      curpage == "/perfil/" ? "active" : ""
                    }`}
                  >
                    <p className="text-sm">Meu Perfil</p>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="rounded-lg py-0.5 px-2 bg-red-500 hover:bg-red-600 cursor:pointer"
                  >
                    sair
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => handleRedirect("/login")}
                  className="btn btn-outline"
                >
                  <p className="text-sm">Entrar</p>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
