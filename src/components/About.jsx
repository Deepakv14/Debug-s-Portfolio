import React from 'react'
// import img from '../assets/coder.png'

const About = () => {
  
  return (
    <div className='flex flex-col md:flex-row lg:flex-row p-4 mx-2 lg:mx-10 mt-4 items-center justify-center w-full max-w-screen-xl  text-[#060205] bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4'>
        <div className='flex flex-col flex-wrap p-8 m-4'>
            <h1 className=' text-2xl md:text-3xl lg:text-3xl  text-[#32012F] font-bold font-serif max-w-lg'>Hey, I am <br/><span className=' text-5xl md:text-5xl lg:text-5xl'>Deepak Verma</span></h1> 
            <span className='italic font-serif text-[#32012F] ml-8 md:ml-40 lg:ml-40'>~ an  IIT-BHU'24 Graduate</span>
            <p className='p-2 mt-2 italic '>"The Dopamine High of Solving Problems has always fascinated me. I have a High Spirit and Interest For Competitive Programming and currently a Specialist At Codeforces. I'm also Passionate Towards Full Stack Web Development (MERN stack). I am Proficient in Languages like C, C++, JavaScript, Java And have a Strong Understanding Of Data Structures And Algorithms and CS fundamentals. I Have Worked with tools like React, Express, NestJS, mongoDB, mySQL"</p>
       </div>

       <div className='flex flex-row flex-wrap items-center justify-center p-8 m-4 mt-0'>
          <h1 className='text-2xl  text-[#32012F] p-4 font-bold font-serif'>Software Engineer, Back-end Developer</h1> 
          <p className='mt-0 mb-4 italic'>Ding-Dong! Software Calling!</p>
          {/* <img src={img}  className="p-8 rounded-lg h-20 max-w-lg" alt="img"/> */}
       </div>
    </div>
  )
}

export default About