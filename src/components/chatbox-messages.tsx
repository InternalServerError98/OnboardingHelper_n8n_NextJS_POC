import { Session } from "next-auth";
import { ScrollArea } from "./ui/scroll-area";
import ChatHistory from "./chatbox-messages-lazyload";


export default function ChatMessages({chatID, session}: {chatID : string | undefined, session : Session}){

    return (

        <ScrollArea className="flex-1 p-4">
                <ChatHistory chatID ={chatID} session={session}/>
        </ScrollArea>

    )
}