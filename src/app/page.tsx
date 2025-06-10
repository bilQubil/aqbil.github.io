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
                <div className="flex flex-row items-center justify-center min-w-10/12 h-screen z-20">
                    <div className="flex flex-col items-start justify-start w-2/3 space-y-4">
                        <motion.h1
                            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-cyan-100 to-gray-100 text-2xl md:text-4xl lg:text-7xl font-sans  relative z-20 font-bold tracking-tight"
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
                            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-cyan-100 to-gray-100 text-2xl md:text-4xl lg:text-7xl font-sans  relative z-20 font-bold tracking-tight"
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
                    </div>
                    <div className="flex flex-col items-end justify-end w-1/3 translate-y-14 ">
                        <motion.h2
                            className="text-2xl font-semibold font-sans text-gray-100 md:text-2xl lg:text-5xl tracking-tighter"
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
                            className="text-xl font-sans text-gray-200"
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

            <div ref={ref} className="my-15 w-full">
                <div className="flex flex-col items-center justify-between">
                    <motion.h1
                        className="bg-clip-text text-transparent text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100"
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
                    <div className="flex flex-row justify-between mt-10 w-2/3">
                        <motion.div
                            className="flex flex-col items-start justify-start w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.7,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <h2 className="bg-clip-text text-transparent text-3xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100">
                                Frontend Developer{" "}
                                <span className="text-gray-400">Intern</span>
                            </h2>
                            <h2 className="bg-clip-text text-transparent text-2xl font-bold bg-gradient-to-br from-emerald-400 to-purple-400">
                                KawanBantu
                            </h2>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-start justify-start w-1/2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.9,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-gray-100 text-md">
                                • Rewrite entire codebase from Next.js to
                                Sveltekit
                                <br />
                                • Developed withdrawal feature to request fund
                                to super admin
                                <br />• Adjusted user dashboard for mobile
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div ref={ref} className="my-15 w-full">
                <div className="flex flex-col items-center justify-between">
                    <motion.h1
                        className="bg-clip-text text-transparent text-7xl font-bold bg-gradient-to-b from-cyan-100 to-gray-100"
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

            <footer className="flex flex-row space-x-10 items-center justify-between my-8 bg-transparent p-4 rounded-lg">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Contact Me:
                </h1>
                <div className="flex flex-row items-center justify-between gap-4">
                    <a
                        href="https://www.linkedin.com/in/aqbilhafizh/"
                        className="text-cyan-200 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/bilQubil"
                        className="text-cyan-200 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </footer>
        </div>
    );
}
