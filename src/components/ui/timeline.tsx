"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
    title: string | React.ReactNode;
    content: React.ReactNode;
    date: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            className="w-full bg-transparent font-sans md:px-10 overflow-clip"
            ref={containerRef}
        >
            <motion.div
                className="flex flex-row items-center justify-center mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                    Projects
                </h1>
            </motion.div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <motion.div
                        key={`timeline-${index}-${
                            typeof item.title === "string" ? item.title : index
                        }`}
                        className="flex justify-start pt-10  md:gap-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            delay: 0.7 + index * 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <div className="sticky top-20 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="hidden md:block text-2xl md:pl-20 md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-100 to-gray-100">
                                    {item.title}
                                </h3>
                                <h3 className="hidden md:block md:pl-20 text-md sm:text-md md:text-md font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-100 to-gray-100">
                                    {item.date}
                                </h3>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-100 to-gray-100">
                                {item.title}
                            </h3>
                            <h3 className="md:hidden block text-md sm:text-md md:text-md font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-100 to-gray-100">
                                {item.date}
                            </h3>
                            {item.content}
                        </div>
                    </motion.div>
                ))}
                <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] h-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-100 [mask-image:linear-gradient(to_bottom,transparent_2%,black_15%,black_95%,transparent_100%)] ">
                    <div className="absolute inset-x-0 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};
