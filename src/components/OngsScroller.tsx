import "../css/ongsScroller.css";

import ongs from  "../assets/ongs.json";

function ScrollerItemsList() {

    
    return (
        ongs.map((o, index) => (
            <li key={index}>
                <a
                    href={o.site}
                    className="w-[calc(100vw/3)] sm:w-[calc(100vw/6)] flex justify-center items-center rounded-[5px] bg-[hsl(210,44%,96%)]"
                >
                    <img src={`/ongs/${o.imagem}`} alt={o.nome} className="w-3/4" />
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
