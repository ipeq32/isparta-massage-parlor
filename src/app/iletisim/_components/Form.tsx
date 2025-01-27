"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { toast } from "react-toastify";

const FormComponent = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (true) {
      case !formDetails.name:
        toast.error("İsim alanı boş bırakılamaz.");
        break;
      case !formDetails.email:
        toast.error("E-posta alanı boş bırakılamaz.");
        break;
      case !formDetails.message:
        toast.error("Mesaj alanı boş bırakılamaz.");
        break;
      default:
        break;
    }
    const phoneNumber = "905302411232";
    const message = `Merhaba, ben ${formDetails.name.toUpperCase()}.\nSize websitenizdeki iletişim Formu üzerinden size ulaşıyorum.\n\nİletişim bilgilerim:\nE-posta: ${
      formDetails.email
    }\n\nMesaj: ${formDetails.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container sm:px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 border rounded-lg sm:overflow-hidden sm:mr-10 sm:p-10 flex items-end justify-start relative max-sm:mb-40">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ulusoy%20Apartmanı%20Karaağaç%20Firdevs%20Cd.%20No:%208%20D:14%2032100%20Merkez%20Isparta&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(.5) contrast(1.2) opacity(0.5)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md max-sm:top-[50%] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-4/5">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Adres
              </h2>
              <p className="mt-1">
                Ulusoy Apartmanı, Karaağaç, Firdevs Cd. No: 8 D:14, 32100
                Merkez/Isparta
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                E-Posta
              </h2>
              <a className="text-red-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Telefon
              </h2>
              <p className="leading-relaxed">+90 (530) 241 12 32</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            İletişim Formu
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Rose Town Spa Ve Masaj Salonu
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              required
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Gönder
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
