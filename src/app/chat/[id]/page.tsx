import { auth } from "@/auth";
import { ChatBoxUI } from "@/components/chatbox-ui";
import { redirect } from "next/navigation";


export default async function ChatPage(){

    const session = await auth();
   

    return (

        <>
            {session && session.user ? (<ChatBoxUI session = {session}/>) :
            redirect("/")}
        </>
    );
}