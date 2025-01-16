import Link from "next/link";
import { cn } from "@/lib/utils";
import { Ms_Madi } from "next/font/google";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Dropdown from "./dropdown";

const font = Ms_Madi({ subsets: ["latin"], weight: ["400"] });

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-4 bg-black/90 backdrop-blur-0 z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between  text-white">
      <aside className="flex items-center gap-[2px]">
        <Link href="/">
          <p className={cn("text-5xl font-bold", font.className)}>Revzz</p>
        </Link>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-12 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Dropdown categories={categories} />
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <NavbarActions />
      </aside>
    </header>
  );
};

export default Navbar;
