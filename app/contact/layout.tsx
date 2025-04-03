import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Orchestre Universitaire de Metz",
  description:
    "Contactez l'Orchestre Universitaire de Metz pour toute question ou information. Rejoignez une aventure musicale unique !",
  openGraph: {
    type: "website",
    url: "https://www.orchestre-universitaire-metz.fr/contact",
    title: "Contact - Orchestre Universitaire de Metz",
    description:
      "Contactez l'Orchestre Universitaire de Metz pour toute question ou information. Rejoignez une aventure musicale unique !",
    images: [
      {
        url: "https://www.orchestre-universitaire-metz.fr/logo.jpg", // URL complète du logo
        width: 112,
        height: 112,
        alt: "Logo de l'Orchestre Universitaire de Metz",
      },
    ],
  },
  alternates: {
    canonical: "https://www.orchestre-universitaire-metz.fr/contact",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
