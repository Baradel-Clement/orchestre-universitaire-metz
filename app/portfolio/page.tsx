"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { src: "/assets/portfolio/1.jpg", width: 1200, height: 1599 },
  {
    src: "/assets/portfolio/2.jpg",
    width: 1599,
    height: 1200,
  },
  {
    src: "/assets/portfolio/3.jpg",
    width: 2016,
    height: 1512,
  },
  {
    src: "/assets/portfolio/4.jpg",
    width: 1512,
    height: 2016,
  },
  {
    src: "/assets/portfolio/5.jpg",
    width: 2016,
    height: 1512,
  },
  {
    src: "/assets/portfolio/6.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/assets/portfolio/7.jpg",
    width: 1496,
    height: 1000,
  },
  {
    src: "/assets/portfolio/8.jpg",
    width: 1496,
    height: 1000,
  },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}
export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      {/* <NextSeo
        title="Orchestre Universitaire de Metz - Une aventure musicale étudiante"
        description="Rejoignez l'Orchestre Universitaire de Metz ! Une expérience musicale unique pour les étudiants et passionnés, mêlant convivialité et excellence. Partagez la musique, vibrez ensemble !"
        canonical="https://www.orchestre-universitaire-metz.fr/portfolio"
        openGraph={{
          type: "website",
          url: "https://www.orchestre-universitaire-metz.fr/portfolio",
          title:
            "Orchestre Universitaire de Metz - Une aventure musicale étudiante",
          description:
            "Rejoignez l'Orchestre Universitaire de Metz ! Une expérience musicale unique pour les étudiants et passionnés, mêlant convivialité et excellence. Partagez la musique, vibrez ensemble !",
        }}
      /> */}
      <section className="Portfolio">
        <RowsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </section>
    </>
  );
}
