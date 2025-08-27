import { Layout } from "./components/shared/layout";
import Carousel from "./components/Carousel";

function App() {
    return (
        <Layout>
            <div className="md:col-span-10 md:col-start-2">
        <>
            <Header curpage={"home"} />
            <main>
                <Carousel />
            </div>
        </Layout>
                <div className="md:col-span-10 md:col-start-2"></div>
            </main>
        </>
    );
}

export default App;
