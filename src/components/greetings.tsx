import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const DobotGreeting = () => {
 const [mounted, setMounted] = useState(false);
 const rotatingGreetings = [
   "IITian",
   "Photographer",
   "Writer",
   "Director",
   "Artist",
   "Engineer",
 ];


 const [greeting, setGreeting] = useState(rotatingGreetings[0]);

 useEffect(() => {
   setMounted(true);

   const interval = setInterval(() => {
     const nextGreeting =
       rotatingGreetings[
       Math.floor(Math.random() * rotatingGreetings.length)
       ] ?? greeting;
     setGreeting(nextGreeting);
   }, 2000);

   return () => clearInterval(interval);
 }, [greeting]);

 if (!mounted) return null;

 return (
   <div className="pt-[18vh] max-w-[760px]">
     <motion.div
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2 }}
       className="mb-2 text-2xl font-normal tracking-tight text-[#32012F]"
     >
        Another me!!
       {/* How can I help you today? */}
     </motion.div>

     <motion.div
       key={greeting}
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -10 }}
       className="text-2xl font-normal text-[#32012F]/50"
     >
       {greeting}
     </motion.div>
   </div>
 );
};

