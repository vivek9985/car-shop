import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/Bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="h-px bg-gray-700"></div>
      <footer className="footer p-10 text-gray-300">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 text-gray-600 font-medium">
        <aside className="items-center grid-flow-col">
          <p>
            .Vems <br />
            Providing exlusive car since 1992.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-2xl">
            <Link>
              <BiLogoFacebook className="hover:scale-125 duration-200 hover:text-red-500"></BiLogoFacebook>
            </Link>
            <Link>
              <BiLogoInstagramAlt className="hover:scale-125 duration-200 hover:text-red-500"></BiLogoInstagramAlt>
            </Link>
            <Link>
              <BiLogoTwitter className="hover:scale-125 duration-200 hover:text-red-500"></BiLogoTwitter>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
