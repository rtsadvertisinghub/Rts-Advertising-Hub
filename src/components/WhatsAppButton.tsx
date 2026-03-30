import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "923005382657"; // Pakistan format without + 
  const message = "Hello! I'm interested in your advertising services.";
  // Using api.whatsapp.com format which is more reliable for pre-filled messages
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.003 3.2C8.877 3.2 3.084 8.993 3.084 16.12c0 2.274.595 4.494 1.725 6.453L3.2 28.8l6.45-1.693a12.88 12.88 0 006.353 1.713c7.127 0 12.92-5.793 12.92-12.92S23.13 3.2 16.003 3.2zm0 23.68c-2.024 0-4.01-.544-5.74-1.573l-.412-.244-4.27 1.12 1.14-4.165-.267-.424a10.71 10.71 0 01-1.643-5.714c0-5.932 4.828-10.76 10.76-10.76s10.76 4.828 10.76 10.76-4.828 10.76-10.76 10.76zm5.907-8.06c-.324-.162-1.917-.946-2.214-1.054-.297-.108-.513-.162-.73.162-.216.324-.838 1.054-1.027 1.27-.19.217-.378.244-.702.081-.324-.162-1.368-.504-2.605-1.607-.963-.858-1.613-1.918-1.802-2.242-.19-.324-.02-.499.143-.66.146-.146.324-.378.486-.568.162-.19.216-.324.324-.54.108-.217.054-.405-.027-.568-.081-.162-.73-1.76-.999-2.41-.264-.632-.532-.546-.73-.557l-.622-.01c-.216 0-.568.081-.865.405-.297.324-1.135 1.108-1.135 2.701 0 1.594 1.162 3.134 1.324 3.35.162.217 2.287 3.493 5.544 4.898.775.334 1.38.534 1.852.684.778.247 1.487.212 2.047.129.624-.093 1.917-.784 2.188-1.54.27-.757.27-1.405.19-1.54-.081-.135-.297-.216-.621-.378z"/>
      </svg>
    </motion.a>
  );
}
