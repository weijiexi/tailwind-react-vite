import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Nav() {
    return (
        <nav className="flex items-center justify-between">
        {/*logo*/}
        <a href="#">  
                <NikeLogo className="h-20 w-20" />
        </a>
        {/*bruge menu*/}
        <button className="rounded-lg p-2 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100">
                < RxHamburgerMenu size={25}/>
        </button>
        </nav>
    )
  }
  