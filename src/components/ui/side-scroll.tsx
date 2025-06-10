import { techStack } from "@/data/techStack";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";

export default function SideScroll() {
    return (
        <div className="w-full overflow-hidden my-8 ">
            {/* Gradient masks for smooth fade effect */}
            <div className="relative">
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-cyan-700 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-800 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling container */}
                <div className="flex gap-6 w-max animate-infinite-scroll">
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div
                            key={`tech-${index}`}
                            className="flex-shrink-0 py-2"
                        >
                            <Card className="bg-gradient-to-br from-purple-500/80 to-cyan-800/80 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-32">
                                <CardBody className="overflow-visible py-4 flex items-center justify-center">
                                    <div className="relative">
                                        <Image
                                            src={tech.imageUrl}
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 rounded-lg p-2 object-contain filter brightness-110"
                                        />
                                        {/* Subtle glow effect */}
                                        <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
                                    </div>
                                </CardBody>
                                <CardFooter className="flex text-small justify-center text-center bg-transparent py-3">
                                    <p className="text-gray-100 font-medium text-sm truncate">
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
