import { DocumentData } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import { ChatReplySkeleton } from "./skeletons";
import StreamAIMessage from "./stream-message";

export const Message = ({message, isStream}: {message: DocumentData, isStream: boolean}) => {

    const isAIMessage = (message.user._id == "OnboardingHelper")
    const isPlaceHolder = message.user.isLoading == true
    return (

        <div 
        key={message.id}
        className={`flex mb-4 ${isAIMessage? "justify-start" : "justify-end"}`}
        >
            <div 
            className={`flex items-start max-w-[80%]  ${isAIMessage? "felx-row" : "flex-row-reverse"}`}
            >
                <div 
                className={`mx-2 p-3 rounded-lg ${isAIMessage? "bg-secondary" : "bg-primary text-primary-foreground"}`}
                >

                    {
                        isPlaceHolder? (<ChatReplySkeleton/>) :
                    
                            (isStream? <StreamAIMessage message={message.text}/>:  <ReactMarkdown>{message.text}</ReactMarkdown>)
                                  
                    }
                    
                </div>
            </div>
        </div>



    )



}