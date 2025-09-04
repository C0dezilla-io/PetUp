import { Layout } from "./components/shared/layout";
import Carousel from "./components/Carousel";
import OngsCarousel from './components/OngsCarousel';

function App() {
    return (
        <Layout>
            <div className="md:col-span-10 md:col-start-2">
                <Carousel />
                <OngsCarousel />
            </div>
        </Layout>
    );
}

export default App;
