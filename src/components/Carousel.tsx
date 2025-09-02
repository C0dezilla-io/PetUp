import { useEffect, useRef } from "react";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import "../css/carousel.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import slide1 from "../assets/logo/slide1.png";
import slide2 from "../assets/logo/slide2.png";
import slide3 from "../assets/logo/slide3.png";
import slide4 from "../assets/logo/slide4.png";

function Carousel() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const instanceRef = useRef<any>(null);

    useEffect(() => {
        const element = sliderRef.current;
        if (!element) return;

        if (!instanceRef.current) {
            instanceRef.current = new BlazeSlider(element, {
                all: {
                    slidesToShow: 1,
                    enableAutoplay: false,
                    loop: true,
                    transitionDuration: 300,
                },
            });
        }

        return () => {
            const instance = instanceRef.current;
            if (instance && typeof instance.destroy === "function") {
                instance.destroy();
            }
            instanceRef.current = null;
        };
    }, []);

    const slides = [slide1, slide2, slide3, slide4];

    return (
        <section className="flex justify-center">
            <div className="blaze-slider mx-auto relative" ref={sliderRef}>
                <div className="blaze-container grid grid-cols-9">
                    <button
                        className="blaze-prev hidden md:flex justify-center items-center bg-[var(--secondary-bg)]/50 hover:bg-[var(--secondary-bg)] text-[var(--text)]"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <div className="blaze-track-container col-span-9 md:col-span-7">
                        <div className="blaze-track">
                            {slides.map((src, index) => (
                                <div className="blaze-slide" key={index}>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="blaze-next hidden md:flex justify-center items-center bg-[var(--secondary-bg)]/50 hover:bg-[var(--secondary-bg)] text-[var(--text)]"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="controls col-span-9">
                        <div className="bottom-nav">
                            <div className="blaze-pagination flex justify-center items-center gap-4 mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
