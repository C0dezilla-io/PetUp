import { useEffect, useState } from "react";
import axios from "axios";
import type { petType } from "../PetCard";
import { useParams } from "react-router-dom";

type FormType = {
  animalId: number;
  cidade: string;
  criado: string;
  descricao_lar: string;
  estado: string;
  formularioId: number;
  porque_deseja_adotar: string;
  possui_outro_animal: boolean;
  telefone: string;
  userId: number;
  __v: number;
  _id: string;
};

export default function PedidosAdocao() {
  const [pet, setPet] = useState<petType>();
  const [forms, setForms] = useState<FormType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/animais/${id}`)
        .then((r) => {
          setPet(r.data);
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/adocoes/animal/${id}`)
            .then((r) => {
              setForms(r.data);
            });
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <section className="py-20 grid grid-cols-12">
      <div className="flex flex-col gap-8 col-span-10 col-start-2">
        {pet ? (
          <h1>Pedidos de adoção de {pet.nome}</h1>
        ) : (
          <h1>Algo deu errado...</h1>
        )}
        {forms.map((f, i) => (
          <div
            className="grid grid-cols-2 p-4 bg-[var(--secondary-bg)] rounded-xl gap-6"
            key={i}
          >
            <div>
              <span>Lar:</span>
              <p className="text-[var(--secondary-text)]">{`${f.descricao_lar} ${f.cidade} - ${f.estado}`}</p>
            </div>
            <div>
              <span>Possui outros animais:</span>
              <p className="text-[var(--secondary-text)]">
                {f.possui_outro_animal ? "Sim" : "Não"}
              </p>
            </div>
            <div>
              <span>Motivação:</span>
              <p className="text-[var(--secondary-text)]">
                {f.porque_deseja_adotar}
              </p>
            </div>
            <div>
              <span>Telefone:</span>
              <p className="text-[var(--secondary-text)]">{f.telefone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
