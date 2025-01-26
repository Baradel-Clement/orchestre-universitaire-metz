import { Calendar, Clock, MapPin } from "lucide-react";
import egliseImage from "../../public/assets/eglise.jpg";
import Image from "next/image";
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Concert dans l'église Saint-Joseph",
    date: "2024-03-16",
    time: "20:00",
    location: "Église Saint-Joseph",
    address: "5 Rue de l'Abbé Châtelain, 57950 Montigny-lès-Metz",
    image:
      "https://images.unsplash.com/photo-1543949223-fd634d634e26?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Concert avec l'Orchestre de Magny",
    date: "2024-03-16",
    time: "15:00",
    location: "Pas encore défini",
    address: "2 Rue des Roses, 57000 Magny",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2340&auto=format&fit=crop",
  },
];

export default function Evenements() {
  return (
    <section className="space-y-8 flex flex-col items-center py-16">
      <h2 className="text-xl xl:text-3xl font-light text-[#B56D3E]">
        Prochains Évenements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1300px]">
        {events.map((event) => {
          const date = new Date(event.date);
          const formattedDate = new Intl.DateTimeFormat("fr-FR", {
            weekday: "short",
            day: "2-digit",
            month: "long",
          }).format(date);

          return (
            <div
              key={event.id}
              className="bg-[#ffe1c3] rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                {event.id === 1 && (
                  <Image
                    src={egliseImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                )}
                {event.id !== 1 && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={event.id === 1}
                  />
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-background">
                    <MapPin className="w-5 h-5 mx-auto mb-2" />
                    <p className="text-sm">{event.address}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B56D3E]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B56D3E]" />
                    <span className="text-sm">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B56D3E]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
