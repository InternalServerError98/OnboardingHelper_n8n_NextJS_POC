'use server';
import { addDoc, collection, serverTimestamp, doc, deleteDoc, updateDoc} from "firebase/firestore";
import { User } from "next-auth";
import { db } from "@/lib/firebase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";





export async function CreateNewChat({user} : {user: User}){


    const doc = await addDoc(collection(db, "users", user.email!, "chats"), {
        userID: user.email, 
        createdAt: serverTimestamp()  
    });


    redirect(`/chat/${doc.id}`);
    

}


export async function SendMessage(
                    {user, chatID}:{user: User, chatID: string | undefined}
                    , formData: FormData) 
{


  
    const message = formData.get("QuestionPrompt") as string;

    if(!message || message.length === 0){
        return;
    }

    if(!chatID || chatID.length === 0){
        return;
    }

    const payLoad = {

        text: message, 
        createdAt: serverTimestamp(),
        user:{

            _id: user.email!,
            name: user.name!,
            avatar: user.image!,
        },

    };

    await addDoc( collection(db, "users", user.email!, "chats", chatID, "messages" ), payLoad);

    //Add template Chat answer
    const template_answer = {

        text: message, 
        createdAt: serverTimestamp(),
        user:{
            _id: "OnboardingHelper",
            name: "OnboardingHelper",
            avatar: "TemplateAvatar",
            isLoading: true
        },

    };

    const message_template = await addDoc( collection(db, "users", user.email!, "chats", chatID, "messages" ), template_answer);
   
    await getAnswer(message_template.id, user, chatID, message);
     
    return;

}


export async function getAnswer(docID : string, user : User , chatID : string, message: string){

    const res = await fetch(process.env.CHAT_API_ENDPOINT as string, {
        method: 'POST',
        body: JSON.stringify(
            {

                "QueryPrompt": message, 
                "ChatID": chatID
            }
        ),

    });

    const json = await res.json();
    const chatReply = `${json?.output}`; 


    //Add template Chat answer
    const answer = {

        text: chatReply,
        createdAt: serverTimestamp(),
        user:{

            _id: "OnboardingHelper",
            name: "OnboardingHelper",
            avatar: "TemplateAvatar",
            isLoading: false
        },

    };

    const messageRef = doc(db, "users", user.email!, "chats", chatID, "messages", docID );

    await updateDoc(messageRef, answer);


}


export async function deleteChat(user : User,chatID: string){


    const chatRef = doc(db, "users", user.email!, "chats", chatID);
    await deleteDoc(chatRef)

}
