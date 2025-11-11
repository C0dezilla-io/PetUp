import { useState } from "react";
import PetCard from "../PetCard.tsx";
import PetModal from "../PetModal.tsx";
import type { petType } from "../PetCard.tsx";

export default function Pets() {
  const testPets = [
    {
      id: 1,
      nome: "Cleitin do crime",
      especie: "Cachorro",
      raca: "Pinscher",
      porte: "Pequeno",
      peso: "3,5kg",
      idade: "1 ano e 4 meses",
      sexo: "M",
      sobre: "Matará, se necessário.",
      image:
        "https://i.pinimg.com/1200x/c3/6c/5c/c36c5c41e74df5bbe5e557c5ce8f210f.jpg",
      ong: {
        nome: "ongX",
        cidade: "Marília",
        estado: "SP",
      },
      adotado: false,
    },
    {
      id: 2,
      nome: "Cupcake",
      especie: "Cachorro",
      raca: "Pitbull",
      porte: "Grande",
      peso: "30kg",
      idade: "3 anos",
      sexo: "F",
      sobre: "Tem medo de tudo mas é extremamente carinhosa!",
      image:
        "https://i.pinimg.com/564x/3e/51/a5/3e51a5de3ed1d5f35d90199d0af2c574.jpg",
      ong: {
        nome: "ongX",
        cidade: "Marília",
        estado: "SP",
      },
      adotado: false,
    },
  ];

  const [currentPet, setCurrentPet] = useState<petType | null>(null);

  const handlePetClick = (pet: petType) => {
    setCurrentPet(pet);
  };

  return (
    <section className="grid grid-cols-12 py-12">
      <div className="col-span-10 col-start-2">
        <h1 className="text-2xl">Pets Disponíveis</h1>
        <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {testPets.map((pet, i) => (
            <PetCard pet={pet} petModalFunction={handlePetClick} key={i} />
          ))}
        </ul>
        <PetModal pet={currentPet} />
      </div>
    </section>
  );
}
