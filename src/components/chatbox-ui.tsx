'use client';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { SendMessage } from "@/actions/ChatActions";
import { SkeletonCard } from "@/components/skeletons";
import { RootState } from "@/global_redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewChatLoaded } from "@/global_redux/features/loading/loadingSlice";
import { setChatPromptSubmitted, resolveChatPromptSubmitted } from "@/global_redux/features/chat/chatPromptSlice";
import { useEffect, useState } from "react";
import ChatMessages from "@/components/chatbox-messages";

export function ChatBoxUI( {session} : {session: Session}) {

    const user = session.user!;
    const [prompt, setPrompt] = useState("");
    const chatID = usePathname().split("/").pop();
    const isNewChatEvent = useSelector((state:RootState) => state.newChatLoading.isLoading);
    const chatPromptSubmitted = useSelector((state:RootState) => state.chatPromptSubmitted.isProcessing)



   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setNewChatLoaded());
      }, []); 




    const HandleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      setPrompt("");
      const formData = new FormData(e.currentTarget);
      dispatch(setChatPromptSubmitted());
      const event = SendMessage.bind(null, {user, chatID});
      await event(formData).then(relievePromise);
      
    }
    

    const relievePromise = () => {

      dispatch(resolveChatPromptSubmitted());

    }
    
  
    if(isNewChatEvent){
      return <SkeletonCard/>
    }


    return(
      <>
       <ChatMessages chatID = {chatID} session = {session}/>
       <div className="p-4 border-t mt-2 sticky bottom-0 w-full backdrop-blur-md z-10">
            <form className="flex space-x-2" onSubmit={HandleSendMessage}>
                <Input 
                type="text" 
                placeholder="Type your questions here..." 
                name="QuestionPrompt"
                className="flex-grow"
                value={prompt}
                onChange = {(e) => setPrompt(e.target.value)}
                />
                <Button 
                type="submit"
                size="icon"
                variant="outline"
                disabled={chatPromptSubmitted}
                >
                    <SendIcon className="size-4" /> 
                </Button>
            </form>
       </div>
       
       
      </>
    );
}