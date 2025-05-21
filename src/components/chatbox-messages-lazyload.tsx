import { ScrollArea } from "@radix-ui/react-scroll-area";
import { collection, query, orderBy } from "firebase/firestore";
import { Session } from "next-auth";
import { db } from "@/lib/firebase";
import {useCollection} from "react-firebase-hooks/firestore"
import { Message } from "./message";


export default function ChatHistory({chatID, session}: {chatID : string | undefined, session : Session}){

   
    const getMessages = () => {
        const user = session.user!;
        if(chatID == undefined || !chatID){
            return [];
        }
        const [messages] = useCollection(session && 
            query(collection(db, "users", user.email!, "chats", chatID, "messages"), 
            orderBy("createdAt"))
        )
        return [messages];
    }

    const [messages] = getMessages();
    const LastID = messages?.docs.filter(m => m.data().user._id == "OnboardingHelper" && m.data().user.isLoading == false).at(-1)?.id

    return (

        <>

         

                <ScrollArea className="flex-1 p-4">
                        {
                            messages?.docs.map(
                             (message) => (

                                <Message key={message.id} message={message.data()} isStream = {message.id == LastID} />

                                )
                            )


                        }

                </ScrollArea>

           
        </>

    )



}