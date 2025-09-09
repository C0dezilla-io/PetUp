import { Layout } from "./components/shared/layout";
import Carousel from "./components/Carousel";
import OngsScroller from './components/OngsScroller';

function App() {
    return (
        <Layout>
            <div className="md:col-span-10 md:col-start-2">
                <Carousel />
                <OngsScroller />
            </div>
        </Layout>
    );
}

export default App;
