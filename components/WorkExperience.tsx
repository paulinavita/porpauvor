"use client";

import React, { useState } from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "2025",
    endDate: "2025",
    companyName: "Tectagon Software House",
    jobTitle: "Sr Software Engineer",
    description: [
      "Remote work. Lead game development project using WebSocket, Node.js, Vue.js, and Go as a frontend engineer",
    ],
  },
  {
    startDate: "2024",
    endDate: "2024",
    companyName: "Quant Network, London",
    jobTitle: "Blockchain Engineer Intern",
    description: [
      "Produced a protocol on interoperability for on-chain asset exchanges (Paper to be published soon)",
    ],
  },
  {
    startDate: "2023",
    endDate: "2024",
    companyName: "DANA Ventures",
    jobTitle: "Fullstack Engineer",
    description: ["Led React Native commerce app development"],
  },
  {
    startDate: "2023",
    endDate: "2024",
    companyName: "BRIK",
    jobTitle: "Software Engineer & Project Manager",
    description: [
      "Managed architure migrations, reworked lots of technical documentations and tech schedulings routines. Reworked old code base, helped built internal backoffice, sales app and e-commerce",
    ],
  },
  {
    startDate: "2019",
    endDate: "2023",
    companyName: "DANA Indonesia",
    jobTitle: "Software Engineer II",
    description: [
      "Led lifestyle payment squad team, developed tons of amazing revenue-generating features with my team, amazing times! From Deals, Livestream, Reccuring Payment system, and shops!",
    ],
  },
];

const WorkExperience = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(workExperienceData.length).fill(false)
  );

  const toggleVisibility = (index: number) => {
    setVisibleItems((prev) => {
      const newVisibleItems = [...prev];
      newVisibleItems[index] = !newVisibleItems[index];
      return newVisibleItems;
    });
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-4">Work Experience</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <div key={index}>
            <li
              className={`mb-10 ms-4 ${
                index === workExperienceData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate || "Present"}
              </time>
              <h3 className="text-md sm:text-sm font-medium text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <button
                onClick={() => toggleVisibility(index)}
                className="text-xs text-slate-500 hover:underline"
              >
                {visibleItems[index] ? "Hide details" : "Show details"}
              </button>
              {visibleItems[index] && (
                <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                  <ul>
                    {item.description.map((desc, descIndex) => (
                      <li className="text-xs" key={descIndex}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {item.companyLink && (
                    <a
                      href={item.companyLink}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Learn more{" "}
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
