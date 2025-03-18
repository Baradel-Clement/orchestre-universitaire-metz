"use client";

import { useState } from "react";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import Image from "next/image";
import { NextSeo } from "next-seo";
import contactIllu from "../../public/assets/contact-illu.png";
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
    <>
      <NextSeo
        title="Orchestre Universitaire de Metz - Une aventure musicale étudiante"
        description="Rejoignez l'Orchestre Universitaire de Metz ! Une expérience musicale unique pour les étudiants et passionnés, mêlant convivialité et excellence. Partagez la musique, vibrez ensemble !"
        canonical="https://www.orchestre-universitaire-metz.fr/contact"
        openGraph={{
          type: "website",
          url: "https://www.orchestre-universitaire-metz.fr/contact",
          title:
            "Orchestre Universitaire de Metz - Une aventure musicale étudiante",
          description:
            "Rejoignez l'Orchestre Universitaire de Metz ! Une expérience musicale unique pour les étudiants et passionnés, mêlant convivialité et excellence. Partagez la musique, vibrez ensemble !",
        }}
      />
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
                  className="resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {!isLoading && <button type="submit">Envoyer</button>}
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
    </>
  );
};

export default Contact;
