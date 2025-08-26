import Header from "./components/Header"
import Carousel from "./components/Carousel"

function App() {
    return (
        <>
            <Header curpage={"home"} />
            <main>
                <Carousel />
                <div className="md:col-span-10 md:col-start-2"></div>
            </main>
        </>
    );
}

export default App;
