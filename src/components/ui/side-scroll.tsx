import { techStack } from "@/data/techStack";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";

export default function SideScroll() {
    return (
        <div className="w-full overflow-hidden my-4 md:my-8">
            {/* Gradient masks for smooth fade effect */}
            <div className="relative">
                <div className="absolute left-0 top-0 w-10 md:w-20 h-full bg-gradient-to-r from-cyan-700 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-10 md:w-20 h-full bg-gradient-to-l from-purple-800 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling container */}
                <div className="flex gap-2 md:gap-6 w-max animate-infinite-scroll">
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div
                            key={`tech-${index}`}
                            className="flex-shrink-0 py-1 md:py-2"
                        >
                            <Card className="bg-gradient-to-br from-purple-500/80 to-cyan-800/80 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-22 sm:w-28 md:w-32">
                                <CardBody className="overflow-visible py-2 md:py-4 flex items-center justify-center">
                                    <div className="relative">
                                        <Image
                                            src={tech.imageUrl}
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="w-10 h-12 sm:w-12 sm:h-14 md:w-16 md:h-18 lg:w-22 lg:h-24 rounded-md md:rounded-lg p-1 md:p-2 object-contain filter brightness-110"
                                        />
                                        {/* Subtle glow effect */}
                                        <div className="absolute inset-0 bg-white/5 rounded-md md:rounded-lg"></div>
                                    </div>
                                </CardBody>
                                <CardFooter className="flex text-small justify-center text-center bg-transparent py-2 md:py-3">
                                    <p className="text-gray-100 font-medium text-xs sm:text-sm truncate px-1">
                                        {tech.name}
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
