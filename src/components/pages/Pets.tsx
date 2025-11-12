import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "../PetCard.tsx";
import PetModal from "../PetModal.tsx";
import type { petType } from "../PetCard.tsx";

export default function Pets() {
  const [pets, setPets] = useState<petType[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/animais`).then((r) => {
      setPets(r.data);
    });
  }, []);

  const [currentPet, setCurrentPet] = useState<petType | null>(null);

  const handlePetClick = (pet: petType | null) => {
    setCurrentPet(pet);
  };

  return (
    <section className="grid grid-cols-12">
      <div className="col-span-10 col-start-2">
        <h1 className="text-2xl mt-12">Pets Disponíveis</h1>
        {pets.length > 0 ? (
          <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {pets.map((pet, i) => (
              <PetCard pet={pet} petModalFunction={handlePetClick} key={i} />
            ))}
          </ul>
        ) : (
          <div className="h-[60vh] flex items-center justify-center">
            <h2>Não há pets disponíveis no momento :(</h2>
          </div>
        )}
        <PetModal pet={currentPet} dismissNotifier={setCurrentPet} />
      </div>
    </section>
  );
}
