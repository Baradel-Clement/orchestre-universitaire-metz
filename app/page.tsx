"use client";
import { Music4 } from "lucide-react";
import Image from "next/image";
import orchestre from "../public/assets/portfolio/6.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="Home">
      <Image src={orchestre} alt="orchestre" />
      <section className="px-6 py-12 sm:px-12 md:px-16 bg-[#B56D3E] rounded-2xl mt-8 flex flex-col">
        <div className="text-center space-y-8 flex flex-col gap-6 items-center">
          <div className="flex items-center justify-center gap-3">
            <Music4 className="h-8 w-8 text-[#ffe1c3]" />
            <h1 className="text-4xl sm:text-5xl font-light text-[#ffe1c3]">
              L&apos;OUM
            </h1>
          </div>

          <div className="space-y-4 text-gray-600 max-w-2xl mx-auto">
            <p className="leading-relaxed text-sm sm:text-base">
              L&apos;Orchestre Universitaire de Metz a été fondé en décembre 2023
              dans le but de créer des liens entre les étudiants de différents
              départements d&apos;études, autour d&apos;une passion commune, la
              musique.
            </p>

            <p className="leading-relaxed text-sm sm:text-base">
              Dès sa création, l&apos;orchestre comptait une vingtaine de
              musiciens et ne cesse depuis de croître. Que ce soit des vents,
              des percussions ou des cordes, les différentes familles
              d&apos;instruments sont représentées et permettent de jouer des
              morceaux variés.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3 bg-[#ffe1c3] text-white rounded-full hover:bg-[#B89587] transition-colors duration-300 font-medium text-sm sm:text-base w-auto"
          >
            Rejoins-nous !
          </Link>
        </div>
      </section>
      <Link
        href="/portfolio"
        className="mt-8 px-6 sm:px-8 py-3 bg-[#B56D3E] text-white rounded-full hover:bg-[#B89587] transition-colors duration-300 font-medium text-sm sm:text-base drop-shadow-2xl underline"
      >
        L&apos;OUM en images →
      </Link>
    </section>
  );
}
