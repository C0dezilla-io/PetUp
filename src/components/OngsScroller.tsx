import "../css/ongsScroller.css";

import amigosDosNoivos from "../assets/logo/ongs/amigosdosnoivos.png";
import brigada from "../assets/logo/ongs/brigadadosanimaissemteto.png";
import miadosELatidos from "../assets/logo/ongs/confrariadosmiadoselatidos.png";
import focinhosDeLuz from "../assets/logo/ongs/focinhosdeluz.png";
import euSouOBixo from "../assets/logo/ongs/institutoeusouobixo.png";
import protetores from "../assets/logo/ongs/protetoresvoluntarios.png";

// Idealmente, será implementado no banco de dados uma sessão para o usuário armazenar as ongs parceiras que aparecerão no slider
// Dessa forma será armazenado os links dos sites das ongs e seus nomes para colocar na href do link e no alt da imagem

function ScrollerItemsList() {

    const images = [
        amigosDosNoivos,
        brigada,
        miadosELatidos,
        focinhosDeLuz,
        euSouOBixo,
        protetores,
    ];

    
    return (
        images.map((i, index) => (
            <li key={index}>
                <a
                    href="https://github.com/C0dezilla-io"
                    className="w-[calc(100vw/3)] sm:w-[calc(100vw/6)] flex justify-center items-center rounded-[5px] bg-[hsl(210,44%,96%)]"
                >
                    <img src={i} alt="Ong parceira" className="w-3/4" />
                </a>
            </li>
        ))
    )
}

function OngsScroller() {
    

    return (
        <section className="ongsScroller mt-15 overflow-x-hidden w-full">
            <ul className="ongsScrollerList flex flex-nowrap gap-2 pt-10 pb-10 w-max">
                <ScrollerItemsList />
                <ScrollerItemsList />
            </ul>
        </section>
    );
}

export default OngsScroller;
