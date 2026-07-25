import React from 'react'
import img from '../assets/Astronot.gif'

const Home = () => {
  
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col flex-wrap p-8 m-4'>
            <h1 className=' text-2xl md:text-3xl lg:text-3xl  text-[#32012F] font-bold font-serif max-w-lg'>Hey, I am <br/><span className=' text-5xl md:text-5xl lg:text-5xl'>Deepak Verma</span></h1> 
            <span className='italic font-serif text-[#32012F] ml-8 md:ml-40 lg:ml-40'>~ an  IIT-BHU'24 Graduate</span>
            <p className='p-2 mt-2 text-xs md:text-base lg:text-base italic '>"Building products that scale.

Over the past few years I've worked on backend platforms, enterprise integrations, payment systems, spreadsheet engines and AI applications. I like understanding how large systems work under the hood and continuously learning better ways to build scalable software.

When I'm not coding, you'll probably find me exploring new technologies, working out at the gym or experimenting with side projects."</p>
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