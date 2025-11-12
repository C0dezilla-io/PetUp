import { Layout } from "./components/shared/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import Login from "./components/pages/Login.tsx";
import Pets from "./components/pages/Pets.tsx";
import DoarPets from "./components/pages/DoarPets.tsx";
import Perfil from "./components/pages/Perfil.tsx";
import Ongs from "./components/pages/Ongs.tsx";
import NotFound from "./components/pages/NotFound.tsx";
import Cadastro from "./components/pages/Cadastro.tsx";
import Termos from "./components/pages/Termos.tsx";
import Privacidade from "./components/pages/Privacidade.tsx";
import FormularioAdocao from "./components/pages/FormularioAdocao.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/pets/" element={<Pets />} />
          <Route path="/pets/:id" element={<Pets />} />
          <Route path="/ongs/" element={<Ongs />} />
          <Route path="/doar/" element={<DoarPets />} />
          <Route path="/perfil/" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cadastro/" element={<Cadastro />} />
          <Route path="/termos/" element={<Termos />} />
          <Route path="/privacidade/" element={<Privacidade />} />
          <Route path="/formulario-de-adocao" element={<FormularioAdocao />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
