import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.jpg"; // Assurez-vous que le chemin est correct

const Navigation = () => {
  return (
    <nav className="px-4 py-4 h-auto">
      <div className="md:max-w-[1200px] md:w-[1200px] flex-col md:flex-row md:space-y-0 space-y-4">
        <div>
          <h1 className="md:text-3xl text-2xl">Orchestre Universitaire de Metz</h1>
        </div>
        <ul className="flex space-x-4 mx-auto">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/evenements">Évènements</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Orchestre universitaire de metz"
            width={50}
            height={50}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
