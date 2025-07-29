'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/Experience';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen text-white">
			<HeroSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
