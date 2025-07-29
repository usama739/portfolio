// src/components/Experience.jsx
import React from "react";
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Full Stack PHP Developer",
    textColor: "text-blue-400",
    company_name: "Anomoz Softwares",
    icon: "/assets/anomoz.png",
    iconBg: "white",
    date: "March 2024 - March 2025",
    points: [
      "Maintained and enhanced core modules in a CRM and ERP system using PHP and MySQL.",
      "Built reusable front-end components using jQuery, HTML, and Bootstrap for business workflows.",
      "Collaborated with QA and UI/UX teams to implement bug fixes and feature enhancements on live systems.",
      "Wrote clean, modular backend logic ensuring scalability and database integrity.",
      "Improved system performance by optimizing SQL queries and reducing redundant API calls.",
    ],
  },
  {
    title: "Full Stack Developer",
    textColor: "text-purple-400",
    company_name: "Freelance",
    icon: "/assets/freelance.webp",
    iconBg: "white",
    date: "April 2025 - Present",
    points: [
      "Built a full-featured multi-tenant SaaS application from scratch using Laravel (API) and React (frontend).",
      "Integrated Clerk for secure JWT-based authentication and organization-level access control.",
      "Implemented features like task management, project dashboards, file storage (AWS S3), and team collaboration.",
      "Utilized Zustand for global state management and Axios for secure API communication.",
      "Containerized the entire application using Docker and set up CI/CD pipelines with GitHub Actions for seamless deployment to DigitalOcean.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="mt-24">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
            Work Experience
        </motion.h2>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            iconStyle={{ background: exp.iconBg }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
            contentStyle={{ background: "#1f293780", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
          >
            <h3 className={`text-[24px] font-bold ${exp.textColor}`}>{exp.title}</h3>
            <p className="text-secondary text-[16px] font-semibold text-gray-500" style={{ margin: 0 }}>
              {exp.company_name}
            </p>
            <ul className="mt-5 space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx} className="text-gray-400 text-[14px] tracking-wider">
                  • {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
