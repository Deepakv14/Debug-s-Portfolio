import { motion } from "framer-motion";
import { useState } from "react";

const timelineData = [
    {
        title: "Cenizas Labs Pvt Ltd",
        role: "Software Engineer",
        tech: "Next.js, AI, RAG, LLM",
        date: "Sep 2025 - Present [Chennai, Tamil Nadu, India]",
        desc: "Working on AI Agentic workflow automation ",
        icon: "💼",
    },
    {
        title: "IFFCO Tokio General Insurance Ltd",
        role: "Senior Executive (IT)",
        tech: "Spring Boot, MySQL, Angular, SVN, Legacy Systems - P400, Crodys, Pega",
        date: "June 2024 - Sep 2025 [Gurgaon, Haryana, India]",
        desc: "Developed multiple health insurance products like Family Health Protector(FHP), Individual Health Protector(IHP), Essential Health Protector(EHP), Health Protector Assurance(HPA), Crops & Plant Machinery(CPM)",
        icon: "💼",
    },
    {
        title: "Indian Institute of Technology, Varanasi",
        role: "B.Tech Chemical Engineering",
        tech: "CGPA: 8.66",
        date: "2020 - 2024 [Varanasi, Uttar Pradesh, India]",
        desc: "Member of Students' Parliament 2021-22, Writer/Director Masquerades [The Dramatics Society of IIT BHU], The Photography Club, The Outreach Club, The Media Club",
        icon: "🎓",
    },
    {
        title: "St. Antony's Inter College,Lucknow",
        role: "Intermediate",
        tech: "Score: 98.25%",
        date: "2018 - 2019 [Lucknow, Uttar Pradesh, India]",
        desc: "Intermediate, Class 12, Computer Science, PCM, English",
        icon: "🎓",
    },
    {
        title: "St. Antony's Inter College,Lucknow",
        role: "High School",
        tech: "Score: 96.6%",
        date: "2016 - 2017 [Lucknow, Uttar Pradesh, India]",
        desc: "High School, Class 10, Computer Science, PCBM, English",
        icon: "🎓",
    },
];

const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-between">

            {/* LEFT */}
            <div className={`w-1/2 ${isLeft ? "block" : "hidden md:block"}`}>
                {isLeft && <Card item={item} open={open} setOpen={setOpen} direction="left" />}
            </div>

            {/* DOT */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="z-10 w-6 h-6 bg-[#32012F] rounded-full border-4 border-white shadow-md"
            />

            {/* RIGHT */}
            <div className={`w-1/2 ${!isLeft ? "block" : "hidden md:block"}`}>
                {!isLeft && <Card item={item} open={open} setOpen={setOpen} direction="right" />}
            </div>
        </div>
    );
};


const Card = ({ item, direction, open, setOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setOpen(!open)}
            className="bg-white p-5 m-2 rounded-xl shadow-lg cursor-pointer transition-all"
        >
            <h3 className="text-lg font-medium text-[#32012F]">
                {item.title}
            </h3>

            <p className="text-xs text-gray-500 font-extralight italic">{item.role}</p>

            <p className="text-xs text-gray-400 mt-1">{item.date}</p>

            {/* Expandable */}
            {open && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-gray-600"
                >
                    {item.desc}
                    <br />
                    <br />
                    <p className="text-xs text-gray-400 mt-1">{item.tech}</p>
                </motion.p>

            )}
        </motion.div>
    );
};


const Timeline = () => {
    return (
        <div className="py-10 px-6 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center font-serif text-[#32012F]">
          Debug's Timeline
        </h1>
        <p className="text-gray-500 m-2 font-extralight text-xs italic">
          My Journey So Far
        </p>

            <div className="relative max-w-5xl mx-auto">

                {/* Animated Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute left-1/2 top-0 w-1 bg-[#32012F]/75 -translate-x-1/2"
                />

                {/* Items */}
                <div className="flex flex-col gap-16">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Timeline;