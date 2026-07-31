import navLinks from "../../../data/navigation";

function NavLinks() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className="text-gray-300 transition hover:text-cyan-400"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;