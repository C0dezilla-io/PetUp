import { GenderFemale, GenderMale } from "react-bootstrap-icons";

type petType = {
  id: number;
  nome: string;
  especie: string;
  raca: string;
  porte: string;
  peso: string;
  idade: string;
  sexo: string;
  sobre: string;
  image: string;
  adotado: boolean;
};

interface PetCardPropsType {
  pet: petType;
}

export default function PetCard({ pet }: PetCardPropsType) {
  return (
    <button className="flex flex-col bg-[var(--secondary-bg)] border rounded-xl border-[var(--text-primary)] shadow-2xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      <div className="aspect-square flex justify-center intems-center overflow-hidden">
        <img
          src={pet.image}
          alt=""
          className="aspect-square w-full group-hover:scale-110 transition-transform duration-300 ease-out"
        />
      </div>
      <div className="cardInfo grid grid-cols-2 text-sm text-[var(--secondary-text)] mt-2 p-2 text-left">
        <div className="flex col-span-2 justify-between">
          <h2 className="text-[var(--text)] text-base max-w-[80%]">
            {pet.nome}
          </h2>
          {pet.sexo == "F" ? (
            <GenderFemale className="text-xl text-pink-400" />
          ) : (
            <GenderMale className="text-xl text-blue-700" />
          )}
        </div>
        <span className="mt-2">Peso: {pet.peso}</span>
        <span className="mt-2">Porte: {pet.porte}</span>
        <span className="mt-2">Idade: {pet.idade}</span>
        <span className="mt-2">Raça: {pet.raca}</span>
        <span className="mt-4 text-[var(--text)] col-span-2 text-base">
          Sobre: <br />
          {pet.sobre}
        </span>
      </div>
    </button>
  );
}
