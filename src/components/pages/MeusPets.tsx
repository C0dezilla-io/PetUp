import { useEffect, useState } from "react";
import axios from "axios";
import type { petType } from "../PetCard";
import { useNavigate } from "react-router-dom";
export default function MeusPets() {
  const [pets, setPets] = useState<petType[]>([]);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/animais`).then((r) => {
        setPets(r.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, [refresh]);

  const toggleAdotado = async (pet: petType) => {
    try {
      axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/animais/${pet.animalId}`,
        { is_adotado: !pet.is_adotado },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRefresh((prev) => prev + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="py-20 grid grid-cols-12">
      <div className="flex flex-col gap-8 col-span-10 col-start-2">
        <h1 className="text-2xl">Meus Pets</h1>
        {pets.map((p, i) => (
          <div
            className="petmenu grid grid-cols-4 bg-[var(--secondary-bg)] rounded-xl border border-[var(--secondary-text)] overflow-hidden hover:border-[var(--text)]"
            key={i}
          >
            <div className="imageContainer aspect-square">
              <img
                src={
                  p.caminhoFoto
                    ? import.meta.env.VITE_BACKEND_URL + "/" + p.caminhoFoto
                    : "/src/assets/petNotFound.png"
                }
                alt={`Foto de ${p.nome}`}
                className="object-cover min-w-full min-h-full"
              />
            </div>
            <div className="col-span-3 flex flex-col justify-between h-full p-4">
              <span className="text-xl md:text-2xl">{p.nome}</span>
              <div className="controls grid grid-cols-3 gap-2 items-end">
                <button
                  onClick={() => navigate(`/editarpet/${p.animalId}`)}
                  className="rounded-lg h-full p-2 border border-[var(--highlight)] text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-[var(--bg)] transition-colors duration-300 cursor-pointer"
                >
                  Editar Pet
                </button>
                <button
                  onClick={() => navigate(`/pedidosadocao/${p.animalId}`)}
                  className="rounded-lg h-full p-2 border border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors duration-300 cursor-pointer"
                >
                  Ver Pedidos de adoção
                </button>
                <button
                  onClick={() => {
                    toggleAdotado(p);
                  }}
                  className="rounded-lg h-full p-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[var(--bg)] transition-colors duration-300 cursor-pointer"
                >
                  Marcar como {p.is_adotado ? "disponível" : "adotado"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
