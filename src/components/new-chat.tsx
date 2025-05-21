'use client';

import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenuButton } from "./ui/sidebar";
import { User } from "next-auth";
import { CreateNewChat } from "@/actions/ChatActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/global_redux/store";
import { setNewChatLoading } from "@/global_redux/features/loading/loadingSlice";


export const NewChat = ({user} : {user: User}) => {

    const isNewChatEvent = useSelector((state:RootState) => state.newChatLoading.isLoading);
    const dispatch = useDispatch();
    const createNewChat = () => {

        dispatch(setNewChatLoading());
        var event = CreateNewChat.bind(null, {user});
        event();
    } 

    return (

        <SidebarMenuButton asChild>
            <Button 
                onClick={createNewChat}   
                className="w-full" 
                variant="outline"
                disabled = {isNewChatEvent}>
                <PlusIcon className="mr-2 size-4"/> New Chat
            </Button>
        </SidebarMenuButton>

    );


}