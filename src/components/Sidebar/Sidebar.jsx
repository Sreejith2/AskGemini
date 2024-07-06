import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import { Context } from '../../context/context'

function Sidebar() {

    const [extended,setExtended] = useState(false)
    const handleExtend=()=>{
        setExtended(!extended)
    }
    const {onSent,setrecentPrompt,prevPrompt,newChat} = useContext(Context);
    const loadPrompt = async (prompt)=>{
        setrecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='hidden min-h-screen md:flex text-[14px] flex-col justify-between bg-slate-300 py-6 px-4'>
        <div>
            <img onClick={handleExtend} className='w-5 block ml-3 cursor-pointer' src={assets.menu_icon} alt='' />
            <div onClick={()=>newChat()} className=' mt-12 inline-flex items-center gap-2 py-2 px-4 bg-slate-100 rounded-lg text-gray-400 cursor-pointer '>
                <img className='w-5' src={assets.plus_icon} alt='' />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='rec flex flex-col  '>
                <p className=' mt-3 mb-5 '>Recent</p>
                { prevPrompt.map((item,index)=><div onClick={()=>loadPrompt(item)} key={index} className='flex items-start gap-2 p-2 pr-10 rounded-lg bg-slate-300 cursor-pointer hover:bg-slate-400 '>
                    <img className='w-5' src={assets.message_icon} alt='' />
                    <p>{item.slice(0,10)+".."}</p>
                </div>)}
                
            </div>:null}
        </div>
        <div className='flex flex-col gap-[2px]'>
            <div className=' flex items-start gap-2 p-2 pr-10 rounded-lg bg-slate-300 cursor-pointer hover:bg-slate-400'>
                <img className='w-5' src={assets.question_icon} alt='' />
                {extended?<p>Help</p>:null}
            </div>
            <div className=' flex items-start gap-2 p-2 pr-10 rounded-lg bg-slate-300 cursor-pointer hover:bg-slate-400'>
                <img className='w-5' src={assets.history_icon} alt='' />
                {extended?<p>Activity</p>:null}
            </div>
            <div className=' flex items-start gap-2 p-2 pr-10 rounded-lg bg-slate-300 cursor-pointer hover:bg-slate-400'>
                <img className='w-5' src={assets.setting_icon} alt='' />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar