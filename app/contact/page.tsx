"use client";

import Image from "next/image";
import contactIllu from "../../public/assets/contact-illu.png";
import { useState } from "react";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import { sendEmail } from "../../utils/sendEmail";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
    toast.success(
      `Votre message a bien été envoyé et vous recevrez un accusé de réception à l’adresse : ${email}`,
      { duration: 6000 }
    );

  const notifyError = () =>
    toast.error("Erreur. Veuillez réessayer.", { duration: 6000 });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await sendEmail({
        first_name: firstName,
        last_name: lastName,
        email,
        message,
      });
      notify();
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch {
      notifyError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="Contact">
      <div>
        <Image src={contactIllu} alt="orchestre" />
        <div className="join-us-content">
          <div className="header">
            <h2 className="text-3xl my-6 text-center font-light text-[#FFF]">
              Contactez-nous
            </h2>
          </div>
          <form className="space-y-8" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <input
                id="firstName"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <input
                id="lastName"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Votre message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {!isLoading && (
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Envoyer
              </button>
            )}
            {isLoading && (
              <ReactLoading
                type={"spin"}
                color={"blue"}
                height={66}
                width={37}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
