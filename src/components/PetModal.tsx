import { useState, useEffect } from "react";
import { X, GenderMale, GenderFemale } from "react-bootstrap-icons";
import type { petType } from "./PetCard.tsx";

interface PetModalProps {
  pet: petType | null;
  dismissNotifier?: (pet: petType | null) => void;
}

export default function PetModal({ pet, dismissNotifier }: PetModalProps) {
  const [currentPet, setCurrentPet] = useState(pet);

  const modalDismiss = () => {
    setCurrentPet(null);
    if (dismissNotifier) dismissNotifier(null);
  };

  useEffect(() => {
    setCurrentPet(pet);
  }, [pet]);

  if (currentPet == null) return <></>;

  return (
    <div
      onClick={modalDismiss}
      className="bg-[hsla(0,0%,0%,0.75)] flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal grid md:grid-cols-5 rounded-3xl w-[90vw] h-[75vh] md:w-[60vw] md:h-[60vh] overflow-hidden bg-[var(--bg)] z-2"
      >
        <div className="modalImage w-full max-h-[70vh] flex justify-center md:col-span-3 overflow-hidden">
          <img
            src={
              currentPet.caminhoFoto
                ? import.meta.env.VITE_BACKEND_URL +
                  "/" +
                  currentPet.caminhoFoto
                : "/src/assets/petNotFound.png"
            }
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div className="modalContent items-center grid grid-cols-2 justify-between md:col-span-2 relative p-8">
          <button
            onClick={modalDismiss}
            className="absolute text-2xl top-3 right-3 cursor-pointer"
          >
            <X />
          </button>
          <div className="col-span-2">
            <div className="flex items-center">
              <h2 className="text-2xl text-[var(--text)] max-w-[80%]">
                {currentPet.nome}
              </h2>
              {currentPet.sexo == "F" ? (
                <GenderFemale className="text-2xl text-pink-400 ms-3" />
              ) : (
                <GenderMale className="text-2xl text-blue-700 ms-3" />
              )}
            </div>
          </div>
          <div className="peso">
            <span className="text-xs text-[var(--tertiary-text)]">Peso</span>
            <p>{`${currentPet.peso}Kg`}</p>
          </div>
          <div className="idade">
            <span className="text-xs text-[var(--tertiary-text)]">Idade</span>
            <p>{`${currentPet.idade} anos`}</p>
          </div>
          <div className="especie">
            <span className="text-xs text-[var(--tertiary-text)]">Espécie</span>
            <p>{currentPet.especie}</p>
          </div>
          <div className="porte">
            <span className="text-xs text-[var(--tertiary-text)]">Porte</span>
            <p>{currentPet.porte}</p>
          </div>
          <div className="raca">
            <span className="text-xs text-[var(--tertiary-text)]">Raça</span>
            <p>{currentPet.raca}</p>
          </div>
          <div className="localizacao">
            <span className="text-xs text-[var(--tertiary-text)]">
              Localização
            </span>
            <p>{`${currentPet.localizacao.cidade} - ${currentPet.localizacao.estado}`}</p>
          </div>
          <div className="sobre col-span-2">
            <span className="text-xs text-[var(--tertiary-text)]">
              Sobre o Pet
            </span>
            <p>{currentPet.sobre}</p>
          </div>
          <button className="col-span-2 rounded-lg py-2 border border-[var(--highlight)] text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-[var(--bg)] transition-colors duration-300 cursor-pointer">
            Quero Adotar
          </button>
        </div>
      </div>
    </div>
  );
}
