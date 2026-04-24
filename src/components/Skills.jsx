import React from 'react';
import { motion } from 'framer-motion';

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


const skills = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: "devicon-java-plain-wordmark colored" },
      { name: "C++", icon: "devicon-cplusplus-plain-wordmark colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: "devicon-spring-original-wordmark colored" },
      { name: "Kafka", icon: "devicon-apachekafka-original-wordmark colored" },
      { name: "Redis", icon: "devicon-redis-plain-wordmark colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
      { name: "Express", icon: "devicon-express-original-wordmark colored" },
      { name: "Next.js", icon: "devicon-nextjs-original-wordmark colored" },
      { name: "Nest.js", icon: "devicon-nestjs-plain-wordmark colored" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored" },
      { name: "MySQL", icon: "devicon-mysql-plain-wordmark colored" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original-wordmark colored" },
      { name: "Angular", icon: "devicon-angularjs-plain-wordmark colored" },
      { name: "HTML", icon: "devicon-html5-plain-wordmark colored" },
      { name: "CSS", icon: "devicon-css3-plain-wordmark colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain-wordmark colored" },
    ],
  },
];


const Skills = () => {
  return (
    <div className="py-10 px-6 text-center">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center font-serif text-[#32012F]">
        Skills
      </h1>
      <p className="text-gray-500 mt-2 font-extralight italic">
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
              className="flex flex-row justify-center items-center"
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