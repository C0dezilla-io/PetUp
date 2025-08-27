import { useEffect, useRef } from "react";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";
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
        <section className="mt-4 flex justify-center">
            <div
                className="blaze-slider max-w-4xl mx-auto relative"
                ref={sliderRef}
            >
                <div className="blaze-container">
                    <div className="blaze-track-container">
                        <div className="blaze-track">
                            {slides.map((src, index) => (
                                <div className="blaze-slide" key={index}>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="blaze-prev absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        className="blaze-next absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Carousel;