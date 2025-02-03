import React, { useEffect, useState } from "react";
import UseConversation from "../components/zustand/UseConversation.jsx";
import axios from "axios";

const UseGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = UseConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          console.log("response:", res.data); // ✅ Fix: Properly log response
          setMessage(res.data);
          setLoading(false);
        } catch (error) {
          console.log("Error in getting messages", error);
          setLoading(false);
        }
      }
    };
    getMessages();
   
  }, [selectedConversation, setMessage]);

  return { loading, messages };
};

export default UseGetMessage;
