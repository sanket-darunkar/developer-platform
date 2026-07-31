import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <header className="bg-red-500 p-5 flex justify-between items-center">
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

export default Navbar;