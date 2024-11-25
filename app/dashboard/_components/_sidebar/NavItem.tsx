"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className="w-full flex justify-center"
    >
      <span className={
        pathName === path
          ? "bg-orange-400 rounded-md flex justify-center transition-colors w-10/12 py-2 px-2"
          : "flex justify-center w-10/12 py-2 px-2"
      }>{icon}</span>
    </Link>
  );
};

export default NavItem;
