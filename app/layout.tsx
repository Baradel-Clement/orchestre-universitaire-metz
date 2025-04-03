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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.orchestre-universitaire-metz.fr",
              logo: "https://www.orchestre-universitaire-metz.fr/logo.jpg", // Remplacez par l'URL complète de votre logo
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
