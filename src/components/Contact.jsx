import React, { useState } from "react";
import NavigationCircles from "./NavigationCircles";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const phoneNumber = "62992502728";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus("Por favor, digite uma mensagem antes de enviar.");
      return;
    }
    setStatus("");

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp chat in new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-light md:mb-32 mb-24">Connect with me on WhatsApp</h2>
      <form onSubmit={handleSubmit} className="flex flex-col lg:space-y-12 space-y-8">
        <textarea
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="md:w-[500px] w-[330px] h-32 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 transition-colors duration-500 resize-y p-3"
        ></textarea>
        <button
          type="submit"
          className="md:w-[500px] w-[330px] h-13 pl-3 pr-4 flex items-center justify-center gap-2 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-yellow-700/50 transition-colors duration-500"
        >
          Whatsapp
          <i className="bx bxl-whatsapp text-2xl"></i>
        </button>
      </form>
      {status && <p className="mt-4 text-lg text-red-600">{status}</p>}
      <NavigationCircles section="contact" />
    </div>
  );
};

export default Contact;
