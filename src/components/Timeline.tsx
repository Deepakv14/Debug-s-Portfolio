import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import data from "Data/data.json"
import Divider from "./Divider";


interface TimelineItemProps {
    title: string;
    role: string;
    tech: string[];
    date: string;
    desc: string;
    icon: string;
}

interface TimelineProps {
    item: TimelineItemProps;
    index: number;
}

interface CardProps {
    item: TimelineItemProps;
    direction: "left" | "right";
    open: boolean;
    setOpen: (open: boolean) => void;
}

const TimelineItem = ({ item, index }: TimelineProps) => {
    const isLeft = index % 2 === 0;
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-between">

            {/* LEFT */}
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2">
                {!isLeft && <Card item={item} open={open} setOpen={setOpen} direction="right" />}
            </div>
        </div>
    );
};




const Card = ({ item, direction, open, setOpen }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setOpen(!open)}
            className="
            bg-white 
            p-4 sm:p-5 
            rounded-xl 
            border 
            border-gray-200
            shadow-lg 
            w-full 
            max-w-md 
            mx-auto 
            transition-all
            "
        >
            <h3 className="text-base sm:text-lg font-semibold text-[#32012F] leading-snug">
                {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-light">{item.role}</p>

            <p className="text-xs text-gray-400 mt-1 font-light text-Roboto">{item.date}</p>

             <Divider/>
            {item.tech.length > 0 && <TechChips tech={item.tech} />}

            {/* Expandable */}
            {open && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed"
                >
                    {item.desc}
                </motion.p>

            )}
        </motion.div>
    );
};

const TechChips = ({ tech }: { tech: string[] }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
            {tech.map((t, i) => (
                <span key={i} className="bg-[#32012F] text-white text-xs px-2 py-1 rounded-sm">
                    {t}
                </span>
            ))}
        </div>
    )
}


const Timeline = () => {

    const [timelineData, setTimelineData] = useState<TimelineItemProps[]>([]);

    // Fetch timeline data from JSON file
    useEffect(() => {
        setTimelineData(data.timeline);
    }, []);

    return (
        <div className="text-center m-4">

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