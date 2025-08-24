// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="mx-6 mt-4 rounded-2xl bg-[#add8e6]/90 shadow-md">
  <div className="flex items-center justify-between px-8 py-5">
    <div className="flex flex-shrink-0 items-center">
      <Link
        href="/"
        className="text-[#000000] text-3xl font-bold"
      >
        Digant Patel
      </Link>
    </div>

    <ul
      className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 
                 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100"
      id="navbar-default"
    >
      <li>
        <Link
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          href="/#about"
        >
          <div className="text-sm text-[#344966] transition-colors duration-300 hover:text-pink-600 font-bold">
            ABOUT
          </div>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          href="/#experience"
        >
          <div className="text-sm text-[#344966] transition-colors duration-300 hover:text-pink-600 font-bold">
            EXPERIENCE
          </div>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          href="/#skills"
        >
          <div className="text-sm text-[#344966] transition-colors duration-300 hover:text-pink-600 font-bold">
            SKILLS
          </div>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          href="/#education"
        >
          <div className="text-sm text-[#344966] transition-colors duration-300 hover:text-pink-600 font-bold">
            EDUCATION
          </div>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          href="/#projects"
        >
          <div className="text-sm text-[#344966] transition-colors duration-300 hover:text-pink-600 font-bold">
            PROJECTS
          </div>
        </Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;