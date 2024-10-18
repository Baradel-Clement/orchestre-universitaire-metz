import Link from "next/link";
import React from "react";

import insta from "../../public/assets/InstagramLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/">Accueil</Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>
      <div className="footer-socials">
        <Link
          href="https://www.instagram.com/orchestre_universitaire_metz/"
          target="_blank"
        >
          <Image src={insta} alt="insta" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
