import { auth } from "@/auth";
import { NewChat } from "./new-chat";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarFooter } from "./ui/sidebar";
import { redirect } from "next/navigation";
import { ProfileSection } from "@/components/profile-section";
import { SignOutButton } from "./sign-out";
import ChatHistory from "@/components/chat-history";

export const AppSideBar = async () => {

    const session = await auth();

    if(!session?.user || !session){

        redirect("/");

    }
    
    const user = session.user;

    return (

        <Sidebar>

            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                       <SignOutButton />
                    </SidebarMenuItem>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarMenuItem>
                       <NewChat user={user}/>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarHeader>


            <SidebarContent>
                <SidebarMenu>

                    <ChatHistory user={user} session={session}/>

                </SidebarMenu>
            </SidebarContent>


            <SidebarFooter> 

                <SidebarMenu>
                    <SidebarMenuItem>
                        <ProfileSection user={user}/>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarFooter>





        </Sidebar>


    );
}