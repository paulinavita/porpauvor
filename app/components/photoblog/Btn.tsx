import Link from "next/link";
import React from "react";

interface BtnProps {
  onClick?: () => void;
  label: string;
  path: string;
}

const Btn: React.FC<BtnProps> = ({ path, label }) => {
  return (
    <Link href={path}>
      <button
        type="button"
        className="px-2 py-0.5 font-[family-name:var(--font-geist-sans)] text-xs font-medium text-center inline-flex items-center text-white bg-slate-500 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-grey-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        {label}
      </button>
    </Link>
  );
};

export default Btn;
