import { Layout } from "./components/shared/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import Login from "./components/pages/Login.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
