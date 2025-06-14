"use client";
import { Timeline } from "@/components/ui/timeline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/data/projects";
import SideScroll from "@/components/ui/side-scroll";
import { AuroraBackground } from "@/components/ui/aurora-bakcground";

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-full mx-auto scroll-smooth bg-linear-to-b from-cyan-700 to-purple-900 w-full">
            <AuroraBackground>
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl h-screen z-20 px-4 md:px-10">
                    <div className="flex flex-col items-start md:items-start justify-start w-full md:w-2/3 space-y-2 md:space-y-4 text-center md:text-left">
                        <motion.h1
                            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-cyan-100 to-gray-100 text-5xl sm:text-3xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight"
                            initial="hidden"
                            animate="visible"
                        >
                            {Array.from("Looking for a").map((char, index) => (
                                <motion.span
                                    key={`looking-${index}-${char}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: index * 0.05,
                                                duration: 0.8,
                                                ease: [0.6, -0.05, 0.01, 0.99],
                                            },
                                        },
                                    }}
                                    style={{ display: "inline-block" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.h1
                            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-cyan-100 to-gray-100 text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight"
                            initial="hidden"
                            animate="visible"
                        >
                            {Array.from("Software Engineer?").map(
                                (char, index) => (
                                    <motion.span
                                        key={`software-${index}-${char}`}
                                        variants={{
                                            hidden: { opacity: 0, y: 50 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay:
                                                        (index +
                                                            "Looking for a"
                                                                .length) *
                                                        0.05,
                                                    duration: 0.8,
                                                    ease: [
                                                        0.6, -0.05, 0.01, 0.99,
                                                    ],
                                                },
                                            },
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                )
                            )}
                        </motion.h1>
                        <motion.h2
                            className="text-md sm:text-2xl md:text-2xl lg:text-3xl font-normal font-sans text-gray-100 tracking-tighter text-center md:text-right mt-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 1,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            <p>Let&apos;s build something amazing together</p>
                        </motion.h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end justify-start md:justify-end w-full md:w-1/3 mt-10 md:mt-0 md:translate-y-14">
                        <motion.h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold font-sans text-gray-100 tracking-tighter text-center md:text-right"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 1,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            Aqbil Hafizh
                        </motion.h2>
                        <motion.h2
                            className="text-base sm:text-lg md:text-xl font-sans text-gray-200 text-center md:text-right"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 1.4,
                                    duration: 1,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            Software Engineer
                        </motion.h2>
                    </div>
                </div>
            </AuroraBackground>

            <div ref={ref} className="my-8 md:my-15 w-full px-4 md:px-0">
                <div className="flex flex-col items-center justify-between">
                    <motion.h1
                        className="bg-clip-text text-transparent text-5xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        Experience
                    </motion.h1>
                    <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-10 w-full md:w-2/3 md:space-y-0">
                        <motion.div
                            className="flex flex-col items-start justify-start w-full md:w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.7,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <h2 className="bg-clip-text text-transparent ml-2 md:ml-0 text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                                Frontend Developer{" "}
                                <span className="text-gray-300">Intern</span>
                            </h2>
                            <a href="https://kawanbantu.com" target="_blank">
                                <h2 className="bg-clip-text hover:text-cyan-300 transition-colors duration-100 text-transparent ml-2 md:ml-0 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-br from-emerald-300 to-purple-300">
                                    KawanBantu
                                </h2>
                            </a>
                            <h2 className="bg-clip-text text-transparent ml-2 md:ml-0 text-md sm:text-md md:text-md font-bold bg-gradient-to-br from-cyan-100 to-gray-100">
                                <p>10/2024 - 05/2025</p>
                            </h2>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-start justify-start w-full md:w-1/2 mt-4 md:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.9,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <ul className="text-gray-100 font-sans font-semibold text-lg md:text-xl space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2 font-bold">•</span>
                                    <span>
                                        Rewrite entire codebase from Next.js to
                                        Sveltekit
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 font-bold">•</span>
                                    <span>
                                        Developed withdrawal feature to request
                                        fund to super admin
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 font-bold">•</span>
                                    <span>
                                        Adjusted user dashboard for mobile
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div ref={ref} className="my-8 md:my-15 w-full md:px-0">
                <div className="flex flex-col items-center justify-between">
                    <motion.h1
                        className="bg-clip-text text-transparent text-5xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <p>Tech Stack</p>
                    </motion.h1>
                    <div className="overflow-hidden w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.8,
                                duration: 1,
                                ease: "easeOut",
                            }}
                        >
                            <SideScroll />
                        </motion.div>
                    </div>
                </div>
            </div>

            <Timeline data={projectsData} />

            <footer className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 items-center justify-center md:justify-between h-auto md:h-[15rem] my-8 bg-transparent rounded-lg px-4 md:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 text-center md:text-left">
                    Contact Me:
                </h1>
                <div className="flex flex-col sm:flex-row items-start pt-2 md:pt-0 md:items-center justify-center md:justify-between gap-6 md:gap-10">
                    <a
                        href="https://drive.google.com/file/d/1YlI7-FDDdIgd5-j1JKbnf9LOXrulGOt9/view?usp=sharing"
                        className="text-cyan-200 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        >
                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                        </svg>
                        <p className="text-lg sm:text-xl">CV</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aqbilhafizh/"
                        className="text-cyan-200 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <p className="text-lg sm:text-xl">LinkedIn</p>
                    </a>
                    <a
                        href="https://github.com/bilQubil"
                        className="text-cyan-200 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <p className="text-lg sm:text-xl">GitHub</p>
                    </a>
                </div>
            </footer>
        </div>
    );
}
