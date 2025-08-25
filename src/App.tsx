import Header from "./components/Header"
import Carousel from "./components/Carousel"

function App() {
    return (
        <>
            <Header curpage={"home"} />
            <main className="md:col-span-10 md:col-start-2">
                <Carousel />
            </main>
        </>
    );
}

export default App;
