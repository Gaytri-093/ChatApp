import React, { useEffect, useRef } from "react";
import Message from "./Message";
import UseGetMessage from "../../../context/UseGetMessage";
import Loading from "../../../components/Loading.jsx";
import UseGetSocketMessage from "../../../context/UseGetSocketMessage.jsx";

const Messages = () => {
  const { loading, messages } = UseGetMessage();
  UseGetSocketMessage(); //listening incoming messages
  console.log("messages:", messages); // Properly log messages

  const lastMsgRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior:"smooth"});
      }
    },100)

  },[messages]);

  return (
    <div className="overflow-y-auto flex-1" style={{ minHeight: "calc(90vh - 10vh)" }}>
      {loading ? (
        <Loading />
      ) : (
        Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
            <div key={message._id} ref={lastMsgRef}> 
             <Message  message={message} />
             </div>
           
          ))
        ) : (
          <div>
            <p className="text-center mt-[20%]">Say! Hi to start the conversation</p>
          </div>
        )
      )}
    </div>
  );
};

export default Messages;
