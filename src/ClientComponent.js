import React, {useState, useEffect} from "react";
import socketIoClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";


const ClientComponent = () => {
    const [response, setResponse] = useState("");
    const [data, setData] = useState("");
    const [test, setTest] = useState("");
    const [msg, setMsg] = useState("");


    
    useEffect(() => {
        const socket = socketIoClient(ENDPOINT);
        console.log(socket);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
        socket.on("someEvent", res => {
            setData(res);
        });
        let room = "123";
        socket.emit('join', room)        
        setInterval(() => {
            let message =  Math.random().toString(36).slice(2);
            socket.emit("Test", Math.random().toString(36).slice(3));
            socket.emit("chat", { message, room });
            }, 2000); 
         socket.on("Test", res => {
             setTest(res);
         });
         socket.on("chat", msg => {
            setMsg(msg);
          });            
        return () => socket.disconnect();
    }, []);



    return (
        <p>
            It's <time dateTime={response}>{response}</time>
            <br></br>
            {data} {test} 
            <br></br>
            {msg}
        </p>
    );

};

export default ClientComponent;