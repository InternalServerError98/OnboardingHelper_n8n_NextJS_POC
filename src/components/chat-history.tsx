'use client'

import { collection, query, doc, deleteDoc } from "firebase/firestore";
import { Session, User } from "next-auth";
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteChat } from "@/actions/ChatActions";


export default function ChatHistory({user, session}:{user:User, session:Session}){

   

    const chatHistory =() => {

        const [chats] = useCollection( session &&
            query(collection(db, "users", user.email!, "chats"))
        )

        return [chats];

    }

    const [history] = chatHistory();



    return(
            <>

                <h2 className="text-xl font-bold p-2 mt-2"> Chat History </h2>
                    <div className="border-t p-1">

                            {
                                history?.docs.map(
                                    (chat) => (

                                      <div key={chat.id} className="flex justify-between mb-1 w-full">

                                            <Link   
                                                href={`/chat/${chat.id}`}
                                                >

                                                <Button 
                                                    
                                                    variant="outline"
                                                >
                                                    {chat.id}
                                                </Button>

                                            </Link>


                                            <Button 
                                                    className="ml-1"
                                                    variant="outline"
                                                    onClick={async () => {deleteChat(user, chat.id)}}
                                            >
                                            <Trash2 className="size-3"/>
                                                    
                                            </Button>

                                           
                                      
                                      
                                      
                                      </div>

                                           
                                        

                                    )
                                )
                            
                            
                            }
                            
                    </div>
            
            </>

    )

}