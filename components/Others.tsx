"use client";

import React, { useState } from "react";

interface OtherItem {
  startDate: string;
  endDate?: string;
  title: string;
  description: string[];
  companyLink?: string;
  textHyperLink?: string;
}

const otherItemData: OtherItem[] = [
  {
    startDate: "2020",
    title: "Patent - Diabetes Mellitus Treatment Non-Compliance Algorithm",
    description: [
      "Patent IPR registered under #000277826 in Indonesia",
      "Recommendation system, algorithm and website to assess diabetic patient compliance (patuhberobat.com)",
      "Piloted in hospital rural Sulawesi, Indonesia.",
    ],
    companyLink:
      "https://pdki-indonesia.dgip.go.id/detail/d12d0232e7c509fa0173170dc3b36f585b57a33739ba912e3f40d5c76156ba69",
    textHyperLink: "See Validity",
  },
];

const OtherExperience = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(otherItemData.length).fill(false)
  );

  const toggleVisibility = (index: number) => {
    setVisibleItems((prev) => {
      const newVisibleItems = [...prev];
      newVisibleItems[index] = !newVisibleItems[index];
      return newVisibleItems;
    });
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <h1 className="text-xl font-bold py-4">Others</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {otherItemData.map((item, index) => (
          <div key={index}>
            <li
              className={`mb-10 ms-4 ${
                index === otherItemData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} {item.endDate || " - Present"}
              </time>
              <h3 className="text-md font-medium text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <button
                onClick={() => toggleVisibility(index)}
                className="text-sm text-slate-500 hover:underline"
              >
                {visibleItems[index] ? "Hide details" : "Show details"}
              </button>
              {visibleItems[index] && (
                <div className="font-[family-name:var(--font-geist-sans)] mb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                  <ul>
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  {item.companyLink && (
                    <a
                      href={item.companyLink}
                      className="inline-flex items-center px-2 py-1 mt-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      {item.textHyperLink || "Learn more"}
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

export default OtherExperience;
