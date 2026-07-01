import { MessageCircle } from "lucide-react";
import { whatsAppUrl } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsAppUrl} aria-label="Chat with us on WhatsApp">
      <MessageCircle aria-hidden="true" size={20} />
      <span>Chat with us</span>
    </a>
  );
}
