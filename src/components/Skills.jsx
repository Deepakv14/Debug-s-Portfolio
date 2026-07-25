import React from 'react';
import { motion } from 'framer-motion';
import data from 'Data/data.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


const Skills = () => {

  const skills = data.skills;
  
  return (
    <div className="m-2 text-center">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center font-serif text-[#32012F]">
        Skills
      </h1>
      <p className="text-gray-500 mt-2 text-[10px] md:text-sm lg:text-sm font-extralight italic">
        Technologies I work with
      </p>

      {/* Categories */}
      <div className="mt-10 space-y-10 justify-center items-center">
        {skills.map((section, i) => (
          <div key={i}>

            {/* Category Title */}
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {section.title}
            </motion.h2>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
flex flex-wrap 
justify-center 
items-center 
gap-4
"
            >
              {section.items.map((skill, idx) => (

                <motion.div
                  variants={item}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="
                    w-20 h-20  m-2
                    flex items-center justify-center 
                    bg-white 
                    rounded-xl 
                    shadow-md 
                    hover:shadow-xl 
                    hover:-translate-y-1 
                    transition-all duration-300
                  ">
                    <i className={`${skill.icon} text-4xl`} />
                  </div>

                  <p className="text-sm text-gray-600">
                    {skill.name}
                  </p>
                </motion.div>

              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;