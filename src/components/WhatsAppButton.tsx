import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34123456789"; // Reemplaza con tu número real
    const message = "¡Hola! Me interesa hablar contigo sobre un proyecto.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;