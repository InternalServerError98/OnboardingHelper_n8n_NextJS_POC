import { PowerOff } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenuButton } from "./ui/sidebar";
import { SignOut } from "@/actions/login";



export const SignOutButton = () => {

    return (
        <form action={SignOut}>
        <SidebarMenuButton asChild>
        <Button className="w-full" variant="outline">
            <PowerOff className="mr-2 size-4"/> Sign Out
        </Button>
        </SidebarMenuButton>
        </form>
    );


}



              