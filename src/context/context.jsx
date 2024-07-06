import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext()

const ContextProvider = (props)=>{

    const [input,setInput] = useState("")
    const [recentPrompt,setrecentPrompt] = useState("")
    const [prevPrompt,setprevPrompt]=useState([])
    const [showResult,setshowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setresultData]=useState("")

    const delayPara = (index,nextWord)=>{
        setTimeout(
            function(){
                setresultData(prev=>prev+nextWord)
            },75*index
        )
    }

    const newChat = ()=>{
        setLoading(false);
        setshowResult(false)
    }

    const onSent = async (prompt)=>{
        setresultData("")
        setLoading(true)
        setshowResult(true)
        let response;
        if(prompt!==undefined){
            response=await run(prompt)
            setrecentPrompt(prompt)
        }else{
            setrecentPrompt(input)
            setprevPrompt(prev=>[...prev,input])
            response=await run(input)
        }
        
        let responseArray = response.split("**")
        let newResp="";
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2===0){
                newResp +=responseArray[i]
            }else{
                newResp+="<b>"+responseArray[i]+"</b>"
            }
        }
        let newResp2 = newResp.split("*").join("</br>")
        let newRespArray = newResp2.split(" ")
        for(let i=0;i<newRespArray.length;i++){
            const nextWord=newRespArray[i]
            delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")
    }

    

    const contextValue = {
        prevPrompt,setprevPrompt,onSent,recentPrompt,
        setrecentPrompt,loading,showResult,
        resultData,input,setInput,newChat
        
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;