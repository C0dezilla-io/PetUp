import { GenderFemale, GenderMale } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export type responsavelType = {
  responsavelId: number;
  tipo_usuario: string;
};

export type localizacaoType = {
  cidade: string;
  estado: string;
};

export type petType = {
  animalId: number;
  nome: string;
  especie: string;
  raca: string;
  porte: string;
  peso: number;
  idade: number;
  sexo: string;
  sobre: string;
  caminhoFoto: string | null;
  localizacao: localizacaoType;
  responsavel: responsavelType;
  is_adotado: boolean;
  criado: string;
};

interface PetCardPropsType {
  pet: petType;
}

export default function PetCard({ pet }: PetCardPropsType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pets/${pet.animalId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col bg-[var(--secondary-bg)] border rounded-xl border-[var(--text-primary)] shadow-2xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-square flex justify-center intems-center overflow-hidden">
        <img
          src={
            pet.caminhoFoto
              ? import.meta.env.VITE_BACKEND_URL + "/" + pet.caminhoFoto
              : "/src/assets/petNotFound.png"
          }
          alt=""
          className="aspect-square object-cover w-full group-hover:scale-110 transition-transform duration-300 ease-out"
        />
      </div>
      <div className="cardInfo flex flex-col text-[var(--secondary-text)] mt-2 p-2 text-left">
        <div className="flex justify-between">
          <h2 className="text-[var(--text)] max-w-[80%]">{pet.nome}</h2>
          {pet.sexo == "F" ? (
            <GenderFemale className="text-xl text-pink-400" />
          ) : (
            <GenderMale className="text-xl text-blue-700" />
          )}
        </div>
        <span className="mt-4 mb-2 text-sm">{`${pet.localizacao.cidade} - ${pet.localizacao.estado}`}</span>
      </div>
    </button>
  );
}
