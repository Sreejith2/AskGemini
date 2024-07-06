import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

function Main() {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='flex flex-col flex-1 mt-4 min-h-screen relative pb-8 '>
        <div className='flex h-[20%] items-center text-green-900 text-[20px] px-3 justify-between min-w-full'>
            <p>Gemini</p>
            <img className=' w-12 rounded-[50%] ' src={assets.user_icon} alt='' />
        </div>
        <div className=' max-w-4xl m-auto '>
            <div className='min-h-[70vh] mb-3'>
                {!showResult?<><div className=' my-5 text-[35px] text-slate-700 font-[500] p-2'>
                    <p><span className=' bg-clip-text text-transparent bg-gradient-to-br from-red-500 to to-blue-500 ' >Hello , Dev</span></p>
                    <p>How can i help you today ?</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 mx-4 md:mx-0 [&>div]:h-32 [&>div]:bg-slate-300 gap-2 [&>div>p]:text-[16px] [&>div>img]:bg-slate-100 [&>div>img]:rounded-[50%] [&>div]:relative [&>div]:p-4 [&>div]:rounded-lg [&>div>img]:w-6 [&>div>img]:absolute [&>div>img]:bottom-2 [&>div>img]:right-2'>
                    <div className=' hover:bg-slate-400 cursor-pointer '>
                        <p>Suggest beautiful places to visit.</p>
                        <img src={assets.compass_icon} alt='' />
                    </div>
                    <div className=' hover:bg-slate-400 cursor-pointer '>
                        <p>Briefly summarize this concept:urban planning.</p>
                        <img src={assets.bulb_icon} alt='' />
                    </div>
                    <div className=' hover:bg-slate-400 cursor-pointer '>
                        <p>Brainstorm team bonding activities for our work retreat.</p>
                        <img src={assets.message_icon} alt='' />
                    </div>
                    <div className=' hover:bg-slate-400 cursor-pointer '>
                        <p>Improve readability of the following code.</p>
                        <img src={assets.code_icon} alt='' />
                    </div>
                </div></>:<div className='p-4 mx-auto w-[400px] md:w-[850px] max-h-[400px] overflow-y-scroll bg-slate-200 custom-scrollbar '>
                    <div className='my-[20px] mx-0 flex items-center gap-5'>
                        <img className=' w-10 rounded-full ' src={assets.user_icon} alt='' />
                        <p className='text-[17px] font-[500] capitalize'>{recentPrompt}</p>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img className=' w-10 ' src={assets.gemini_icon} alt='' />
                        {loading?<div className='flex flex-col gap-2 [&>hr]:rounded-[4px] [&>hr]:border-none [&>hr]:bg-gradient-to-r from-purple-300 to-blue-400 [&>hr]:h-3 [&>hr]:animate-pulse  '><hr/><hr/><hr/></div>:
                            <p className=' leading-8 text-[14px] md:text-[16px] ' dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>}
            </div>
            
            <div className='px-2'>
                <div className='flex items-center justify-between px-2 md:py-1 bg-slate-300 rounded-[50px] '>
                    <input onChange={(e) => setInput(e.target.value)} value={input} className='flex flex-1 bg-transparent outline-none border-none p-[2px] md:p-2 text-[16px] ' placeholder='Enter prompt here' />
                    <div className='flex items-center gap-3 '>
                        <img className=' w-6 cursor-pointer ' src={assets.gallery_icon} alt='' />
                        <img className=' w-6 cursor-pointer ' src={assets.mic_icon} alt='' />
                        {input?<img onClick={()=>onSent()} className=' w-6 cursor-pointer ' src={assets.send_icon} alt='' />:null}
                    </div>
                </div>
                <p className=' text-[10px] md:text-[13px] text-center mx-auto font-[300] '>Gemini may provide incorrect info, including about people, so double check its response.Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main