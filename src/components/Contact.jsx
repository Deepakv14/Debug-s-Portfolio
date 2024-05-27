import React,{ useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_7y05u6g",
        "template_toyeowm",
        e.target,
        "1iqzGaqz4fY-u1i_W"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className='flex flex-col items-center justify-center p-4 mx-2 lg:mx-10 mt-4 w-full max-w-screen-xl bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4'>
         <h1 className='text-3xl  text-[#32012F] font-bold font-serif'>Let's Connect</h1>   
            <div className='p-4'>
               <div className='flex flex-row flex-wrap items-center justify-center'>
                      <form onSubmit={sendEmail} className='flex flex-col bg-white gap-6 w-72 p-4 m-4'>
                      
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="Name" name="user_name" id="user_name"
                              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#32012F] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label for="user_name"
                              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#32012F] italic peer-focus:after:scale-x-100 peer-focus:after:border-[#32012F] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Name
                            </label>
                        </div>
                        
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="Email"
                              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#32012F] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#32012F] italic peer-focus:after:scale-x-100 peer-focus:after:border-[#32012F] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Email
                            </label>
                        </div>

                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="Subject"
                              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#32012F] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#32012F] italic peer-focus:after:scale-x-100 peer-focus:after:border-[#32012F] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Subject
                            </label>
                        </div>

                        <div class="relative h-11 w-full min-w-[200px]">
                            <textarea placeholder="Message"  name="message" 
                              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#32012F] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label for="message"
                              class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#32012F] italic peer-focus:after:scale-x-100 peer-focus:after:border-[#32012F] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                              Message
                            </label>
                        </div>
                        
                        <input type="Submit" text="Submit" disabled={isSubmitting} className='text-white bg-[#32012F] rounded-sm min-w-full p-2 hover:bg-[#581553]'/>
                        {stateMessage && <p>{stateMessage}</p>}
                      </form>
                      
               </div>

            </div>
    </div>
  )
}

export default Contact