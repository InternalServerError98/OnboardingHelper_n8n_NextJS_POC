import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
export default function StreamAIMessage ({message} : {message: string}) {


  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const typeNextChar = () => {
      if (i < message.length - 1 && message[i]!=undefined) {
        setDisplayed((prev) => prev + `${message[i].toString()}`);
        i++;
        timeout = setTimeout(typeNextChar, 30); // typing speed
      }
    };

    typeNextChar();

    return () => clearTimeout(timeout); // cleanup on unmount
  }, [message]);


return <ReactMarkdown>{displayed}</ReactMarkdown>

}