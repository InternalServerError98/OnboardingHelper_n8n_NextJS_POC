import { User } from "next-auth";
import { SidebarMenuButton } from "./ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";


export const ProfileSection = ({user} : {user:User}) => {


    return(  
    <>
    
        <SidebarMenuButton size="lg">
            <Avatar className="size-8">
                <AvatarImage src={user?.image || "https://github.com/shadcn.png"} alt="profile image of the user" />
                <AvatarFallback>
                    {user.name?.split(" ").map((name) => name[0]).join("")}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="font-semibold">{user.name}</span>
                <span className="text-xs">{user.email}</span>
            </div>          
        </SidebarMenuButton>
   
    </>
);
   



}