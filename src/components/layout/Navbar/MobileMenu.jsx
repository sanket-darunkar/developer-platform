import { Menu } from "lucide-react";

function MobileMenu() {
  return (
    <button className="text-white md:hidden">
      <Menu size={30} />
    </button>
  );
}

export default MobileMenu;