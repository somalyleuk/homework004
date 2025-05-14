import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-blue-100 shadow-md">
      <nav
        className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between p-4"
        aria-label="Main navigation">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            E-Learning
          </span>
        </Link>
        <input
          id="menu-toggle"
          type="checkbox"
          className="hidden peer"
          aria-label="Toggle navigation menu"
          title="Toggle navigation menu"
        />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block"
          aria-label="Open main menu"
          title="Open main menu">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul className="flex-col mt-4 space-y-2 md:space-y-0 md:mt-0 md:flex-row md:flex md:space-x-6 md:items-center hidden peer-checked:flex bg-blue-100 md:bg-transparent absolute md:static left-0 right-0 top-full md:top-auto p-4 md:p-0 z-40">
          <li>
            <Link href="/" className="hover:text-blue-600 text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600 text-black">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 text-black">
              Contact
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 text-black">
              Resources
            </a>
          </li>
          <li className="md:hidden">
            <a href="#" className="block py-2 text-black hover:text-blue-600">
              Log in
            </a>
            <a
              href="#"
              className="block px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign up
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center">
          <a href="#" className="mr-4 hover:text-blue-600 text-black">
            Log in
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
