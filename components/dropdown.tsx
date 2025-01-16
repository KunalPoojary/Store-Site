"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Category } from "@/types";
import { useState } from "react";
import MainNav from "./main-nav";
import Link from "next/link";

interface DropdownProps {
  categories: Category[];
}

export default function Dropdown({ categories }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <Link href="/shop"
          className="h-[77px] w-full justify-center gap-x-1.5 rounded-md px-3 py-2 flex items-center"
        >
          Shop
        </Link>
      </div>

      <Transition as='div' show={isOpen}>
        <MenuItems className="flex justify-center absolute right-[-55px] z-10 mt-1 w-44 origin-top-right rounded-md bg-black/95 shadow-lg ring-1 ring-white/40 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
          
            <MainNav data={categories} />
        </MenuItems>
      </Transition>

      
    </Menu>
  );
}
