import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FileEarmarkImageFill } from "react-bootstrap-icons";
import ImagesUploading from "react-images-uploading";
import type { ImageListType } from "react-images-uploading";
import type { petType } from "../PetCard";
import axios from "axios";

export function EditarPet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState<petType>();
  const [image, setImage] = useState<ImageListType>([]);
  const [nome, setNome] = useState<string | null>(null);
  const [especie, setEspecie] = useState<string | null>(null);
  const [outraEspecie, setOutraEspecie] = useState<string | null>(null);
  const [porte, setPorte] = useState<string | null>(null);
  const [sexo, setSexo] = useState<string | null>(null);
  const [sobre, setSobre] = useState<string | null>(null);
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [raca, setRaca] = useState<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);
  const onImageChange = (imageList: ImageListType) => {
    setImage(imageList);
  };

  useEffect(() => {
    setIsDragging(dragCount > 0);
  }, [dragCount]);

  const handleImageDragIn = () => {
    setDragCount((prev) => prev + 1);
  };

  const handleImageDragOut = () => {
    setDragCount((prev) => Math.max(0, prev - 1));
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/animais/${id}`)
      .then((r) => {
        if (r.data.responsavel.responsavelId != localStorage.getItem("userId"))
          navigate("/");

        const especieCondition =
          r.data.especie == "C" ||
          r.data.especie == "G" ||
          r.data.especie == "H" ||
          r.data.especie == "P";
        setNome(r.data.nome);
        setRaca(r.data.raca);
        setEspecie(especieCondition ? r.data.especie : "outro");
        setOutraEspecie(!especieCondition ? r.data.especie : "");
        setPorte(r.data.porte);
        setIdade(r.data.idade);
        setPeso(r.data.peso);
        setSexo(r.data.sexo);
        setSobre(r.data.sobre);
        setPet(r.data);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      nome &&
      (especie || outraEspecie) &&
      raca &&
      porte &&
      peso &&
      idade &&
      sexo &&
      sobre
    ) {
      try {
        await axios.patch(
          `${import.meta.env.VITE_BACKEND_URL}/api/animais/${id}`,
          {
            nome: nome,
            especie: especie == "outro" ? outraEspecie : especie,
            raca: raca,
            porte: porte,
            peso: peso,
            idade: idade,
            sexo: sexo,
            sobre: sobre,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (image[0]?.file) {
          const formdata = new FormData();
          formdata.append("fotoAnimal", image[0].file);
          await axios.patch(
            `${import.meta.env.VITE_BACKEND_URL}/api/animais/${id}`,
            formdata,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        }
        navigate(`/pets/${id}`);
      } catch (e) {
        window.alert("Erro ao salvar, verifique as informações.");
        console.error(e);
      }
    }
  };

  return (
    <section className="py-20 flex flex-col items-center">
      {!pet ? (
        <h1>Algo deu errado...</h1>
      ) : (
        <form
          className="flex flex-col items-center rounded-xl bg-[var(--secondary-bg)] w-[90vw] md:w-md py-6 px-8 space-y-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>Editar seu animal</h1>
          <div className="w-full">
            <label
              htmlFor="nome"
              className="text-[var(--secondary-text)] text-sm"
            >
              Nome
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <input
              type="text"
              id="nome"
              value={nome ? nome : ""}
              required
              placeholder="Destruidor de Galáxias"
              className="bg-[var(--bg)] w-full text-sm p-3 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="especieSelect"
              className="text-[var(--secondary-text)] text-sm"
            >
              Espécie<span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <select
              required
              className={`text-sm md:text-base bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200 ${
                especie == null ? "text-[var(--secondary-text)]" : ""
              }`}
              name="especie"
              id="especieSelect"
              onChange={(e) =>
                setEspecie(e.target.value == "" ? null : e.target.value)
              }
            >
              <option value="">Espécie</option>
              <option selected={especie == "C"} value="C">
                Cachorro
              </option>
              <option selected={especie == "G"} value="G">
                Gato
              </option>
              <option selected={especie == "H"} value="H">
                Hamster
              </option>
              <option selected={especie == "P"} value="P">
                Pássaro
              </option>
              <option selected={especie == "outro"} value="outro">
                Outro
              </option>
            </select>
          </div>

          {especie == "outro" ? (
            <div className="w-full">
              <label
                htmlFor="outraEspecie"
                className="text-[var(--secondary-text)] text-sm"
              >
                Especifique a espécie
                <span className="text-red-600 ms-0.5 text-sm">*</span>
              </label>
              <input
                required
                type="text"
                id="outraEspecie"
                value={outraEspecie ? outraEspecie : ""}
                className="bg-[var(--bg)] w-full text-sm p-3 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
                onChange={(e) => setOutraEspecie(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="w-full">
            <label
              htmlFor="raca"
              className="text-[var(--secondary-text)] text-sm"
            >
              Raça
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <input
              type="text"
              id="raca"
              value={raca ? raca : ""}
              required
              placeholder="Pastor Alemão"
              className="bg-[var(--bg)] w-full text-sm p-3 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
              onChange={(e) => setRaca(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="porteSelect"
              className="text-[var(--secondary-text)] text-sm"
            >
              Porte<span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <select
              required
              className={`text-sm md:text-base bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200 ${
                porte == null ? "text-[var(--secondary-text)]" : ""
              }`}
              name="porte"
              id="porteSelect"
              onChange={(e) =>
                setPorte(e.target.value == "" ? null : e.target.value)
              }
            >
              <option value="">Porte</option>
              <option selected={porte == "P"} value="P">
                Pequeno
              </option>
              <option selected={porte == "M"} value="M">
                Médio
              </option>
              <option selected={porte == "G"} value="G">
                Grande
              </option>
            </select>
          </div>

          <div className="w-full">
            <label
              htmlFor="sexoSelect"
              className="text-[var(--secondary-text)] text-sm"
            >
              Sexo<span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <select
              required
              className={`text-sm md:text-base bg-[var(--bg)] w-full p-3 rounded-lg border border-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200 ${
                sexo == null ? "text-[var(--secondary-text)]" : ""
              }`}
              name="sexo"
              id="sexoSelect"
              onChange={(e) =>
                setSexo(e.target.value == "" ? null : e.target.value)
              }
            >
              <option value="">Sexo</option>
              <option selected={sexo == "M"} value="M">
                Macho
              </option>
              <option selected={sexo == "F"} value="F">
                Fêmea
              </option>
            </select>
          </div>

          <div className="w-full">
            <label
              htmlFor="idade"
              className="text-[var(--secondary-text)] text-sm"
            >
              Idade em anos
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <input
              type="number"
              max={30}
              id="idade"
              value={idade ? idade : ""}
              step={0.1}
              required
              className="bg-[var(--bg)] w-full text-sm p-3 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
              onChange={(e) => setIdade(parseFloat(e.target.value))}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="peso"
              className="text-[var(--secondary-text)] text-sm"
            >
              Peso em quilos
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <input
              type="number"
              max={100}
              required
              id="peso"
              value={peso ? peso : ""}
              step={0.1}
              className="bg-[var(--bg)] w-full text-sm p-3 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="sobre"
              className="text-sm text-[var(--secondary-text)] mt-3"
            >
              Sobre o pet
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </label>
            <textarea
              required
              name="sobre"
              id="sobre"
              value={sobre ? sobre : ""}
              className="bg-[var(--bg)] w-full min-h-25 resize-none text-sm p-2 rounded-lg border border-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-colors duration-200"
              placeholder="Gordinho e gostoso..."
              onChange={(e) => setSobre(e.target.value)}
            />
          </div>

          <div className="w-full">
            <h2 className="text-sm text-[var(--secondary-text)] mt-3">
              Escolha uma foto fofa do pet
              <span className="text-red-600 ms-0.5 text-sm">*</span>
            </h2>
            <ImagesUploading
              multiple={false}
              value={image}
              onChange={onImageChange}
              maxNumber={1}
              dataURLKey="data_url"
              acceptType={["png", "jpg", "jpeg"]}
            >
              {({ imageList, onImageUpload, onImageRemoveAll, dragProps }) => (
                <div
                  className="relative p-4 pb-2 bg-[var(--bg)] rounded-lg"
                  {...dragProps}
                  onDragEnter={handleImageDragIn}
                  onDragLeave={handleImageDragOut}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <span className="text-sm">
                    Selecione a imagem ou arraste aqui
                  </span>
                  <div
                    className={`absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center rounded-lg text-white bg-[hsla(44,100%,50%,0.75)] border-4 border-dashed border-[var(--highlight)] z-10 ${
                      isDragging ? "" : "invisible"
                    }`}
                    onDragEnter={handleImageDragIn}
                    onDragLeave={handleImageDragOut}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      setDragCount(0);
                      e.preventDefault();
                    }}
                  >
                    <FileEarmarkImageFill className="text-6xl" />
                    <span className="text-2xl mt-4">
                      <b>Solte Aqui</b>
                    </span>
                  </div>
                  <div className="aspect-square w-full flex items-center justify-center rounded-xl overflow-hidden">
                    <img
                      src={
                        imageList[0]
                          ? imageList[0].data_url
                          : pet.caminhoFoto
                          ? `${import.meta.env.VITE_BACKEND_URL}/${
                              pet.caminhoFoto
                            }`
                          : "/src/assets/petNotFound.png"
                      }
                      alt="preview"
                      className="object-cover min-w-full min-h-full"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 mt-2">
                    <button
                      type="button"
                      onClick={onImageUpload}
                      className="p-3 rounded-lg border border-[var(--highlight)] text-[var(--highlight)] hover:text-[var(--secondary-bg)] hover:bg-[var(--highlight)] transition-colors duration-200 cursor-pointer"
                    >
                      {imageList[0] ? "Trocar foto" : "Selecionar foto"}
                    </button>

                    <button
                      type="button"
                      disabled={!imageList[0]}
                      onClick={onImageRemoveAll}
                      className={`p-3 rounded-lg border transition-colors duration-200 ${
                        imageList[0]
                          ? "border-red-600 text-[var(--text)] hover:bg-red-600 hover:text-white cursor-pointer"
                          : "border-[var(--secondary-text)] text-[var(--secondary-text)]"
                      }`}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              )}
            </ImagesUploading>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-lg border border-[var(--highlight)] text-[var(--highlight)] hover:text-[var(--secondary-bg)] hover:bg-[var(--highlight)] transition-colors duration-200 cursor-pointer"
          >
            Salvar Alterações
          </button>
        </form>
      )}
    </section>
  );
}
