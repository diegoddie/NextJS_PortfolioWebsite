import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 dark:text-[#c3cacf] text-[#595d60] text-lg sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-black"
    >
      {title}
    </Link>
  );
};

export default NavLink;