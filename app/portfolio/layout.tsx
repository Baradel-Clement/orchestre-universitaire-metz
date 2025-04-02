import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événements - Orchestre Universitaire de Metz",
  description:
    "Découvrez les prochains événements de l'Orchestre Universitaire de Metz. Partagez la musique et vibrez ensemble !",
  openGraph: {
    type: "website",
    url: "https://www.orchestre-universitaire-metz.fr/portfolio",
    title: "Événements - Orchestre Universitaire de Metz",
    description:
      "Découvrez les prochains événements de l'Orchestre Universitaire de Metz. Partagez la musique et vibrez ensemble !",
  },
  alternates: {
    canonical: "https://www.orchestre-universitaire-metz.fr/portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
