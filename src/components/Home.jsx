import React from 'react'
import img from '../assets/Astronot.gif'

const Home = () => {
  
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col flex-wrap p-8 m-4'>
            <h1 className=' text-2xl md:text-3xl lg:text-3xl  text-[#32012F] font-bold font-serif max-w-lg'>Hey, I am <br/><span className=' text-5xl md:text-5xl lg:text-5xl'>Deepak Verma</span></h1> 
            <span className='italic font-serif text-[#32012F] ml-8 md:ml-40 lg:ml-40'>~ an  IIT-BHU'24 Graduate</span>
            <p className='p-2 mt-2 italic '>"The Dopamine High of Solving Problems has always fascinated me.<br/> I'm currently working as a <b>Software Development Engineer</b> at Cenizas Labs Inc. working on AI Agentic flows, LLM, RAG, etc. <br/>I previously worked as a <b>Senior Executive (IT)</b> at IFFCO-Tokio General Insurance Company Limited, with hands-on experience in Java frameworks such as Spring Boot and Struts, as well as the Frontend framework Angular."</p>
       </div>

       <div className='flex flex-col flex-wrap items-center justify-center'>
          <h1 className='text-1xl  text-[#32012F] p-4 font-bold font-serif'>Software Engineer, Back-end Developer</h1> 
          <p className='mt-0 mb-4 italic'>Ding-Dong! Software Calling!</p>
          <img src={img} className="max-h-60 max-w-90 w-auto mt-[-15%] mb-[-15%]" alt="img" />
       </div>
    </div>
  )
}

export default Home;