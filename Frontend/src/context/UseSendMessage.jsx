import React, { useEffect, useState } from 'react';
import UseConversation from "../components/zustand/UseConversation.jsx";
import axios from "axios";

const UseSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = UseConversation();

    const sendMessages = async (message) => {
        setLoading(true);
      
        try {
            const res = await axios.post(
              `/api/message/send/${selectedConversation._id}`,
              { message }
            );
            console.log("response:", res.data);
    
            // Extract the actual message object
            const newMessage = res.data.newMessage;
    
            // Update state correctly
            setMessage([...messages, newMessage]);
    
        } catch (error) {
            console.log("Error in send messages", error);
        }
        setLoading(false);
    };
    

  return { loading, sendMessages }; // Removed incorrect function call
};

export default UseSendMessage;
