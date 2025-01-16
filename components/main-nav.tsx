"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { MenuItem } from "@headlessui/react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
  }));

  return (
    <div className="py-1">
      {routes.map((route) => (
        <MenuItem>
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:text-cyan-300 block px-4 py-2 text-sm text-white "
          )}
        >
          {route.label}
        </Link>
        </MenuItem>
        
      ))}
    </div>
  );
};

export default MainNav;
