import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "../PetCard.tsx";
import PetModal from "../PetModal.tsx";
import type { petType } from "../PetCard.tsx";
import { useParams, useLocation } from "react-router-dom";

export default function Pets() {
  const { id } = useParams();
  const [pets, setPets] = useState<petType[]>([]);
  const [currentPet, setCurrentPet] = useState<petType | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/animais/${id}`)
        .then((r) => {
          setCurrentPet(r.data);
        });
    }
  }, [location]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/animais`).then((r) => {
      setPets(r.data);
    });
  }, []);

  return (
    <section className="grid grid-cols-12 py-20">
      <div className="col-span-10 col-start-2">
        <h1 className="text-2xl">Pets Disponíveis</h1>
        {pets.length > 0 ? (
          <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {pets.map((pet, i) => (
              <PetCard pet={pet} key={i} />
            ))}
          </ul>
        ) : (
          <div className="h-[60vh] flex items-center justify-center">
            <h2>Não há pets disponíveis no momento :(</h2>
          </div>
        )}
        <PetModal pet={currentPet} />
      </div>
    </section>
  );
}
