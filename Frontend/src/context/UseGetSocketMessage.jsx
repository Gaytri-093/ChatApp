import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext.jsx'
import UseConversation from '../components/zustand/UseConversation.jsx';
import sound from "../assets/Sound.mp3"

const UseGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessage} = UseConversation();

    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            const notification = new Audio(sound);
            notification.play().catch((err)=>{
                console.log("error in playing sound", err);
            })
            setMessage([...messages,newMessage]);
        });
        return ()=>{
            socket.off("newMessage");
        };

    },[socket,messages,setMessage])
  
}

export default UseGetSocketMessage;
