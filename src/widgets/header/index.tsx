import { useState } from "react";
import { Link } from "react-router-dom";
import LandingLayer from "@/shared/components/LandingLayer";
import MenuAction from "./components/MenuAction";
import { cn } from "@/shared/utils/cn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList: NavItemProps[] = [
    { name: "Home", href: "" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "/#teams" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  return (
    <LandingLayer tag="header" className="static top-0 flex items-center justify-center gap-14 py-0 pb-4 pt-8">
      <DesktopNav navList={navList} className="md-2:hidden" />

      {isMenuOpen && <MobileNav navList={navList} className="md-2:grid hidden" />}

      <MenuAction
        isOpen={isMenuOpen}
        className="md-2:block ml-auto hidden"
        setIsOpen={() => setIsMenuOpen((prev) => !prev)}
      />
    </LandingLayer>
  );
};

const MobileNav = ({ navList, className }: { navList: NavItemProps[]; className?: string }) => {
  return (
    <div className={cn("absolute top-[80px] grid w-full place-items-center gap-6 bg-black p-4", className)}>
      {navList.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </div>
  );
};

const DesktopNav = ({ navList, className }: { navList: NavItemProps[]; className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-14", className)}>
      {navList.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </div>
  );
};

type NavItemProps = { name: string; href: string };

const NavItem = ({ name, href }: NavItemProps) => {
  return (
    <Link to={href} className="font-bowlby_one md-2:text-lg text-3xl font-normal text-white">
      {name}
    </Link>
  );
};

export default Header;
