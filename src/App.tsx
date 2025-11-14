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
import MeusPets from "./components/pages/MeusPets.tsx";
import PedidosAdocao from "./components/pages/PedidosAdocao.tsx";
import { EditarPet } from "./components/pages/EditarPet.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <WhatsAppButton />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/pets/" element={<Pets />} />
          <Route path="/pets/:id" element={<Pets />} />
          <Route path="/meuspets/" element={<MeusPets />} />
          <Route path="/pedidosadocao/:id" element={<PedidosAdocao />} />
          <Route path="/editarpet/:id" element={<EditarPet />} />
          <Route path="/ongs/" element={<Ongs />} />
          <Route path="/doar/" element={<DoarPets />} />
          <Route path="/perfil/" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cadastro/" element={<Cadastro />} />
          <Route path="/termos/" element={<Termos />} />
          <Route path="/privacidade/" element={<Privacidade />} />
          <Route
            path="/formulario-de-adocao/:id"
            element={<FormularioAdocao />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
