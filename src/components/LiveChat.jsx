import React, { useEffect,useState } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate } from "../utils/helper";
import { generateComment } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [livemessage,setlivemessage]=useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      dispatch(
        addMessages({
          name: generate(),
          text: generateComment(),
          replies: [],
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  
  return (
    <>
    <h1 className="font-bold text-2xl p-1.5">LiveChat</h1>
    <div className="bg-slate-100 w-full h-[600px] border rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div className="pl-3.5 ">
        {chatMessages.map((c, index) => (
          <Comment
            key={index}
            data={{
              name: c.name,
              text: c.text,
              replies: [],
            }}
          />
        ))}
      </div>
    </div>
    <form className="border border-black mt-2 rounded-lg" 
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({
        name:"you",
        text:livemessage,
        replies:[]
      }))
      }}>
      <input className="w-95 pl-1.5" 
      type="text" 
      value={livemessage}
      onChange={(e)=>setlivemessage(e.target.value)} />
      <button className="ml-3 bg-blue-500 rounded px-2" >Send</button>
    </form>
    </>
  );
};

export default LiveChat;
