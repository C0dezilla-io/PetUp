import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5514996160391";
  const message = encodeURIComponent(
    "PetUp©. Seu melhor amigo está aqui! Fique à vontade para nos enviar uma mensagem. Atendimento 24/7!"
  );

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-4 shadow-lg"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </button>
  );
}
