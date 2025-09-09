import "../css/ongsScroller.css";

import amigosDosNoivos from "../assets/logo/ongs/amigosdosnoivos.png";
import brigada from "../assets/logo/ongs/brigadadosanimaissemteto.png";
import miadosELatidos from "../assets/logo/ongs/confrariadosmiadoselatidos.png";
import focinhosDeLuz from "../assets/logo/ongs/focinhosdeluz.png";
import euSouOBixo from "../assets/logo/ongs/institutoeusouobixo.png";
import protetores from "../assets/logo/ongs/protetoresvoluntarios.png";

// Idealmente, será implementado no banco de dados uma sessão para o usuário armazenar as ongs parceiras que aparecerão no slider
// Dessa forma será armazenado os links dos sites das ongs e seus nomes para colocar na href do link e no alt da imagem

function OngsScroller() {
    const images = [
        amigosDosNoivos,
        brigada,
        miadosELatidos,
        focinhosDeLuz,
        euSouOBixo,
        protetores,
    ];

    return (
        <section className="ongsScroller mt-15 overflow-x-hidden w-full">
            <ul className="ongsScrollerList flex flex-nowrap gap-2 pt-10 pb-10 w-max">
                {images.map((i, index) => (
                    <li key={index}>
                        <a
                            href="https://github.com/C0dezilla-io"
                            className="w-36 sm:w-52 xl:w-80 flex justify-center items-center rounded-[5px] bg-[hsl(210,44%,96%)] shadow-md shadow-(color: var(--secondary-bg))"
                        >
                            <img src={i} alt="Ong parceira" className="w-3/4" />
                        </a>
                    </li>
                ))}
                {images.map((i, index) => (
                    <li key={index}>
                        <a
                            href="https://github.com/C0dezilla-io"
                            className="w-36 sm:w-52 xl:w-80 flex flex-shrink-0 justify-center items-center rounded-[5px] bg-[hsl(210,44%,96%)] shadow-md shadow-(color: var(--secondary-bg))"
                        >
                            <img src={i} alt="Ong parceira" className="w-3/4" />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default OngsScroller;
