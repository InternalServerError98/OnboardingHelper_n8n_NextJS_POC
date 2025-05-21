
import { SidebarTrigger } from "./ui/sidebar";
import Link  from "next/link";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className=" p-4 flex items-center justify-between sticky top-0 backdrop-blur-md z-10"> 
        <SidebarTrigger className="block md:hidden mr-4" />    
            <Link href="/chat">
                <h1 className="text-xl font-bold"> Onboarding Helper </h1>
            </Link>
            <ModeToggle />
    </header>
  );
}