'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			title: "TaskHorse – Multi-Tenant Task Management SaaS",
			description:
				"TaskHorse is a scalable task management SaaS platform built for teams and organizations to manage tasks, and projects with RBAC, Clerk authentication, Docker deployment, and a CI/CD pipeline.",
			frontendFeatures: [
				"React + TypeScript with Zustand global state",
				"Dynamic dashboards with Chart.js",
				"Modal-based task/project CRUD",
				"Secure routes & role-based UI",
			],
			backendFeatures: [
				"Laravel RESTful API (Sanctum + Clerk JWT)",
				"Organization-level multi-tenancy",
				"AWS S3 for secure file storage",
				"Laravel Policies for RBAC",
			],
			highlights: [
				"Clerk webhooks sync organization users in real-time",
				"Dockerized architecture: React, Laravel, MySQL",
				"CI/CD pipeline with GitHub Actions & DigitalOcean",
			],
			image: "/assets/TaskHorse.PNG",
			github: "https://github.com/usama739/task-horse",
		},
		{
			title: "Digital Accessories Management System",
			description:
				"A MERN-based e-commerce app with product recommendations, JWT auth, and a financial balance sheet module — making it ideal for small to mid-size digital product retailers.",
			frontendFeatures: [
				"Smart recommendations by trends",
				"React UI with modular CSS",
				"Real-time cart and status updates",
				"JWT-based auth & registration",
			],
			backendFeatures: [
				"REST APIs via Node.js & Express",
				"MongoDB schemas for users/products",
				"Sales-based recommendation engine",
				"Centralized error handling",
			],
			highlights: [
				"Built-in balance sheet module for revenue tracking",
				"Trend-based recommendation logic based on product popularity and user behaviors",
				"Axios-powered seamless integration",
			],
			image: "",
			github: "https://github.com/usama739/Digital-Accessories-Management-System",
		},
		{
			title: "ChatSphere (MERN + Pusher)",
			description:
				"A real-time chat app built with MERN stack and Pusher for instant messaging, featuring a modern React UI and WebSocket-based updates.",
			frontendFeatures: [
				"React-based chat UI with clean layout",
				"Real-time updates on message receive/send",
				"Sender/receiver visual separation",
				"Auto-refresh chat with page loading",
			],
			backendFeatures: [
				"Node.js + Express REST APIs",
				"MongoDB for chat history",
				"Pusher for WebSocket delivery",
				"Endpoints for sending & fetching messages",
			],
			highlights: [
				"Demonstrates practical implementation of the MERN stack with real-time updates",
				"Emulates a production-grade chat architecture with minimal latency",
				"Ideal for showcasing API integration and user-centric features",
			],
			image: "",
			github: "https://github.com/usama739/Netflix-clone",
		},
		{
			title: "Netflix Clone – Authenticated Streaming Service",
			description:
				"A sleek movie streaming interface built with the MERN stack, this project enables users to explore, search, and organize movie trailers fetched from TMDB.",
			frontendFeatures: [
				"Displays categorized movie trailers (Trending, Blockbuster, Horror, etc.)",
				"Dynamic trailer search bar with real-time filtering",
				"Authentication flow: signup, login, logout",
				"Watchlist feature for saving preferred trailers",
			],
			backendFeatures: [
				"RESTful API built with Express.js and Node.js",
				"MongoDB for storing user profiles and watchlists",
				"Secure JWT-based authentication and route protection",
				"Integration with TMDB API for real-time movie data",
			],
			highlights: [
				"clean UI with React.js and modular components",
				"Fast and searchable interface using TMDB endpoints",
				"Ideal for showcasing API integration and user-centric features",
			],
			image: "",
			github: "https://github.com/usama739/Digital-Accessories-Management-System",
		},
		{
			title: "eDoc – Doctor Appointment & Scheduling System",
			description:
				"A PHP/MySQL-based system for clinics and hospitals to manage doctor-patient appointments with multi-role dashboards and availability tracking.",
			frontendFeatures: [
				"Patients can browse doctors by specialty & schedule appointment",
				"Doctors can view appointment schedules and manage availability",
				"Admin dashboard",
				"Responsive UI optimized for usability across devices",
			],
			backendFeatures: [
				"Built with core PHP and MySQL for database interaction",
				"Custom role-based authentication",
				"Secure session management and request validation",
				"Dynamic schedule generation for each doctor’s availability",
			],
			highlights: [
				"Fully functional multi-role system",
				"Centralized appointment scheduling with availability filtering",
				"Real-world application with practical healthcare use-case",
			],
			image: "",
			github: "https://github.com/usama739/edoc-doctor-appointment-system",
		},
		{
			title: "Posts Management System – Admin Panel with RBAC",
			description:
				"A robust Laravel-based content management panel that enables administrators and content creators to manage blog-style posts efficiently which includes includes user authentication, and role-based access control along with responsive UI.",
			frontendFeatures: [
				"Admin and user dashboards using Laravel Blade",
				"CRUD operations for posts with form validation and feedback",
				"Role-based UI rendering: Admin vs Editor",
				"Clean, responsive layout for managing posts effectively",
			],
			backendFeatures: [
				"Built on Laravel with structured MVC architecture",
				"MySQL database integrated via Eloquent ORM",
				"Laravel's built-in authentication for secure login/logout",
				"Comprehensive request validation and error handling",
			],
			highlights: [
				"Fully functional Role-Based Access Control (RBAC)",
				"Secure post management with server-side validation",
				"Scalable structure for future integration with APIs or Vue/React",
			],
			image: "",
			github: "https://github.com/usama739/posts-management-system",
		},
	];


	return (
		<section className="py-20 px-4 mt-10">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center">
					Full Stack Projects
				</motion.h2>

				<div className="relative py-10">
					<div className="max-w-5xl mx-auto relative">

						{projects.map((project, index) => (
								<div
								key={project.title}
								className="sticky border border-gray-800 bg-gray-900 rounded-xl p-6 mb-10"
								style={{
								top: `20px`,
								zIndex: index + 1,
								}}
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
									<div className="space-y-6">
										<div>
										<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
										<p className="text-gray-400">
											{project.description}
										</p>
										</div>

										<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{project.frontendFeatures.map((feature, idx) => (
													<li key={idx}>• {feature}</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												{project.backendFeatures.map((feature, idx) => (
													<li key={idx}>• {feature}</li>
												))}
											</ul>
										</div>
										</div>

										<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											{project.highlights.map((highlight, idx) => (
												<li key={idx}>• {highlight}</li>
											))}
										</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6 h-3/4">
										<div className='flex justify-end'>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-white hover:text-blue-500 transition"
											>
												<FaGithub size={22} />
											</a>
										</div>
										
										{project.image ? (
											<Image
												src={project.image}
												alt={`${project.title} UI`}
												width={800}  // set an approximate width
												height={600} // and height
												className="rounded-md object-contain w-full h-full"
											/>
											// <img
											// 	src={project.image}
											// 	alt={`${project.title} UI`}
											// 	className="rounded-md object-contain w-full h-full"
											// />
										) : (
											<div className='flex justify-center items-center h-full'>
												<div className="text-sm text-gray-400 text-center border border-dashed border-gray-600 rounded-md p-6">
													UI Preview will be added soon. Meanwhile, check the code on GitHub.
												</div>
											</div>
										)}

										{/* <img src={project.image} alt={`${project.title} UI`} className="rounded-md object-contain" /> */}
										{/* <div className='flex justify-center items-center h-full'>
											<div className="text-sm text-gray-400 text-center border border-dashed border-gray-600 rounded-md p-6">
												UI Preview will be added soon. Meanwhile, check the code on GitHub.
											</div>
										</div> */}
										
									</div>
								</div>
							</div>
						))}
					
					</div>
				</div>
				
			</div>
		</section>
	);
}
