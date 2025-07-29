// components/TechStackMarquee.tsx

import { FaReact, FaNodeJs, FaPhp, FaDocker, FaAws, FaGitAlt, FaGithub, FaDatabase, FaBootstrap, FaJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiMongodb, SiLaravel,SiPostman, SiDigitalocean, SiClerk, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";


export default function TechStackMarquee() {
    const techStack = [
        { icon: <FaJs />, label: "JavaScript", color: "text-yellow-500" },
		{ icon: <SiTypescript />, label: "TypeScript", color: "text-blue-500" },
		{ icon: <FaReact />, label: "React", color: "text-cyan-500" },
		{ icon: <SiNextdotjs />, label: "Next.js", color: "text-white" },
		{ icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-sky-500" },
		{ icon: <FaBootstrap />, label: "Bootstrap", color: "text-purple-500" },
		{ icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
  		{ icon: <SiExpress />, label: "Express.js", color: "text-gray-500" },
		{ icon: <FaPhp />, label: "PHP", color: "text-indigo-500" },
		{ icon: <SiLaravel />, label: "Laravel", color: "text-red-500" },
		{ icon: <SiMysql />, label: "MySQL", color: "text-yellow-500" },
		{ icon: <DiMsqlServer />, label: "MS SQL", color: "text-blue-500" },
		{ icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
		{ icon: <FaDocker />, label: "Docker", color: "text-blue-500" },
		{ icon: <FaAws />, label: "AWS", color: "text-orange-500" },
		{ icon: <SiDigitalocean />, label: "DigitalOcean", color: "text-blue-500" },
		{ icon: <FaGitAlt />, label: "Git", color: "text-red-500" },
		{ icon: <FaGithub />, label: "GitHub", color: "text-white" },
		{ icon: <SiPostman />, label: "Postman", color: "text-orange-500" },
		{ icon: <BiLogoVisualStudio />, label: "VS Code", color: "text-blue-500" },
		{ icon: <SiClerk />, label: "Clerk", color: "text-purple-500" },
    ];

  return (
    <div className="overflow-hidden max-w-6xl mt-12 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">Tech Stack & Tools</h2>
        <motion.div
            className="flex gap-4 animate-slide backdrop-blur-sm cursor-default"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
            {techStack.map((tech, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}   
                // className={`flex items-center gap-2 px-4 py-2 width-auto rounded-full border border-gray-700 bg-white/10 backdrop-blur-sm ${tech.color}`}
                className={`flex items-center gap-2 px-4 py-2 ${tech.color}`}
            >
                <span className="text-5xl">{tech.icon}</span>
                {/* <span className="text-sm text-white">{tech.label}</span> */}
            </motion.div>
            ))}
        </motion.div>
    </div>
  );
}
