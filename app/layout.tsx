import type { Metadata } from "next";
import "../styles/index.scss";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Événements - Orchestre Universitaire de Metz",
  description:
    "Découvrez les prochains événements de l'Orchestre Universitaire de Metz. Partagez la musique et vibrez ensemble !",
  openGraph: {
    type: "website",
    url: "https://www.orchestre-universitaire-metz.fr",
    title: "Événements - Orchestre Universitaire de Metz",
    description:
      "Découvrez les prochains événements de l'Orchestre Universitaire de Metz. Partagez la musique et vibrez ensemble !",
  },
  alternates: {
    canonical: "https://www.orchestre-universitaire-metz.fr",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Lien vers le favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
