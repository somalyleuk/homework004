import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Brand & Contact */}
          <div className="flex-1 mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4 space-x-3">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-semibold">E-Learning</span>
            </Link>
            <p className="mb-4">
              Empowering learners worldwide with quality education and skills
              for the future.
            </p>
            <address className="not-italic space-y-1 text-sm">
              <p>
                <strong>Address:</strong> St 562, Phnom Penh 12151, Cambodia.
              </p>
              <p>
                <strong>Business Hours:</strong> Mon-Fri: 8:00 AM - 5:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> Closed
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
              <p>
                <strong>Phone:</strong> +855 (0) 99 246-866
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info.istad@gmail.com"
                  className="underline hover:text-blue-300">
                  info.istad@gmail.com
                </a>
              </p>
            </address>
          </div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-blue-300">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Courses</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="hover:text-blue-300">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-blue-300">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-blue-300">
                    UX/UI Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              E-Learning
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:mt-0">
            <a
              href="https://www.facebook.com/istad.co"
              className="text-gray-400 hover:text-blue-300"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-300"
              aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-300"
              aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-300"
              aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
