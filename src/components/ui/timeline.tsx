"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="my-15">
                <div className="flex flex-col items-center justify-between">
                    <h1 className="bg-clip-text text-transparent text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                        Experience
                    </h1>
                    <div className="flex flex-row justify-between mt-10 w-2/3">
                        <div className="flex flex-col items-start justify-start w-1/2">
                            <h2 className="bg-clip-text text-transparent text-3xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                                Frontend Developer{" "}
                                <span className="text-gray-400">Intern</span>
                            </h2>
                            <h2 className="bg-clip-text text-transparent text-2xl font-bold bg-gradient-to-br from-emerald-400 to-purple-400">
                                KawanBantu
                            </h2>
                        </div>
                        <div className="flex flex-col items-start justify-start w-1/2">
                            <p className="text-gray-100 text-md">
                                • Rewrite entire codebase from Next.js to
                                Sveltekit
                                <br />
                                • Developed withdrawal feature to request fund
                                to super admin
                                <br />• Adjusted user dashboard for mobile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h1 className="bg-clip-text text-transparent text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                    Works
                </h1>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky top-20 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-100 to-gray-100">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-100 to-gray-100">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
