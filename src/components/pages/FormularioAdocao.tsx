import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function FormularioAdocao() {
  const { id } = useParams();
  const [telefone, setTelefone] = useState("");
  const [listaEstados, setListaEstados] = useState<any[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(
    null
  );
  const [listaCidades, setListaCidades] = useState<any[]>([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | null>(
    null
  );
  const [lar, setLar] = useState("");
  const [outrosAnimais, setOutrosAnimais] = useState(0);
  const [motivacao, setMotivacao] = useState("");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((r) => {
        setListaEstados(r.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
      )
      .then((r) => {
        setListaCidades(r.data);
      });
  }, [estadoSelecionado]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(id);
    console.log(telefone);
    console.log(cidadeSelecionada);
    console.log(estadoSelecionado);
    console.log(lar);
    console.log(outrosAnimais);
    console.log(motivacao);
  };

  return (
    <section className="flex justify-center py-12">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-[var(--secondary-bg)] w-[90vw] sm:w-md py-6 px-8 rounded-xl flex flex-col items-center"
        action=""
      >
        <h1 className="text-lg md:text-xl">Formulário de adoção</h1>
        <div className="w-full space-y-6">
          <h2 className="text-base mt-4">
            <span className="text-xl">🧍</span> Sobre você
          </h2>
          <label
            htmlFor="telefone"
            className="text-[var(--secondary-text)] text-sm"
          >
            Telefone para contato
            <span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <input
            required
            id="telefone"
            placeholder="Telefone"
            type="text"
            className="text-sm md:text-base bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <label
            htmlFor="estadoSelect"
            className="text-[var(--secondary-text)] text-sm"
          >
            Estado<span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <select
            required
            onChange={(e) =>
              setEstadoSelecionado(e.target.value == "" ? null : e.target.value)
            }
            className={`text-sm md:text-base bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200 ${
              estadoSelecionado == null ? "text-[var(--secondary-text)]" : ""
            }`}
            name="estado"
            id="estadoSelect"
          >
            <option value="">Selecione seu estado</option>
            {listaEstados.map((e) => (
              <option value={e.sigla} key={e.id}>
                {e.nome}
              </option>
            ))}
          </select>
          <label
            htmlFor="cidadeSelect"
            className="text-[var(--secondary-text)] text-sm"
          >
            Cidade<span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <select
            required
            disabled={!estadoSelecionado}
            name="cidade"
            id="cidadeSelect"
            onChange={(e) =>
              setCidadeSelecionada(e.target.value == "" ? null : e.target.value)
            }
            className={`${
              estadoSelecionado == null ? "bg-[var(--secondary-bg)]" : ""
            } ${
              cidadeSelecionada == null ? "text-[var(--secondary-text)]" : ""
            } bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200`}
          >
            <option value="">Selecione sua cidade</option>
            {listaCidades.map((c) => (
              <option value={c.nome} key={c.id}>
                {c.nome}
              </option>
            ))}
          </select>

          <h2 className="w-full text-base mt-4">
            <span className="text-lg">🏡</span> Sobre o lar
          </h2>
          <label
            htmlFor="outroTipoDeLar"
            className="text-sm text-[var(--secondary-text)] mt-3"
          >
            Descrição breve do lar
            <span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <textarea
            required
            name="outroTipoDeLar"
            id="outroTipoDeLar"
            className="bg-[var(--bg)] w-full min-h-25 text-sm p-2 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
            placeholder="Uma casa com bastante espaço..."
            onChange={(e) => setLar(e.target.value)}
          />
          <label
            htmlFor="outrosAnimais"
            className="text-[var(--secondary-text)] text-sm"
          >
            Possui outros animais?
            <span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <select
            required
            name="cidade"
            id="outrosAnimais"
            onChange={(e) => setOutrosAnimais(parseInt(e.target.value))}
            className="bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200"
          >
            <option value={0}>Não</option>
            <option value={1}>Sim</option>
          </select>

          <h2 className="w-full text-base mt-4">
            <span className="text-lg">💕</span> Motivação
          </h2>
          <label
            htmlFor="motivacao"
            className="text-sm text-[var(--secondary-text)] mt-3"
          >
            Por que deseja adotar este animal?
            <span className="text-red-600 ms-0.5 text-sm">*</span>
          </label>
          <textarea
            required
            name="motivacao"
            id="motivacao"
            className="bg-[var(--bg)] w-full min-h-25 text-sm p-2 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
            placeholder="Fazer companhia para meu cachorro..."
            onChange={(e) => setMotivacao(e.target.value)}
          />
          <div>
            <input
              id="compromisso"
              name="compromisso"
              value="comprometo"
              type="checkbox"
              className="mr-2 accent-[var(--highlight)]"
              required
            />
            <label htmlFor="compromisso" className="text-sm">
              Concordo em cuidar do animal com responsabilidade e prover
              alimentação, abrigo e cuidados veterinários.
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg border border-[var(--highlight)] text-[var(--highlight)] hover:text-[var(--secondary-bg)] hover:bg-[var(--highlight)] transition-colors duration-200 cursor-pointer"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
