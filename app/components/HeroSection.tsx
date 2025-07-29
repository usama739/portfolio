'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TechStack from './TechStack';
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	
	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-14">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8 pt-[0px] md:pt-[60px]">
						<div className='mx-auto flex justify-center'>
							<Image
								src="/assets/image.png"
								alt="Usama Aslam"
								width={200}  // set an approximate width
								height={100} // and height
								className="border-4 border-gray-800 shadow-lg"
								style={{ borderRadius: '50%' }}
							/>

							{/* <img src="/assets/image.png" alt="Usama Aslam" className="border-4 border-gray-800 shadow-lg" style={{ borderRadius: '50%' }}/> */}
						</div>

						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-2xl md:text-4xl font-bold text-white text-center"
						>
							Hi, I&apos;m{' '}
							<h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
								<Typewriter
									words={['Muhammad Usama Aslam']}
									loop={0}
									cursor
									cursorStyle="|"
									typeSpeed={100}
									deleteSpeed={50}
									delaySpeed={1000}
								/>
							</h1>
						</motion.h1>

						<h2 className="text-4xl md:text-4xl font-bold text-white">Full Stack Developer</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
							With 1.5+ years of professional experience, I engineer end-to-end web solutions that blend functionality with performance. Skilled in React, Nodejs, Laravel, and cloud deployments, I bring ideas to life.
						</p>
					</div>

				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4 mb-12">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-1 text-blue-400">Frontend Development</h3>
								<p className="text-xs md:text-sm text-gray-500 mb-3">Building responsive, high-performance interfaces.</p>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
								<li className="flex items-center gap-2">
									<div className="w-2 h-1.5 bg-blue-500 " style={{ borderRadius: '50%' }} />
									Component-based architecture with React & Next.js
								</li>
								<li className="flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500" style={{ borderRadius: '50%' }} />
									Tailwind CSS, Headless UI, Framer Motion for UX
								</li>
								<li className="flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500" style={{ borderRadius: '50%' }} />
									SPA & SSR integration for performance & SEO
								</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-1 text-purple-400">Backend Development</h3>
								<p className="text-xs md:text-sm text-gray-500 mb-3">Designing secure, scalable APIs and logic.</p>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
									REST APIs with Laravel, Node.js & Express
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
									MySQL, MongoDB, and MSSQL database modeling
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
									Multi-tenancy, RBAC & JWT/Clerk Auth
								</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-1 text-teal-400">DevOps & Cloud</h3>
								<p className="text-xs md:text-sm text-gray-500 mb-3">Automating deployments and environment consistency.</p>
								<ul className="space-y-2 text-xs md:text-sm text-gray-400">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
									Containerization with Docker for app isolation
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
									CI/CD pipelines using GitHub Actions
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
									Deployments on DigitalOcean & AWS EC2/S3
								</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>



				<TechStack />
			</div>
		</section>
	);
}
