import Link from "next/link";
import { cn } from "@/lib/utils";
import { Ms_Madi } from "next/font/google";
import { Menu, MenuIcon } from "lucide-react";

import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const font = Ms_Madi({subsets:["latin"],weight:["400"]});

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    // <div className="border-b">
    //   <Container>
    //     <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
    //       <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
    //         <p className="font-bold text-xl">STORE</p>
    //       </Link>
    //       <MainNav data={categories} />
    //       <NavbarActions />
    //     </div>
    //   </Container>
    // </div>





    <header className="fixed top-0 left-0 right-0 py-4 px-4 bg-black/90 backdrop-blur-0 z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between  text-white">
    <aside className="flex items-center gap-[2px]">
     <Link href="/"> <p className={cn("text-5xl font-bold",font.className)}>Revzz</p></Link>
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
      <ul className="flex items-center gap-12 list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <aside className="flex items-center gap-4">
      {/* <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Login /Sign Up
        </span>
      </button> */}
      <MainNav data={categories} />
      <NavbarActions />
      {/* <NavbarActions /> */}
      <MenuIcon className="md:hidden" />
    </aside>
  </header>
  );
};
 
export default Navbar;
