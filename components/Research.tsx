import Link from "next/link";
import React from "react";

const resData = [
  {
    title: "Adapting the Secure Asset Transfer Protocol to Asset Exchange",
    url: "https://www.techrxiv.org/users/689823/articles/1240676-adapting-the-secure-asset-transfer-protocol-for-secure-cross-network-asset-exchange",
  },
  {
    title: "P2P Energy Trading System using ERC20 Tokens",
    url: "https://drive.google.com/file/d/1yx9QOw-tMiO90Cvszi1H2khScc_YGSOo/view?usp=sharing",
  },
];
const Research: React.FC = () => {
  return (
    <div>
      <div className="py-2">
        <h2 className="text-xl font-bold">Academic Writings</h2>
      </div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {resData.map((item, index) => (
          <li key={index} className="py-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-md font-medium text-gray-800 dark:text-white truncate">
                  {item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Research;
